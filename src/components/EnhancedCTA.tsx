import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Bookmark, 
  ExternalLink, 
  Share2, 
  Sparkles,
  Heart,
  Star,
  Send,
  Bell,
  Rocket,
  CheckCircle,
  Smartphone,
  Target
} from 'lucide-react';
import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'gradient';
  icon?: typeof ArrowRight;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
  glow?: boolean;
}

export function CTAButton({
  children,
  onClick,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  size = 'md',
  pulse = false,
  glow = false,
}: CTAButtonProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 text-white',
    secondary: 'bg-secondary hover:bg-secondary-600 text-white',
    success: 'bg-accent hover:bg-accent-600 text-white',
    gradient: 'bg-gradient-to-r from-primary to-secondary hover:from-primary-600 hover:to-secondary-600 hover:shadow-2xl text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded-full font-bold shadow-lg flex items-center justify-center gap-2 relative overflow-hidden ${glow ? 'animate-glow' : ''}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      animate={pulse ? {
        scale: [1, 1.02, 1],
        boxShadow: [
          '0 10px 30px rgba(0, 123, 255, 0.3)',
          '0 10px 40px rgba(0, 123, 255, 0.5)',
          '0 10px 30px rgba(0, 123, 255, 0.3)',
        ],
      } : {}}
      transition={pulse ? {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      } : { duration: 0.2 }}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '200%', opacity: 0.2 }}
        transition={{ duration: 0.6 }}
      />

      {Icon && iconPosition === 'left' && <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />}
    </motion.button>
  );
}

// Action button with icon
interface ActionButtonProps {
  icon: typeof Heart;
  label: string;
  onClick?: () => void;
  active?: boolean;
  count?: number;
}

export function ActionButton({ icon: Icon, label, onClick, active = false, count }: ActionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
        active
          ? 'bg-gradient-to-r from-primary to-secondary text-white'
          : 'bg-white text-neutral-700 hover:bg-neutral-50 border-2 border-neutral-200'
      }`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={active ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-4 h-4" fill={active ? 'currentColor' : 'none'} />
      </motion.div>
      <span>{label}</span>
      {count !== undefined && (
        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
          active ? 'bg-white/20' : 'bg-neutral-100'
        }`}>
          {count}
        </span>
      )}
    </motion.button>
  );
}

// Floating action buttons
export function FloatingActionButtons() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 flex flex-col gap-3 z-40"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {[
        { icon: Bell, label: 'Notifications', color: 'from-primary to-primary-600' },
        { icon: Bookmark, label: 'Saved', color: 'from-accent to-accent-600' },
        { icon: Share2, label: 'Share', color: 'from-secondary to-secondary-600' },
      ].map((action, index) => (
        <motion.button
          key={index}
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${action.color} shadow-lg flex items-center justify-center text-white group relative`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <action.icon className="w-6 h-6" />
          
          {/* Tooltip */}
          <span className="absolute right-16 bg-primary-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {action.label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}

// Share modal
interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url?: string;
}

export function ShareModal({ isOpen, onClose, title, url = window.location.href }: ShareModalProps) {
  const shareOptions = [
    { name: 'Copy Link', icon: ExternalLink, color: 'from-neutral-500 to-neutral-600' },
    { name: 'Facebook', icon: Share2, color: 'from-primary-600 to-primary-700' },
    { name: 'Twitter', icon: Send, color: 'from-sky-400 to-sky-500' },
    { name: 'Email', icon: Send, color: 'from-accent to-primary-700' },
  ];

  const handleShare = (platform: string) => {
    if (platform === 'Copy Link') {
      navigator.clipboard.writeText(url);
      // Show toast
    }
    // Add other sharing logic
    onClose();
  };

  if (!isOpen) return null;

  return (
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
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className="bg-gradient-to-r from-primary to-primary-600 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Share with Friends!</h3>
            <p className="text-white/90 text-sm">{title}</p>
          </div>

          <div className="p-6 space-y-3">
            {shareOptions.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleShare(option.name)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${option.color} text-white font-medium shadow-md`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <option.icon className="w-5 h-5" />
                <span>{option.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

// Mega CTA section for homepage
export function MegaCTA() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-br from-primary to-primary-700 p-12 relative">
        <div className="relative z-10 text-center">
          <motion.div
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Rocket className="w-12 h-12 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Future Starts Here!
          </h2>
          
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students discovering life-changing opportunities every day.
            Your dream internship, scholarship, or program is waiting!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="gradient" icon={Sparkles} size="lg" pulse glow>
              Explore Opportunities
            </CTAButton>
            
            <CTAButton variant="secondary" icon={Star} size="lg">
              View Success Stories
            </CTAButton>
          </div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm font-medium">No App Required</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Target className="w-5 h-5" />
              <span className="text-sm font-medium">Personalized Matches</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

