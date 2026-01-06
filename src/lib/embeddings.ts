/**
 * Text Embedding and Vector Operations for RAG System
 * 
 * This module provides semantic text embeddings using TF-IDF and
 * vector similarity calculations for opportunity matching.
 */

/**
 * Tokenize text into words (simple implementation)
 */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2); // Filter out very short words
}

/**
 * Calculate Term Frequency (TF) for a term in a document
 */
function termFrequency(term: string, document: string[]): number {
  const count = document.filter(word => word === term).length;
  return count / document.length;
}

/**
 * Calculate Inverse Document Frequency (IDF) for a term
 */
function inverseDocumentFrequency(term: string, documents: string[][]): number {
  const documentsContainingTerm = documents.filter(doc => doc.includes(term)).length;
  if (documentsContainingTerm === 0) return 0;
  return Math.log(documents.length / documentsContainingTerm);
}

/**
 * Calculate TF-IDF vector for a document
 */
function calculateTFIDF(document: string[], allDocuments: string[][]): Map<string, number> {
  const tfidf = new Map<string, number>();
  const uniqueTerms = new Set(document);

  for (const term of uniqueTerms) {
    const tf = termFrequency(term, document);
    const idf = inverseDocumentFrequency(term, allDocuments);
    tfidf.set(term, tf * idf);
  }

  return tfidf;
}

/**
 * Convert text to embedding vector
 * Creates a normalized feature vector from text content
 */
export function textToEmbedding(
  text: string,
  vocabulary: Set<string>
): number[] {
  const tokens = tokenize(text);
  const vector: number[] = [];
  
  // Create vector based on vocabulary
  for (const term of vocabulary) {
    const count = tokens.filter(t => t === term).length;
    vector.push(count / Math.max(tokens.length, 1)); // Normalize by document length
  }
  
  return vector;
}

/**
 * Build vocabulary from a collection of texts
 */
export function buildVocabulary(texts: string[]): Set<string> {
  const vocabulary = new Set<string>();
  
  for (const text of texts) {
    const tokens = tokenize(text);
    tokens.forEach(token => vocabulary.add(token));
  }
  
  return vocabulary;
}

/**
 * Calculate cosine similarity between two vectors
 */
export function cosineSimilarity(vec1: number[], vec2: number[]): number {
  if (vec1.length !== vec2.length) {
    throw new Error('Vectors must have the same length');
  }
  
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;
  
  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    norm1 += vec1[i] * vec1[i];
    norm2 += vec2[i] * vec2[i];
  }
  
  const denominator = Math.sqrt(norm1) * Math.sqrt(norm2);
  if (denominator === 0) return 0;
  
  return dotProduct / denominator;
}

/**
 * Create semantic embedding from opportunity data
 */
export function createOpportunityEmbedding(opportunity: {
  title: string;
  description: string;
  organization: string;
  interests: string[];
  type: string;
}): string {
  // Combine all text fields into a single semantic representation
  const parts = [
    opportunity.title,
    opportunity.description,
    opportunity.organization,
    opportunity.type,
    ...opportunity.interests,
  ];
  
  return parts.join(' ').toLowerCase();
}

/**
 * Create semantic embedding from user profile
 */
export function createProfileEmbedding(profile: {
  bio?: string | null;
  interests: string[];
  skills: string[];
  achievements: string[];
  projects: string[];
  school?: string | null;
}): string {
  const parts = [
    profile.bio || '',
    profile.school || '',
    ...profile.interests,
    ...profile.skills,
    ...profile.achievements,
    ...profile.projects,
  ];
  
  return parts.filter(p => p).join(' ').toLowerCase();
}

/**
 * Calculate semantic similarity between user profile and opportunity
 * Returns a score between 0 and 1
 */
export function calculateSemanticSimilarity(
  profileText: string,
  opportunityText: string,
  vocabulary: Set<string>
): number {
  const profileVec = textToEmbedding(profileText, vocabulary);
  const opportunityVec = textToEmbedding(opportunityText, vocabulary);
  
  return cosineSimilarity(profileVec, opportunityVec);
}

/**
 * Enhanced semantic matching with keyword extraction
 */
export function extractKeywords(text: string, minLength: number = 3): string[] {
  const tokens = tokenize(text);
  const wordFreq = new Map<string, number>();
  
  // Count word frequencies
  tokens.forEach(word => {
    wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
  });
  
  // Extract keywords (words that appear multiple times or are longer)
  const keywords: string[] = [];
  for (const [word, freq] of wordFreq.entries()) {
    if (freq >= 2 || word.length >= minLength) {
      keywords.push(word);
    }
  }
  
  return keywords.slice(0, 20); // Top 20 keywords
}

/**
 * Calculate keyword overlap score
 */
export function keywordOverlapScore(
  profileKeywords: string[],
  opportunityKeywords: string[]
): number {
  if (profileKeywords.length === 0 || opportunityKeywords.length === 0) {
    return 0;
  }
  
  const profileSet = new Set(profileKeywords.map(k => k.toLowerCase()));
  const opportunitySet = new Set(opportunityKeywords.map(k => k.toLowerCase()));
  
  let matches = 0;
  for (const keyword of profileSet) {
    if (opportunitySet.has(keyword)) {
      matches++;
    }
  }
  
  // Calculate Jaccard similarity
  const union = new Set([...profileSet, ...opportunitySet]);
  return union.size > 0 ? matches / union.size : 0;
}
