import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft, FileText, Clock, CheckCircle } from 'lucide-react';

export default function InstantApplications() {
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
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Instant Applications</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Apply to opportunities with pre-filled information and streamlined processes
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Apply Faster, Apply Smarter</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  Stop wasting time filling out the same information on every application. Networkly's 
                  instant application system stores your information securely and automatically fills 
                  in application forms, letting you apply to multiple opportunities in a fraction of 
                  the time it would normally take.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Application Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">One-Click Apply</h3>
                  <p className="text-neutral-300 text-sm">
                    Submit applications instantly with your saved information automatically filled in.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <FileText className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Document Management</h3>
                  <p className="text-neutral-300 text-sm">
                    Store transcripts, essays, and recommendation letters for easy access.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Clock className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                  <p className="text-neutral-300 text-sm">
                    Spend minutes instead of hours on each application.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <CheckCircle className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Application Tracking</h3>
                  <p className="text-neutral-300 text-sm">
                    Monitor the status of all your applications in one dashboard.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Why Speed Matters</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Apply to more opportunities without burnout</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Beat deadlines by submitting applications quickly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Focus your time on crafting quality essays instead of repetitive forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Reduce errors with consistent, pre-filled information</span>
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


