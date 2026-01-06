
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  badge?: string;
  visual: React.ReactNode;
}

interface StripeScrollAnimationProps {
  features: Feature[];
  className?: string;
}

export function StripeScrollAnimation({
  features,
  className,
}: StripeScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = features.map((_, i) => i / features.length);
    const closestIndex = breakpoints.reduce((acc, bp, idx) => {
      const distance = Math.abs(latest - bp);
      return distance < Math.abs(latest - breakpoints[acc]) ? idx : acc;
    }, 0);
    setActiveIndex(closestIndex);
  });

  return (
    <div ref={containerRef} className={cn("-mt-24 md:-mt-32", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Scrollable text sections */}
          <div className="relative">
            {features.map((feature, index) => (
              <section
                key={index}
                className="min-h-[80vh] flex items-center py-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {feature.badge && (
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80 border border-white/20">
                      {feature.badge}
                    </span>
                  )}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </section>
            ))}
          </div>

          {/* Right side - Sticky visual container */}
          <div className="hidden lg:block relative">
            <div className="sticky top-0 h-screen flex items-center">
              <div className="w-full h-[600px] flex items-center justify-center relative">
                {features.map((feature, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={index}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={index === 0 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ pointerEvents: isActive ? "auto" : "none" }}
                    >
                      {feature.visual}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile: Show visual for each section */}
          <div className="lg:hidden">
            {features.map((feature, index) => (
              <section
                key={index}
                className="min-h-[80vh] flex items-center py-12"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[400px] flex items-center justify-center"
                >
                  {feature.visual}
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
}
