import { motion } from 'framer-motion';
import { CheckCircle, Clock, Send, XCircle, Bookmark, TrendingUp, Star, Flame } from 'lucide-react';

type StatusType = 'saved' | 'applied' | 'accepted' | 'rejected' | 'pending' | 'trending' | 'featured' | 'new';

interface StatusBadgeProps {
  status: StatusType;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const statusConfig = {
  saved: {
    icon: Bookmark,
    label: 'Saved',
    color: 'text-accent',
    bgColor: 'bg-accent-100',
    borderColor: 'border-accent-300',
    gradient: 'from-accent to-accent-600'
  },
  applied: {
    icon: Send,
    label: 'Applied',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
    gradient: 'from-purple-500 to-purple-600'
  },
  accepted: {
    icon: CheckCircle,
    label: 'Accepted',
    color: 'text-emerald-700',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300',
    gradient: 'from-accent to-accent-600'
  },
  rejected: {
    icon: XCircle,
    label: 'Rejected',
    color: 'text-neutral-600',
    bgColor: 'bg-neutral-100',
    borderColor: 'border-neutral-300',
    gradient: 'from-neutral-500 to-neutral-600'
  },
  pending: {
    icon: Clock,
    label: 'Pending',
    color: 'text-orange-700',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-300',
    gradient: 'from-orange-500 to-orange-600'
  },
  trending: {
    icon: TrendingUp,
    label: 'Trending',
    color: 'text-pink-700',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
    gradient: 'from-pink-500 to-pink-600'
  },
  featured: {
    icon: Star,
    label: 'Featured',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
    gradient: 'from-yellow-500 to-yellow-600'
  },
  new: {
    icon: Flame,
    label: 'New',
    color: 'text-red-700',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-300',
    gradient: 'from-red-500 to-red-600'
  }
};

export function StatusBadge({ status, animated = true, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  const sizes = {
    sm: { icon: 'w-3 h-3', text: 'text-xs', padding: 'px-2 py-1' },
    md: { icon: 'w-4 h-4', text: 'text-sm', padding: 'px-3 py-1.5' },
    lg: { icon: 'w-5 h-5', text: 'text-base', padding: 'px-4 py-2' }
  };

  const sizeConfig = sizes[size];

  if (!animated) {
    return (
      <div className={`inline-flex items-center gap-2 ${config.bgColor} ${config.color} ${sizeConfig.padding} ${sizeConfig.text} font-medium rounded-full border ${config.borderColor}`}>
        <Icon className={sizeConfig.icon} />
        <span>{config.label}</span>
      </div>
    );
  }

  return (
    <motion.div
      className={`inline-flex items-center gap-2 ${config.bgColor} ${config.color} ${sizeConfig.padding} ${sizeConfig.text} font-medium rounded-full border ${config.borderColor}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
    >
      <motion.div
        animate={status === 'trending' || status === 'new' ? {
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        <Icon className={sizeConfig.icon} />
      </motion.div>
      <span>{config.label}</span>
    </motion.div>
  );
}

// Gradient version for premium feel
export function StatusBadgeGradient({ status, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  const sizes = {
    sm: { icon: 'w-3 h-3', text: 'text-xs', padding: 'px-2 py-1' },
    md: { icon: 'w-4 h-4', text: 'text-sm', padding: 'px-3 py-1.5' },
    lg: { icon: 'w-5 h-5', text: 'text-base', padding: 'px-4 py-2' }
  };

  const sizeConfig = sizes[size];

  return (
    <motion.div
      className={`inline-flex items-center gap-2 bg-gradient-to-r ${config.gradient} text-white ${sizeConfig.padding} ${sizeConfig.text} font-medium rounded-full shadow-md`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
    >
      <Icon className={sizeConfig.icon} />
      <span>{config.label}</span>
    </motion.div>
  );
}

// Icon-only badge for compact spaces
export function StatusIcon({ status, size = 'md' }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  const sizes = {
    sm: 'w-6 h-6 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <motion.div
      className={`${sizes[size]} rounded-full ${config.bgColor} flex items-center justify-center border ${config.borderColor}`}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <Icon className={`${iconSizes[size]} ${config.color}`} />
    </motion.div>
  );
}



