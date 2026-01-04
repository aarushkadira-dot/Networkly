import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Target, Zap, TrendingUp } from 'lucide-react';

export default function AIPoweredMatching() {
  return (
    <div className="min-h-screen bg-dark-navy text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/all-features" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Features
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI-Powered Matching</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Smart algorithms analyze your profile to deliver personalized opportunity recommendations
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Networkly's AI-powered matching system analyzes your unique profile, including your interests, 
                  academic achievements, skills, and career goals, to recommend opportunities that align 
                  perfectly with your aspirations.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Our sophisticated algorithms continuously learn from your interactions, preferences, and 
                  application history to refine recommendations over time, ensuring you never miss an 
                  opportunity that's right for you.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Precision Targeting</h3>
                  <p className="text-neutral-300 text-sm">
                    Matches are based on multiple data points including your academic record, 
                    extracurricular activities, and stated preferences.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Zap className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                  <p className="text-neutral-300 text-sm">
                    Get instant notifications when new opportunities matching your profile 
                    become available.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <TrendingUp className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Adaptive Learning</h3>
                  <p className="text-neutral-300 text-sm">
                    The system learns from your choices and feedback to improve future 
                    recommendations.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Sparkles className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Hidden Gems</h3>
                  <p className="text-neutral-300 text-sm">
                    Discover lesser-known opportunities that perfectly match your unique profile.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Save hours of manual searching and filtering through opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Increase your chances of acceptance with highly relevant matches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Discover opportunities you might have otherwise missed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Focus your energy on applications that truly align with your goals</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


