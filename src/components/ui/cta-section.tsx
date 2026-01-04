import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative bg-dark-navy py-20 px-6 overflow-hidden">
      <div className="h-[40rem] w-full rounded-md bg-dark-navy relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-6xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center font-sans max-w-5xl">
            You Shouldn't Need Connections to Get Opportunities
          </h1>
          <p className="text-white/70 max-w-4xl mx-auto text-lg text-center mb-0">
            Networkly gives high school students a fair shot, regardless of school, background, or experience level.
          </p>
          <p className="text-white/70 max-w-4xl mx-auto text-lg text-center -mt-2">
            If you're motivated, curious, or just ready to start, Networkly was built for you.
          </p>
          <div className="mt-8 flex flex-col items-center">
            <Link
              to="/students"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-lg font-semibold text-white shadow-[0_12px_24px_-12px_rgba(37,99,235,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(37,99,235,0.6)]"
            >
              👉 Create your free Networkly profile
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-white/60 text-sm mt-3">
              Takes less than 2 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

