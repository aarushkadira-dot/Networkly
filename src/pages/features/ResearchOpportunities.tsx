import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Microscope, GraduationCap, Users } from 'lucide-react';

export default function ResearchOpportunities() {
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
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Research Opportunities</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Discover research programs, lab positions, and academic opportunities at top institutions
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Launch Your Research Career</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  Research experience is invaluable for college applications and future career success. 
                  Networkly connects you with research opportunities at universities, labs, and institutions 
                  across the country, from summer programs to year-round positions working alongside 
                  leading researchers in your field of interest.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Types of Research Opportunities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Microscope className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Lab Positions</h3>
                  <p className="text-neutral-300 text-sm">
                    Work in university research labs gaining hands-on experience with cutting-edge science.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <GraduationCap className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Summer Programs</h3>
                  <p className="text-neutral-300 text-sm">
                    Intensive summer research programs at prestigious universities nationwide.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Mentorship Opportunities</h3>
                  <p className="text-neutral-300 text-sm">
                    Connect with professors and graduate students who can guide your research.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <BookOpen className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Independent Projects</h3>
                  <p className="text-neutral-300 text-sm">
                    Find support and resources for conducting your own independent research.
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


