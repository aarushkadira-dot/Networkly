import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Compass, 
  Users, 
  Zap, 
  CalendarRange, 
  BellRing, 
  Code, 
  Award, 
  Beaker, 
  Briefcase, 
  Gift, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface FeaturesProps {
  onAuthClick: () => void;
}

const allFeatures = [
  {
    id: 'ai-powered-matching',
    title: 'AI-Powered Matching',
    description: 'Get personalized opportunity matches using advanced RAG (Retrieval-Augmented Generation) technology. Our AI analyzes your profile, interests, skills, and goals to find the perfect opportunities for you.',
    icon: Sparkles,
    path: '/features/ai-powered-matching',
    category: 'Matching & Discovery',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'discover-opportunities',
    title: 'Discover Opportunities',
    description: 'Browse thousands of internships, scholarships, competitions, and programs. Search by type, grade level, interests, and location to find exactly what you\'re looking for.',
    icon: Compass,
    path: '/features/discover-opportunities',
    category: 'Matching & Discovery',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'personalized-recommendations',
    title: 'Personalized Recommendations',
    description: 'Receive intelligent recommendations based on your profile, browsing history, and saved opportunities. The more you use Networkly, the better our suggestions become.',
    icon: Users,
    path: '/features/personalized-recommendations',
    category: 'Matching & Discovery',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'instant-applications',
    title: 'Instant Applications',
    description: 'Apply to opportunities in seconds. Your profile information is automatically filled in, saving you time and ensuring consistency across all applications.',
    icon: Zap,
    path: '/features/instant-applications',
    category: 'Applications & Tracking',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'smart-deadline-tracker',
    title: 'Smart Deadline Tracker',
    description: 'Never miss an important deadline. Get automated reminders, see upcoming deadlines at a glance, and track your application progress all in one place.',
    icon: CalendarRange,
    path: '/features/smart-deadline-tracker',
    category: 'Applications & Tracking',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'real-time-notifications',
    title: 'Real-Time Notifications',
    description: 'Stay updated on new opportunities, deadline reminders, application status changes, and important updates. Customize your notification preferences to stay informed.',
    icon: BellRing,
    path: '/features/real-time-notifications',
    category: 'Applications & Tracking',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'connect-with-students',
    title: 'Connect With Students',
    description: 'Build your network by connecting with other students who share your interests. Share experiences, get advice, and collaborate on projects.',
    icon: Users,
    path: '/features/connect-with-students',
    category: 'Community & Growth',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'track-achievements',
    title: 'Track Achievements',
    description: 'Showcase your accomplishments, projects, and skills. Build a comprehensive profile that highlights your strengths and helps you stand out to opportunities.',
    icon: Award,
    path: '/features/track-achievements',
    category: 'Community & Growth',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 'research-opportunities',
    title: 'Research Opportunities',
    description: 'Find research positions, lab internships, and academic programs. Connect with professors and researchers in your field of interest.',
    icon: Beaker,
    path: '/features/research-opportunities',
    category: 'Matching & Discovery',
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'internship-matching',
    title: 'Internship Matching',
    description: 'Discover internships that match your career goals, skills, and availability. Filter by industry, location, duration, and compensation.',
    icon: Briefcase,
    path: '/features/internship-matching',
    category: 'Matching & Discovery',
    color: 'from-slate-500 to-gray-500',
  },
  {
    id: 'free-forever',
    title: 'Free Forever',
    description: 'Networkly is completely free for students. No hidden fees, no premium tiers, no credit card required. Access all features at no cost.',
    icon: Gift,
    path: '/features/free-forever',
    category: 'Platform',
    color: 'from-emerald-500 to-green-500',
  },
  {
    id: 'career-growth',
    title: 'Career Growth',
    description: 'Track your professional development, set career goals, and get insights into your growth trajectory. See how your experiences build toward your future.',
    icon: TrendingUp,
    path: '/features/career-growth',
    category: 'Community & Growth',
    color: 'from-rose-500 to-pink-500',
  },
];

const categories = Array.from(new Set(allFeatures.map(f => f.category)));

export default function AllFeatures({ onAuthClick }: FeaturesProps) {
  return (
    <div className="min-h-screen bg-dark-navy text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-dark-navy via-deep-blue/50 to-dark-navy">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-electric-blue/30 blur-3xl" />
          <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              All Networkly Features
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Everything you need to discover, apply to, and track opportunities. 
              Built by students, for students.
            </p>
            <Link to="/features">
              <InteractiveHoverButton
                text="Browse Opportunities"
                className="bg-gradient-to-r from-primary to-secondary text-white border-none px-8 py-3"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((category, categoryIndex) => {
          const categoryFeatures = allFeatures.filter(f => f.category === category);
          
          return (
            <motion.div
              key={category}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold mb-8 text-center"
              >
                {category}
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.id}
                      variants={fadeInUp}
                      custom={index}
                    >
                      <Link to={feature.path}>
                        <Card className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer group">
                          <div className="p-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-electric-blue transition-colors">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {feature.description}
                            </p>
                            <div className="flex items-center text-electric-blue font-medium group-hover:gap-2 transition-all">
                              Learn more
                              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="border-t border-white/10 bg-gradient-to-b from-dark-navy to-deep-blue/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of students already using Networkly to find their next opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveHoverButton
                text="Sign Up Free"
                onClick={onAuthClick}
                className="bg-gradient-to-r from-primary to-secondary text-white border-none px-8 py-3"
              />
              <Link to="/features">
                <InteractiveHoverButton
                  text="Browse Opportunities"
                  className="border-white/40 bg-white/10 px-8 py-3 text-white/80 hover:border-white hover:text-white"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
