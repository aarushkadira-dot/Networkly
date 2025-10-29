import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Briefcase, Award, Users, TrendingUp, Star, Rocket } from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '',
  decimals = 0 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [motionValue, isInView, end]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(latest.toFixed(decimals));
    });
  }, [springValue, decimals]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

interface StatCardProps {
  icon: typeof Briefcase;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  color: string;
  gradient: string;
}

export function StatCard({ icon: Icon, label, value, prefix, suffix, color, gradient }: StatCardProps) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-soft p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Background gradient decoration */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full -translate-y-8 translate-x-8`} />
      
      <div className="relative z-10">
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        <motion.div
          className={`text-4xl font-bold ${color} mb-2`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        >
          <AnimatedCounter end={value} prefix={prefix} suffix={suffix} />
        </motion.div>

        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    {
      icon: Briefcase,
      label: 'Active Opportunities',
      value: 1247,
      color: 'text-electric-blue',
      gradient: 'from-electric-blue to-soft-teal',
      suffix: '+'
    },
    {
      icon: Award,
      label: 'Scholarships Available',
      value: 356,
      color: 'text-emerald-green',
      gradient: 'from-emerald-green to-green-500',
      suffix: '+'
    },
    {
      icon: Users,
      label: 'Students Helped',
      value: 5420,
      color: 'text-royal-purple',
      gradient: 'from-royal-purple to-purple-600',
      suffix: '+'
    },
    {
      icon: TrendingUp,
      label: 'Success Rate',
      value: 94,
      color: 'text-coral-peach',
      gradient: 'from-coral-peach to-orange-500',
      suffix: '%'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <StatCard {...stat} />
        </motion.div>
      ))}
    </div>
  );
}

// Progress ring for profile completion, goals, etc.
interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
}

export function ProgressRing({ 
  progress, 
  size = 120, 
  strokeWidth = 8,
  color = '#007bff',
  label 
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />
          
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <div className="text-3xl font-bold text-charcoal">
              {Math.round(progress)}%
            </div>
          </motion.div>
        </div>
      </div>
      
      {label && (
        <motion.p
          className="mt-4 text-sm font-medium text-gray-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {label}
        </motion.p>
      )}
    </div>
  );
}

// Trending indicator
export function TrendingBadge({ change }: { change: number }) {
  const isPositive = change > 0;
  
  return (
    <motion.div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
        isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 500 }}
    >
      <TrendingUp className={`w-3 h-3 ${!isPositive && 'rotate-180'}`} />
      <span>{Math.abs(change)}%</span>
    </motion.div>
  );
}



