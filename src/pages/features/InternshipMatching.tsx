import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft, Target, Building, TrendingUp } from 'lucide-react';

export default function InternshipMatching() {
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
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Internship Matching</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Find career-aligned internships that match your goals and academic interests
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Kickstart Your Career</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  Real-world work experience is crucial for college applications and career development. 
                  Networkly's internship matching connects you with opportunities at leading companies, startups, 
                  nonprofits, and organizations that align with your career aspirations and academic interests.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Internship Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Career-Aligned Matches</h3>
                  <p className="text-neutral-300 text-sm">
                    Find internships that directly support your long-term career goals.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Building className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Top Companies</h3>
                  <p className="text-neutral-300 text-sm">
                    Access opportunities at Fortune 500 companies, innovative startups, and more.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <TrendingUp className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Skill Development</h3>
                  <p className="text-neutral-300 text-sm">
                    Build practical skills and gain experience that enhances your resume.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Briefcase className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Diverse Industries</h3>
                  <p className="text-neutral-300 text-sm">
                    Explore internships across tech, healthcare, finance, arts, and more.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Benefits of Early Internships</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Strengthen college applications with real-world experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Build professional networks early in your career</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Explore different career paths before committing to a major</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Develop skills that set you apart from other applicants</span>
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


