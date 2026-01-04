import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: ReactNode;
  variant?: 'blue' | 'green' | 'purple' | 'teal' | 'peach' | 'gray';
  className?: string;
  animated?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export function Badge({ 
  children, 
  variant = 'blue', 
  className = '', 
  animated = true,
  clickable = false,
  onClick 
}: BadgeProps) {
  const variants = {
    blue: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    green: 'bg-accent-100 text-accent-700 hover:bg-accent-200',
    purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
    teal: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200',
    peach: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
    gray: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
  };

  const Component = animated ? motion.span : 'span';
  const animationProps = animated ? {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    whileHover: clickable ? { scale: 1.05, y: -2 } : { scale: 1.02 },
    whileTap: clickable ? { scale: 0.95 } : {},
    transition: { type: 'spring' as const, stiffness: 500, damping: 25 }
  } : {};

  return (
    <Component
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${variants[variant]} ${clickable ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
