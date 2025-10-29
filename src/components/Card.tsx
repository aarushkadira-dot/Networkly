import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const cardVariants = hover
    ? {
        rest: { 
          y: 0, 
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' 
        },
        hover: { 
          y: -6,
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
          transition: { duration: 0.3, ease: 'easeOut' }
        }
      }
    : {};

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-soft p-6 ${hover ? 'cursor-pointer' : ''} ${className}`}
      initial="rest"
      whileHover="hover"
      variants={cardVariants}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
