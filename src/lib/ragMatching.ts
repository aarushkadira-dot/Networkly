/**
 * RAG (Retrieval-Augmented Generation) Matching System
 * 
 * This module implements a sophisticated matching system that combines:
 * 1. Semantic text embeddings and similarity
 * 2. Contextual understanding of user profile
 * 3. Multi-factor scoring with weighted components
 * 4. Hybrid retrieval combining rule-based and ML-based approaches
 */

import { supabase } from './supabase';
import type { Database } from './database.types';
import {
  createOpportunityEmbedding,
  createProfileEmbedding,
  buildVocabulary,
  calculateSemanticSimilarity,
  extractKeywords,
  keywordOverlapScore,
} from './embeddings';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Opportunity = Database['public']['Tables']['opportunities']['Row'];

export interface RAGMatchScore {
  opportunity: Opportunity;
  score: number; // Overall score 0-100
  semanticScore: number; // Semantic similarity 0-1
  contextualScore: number; // Contextual match 0-1
  ruleBasedScore: number; // Rule-based match 0-1
  reasons: string[];
  confidence: 'high' | 'medium' | 'low';
}

/**
 * Build vocabulary from all opportunities for consistent embedding space
 */
async function buildOpportunityVocabulary(): Promise<Set<string>> {
  try {
    const { data: opportunities, error } = await supabase
      .from('opportunities')
      .select('title, description, organization, interests');

    if (error) {
      console.error('Error building vocabulary:', error);
      return new Set();
    }

    if (!opportunities || opportunities.length === 0) {
      return new Set();
    }

    const texts = opportunities.map(opp => {
      const parts = [
        opp.title || '',
        opp.description || '',
        opp.organization || '',
        ...(opp.interests || []),
      ];
      return parts.join(' ');
    });

    return buildVocabulary(texts);
  } catch (error) {
    console.error('Error in buildOpportunityVocabulary:', error);
    return new Set();
  }
}

/**
 * Calculate contextual match score based on user profile context
 */
function calculateContextualScore(
  opportunity: Opportunity,
  profile: Profile
): { score: number; reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];

  // Grade level compatibility (30% weight)
  if (profile.grade_level) {
    if (opportunity.grade_levels.includes(profile.grade_level)) {
      score += 0.3;
      reasons.push(`Perfect grade match (${profile.grade_level})`);
    } else if (opportunity.grade_levels.length === 0) {
      score += 0.15;
      reasons.push('Open to all grade levels');
    } else {
      // Check if close (e.g., 11th grade student for 12th grade opportunity)
      const profileGrade = parseInt(profile.grade_level);
      const hasCloseGrade = opportunity.grade_levels.some(grade => {
        const oppGrade = parseInt(grade);
        return Math.abs(profileGrade - oppGrade) === 1;
      });
      if (hasCloseGrade) {
        score += 0.1;
        reasons.push('Close grade match');
      }
    }
  }

  // Interest alignment (25% weight)
  if (profile.interests && profile.interests.length > 0 && opportunity.interests.length > 0) {
    const profileInterests = new Set(profile.interests.map(i => i.toLowerCase()));
    const oppInterests = new Set(opportunity.interests.map(i => i.toLowerCase()));
    
    let matches = 0;
    for (const interest of profileInterests) {
      if (oppInterests.has(interest)) {
        matches++;
      }
    }
    
    if (matches > 0) {
      const interestRatio = matches / Math.max(profile.interests.length, opportunity.interests.length);
      const interestScore = interestRatio * 0.25;
      score += interestScore;
      reasons.push(`${matches} interest match${matches > 1 ? 'es' : ''}`);
    }
  }

  // Skills relevance (20% weight)
  if (profile.skills && profile.skills.length > 0) {
    const skillsText = profile.skills.join(' ').toLowerCase();
    const oppText = `${opportunity.title} ${opportunity.description}`.toLowerCase();
    
    let skillMatches = 0;
    for (const skill of profile.skills) {
      if (oppText.includes(skill.toLowerCase())) {
        skillMatches++;
      }
    }
    
    if (skillMatches > 0) {
      const skillScore = (skillMatches / profile.skills.length) * 0.2;
      score += skillScore;
      reasons.push(`${skillMatches} skill${skillMatches > 1 ? 's' : ''} mentioned`);
    }
  }

  // Location compatibility (10% weight)
  if (profile.location && opportunity.location) {
    const profileLoc = profile.location.toLowerCase();
    const oppLoc = opportunity.location.toLowerCase();
    
    if (oppLoc.includes('remote') || oppLoc.includes('virtual')) {
      score += 0.1;
      reasons.push('Remote/Virtual opportunity');
    } else if (profileLoc.includes(oppLoc) || oppLoc.includes(profileLoc)) {
      score += 0.1;
      reasons.push('Location match');
    }
  }

  // Achievement relevance (10% weight)
  if (profile.achievements && profile.achievements.length > 0) {
    const achievementsText = profile.achievements.join(' ').toLowerCase();
    const oppText = `${opportunity.title} ${opportunity.description}`.toLowerCase();
    
    // Check if opportunity mentions similar achievement areas
    const achievementKeywords = extractKeywords(achievementsText);
    const oppKeywords = extractKeywords(oppText);
    const overlap = keywordOverlapScore(achievementKeywords, oppKeywords);
    
    if (overlap > 0.1) {
      score += overlap * 0.1;
      reasons.push('Achievement alignment');
    }
  }

  // Deadline urgency (5% weight)
  if (opportunity.deadline) {
    const deadline = new Date(opportunity.deadline);
    const now = new Date();
    const daysUntil = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysUntil > 0 && daysUntil <= 30) {
      score += 0.05;
      reasons.push(`Urgent deadline (${daysUntil} days)`);
    } else if (daysUntil > 30 && daysUntil <= 90) {
      score += 0.025;
      reasons.push(`Approaching deadline (${daysUntil} days)`);
    }
  }

  return {
    score: Math.min(1, score),
    reasons,
  };
}

/**
 * Calculate rule-based score (fallback and explicit rules)
 */
function calculateRuleBasedScore(
  opportunity: Opportunity,
  profile: Profile
): { score: number; reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];

  // Featured opportunities
  if (opportunity.is_featured) {
    score += 0.1;
    reasons.push('Featured opportunity');
  }

  // Type preference (could be enhanced with user preferences)
  const preferredTypes = ['internship', 'research', 'summer_program'];
  if (preferredTypes.includes(opportunity.type)) {
    score += 0.05;
  }

  // Recency bonus
  const daysSinceCreation = Math.floor(
    (Date.now() - new Date(opportunity.created_at).getTime()) / (1000 * 60 * 60 * 24)
  );
  if (daysSinceCreation < 30) {
    score += 0.05;
    reasons.push('Recently added');
  }

  return {
    score: Math.min(1, score),
    reasons,
  };
}

/**
 * RAG-based opportunity matching with semantic understanding
 */
export async function ragMatchOpportunities(
  userId: string,
  limit: number = 20
): Promise<RAGMatchScore[]> {
  try {
    // Fetch user profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      console.error('Error fetching profile:', profileError);
      return [];
    }

    // Fetch all opportunities
    const { data: opportunities, error: oppError } = await supabase
      .from('opportunities')
      .select('*')
      .order('created_at', { ascending: false });

    if (oppError || !opportunities || opportunities.length === 0) {
      console.error('Error fetching opportunities:', oppError);
      return [];
    }

    // Build vocabulary for consistent embedding space
    const vocabulary = await buildOpportunityVocabulary();

    // Create profile embedding
    const profileEmbedding = createProfileEmbedding({
      bio: profile.bio,
      interests: profile.interests || [],
      skills: profile.skills || [],
      achievements: profile.achievements || [],
      projects: profile.projects || [],
      school: profile.school,
    });

    // Extract profile keywords for keyword matching
    const profileKeywords = extractKeywords(profileEmbedding);

    // Calculate scores for each opportunity
    const matches: RAGMatchScore[] = [];

    for (const opportunity of opportunities) {
      // Create opportunity embedding
      const oppEmbedding = createOpportunityEmbedding({
        title: opportunity.title,
        description: opportunity.description,
        organization: opportunity.organization,
        interests: opportunity.interests || [],
        type: opportunity.type,
      });

      // Calculate semantic similarity
      const semanticScore = calculateSemanticSimilarity(
        profileEmbedding,
        oppEmbedding,
        vocabulary
      );

      // Extract opportunity keywords
      const oppKeywords = extractKeywords(oppEmbedding);
      const keywordScore = keywordOverlapScore(profileKeywords, oppKeywords);

      // Combine semantic and keyword scores
      const combinedSemanticScore = (semanticScore * 0.7 + keywordScore * 0.3);

      // Calculate contextual score
      const contextual = calculateContextualScore(opportunity, profile);

      // Calculate rule-based score
      const ruleBased = calculateRuleBasedScore(opportunity, profile);

      // Weighted final score
      // Semantic: 40%, Contextual: 45%, Rule-based: 15%
      const finalScore =
        combinedSemanticScore * 0.4 +
        contextual.score * 0.45 +
        ruleBased.score * 0.15;

      // Determine confidence level
      let confidence: 'high' | 'medium' | 'low' = 'low';
      if (finalScore >= 0.7) confidence = 'high';
      else if (finalScore >= 0.4) confidence = 'medium';

      // Combine all reasons
      const allReasons = [
        ...(semanticScore > 0.3 ? [`Strong semantic match (${(semanticScore * 100).toFixed(0)}%)`] : []),
        ...(keywordScore > 0.2 ? [`Keyword alignment (${(keywordScore * 100).toFixed(0)}%)`] : []),
        ...contextual.reasons,
        ...ruleBased.reasons,
      ];

      matches.push({
        opportunity,
        score: Math.min(100, finalScore * 100),
        semanticScore: combinedSemanticScore,
        contextualScore: contextual.score,
        ruleBasedScore: ruleBased.score,
        reasons: allReasons.length > 0 ? allReasons : ['General match'],
        confidence,
      });
    }

    // Sort by score and return top matches
    return matches
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .filter(match => match.score > 10); // Only return matches with score > 10
  } catch (error) {
    console.error('Error in ragMatchOpportunities:', error);
    // Return empty array on error - will fall back to rule-based matching
    return [];
  }
}

/**
 * RAG-based search with query understanding
 */
export async function ragSearchOpportunities(
  userId: string,
  query: string,
  filters?: {
    type?: string;
    gradeLevel?: string;
    interests?: string[];
  },
  limit: number = 20
): Promise<RAGMatchScore[]> {
  try {
    // Fetch user profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (!profile) {
      return [];
    }

  // Build query
  let oppQuery = supabase.from('opportunities').select('*');

  // Apply filters
  if (filters?.type) {
    oppQuery = oppQuery.eq('type', filters.type);
  }

  const { data: opportunities, error } = await oppQuery;

  if (error || !opportunities) {
    return [];
  }

  // Filter by grade level if specified
  let filtered = opportunities;
  if (filters?.gradeLevel) {
    filtered = filtered.filter(
      (opp) => opp.grade_levels.length === 0 || opp.grade_levels.includes(filters.gradeLevel!)
    );
  }

  // Filter by interests if specified
  if (filters?.interests && filters.interests.length > 0) {
    filtered = filtered.filter((opp) =>
      filters.interests!.some((interest) =>
        (opp.interests || []).some((oppInterest) =>
          oppInterest.toLowerCase().includes(interest.toLowerCase())
        )
      )
    );
  }

  // Filter by query text
  if (query) {
    const queryLower = query.toLowerCase();
    filtered = filtered.filter(
      (opp) =>
        opp.title.toLowerCase().includes(queryLower) ||
        opp.description.toLowerCase().includes(queryLower) ||
        opp.organization.toLowerCase().includes(queryLower) ||
        (opp.interests || []).some(i => i.toLowerCase().includes(queryLower))
    );
  }

  // Build vocabulary
  const vocabulary = await buildOpportunityVocabulary();

  // Create profile embedding
  const profileEmbedding = createProfileEmbedding({
    bio: profile.bio,
    interests: profile.interests || [],
    skills: profile.skills || [],
    achievements: profile.achievements || [],
    projects: profile.projects || [],
    school: profile.school,
  });

  // Enhance profile embedding with query
  const enhancedProfileText = `${profileEmbedding} ${query}`.toLowerCase();
  const profileKeywords = extractKeywords(enhancedProfileText);

  // Calculate RAG scores
  const matches: RAGMatchScore[] = [];

  for (const opportunity of filtered) {
    const oppEmbedding = createOpportunityEmbedding({
      title: opportunity.title,
      description: opportunity.description,
      organization: opportunity.organization,
      interests: opportunity.interests || [],
      type: opportunity.type,
    });

    // Calculate semantic similarity with query-enhanced profile
    const semanticScore = calculateSemanticSimilarity(
      enhancedProfileText,
      oppEmbedding,
      vocabulary
    );

    const oppKeywords = extractKeywords(oppEmbedding);
    const keywordScore = keywordOverlapScore(profileKeywords, oppKeywords);
    const combinedSemanticScore = (semanticScore * 0.7 + keywordScore * 0.3);

    const contextual = calculateContextualScore(opportunity, profile);
    const ruleBased = calculateRuleBasedScore(opportunity, profile);

    // Boost score if query matches
    const queryMatch = query.toLowerCase();
    let queryBoost = 0;
    if (
      opportunity.title.toLowerCase().includes(queryMatch) ||
      opportunity.description.toLowerCase().includes(queryMatch)
    ) {
      queryBoost = 0.15;
    }

    const finalScore =
      combinedSemanticScore * 0.35 +
      contextual.score * 0.4 +
      ruleBased.score * 0.1 +
      queryBoost * 0.15;

    let confidence: 'high' | 'medium' | 'low' = 'low';
    if (finalScore >= 0.7) confidence = 'high';
    else if (finalScore >= 0.4) confidence = 'medium';

    const allReasons = [
      ...(query ? [`Matches search: "${query}"`] : []),
      ...(semanticScore > 0.3 ? [`Semantic match (${(semanticScore * 100).toFixed(0)}%)`] : []),
      ...contextual.reasons,
      ...ruleBased.reasons,
    ];

    matches.push({
      opportunity,
      score: Math.min(100, finalScore * 100),
      semanticScore: combinedSemanticScore,
      contextualScore: contextual.score,
      ruleBasedScore: ruleBased.score,
      reasons: allReasons,
      confidence,
    });
  }

    return matches
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  } catch (error) {
    console.error('Error in ragSearchOpportunities:', error);
    // Return empty array on error - will fall back to rule-based search
    return [];
  }
}
