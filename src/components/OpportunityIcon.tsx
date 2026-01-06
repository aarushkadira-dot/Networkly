import { motion } from 'framer-motion';
import { Briefcase, DollarSign, GraduationCap, Microscope, Trophy, Users } from 'lucide-react';

type OpportunityType = 'internship' | 'scholarship' | 'summer_program' | 'research' | 'competition' | 'volunteering';

interface OpportunityIconProps {
  type: OpportunityType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showLabel?: boolean;
}

const opportunityConfig = {
  internship: {
    icon: Briefcase,
    label: 'Internship',
    color: 'text-electric-blue',
    bgColor: 'bg-blue-100',
    gradient: 'from-electric-blue to-blue-600',
    description: 'Gain real-world experience'
  },
  scholarship: {
    icon: DollarSign,
    label: 'Scholarship',
    color: 'text-emerald-green',
    bgColor: 'bg-green-100',
    gradient: 'from-emerald-green to-green-600',
    description: 'Financial aid for education'
  },
  summer_program: {
    icon: GraduationCap,
    label: 'Summer Program',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    gradient: 'from-purple-500 to-purple-600',
    description: 'Intensive learning experiences'
  },
  research: {
    icon: Microscope,
    label: 'Research',
    color: 'text-soft-teal',
    bgColor: 'bg-teal-100',
    gradient: 'from-soft-teal to-teal-600',
    description: 'Academic research positions'
  },
  competition: {
    icon: Trophy,
    label: 'Competition',
    color: 'text-coral-peach',
    bgColor: 'bg-orange-100',
    gradient: 'from-coral-peach to-orange-600',
    description: 'Showcase your skills'
  },
  volunteering: {
    icon: Users,
    label: 'Volunteering',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    gradient: 'from-pink-500 to-pink-600',
    description: 'Community service opportunities'
  }
};

export function OpportunityIcon({ type, size = 'md', animated = true, showLabel = false }: OpportunityIconProps) {
  const config = opportunityConfig[type];
  const Icon = config.icon;

  const sizes = {
    sm: { container: 'w-8 h-8', icon: 'w-4 h-4', text: 'text-xs' },
    md: { container: 'w-12 h-12', icon: 'w-6 h-6', text: 'text-sm' },
    lg: { container: 'w-16 h-16', icon: 'w-8 h-8', text: 'text-base' },
    xl: { container: 'w-20 h-20', icon: 'w-10 h-10', text: 'text-lg' }
  };

  const sizeConfig = sizes[size];

  const iconElement = (
    <motion.div
      className={`${sizeConfig.container} rounded-full ${config.bgColor} flex items-center justify-center border-2 ${config.color.replace('text-', 'border-')}`}
      whileHover={animated ? { scale: 1.15, rotate: 5 } : {}}
      whileTap={animated ? { scale: 0.95 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      <Icon className={`${sizeConfig.icon} ${config.color}`} />
    </motion.div>
  );

  if (!showLabel) {
    return iconElement;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {iconElement}
      <span className={`${sizeConfig.text} font-medium ${config.color}`}>
        {config.label}
      </span>
    </div>
  );
}

// Gradient version for more premium look
export function OpportunityIconGradient({ type, size = 'md', showLabel = false }: OpportunityIconProps) {
  const config = opportunityConfig[type];
  const Icon = config.icon;

  const sizes = {
    sm: { container: 'w-8 h-8', icon: 'w-4 h-4', text: 'text-xs' },
    md: { container: 'w-12 h-12', icon: 'w-6 h-6', text: 'text-sm' },
    lg: { container: 'w-16 h-16', icon: 'w-8 h-8', text: 'text-base' },
    xl: { container: 'w-20 h-20', icon: 'w-10 h-10', text: 'text-lg' }
  };

  const sizeConfig = sizes[size];

  const iconElement = (
    <motion.div
      className={`${sizeConfig.container} rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-md`}
      whileHover={{ scale: 1.15, rotate: 360 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
    >
      <Icon className={`${sizeConfig.icon} text-white`} />
    </motion.div>
  );

  if (!showLabel) {
    return iconElement;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {iconElement}
      <span className={`${sizeConfig.text} font-medium text-charcoal`}>
        {config.label}
      </span>
    </div>
  );
}

// Card with icon for opportunity type selector
export function OpportunityTypeCard({ type, onClick, isActive = false }: { 
  type: OpportunityType; 
  onClick?: () => void;
  isActive?: boolean;
}) {
  const config = opportunityConfig[type];
  const Icon = config.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`p-6 rounded-2xl border-2 transition-all text-left w-full ${
        isActive
          ? `${config.bgColor} ${config.color.replace('text-', 'border-')} border-2`
          : 'bg-white border-gray-200 hover:border-electric-blue'
      }`}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-md flex-shrink-0`}
          whileHover={{ rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        
        <div className="flex-1">
          <h3 className="font-bold text-lg text-charcoal mb-1">
            {config.label}
          </h3>
          <p className="text-sm text-gray-600">
            {config.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

// Organization logo placeholder
interface OrganizationLogoProps {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function OrganizationLogo({ name, imageUrl, size = 'md' }: OrganizationLogoProps) {
  const sizes = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg'
  };

  // If image URL provided, use it
  if (imageUrl) {
    return (
      <motion.div
        className={`${sizes[size]} rounded-lg overflow-hidden shadow-md bg-white border-2 border-gray-200`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    );
  }

  // Otherwise use initials
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      className={`${sizes[size]} rounded-lg bg-gradient-to-br from-electric-blue to-soft-teal flex items-center justify-center shadow-md border-2 border-white`}
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <span className="font-semibold text-white tracking-wide">
        {initials}
      </span>
    </motion.div>
  );
}



