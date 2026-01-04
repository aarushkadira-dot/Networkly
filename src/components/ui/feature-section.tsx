import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = 'How to get Started',
  autoPlayInterval = 3000,
  imageHeight = 'h-[400px]',
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  const safeFeatures = useMemo(() => (features.length ? features : []), [features]);

  useEffect(() => {
    if (safeFeatures.length === 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / (autoPlayInterval / 100);

        if (next >= 100) {
          setCurrentFeature((prevIndex) => (prevIndex + 1) % safeFeatures.length);
          return 0;
        }

        return next;
      });
    }, 100);

    return () => window.clearInterval(timer);
  }, [autoPlayInterval, safeFeatures.length]);

  if (safeFeatures.length === 0) {
    return null;
  }

  return (
    <div className={cn('p-8 md:p-12', className)}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
          <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
          <div className="order-2 space-y-8 md:order-1">
            {safeFeatures.map((feature, index) => (
              <motion.div
                key={feature.step}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full border-2 md:h-10 md:w-10',
                    index === currentFeature
                      ? 'scale-110 bg-primary border-primary text-white shadow-lg shadow-primary/50'
                      : 'bg-white/10 border-white/20 text-white'
                  )}
                  whileHover={{ rotate: index === currentFeature ? 2 : 0 }}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm text-white/70 md:text-lg">{feature.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              'order-1 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl md:order-2',
              imageHeight
            )}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              <motion.div
                className="h-full bg-white/80"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <AnimatePresence mode="wait">
              {safeFeatures.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={feature.step}
                      className="absolute inset-0 overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent-blue via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-950/80 via-accent-blue/20 to-transparent p-6">
                        <h4 className="text-lg font-semibold text-white md:text-xl">
                          {feature.title || feature.step}
                        </h4>
                        <p className="mt-2 text-sm text-white/80 md:text-base">{feature.content}</p>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { Feature, FeatureStepsProps };
