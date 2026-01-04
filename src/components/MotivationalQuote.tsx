import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles, TrendingUp, Target, Lightbulb, Star, Rocket, FileText, Briefcase, Award, GraduationCap } from 'lucide-react';

const motivationalQuotes = [
  {
    text: "Every opportunity you explore is a step toward your dream future!",
    author: "Networkly Team",
    icon: Sparkles,
    color: "from-electric-blue to-soft-teal"
  },
  {
    text: "Your next big opportunity is waiting. Don't be afraid to reach for it!",
    author: "Student Success",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500"
  },
  {
    text: "Build your future, one application at a time. You've got this!",
    author: "Career Mentors",
    icon: Target,
    color: "from-emerald-green to-soft-teal"
  },
  {
    text: "The best time to start was yesterday. The next best time is now!",
    author: "Success Stories",
    icon: Sparkles,
    color: "from-coral-peach to-orange-400"
  },
  {
    text: "Your potential is limitless. Start exploring opportunities today!",
    author: "Networkly Community",
    icon: TrendingUp,
    color: "from-electric-blue to-royal-purple"
  },
];

const quickTips = [
  { icon: Lightbulb, text: "Tip: Apply to opportunities 2-3 weeks before the deadline!", color: "text-yellow-600" },
  { icon: Target, text: "Pro Tip: Customize your application for each opportunity!", color: "text-electric-blue" },
  { icon: Star, text: "Remember: Quality applications > Quantity of applications!", color: "text-purple-600" },
  { icon: Rocket, text: "Quick Tip: Save interesting opportunities to review later!", color: "text-coral-peach" },
  { icon: FileText, text: "Advice: Keep your profile updated with recent achievements!", color: "text-emerald-green" },
  { icon: Briefcase, text: "Tip: Network with people in your field of interest!", color: "text-electric-blue" },
  { icon: Award, text: "Remember: Every 'no' brings you closer to a 'yes'!", color: "text-yellow-600" },
  { icon: GraduationCap, text: "Pro Tip: Start with opportunities matching your skills!", color: "text-royal-purple" },
];

interface MotivationalQuoteProps {
  variant?: 'quote' | 'tip';
  autoRotate?: boolean;
  rotateInterval?: number;
}

export function MotivationalQuote({ 
  variant = 'quote',
  autoRotate = true,
  rotateInterval = 8000 
}: MotivationalQuoteProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = variant === 'quote' ? motivationalQuotes : quickTips;

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.length);
    }, rotateInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotateInterval, content.length]);

  if (variant === 'tip') {
    const currentTip = quickTips[currentIndex];
    const TipIcon = currentTip.icon;
    
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-electric-blue/10 to-soft-teal/10 border-l-4 border-electric-blue rounded-lg p-4"
        >
          <div className="flex items-center gap-3">
            <motion.div
              className={`p-2 rounded-lg bg-white shadow-sm ${currentTip.color}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <TipIcon className="w-5 h-5" />
            </motion.div>
            <p className="text-charcoal font-medium text-sm md:text-base flex-1">
              {currentTip.text}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  const currentQuote = motivationalQuotes[currentIndex];
  const Icon = currentQuote.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden"
      >
        <motion.div
          className={`bg-gradient-to-br ${currentQuote.color} rounded-2xl p-8 shadow-lifted relative`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background decoration */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 opacity-20"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            <Icon className="w-full h-full text-white" />
          </motion.div>

          {/* Quote icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Quote className="w-10 h-10 text-white/80 mb-4" />
          </motion.div>

          {/* Quote text */}
          <motion.p
            className="text-white text-xl md:text-2xl font-bold mb-4 relative z-10 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {currentQuote.text}
          </motion.p>

          {/* Author */}
          <motion.p
            className="text-white/90 text-sm font-medium relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {currentQuote.author}
          </motion.p>

          {/* Progress dots */}
          <div className="flex gap-2 mt-6 relative z-10">
            {motivationalQuotes.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Compact version for sidebars
export function QuickTipBanner() {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % quickTips.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const tip = quickTips[currentTip];
  const TipIcon = tip.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentTip}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-orange-400 rounded-lg p-3"
      >
        <div className="flex items-center gap-3">
          <motion.div
            className={`p-2 rounded-lg bg-white shadow-sm ${tip.color}`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <TipIcon className="w-4 h-4" />
          </motion.div>
          <p className="text-sm text-charcoal font-medium flex-1">
            {tip.text}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
