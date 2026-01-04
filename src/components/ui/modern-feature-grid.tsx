import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Feature Card Interface ---
export interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  Icon: LucideIcon;
  title: string;
  description: string;
}

// --- Feature Card Sub-component ---
const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ Icon, title, description, className, ...props }, ref) => {
    const titleId = React.useId();
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "flex flex-col items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary/30 hover:bg-white/10",
          className
        )}
        aria-labelledby={titleId}
        {...props}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-primary/20 to-secondary/20 text-white"
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </motion.div>
        <div className="flex flex-col">
          <h3 id={titleId} className="text-lg font-bold leading-none tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }
);
FeatureCard.displayName = "FeatureCard";

// --- Main FeatureGrid Component ---
interface FeatureGridProps extends React.HTMLAttributes<HTMLElement> {
  sectionTitle: string;
  sectionDescription: string;
  features: Feature[];
}

export const FeatureGrid = React.forwardRef<HTMLElement, FeatureGridProps>(
  ({ sectionTitle, sectionDescription, features = [], className, ...props }, ref) => {
    const titleId = React.useId();

    return (
      <section
        ref={ref}
        className={cn("w-full py-12", className)}
        aria-labelledby={titleId}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 mb-6">
              <h2 id={titleId} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl font-sans leading-tight">
                {sectionTitle}
              </h2>
            </div>
            <p className="mt-4 text-white/70 md:text-xl">
              {sectionDescription}
            </p>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }
);
FeatureGrid.displayName = "FeatureGrid";
