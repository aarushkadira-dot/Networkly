import { Search, Users, MessageSquare, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features7() {
  return (
    <section className="overflow-hidden py-16 md:py-32 bg-dark-navy">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <motion.div
          className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[88/36] relative overflow-hidden rounded-2xl">
            <div className="[background-image:radial-gradient(var(--tw-gradient-stops,at_75%_25%))] to-dark-navy z-1 -inset-[4.25rem] absolute from-transparent to-75%"></div>
            <img
              src="/assets/logos/email.png"
              className="absolute inset-0 z-10 object-cover border border-white/10"
              alt="Networkly platform interface"
              width={2797}
              height={1137}
            />
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-dark-navy via-dark-navy/60 via-dark-navy/30 to-transparent z-20 pointer-events-none"></div>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-semibold text-white lg:text-5xl font-sans tracking-tight">The Solution: Networkly</h2>
        </motion.div>
        
        <motion.div
          className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Search className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">One Place for Opportunities</h3>
            </div>
            <p className="text-white/70 text-sm">Find internships, scholarships, research programs, competitions, and summer experiences, all in one place. Filtered for <em>you</em>, not everyone.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MessageSquare className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">One Place for Guidance</h3>
            </div>
            <p className="text-white/70 text-sm">Get personalized recommendations, mentor feedback, and AI support that helps you decide: What to apply to. When to apply. How to stand out. No guesswork. No confusion.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">One Place for Real Connections</h3>
            </div>
            <p className="text-white/70 text-sm">Connect with students who share your interests and goals. Ask questions. Share experiences. Learn faster, together. No awkward networking. No pretending to be someone you're not.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-white" />
              <h3 className="text-sm font-medium text-white">Actually Makes Things Easier</h3>
            </div>
            <p className="text-white/70 text-sm">Networkly keeps track of deadlines, sends alerts before they pass, and surfaces opportunities you didn't even know existed. Less stress. More direction. Real progress you can see.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

