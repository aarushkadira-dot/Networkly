import FeaturePageTemplate from '../../components/layout/FeaturePageTemplate';
import { Sparkles, Target, Zap, TrendingUp } from 'lucide-react';

export default function AIPoweredMatching() {
  return (
    <FeaturePageTemplate
      title="AI-Powered Matching"
      description="Smart algorithms analyze your profile to deliver personalized opportunity recommendations"
      icon={Sparkles}
      iconGradient="from-primary to-secondary"
      sections={[
        {
          title: 'How It Works',
          type: 'prose',
          content: "Networkly's AI-powered matching system analyzes your unique profile, including your interests, academic achievements, skills, and career goals, to recommend opportunities that align perfectly with your aspirations. Our sophisticated algorithms continuously learn from your interactions, preferences, and application history to refine recommendations over time, ensuring you never miss an opportunity that's right for you.",
        },
        {
          title: 'Key Features',
          type: 'features',
          features: [
            {
              icon: Target,
              title: 'Precision Targeting',
              description: 'Matches are based on multiple data points including your academic record, extracurricular activities, and stated preferences.',
              gradient: 'text-primary',
            },
            {
              icon: Zap,
              title: 'Real-Time Updates',
              description: 'Get instant notifications when new opportunities matching your profile become available.',
              gradient: 'text-secondary',
            },
            {
              icon: TrendingUp,
              title: 'Adaptive Learning',
              description: 'The system learns from your choices and feedback to improve future recommendations.',
              gradient: 'text-accent',
            },
            {
              icon: Sparkles,
              title: 'Hidden Gems',
              description: "Discover lesser-known opportunities that perfectly match your unique profile.",
              gradient: 'text-primary',
            },
          ],
        },
        {
          title: 'Benefits',
          type: 'benefits',
          benefits: [
            'Save hours of manual searching and filtering through opportunities',
            'Increase your chances of acceptance with highly relevant matches',
            'Discover opportunities you might have otherwise missed',
            'Focus your energy on applications that truly align with your goals',
          ],
        },
      ]}
    />
  );
}
