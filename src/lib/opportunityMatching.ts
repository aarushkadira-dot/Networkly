import { supabase } from './supabase';
import type { Database } from './database.types';
import { ragMatchOpportunities, ragSearchOpportunities, type RAGMatchScore } from './ragMatching';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Opportunity = Database['public']['Tables']['opportunities']['Row'];

export interface MatchScore {
  opportunity: Opportunity;
  score: number;
  reasons: string[];
}

// Re-export RAG types for convenience
export type { RAGMatchScore };

/**
 * Calculate a relevance score for an opportunity based on user profile
 * Uses a simple scoring algorithm that can be enhanced with ML/RAG later
 */
function calculateMatchScore(
  opportunity: Opportunity,
  profile: Profile
): MatchScore {
  let score = 0;
  const reasons: string[] = [];

  // Grade level match (40 points)
  if (profile.grade_level && opportunity.grade_levels.includes(profile.grade_level)) {
    score += 40;
    reasons.push(`Matches your grade level (${profile.grade_level})`);
  } else if (opportunity.grade_levels.length === 0) {
    score += 20; // No grade restriction
    reasons.push('Open to all grade levels');
  }

  // Interest overlap (30 points)
  if (profile.interests && profile.interests.length > 0 && opportunity.interests.length > 0) {
    const matchingInterests = profile.interests.filter((interest) =>
      opportunity.interests.some((oppInterest) =>
        oppInterest.toLowerCase().includes(interest.toLowerCase()) ||
        interest.toLowerCase().includes(oppInterest.toLowerCase())
      )
    );
    if (matchingInterests.length > 0) {
      const interestScore = Math.min(30, (matchingInterests.length / profile.interests.length) * 30);
      score += interestScore;
      reasons.push(`Matches ${matchingInterests.length} of your interests: ${matchingInterests.join(', ')}`);
    }
  }

  // Location match (10 points)
  if (profile.location && opportunity.location) {
    const profileLocation = profile.location.toLowerCase();
    const oppLocation = opportunity.location.toLowerCase();
    if (oppLocation.includes('remote') || oppLocation.includes('virtual')) {
      score += 10;
      reasons.push('Remote/Virtual opportunity');
    } else if (profileLocation.includes(oppLocation) || oppLocation.includes(profileLocation)) {
      score += 10;
      reasons.push(`Located in your area`);
    }
  } else if (opportunity.location?.toLowerCase().includes('remote')) {
    score += 10;
    reasons.push('Remote opportunity available');
  }

  // Featured opportunities get bonus (10 points)
  if (opportunity.is_featured) {
    score += 10;
    reasons.push('Featured opportunity');
  }

  // Deadline proximity (10 points) - closer deadlines get higher scores
  if (opportunity.deadline) {
    const deadline = new Date(opportunity.deadline);
    const now = new Date();
    const daysUntilDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysUntilDeadline > 0 && daysUntilDeadline <= 30) {
      score += 10;
      reasons.push(`Deadline in ${daysUntilDeadline} days`);
    } else if (daysUntilDeadline > 30 && daysUntilDeadline <= 90) {
      score += 5;
      reasons.push(`Deadline in ${daysUntilDeadline} days`);
    }
  }

  return {
    opportunity,
    score: Math.min(100, score), // Cap at 100
    reasons,
  };
}

/**
 * Get personalized opportunity recommendations for a user
 * Uses RAG (Retrieval-Augmented Generation) model for intelligent matching
 */
export async function getPersonalizedOpportunities(
  userId: string,
  limit: number = 10,
  useRAG: boolean = true
): Promise<MatchScore[]> {
  // Use RAG model by default for better matching
  if (useRAG) {
    try {
      const ragMatches = await ragMatchOpportunities(userId, limit);
      // Convert RAG matches to MatchScore format for backward compatibility
      return ragMatches.map(match => ({
        opportunity: match.opportunity,
        score: match.score,
        reasons: match.reasons,
      }));
    } catch (error) {
      console.error('RAG matching failed, falling back to rule-based:', error);
      // Fall through to rule-based matching
    }
  }

  // Fallback to rule-based matching
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (profileError || !profile) {
    console.error('Error fetching profile:', profileError);
    return [];
  }

  const { data: opportunities, error: oppError } = await supabase
    .from('opportunities')
    .select('*')
    .order('created_at', { ascending: false });

  if (oppError || !opportunities) {
    console.error('Error fetching opportunities:', oppError);
    return [];
  }

  const matches = opportunities.map((opp) => calculateMatchScore(opp, profile));

  return matches
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .filter((match) => match.score > 0);
}

/**
 * Search opportunities with personalized ranking
 * Uses RAG model for semantic search understanding
 */
export async function searchOpportunities(
  userId: string,
  query: string,
  filters?: {
    type?: string;
    gradeLevel?: string;
    interests?: string[];
  },
  limit: number = 20,
  useRAG: boolean = true
): Promise<MatchScore[]> {
  // Use RAG search by default
  if (useRAG) {
    try {
      const ragMatches = await ragSearchOpportunities(userId, query, filters, limit);
      return ragMatches.map(match => ({
        opportunity: match.opportunity,
        score: match.score,
        reasons: match.reasons,
      }));
    } catch (error) {
      console.error('RAG search failed, falling back to rule-based:', error);
      // Fall through to rule-based search
    }
  }

  // Fallback to rule-based search
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (!profile) {
    return [];
  }

  let oppQuery = supabase.from('opportunities').select('*');

  if (filters?.type) {
    oppQuery = oppQuery.eq('type', filters.type);
  }

  const { data: opportunities, error } = await oppQuery;

  if (error || !opportunities) {
    console.error('Error searching opportunities:', error);
    return [];
  }

  let filtered: Opportunity[] = opportunities;
  if (query) {
    const queryLower = query.toLowerCase();
    filtered = opportunities.filter(
      (opp: Opportunity) =>
        opp.title.toLowerCase().includes(queryLower) ||
        opp.description.toLowerCase().includes(queryLower) ||
        opp.organization.toLowerCase().includes(queryLower)
    );
  }

  if (filters?.gradeLevel) {
    filtered = filtered.filter(
      (opp: Opportunity) => opp.grade_levels.length === 0 || opp.grade_levels.includes(filters.gradeLevel!)
    );
  }

  if (filters?.interests && filters.interests.length > 0) {
    filtered = filtered.filter((opp: Opportunity) =>
      filters.interests!.some((interest: string) =>
        opp.interests.some((oppInterest: string) =>
          oppInterest.toLowerCase().includes(interest.toLowerCase())
        )
      )
    );
  }

  const matches = filtered.map((opp) => calculateMatchScore(opp, profile));

  return matches
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

/**
 * Get RAG-based matches with full scoring details
 * Use this when you need confidence levels and detailed scoring breakdown
 */
export async function getRAGMatches(
  userId: string,
  limit: number = 20
): Promise<RAGMatchScore[]> {
  return ragMatchOpportunities(userId, limit);
}
