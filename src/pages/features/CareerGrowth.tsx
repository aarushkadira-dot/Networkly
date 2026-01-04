import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft, BarChart, Target, Award } from 'lucide-react';

export default function CareerGrowth() {
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
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Career Growth</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Track your progress and see how opportunities contribute to your long-term goals
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Visualize Your Journey</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  Networkly doesn't just help you find opportunities, it also helps you understand how each 
                  experience contributes to your overall growth and career trajectory. Our analytics 
                  and visualization tools show you how far you've come and help you plan where you're 
                  going next.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Growth Tracking Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <BarChart className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Progress Dashboard</h3>
                  <p className="text-neutral-300 text-sm">
                    Visual analytics showing your achievements, applications, and growth over time.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Target className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Goal Setting</h3>
                  <p className="text-neutral-300 text-sm">
                    Set academic and career goals and track your progress toward achieving them.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Award className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Milestone Tracking</h3>
                  <p className="text-neutral-300 text-sm">
                    Celebrate important milestones and see how they build toward your bigger goals.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                  <p className="text-neutral-300 text-sm">
                    Monitor the skills you're developing and identify areas for growth.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Benefits of Tracking Your Growth</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Stay motivated by seeing your progress over time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Identify patterns in your interests and achievements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Make data-driven decisions about future opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Build a compelling narrative for college applications</span>
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


