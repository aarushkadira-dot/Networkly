import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center';

  const variants = {
    primary: 'bg-electric-blue text-white hover:bg-blue-600 shadow-soft',
    secondary: 'bg-emerald-green text-white hover:bg-teal-600 shadow-soft',
    outline: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white',
    ghost: 'text-electric-blue hover:bg-blue-50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
