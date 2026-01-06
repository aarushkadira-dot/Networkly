import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ExpandableCardProps {
  title: ReactNode;
  preview: ReactNode;
  details: ReactNode;
  defaultExpanded?: boolean;
  className?: string;
}

export function ExpandableCard({ 
  title, 
  preview, 
  details, 
  defaultExpanded = false,
  className = '' 
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-soft overflow-hidden ${className}`}
      initial={false}
      animate={{ 
        boxShadow: isExpanded 
          ? '0 8px 24px rgba(0, 0, 0, 0.12)' 
          : '0 2px 8px rgba(0, 0, 0, 0.08)' 
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="w-full p-6 text-left"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {title}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </div>
        {!isExpanded && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-3"
          >
            {preview}
          </motion.div>
        )}
      </motion.button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: 'auto', 
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: 'easeOut' },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: 'easeIn' },
                opacity: { duration: 0.1 }
              }
            }}
          >
            <div className="px-6 pb-6 border-t border-gray-100">
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                {details}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}



