import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export function LoadingSpinner({ size = 'md', message }: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`relative ${sizes[size]}`}>
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 border-4 border-electric-blue/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Spinning gradient ring */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-electric-blue border-r-soft-teal rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Inner pulsing dot */}
        <motion.div
          className="absolute inset-0 m-auto w-3 h-3 bg-electric-blue rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {message && (
        <motion.p
          className="text-charcoal text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}

// Skeleton loader for cards
export function SkeletonCard() {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-soft p-6 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-3">
        <motion.div
          className="h-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
        <motion.div
          className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded w-3/4"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.1,
          }}
          style={{
            backgroundSize: '200% 100%',
          }}
        />
      </div>
      <div className="flex gap-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="h-6 w-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full"
            animate={{
              backgroundPosition: ['200% 0', '-200% 0'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.1,
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Inline loading dots
export function LoadingDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-electric-blue rounded-full"
          animate={{
            y: [0, -8, 0],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Progress bar with animation
interface ProgressBarProps {
  progress: number;
  showPercentage?: boolean;
}

export function ProgressBar({ progress, showPercentage = true }: ProgressBarProps) {
  return (
    <div className="w-full space-y-2">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-electric-blue to-soft-teal"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      {showPercentage && (
        <motion.div
          className="text-sm text-charcoal text-right font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Math.round(progress)}%
        </motion.div>
      )}
    </div>
  );
}



