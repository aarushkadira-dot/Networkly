import { memo } from 'react';

export const Logo = memo(function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Icon cluster */}
      <div className="relative w-8 h-8">
        {/* Graduation Cap */}
        <div className="absolute -top-1 -left-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#4A7C8C]">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 22L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Briefcase */}
        <div className="absolute top-2 left-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#4A7C8C]">
            <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M16 21V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V21" stroke="currentColor" strokeWidth="2" />
            <path d="M8 7H16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Rosette/Medal */}
        <div className="absolute top-3 -left-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#4A7C8C]">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2V6" stroke="currentColor" strokeWidth="2" />
            <path d="M12 18V22" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Networkly text */}
      <div className="text-[#3B60A8] font-bold text-2xl">
        <span className="relative">
          Networkly
        </span>
      </div>
    </div>
  );
});