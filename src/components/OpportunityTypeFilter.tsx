import { motion } from 'framer-motion';
import { OpportunityIcon } from './OpportunityIcon';

type OpportunityType = 'internship' | 'scholarship' | 'summer_program' | 'research' | 'competition' | 'volunteering';

interface OpportunityTypeFilterProps {
  selectedType: string;
  onSelectType: (type: string) => void;
  counts?: Record<string, number>;
}

const opportunityTypes: { value: OpportunityType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'internship', label: 'Internships' },
  { value: 'scholarship', label: 'Scholarships' },
  { value: 'summer_program', label: 'Summer Programs' },
  { value: 'research', label: 'Research' },
  { value: 'competition', label: 'Competitions' },
  { value: 'volunteering', label: 'Volunteering' },
];

export function OpportunityTypeFilter({ selectedType, onSelectType, counts }: OpportunityTypeFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-charcoal">Filter by Type</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {opportunityTypes.map((type) => {
          const isActive = selectedType === type.value;
          const count = counts?.[type.value] || 0;
          
          return (
            <motion.button
              key={type.value}
              onClick={() => onSelectType(type.value)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                isActive
                  ? 'border-electric-blue bg-electric-blue/5 shadow-md'
                  : 'border-gray-200 hover:border-electric-blue bg-white'
              }`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3">
                {type.value !== 'all' && (
                  <OpportunityIcon 
                    type={type.value as OpportunityType} 
                    size="sm"
                    animated={false}
                  />
                )}
                <div className="flex-1">
                  <div className="font-medium text-sm text-charcoal">
                    {type.label}
                  </div>
                  {count > 0 && (
                    <div className="text-xs text-gray-500 mt-1">
                      {count} available
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Compact horizontal filter
export function CompactTypeFilter({ selectedType, onSelectType }: Omit<OpportunityTypeFilterProps, 'counts'>) {
  return (
    <div className="flex flex-wrap gap-2">
      {opportunityTypes.map((type) => {
        const isActive = selectedType === type.value;
        
        return (
          <motion.button
            key={type.value}
            onClick={() => onSelectType(type.value)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
              isActive
                ? 'bg-electric-blue text-white shadow-md'
                : 'bg-white text-charcoal border-2 border-gray-200 hover:border-electric-blue'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.value !== 'all' && type.value !== 'volunteering' && (
              <OpportunityIcon 
                type={type.value as Exclude<OpportunityType, 'volunteering'>} 
                size="sm"
                animated={false}
              />
            )}
            <span>{type.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}



