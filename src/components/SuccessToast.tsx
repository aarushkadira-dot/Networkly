import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Star, Sparkles, X, Trophy, Rocket } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'celebration' | 'motivation';
  icon?: typeof CheckCircle;
}

interface ToastContextType {
  showToast: (message: string, type?: Toast['type']) => void;
  showSuccess: (message: string) => void;
  showCelebration: (message: string) => void;
  showMotivation: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const celebrationMessages = [
  "You're one step closer to your goals!",
  "Great choice! Keep up the momentum!",
  "Awesome! Your future is looking bright!",
  "You're crushing it!",
  "Way to take action!",
  "You're building an amazing future!",
];

const toastConfig = {
  success: {
    icon: CheckCircle,
    gradient: 'from-accent to-accent-600',
    borderColor: 'border-accent'
  },
  celebration: {
    icon: Star,
    gradient: 'from-yellow-400 to-orange-500',
    borderColor: 'border-yellow-400'
  },
  motivation: {
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500'
  }
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  let toastId = 0;

  const showToast = (message: string, type: Toast['type'] = 'success') => {
    const id = toastId++;
    const newToast: Toast = { id, message, type };
    
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const showSuccess = (message: string) => showToast(message, 'success');
  
  const showCelebration = (message: string) => {
    const randomMessage = celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
    showToast(message + ' ' + randomMessage, 'celebration');
  };
  
  const showMotivation = (message: string) => showToast(message, 'motivation');

  return (
    <ToastContext.Provider value={{ showToast, showSuccess, showCelebration, showMotivation }}>
      {children}
      <ToastContainer toasts={toasts} onClose={(id) => setToasts((prev) => prev.filter((t) => t.id !== id))} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

function ToastContainer({ toasts, onClose }: { toasts: Toast[], onClose: (id: number) => void }) {
  return (
    <div className="fixed top-20 right-4 z-50 space-y-3 max-w-md">
      <AnimatePresence>
        {toasts.map((toast) => {
          const config = toastConfig[toast.type];
          const Icon = config.icon;
          
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -50, scale: 0.8, x: 400 }}
              animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 400 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`bg-white rounded-xl shadow-lifted border-2 ${config.borderColor} overflow-hidden`}
            >
              <div className="flex items-start gap-3 p-4">
                <motion.div
                  className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center`}
                  animate={{ 
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>
                
                <div className="flex-1 pt-1">
                  <p className="text-primary-900 font-medium text-sm leading-relaxed">
                    {toast.message}
                  </p>
                </div>

                <motion.button
                  onClick={() => onClose(toast.id)}
                  className="flex-shrink-0 p-1 hover:bg-neutral-100 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-4 h-4 text-neutral-500" />
                </motion.button>
              </div>

              {/* Animated progress bar */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${config.gradient}`}
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: 5, ease: 'linear' }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

// Confetti effect for major celebrations
export function ConfettiCelebration() {
  const confettiColors = [
    'bg-primary',
    'bg-accent',
    'bg-accent-coral',
    'bg-royal-purple',
    'bg-secondary',
    'bg-yellow-400',
    'bg-pink-500'
  ];

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute w-3 h-3 ${piece.color} rounded-sm`}
          style={{
            left: `${piece.x}%`,
            top: '-10%',
          }}
          initial={{ y: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation * 4,
            opacity: [1, 1, 0],
            x: [0, (Math.random() - 0.5) * 200],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
}

// Celebration modal for big achievements
interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  iconType?: 'star' | 'trophy' | 'rocket';
}

export function CelebrationModal({ 
  isOpen, 
  onClose, 
  title, 
  message,
  iconType = 'star' 
}: CelebrationModalProps) {
  const iconConfig = {
    star: { icon: Star, color: 'from-yellow-400 to-yellow-500' },
    trophy: { icon: Trophy, color: 'from-yellow-500 to-orange-500' },
    rocket: { icon: Rocket, color: 'from-primary to-purple-500' }
  };

  const selectedIcon = iconConfig[iconType];
  const IconComponent = selectedIcon.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${selectedIcon.color} p-8 text-center`}>
                <motion.div
                  className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                >
                  <IconComponent className="w-12 h-12 text-white" />
                </motion.div>
                
                <motion.h2
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {title}
                </motion.h2>
              </div>

              {/* Content */}
              <motion.div
                className="p-8 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-primary-900 text-lg mb-6 leading-relaxed">
                  {message}
                </p>

                <motion.button
                  onClick={onClose}
                  className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Keep Going!</span>
                  <Rocket className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

