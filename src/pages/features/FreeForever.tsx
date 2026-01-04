import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Heart, Users, Sparkles } from 'lucide-react';

export default function FreeForever() {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Free Forever</h1>
          </div>

          <p className="text-xl text-neutral-300 mb-12">
            Access all features completely free, with no hidden fees, no premium tiers, just opportunities
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Commitment to You</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed mb-4">
                  At Networkly, we believe that every student deserves access to opportunities, regardless 
                  of their financial situation. That's why we've committed to keeping Networkly completely 
                  free for all students, forever.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  No paywalls, no premium features, no hidden costs. Everything you see on Networkly is 
                  available to you at no charge, now and always.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What's Included (Everything!)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Sparkles className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">AI Matching</h3>
                  <p className="text-neutral-300 text-sm">
                    Full access to our AI-powered matching and recommendation engine.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Shield className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Unlimited Applications</h3>
                  <p className="text-neutral-300 text-sm">
                    Apply to as many opportunities as you want with no restrictions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Full Networking</h3>
                  <p className="text-neutral-300 text-sm">
                    Connect with unlimited students and build your network without limits.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <Heart className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">All Features</h3>
                  <p className="text-neutral-300 text-sm">
                    Every single feature on Networkly is free, with no exceptions and no upgrades needed.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Why Free?</h2>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-neutral-300 leading-relaxed">
                  We're students ourselves, and we know how expensive it is to pursue your dreams. 
                  Application fees, test prep, college visits, it all adds up. We wanted to create 
                  something that helps level the playing field and gives every student, regardless 
                  of their background, the same access to life-changing opportunities.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


