import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft, Award, Briefcase, Beaker, Trophy } from 'lucide-react';

export default function DiscoverOpportunities() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Discover Opportunities</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Access thousands of curated opportunities all in one centralized platform
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">What You'll Find</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Scholarships</h3>
                  <p className="text-neutral-300 text-sm">
                    Merit-based, need-based, and specialized scholarships from thousands of organizations.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Briefcase className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Internships</h3>
                  <p className="text-neutral-300 text-sm">
                    Summer and year-round internships at top companies and research institutions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Beaker className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Research Programs</h3>
                  <p className="text-neutral-300 text-sm">
                    Lab positions, summer research programs, and academic opportunities.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Trophy className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Competitions</h3>
                  <p className="text-neutral-300 text-sm">
                    Academic competitions, hackathons, and contests across all subjects.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Why Networkly's Database Stands Out</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Constantly updated with new opportunities added daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Verified and vetted by our team for legitimacy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Detailed information including deadlines, requirements, and contact details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Filter by grade level, interest area, location, and more</span>
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


