import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, ArrowLeft, Brain, TrendingUp, Star } from 'lucide-react';

export default function PersonalizedRecommendations() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Personalized Recommendations</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            AI that learns your preferences and suggests opportunities tailored specifically to you
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Recommendations That Improve Over Time</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  Unlike static filters, Networkly's recommendation engine actively learns from your behavior. 
                  Every opportunity you save, apply to, or dismiss helps our AI better understand what 
                  you're looking for. The result? Recommendations that get better and more accurate with 
                  every interaction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How We Personalize</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Brain className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                  <p className="text-neutral-300 text-sm">
                    Our AI analyzes patterns in your selections to predict what you'll be interested in next.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <TrendingUp className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Behavioral Analysis</h3>
                  <p className="text-neutral-300 text-sm">
                    We track which opportunities you engage with to refine future suggestions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Star className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Success Prediction</h3>
                  <p className="text-neutral-300 text-sm">
                    We prioritize opportunities where you have the highest chance of acceptance.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Goal Alignment</h3>
                  <p className="text-neutral-300 text-sm">
                    Recommendations are tailored to support your stated academic and career objectives.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


