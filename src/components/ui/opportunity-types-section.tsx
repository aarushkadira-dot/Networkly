"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Trophy, GraduationCap, Users, Award, Globe, ChevronLeft, ChevronRight, Presentation, Calendar } from 'lucide-react';

interface OpportunityTypeCard {
  title: string;
  description: string;
  icon: React.ElementType;
  examples: string[];
}

interface OpportunityTypesSectionProps {
  className?: string;
}

const opportunityTypes: OpportunityTypeCard[] = [
  {
    title: "Competitions",
    description: "Networkly makes it easy to track, verify, and showcase achievements from academic, STEM, and extracurricular competitions.",
    icon: Trophy,
    examples: ["Science Olympiad", "MATHCOUNTS", "USACO", "NSDA"],
  },
  {
    title: "Research & Internships",
    description: "Streamline application, verification, and recommendation processes for research programs, labs, and industry internships.",
    icon: GraduationCap,
    examples: ["NASA OSTEM", "Google Summer of Code", "Microsoft Research", "MIT UROP"],
  },
  {
    title: "Clubs & School Programs",
    description: "Onboard students, track participation, and showcase verified achievements for school clubs, teams, and local programs.",
    icon: Users,
    examples: ["DECA", "HOSA", "TSA", "FBLA"],
  },
  {
    title: "Scholarships & Grants",
    description: "Easily verify eligibility, submit applications, and get recognized for awards, scholarships, and micro-grants.",
    icon: Award,
    examples: ["Gates Scholarship", "Coca-Cola Scholars", "QuestBridge", "Jack Kent Cooke"],
  },
  {
    title: "Global Opportunities",
    description: "Connect students to verified programs, organizations, and opportunities anywhere in the world. Find nearby networking centers to make your achievements truly global.",
    icon: Globe,
    examples: ["Study Abroad", "International Competitions", "Global Volunteering", "Exchange Programs"],
  },
  {
    title: "Conferences & Summits",
    description: "Discover and participate in conferences, summits, and networking events where students present research, connect with professionals, and showcase their work.",
    icon: Presentation,
    examples: ["MIT URTC", "ISEF", "National Youth Summit", "Student Research Conferences"],
  },
  {
    title: "Networking Events",
    description: "Attend networking events, career fairs, and industry meetups designed for high school students to connect with mentors, peers, and opportunities.",
    icon: Calendar,
    examples: ["STEM Career Fairs", "Youth Leadership Summits", "Innovation Showcases", "Mentorship Mixers"],
  },
];

export function OpportunityTypesSection({ className }: OpportunityTypesSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 400;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'right'
        ? currentScroll + scrollAmount
        : currentScroll - scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });

      // Check scroll position after animation
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section className={`py-24 md:py-32 bg-dark-navy ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6">
              Find every opportunity you can think of
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed">
              From competitions and research labs to internship programs and nonprofits, students and organizations, conferences and summits across the country grow and thrive with Networkly.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Cards Container - Full Width */}
      <div className="w-full border-y border-white/20 bg-white/5 backdrop-blur-sm">
        <div className="relative py-8">
          {/* Navigation Arrows */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex justify-end">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${showLeftArrow
                  ? 'border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50'
                  : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed'
                  }`}
                disabled={!showLeftArrow}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${showRightArrow
                  ? 'border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50'
                  : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed'
                  }`}
                disabled={!showRightArrow}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Left fade gradient */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-navy to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showLeftArrow ? 'opacity-100' : 'opacity-0'
              }`}
          />

          {/* Right fade gradient */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-navy to-transparent z-10 pointer-events-none transition-opacity duration-300 ${showRightArrow ? 'opacity-100' : 'opacity-0'
              }`}
          />

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="overflow-x-auto scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing px-4 sm:px-6 lg:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {opportunityTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                    style={{ width: '400px' }}
                  >
                    {/* Top border accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {type.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {type.description}
                    </p>

                    {/* Examples */}
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}