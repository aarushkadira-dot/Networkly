import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowLeft, FileText, Trophy, TrendingUp } from 'lucide-react';

export default function TrackAchievements() {
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
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Track Your Achievements</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Build a comprehensive portfolio showcasing your accomplishments and growth
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Your Digital Portfolio</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  Networkly helps you document and showcase every milestone in your high school journey. 
                  From academic achievements to volunteer hours, from competition wins to project 
                  completions, and keep everything organized in one beautiful, shareable portfolio that 
                  tells your unique story.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What You Can Track</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Trophy className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Awards & Honors</h3>
                  <p className="text-neutral-300 text-sm">
                    Log all your academic awards, competition wins, and recognition.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Award className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Service Hours</h3>
                  <p className="text-neutral-300 text-sm">
                    Track volunteer work and community service with verification.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <FileText className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Projects & Research</h3>
                  <p className="text-neutral-300 text-sm">
                    Document your independent projects, research papers, and publications.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <TrendingUp className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Progress Over Time</h3>
                  <p className="text-neutral-300 text-sm">
                    Visualize your growth and development throughout high school.
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


