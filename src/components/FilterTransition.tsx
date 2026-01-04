import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FilterTransitionProps {
  children: ReactNode;
  filterKey: string;
}

export function FilterTransition({ children, filterKey }: FilterTransitionProps) {
  return (
    <motion.div
      key={filterKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

interface FilterTagProps {
  label: string;
  active: boolean;
  onClick: () => void;
  count?: number;
}

export function FilterTag({ label, active, onClick, count }: FilterTagProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
        active
          ? 'bg-cta text-white shadow-md'
          : 'bg-white text-primary-900 border-2 border-gray-200 hover:border-cta'
      }`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor: active ? '#007bff' : '#ffffff',
      }}
      transition={{ duration: 0.2 }}
    >
      <span className="flex items-center gap-2">
        {label}
        {count !== undefined && (
          <motion.span
            className={`px-2 py-0.5 rounded-full text-xs ${
              active ? 'bg-white/20' : 'bg-gray-100'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            {count}
          </motion.span>
        )}
      </span>
    </motion.button>
  );
}

interface FilterChipProps {
  label: string;
  onRemove: () => void;
}

export function FilterChip({ label, onRemove }: FilterChipProps) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-cta/10 text-cta rounded-full text-sm font-medium"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      layout
    >
      <span>{label}</span>
      <motion.button
        onClick={onRemove}
        className="w-4 h-4 flex items-center justify-center hover:bg-cta/20 rounded-full transition-colors"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
      >
        ×
      </motion.button>
    </motion.div>
  );
}



