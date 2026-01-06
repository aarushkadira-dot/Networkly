import { useEffect, useState } from 'react';
import { Search, Filter, Calendar, Bookmark, BookmarkCheck, GraduationCap, Award, Briefcase, Beaker, Trophy, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { useToast } from '../components/common/SuccessToast';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import { getPersonalizedOpportunities } from '../lib/opportunityMatching';
import type { Database } from '../lib/database.types';

type Opportunity = Database['public']['Tables']['opportunities']['Row'];
type Application = Database['public']['Tables']['applications']['Row'];

interface FeaturesProps {
  onAuthClick: () => void;
}

export default function Features({ onAuthClick }: FeaturesProps) {
  const { user } = useAuth();
  const { showCelebration } = useToast();
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState(false);

  useEffect(() => {
    loadOpportunities();
    if (user) {
      loadApplications();
    }
  }, [user]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setIsTypeDropdownOpen(false);
        setIsGradeDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const loadOpportunities = async () => {
    setLoading(true);
    // For logged-in users, use personalized matching
    if (user) {
      try {
        const matches = await getPersonalizedOpportunities(user.id, 50);
        // Extract opportunities from matches and sort by score
        const matchedOpps = matches.map(m => m.opportunity);
        setOpportunities(matchedOpps);
      } catch (error) {
        console.error('Error loading personalized opportunities:', error);
        // Fallback to regular load
        const { data } = await supabase
          .from('opportunities')
          .select('*')
          .order('created_at', { ascending: false });
        if (data) {
          setOpportunities(data);
        }
      }
      setLoading(false);
      return;
    }

    // For non-logged in users, show only specific opportunities
    if (!user) {
      const publicOpportunities: Opportunity[] = [
        {
          id: 'public-1',
          title: 'DECA - Distributive Education Clubs of America',
          organization: 'DECA Inc.',
          description: 'DECA prepares emerging leaders and entrepreneurs in marketing, finance, hospitality, and management. Compete in business competitions, develop leadership skills, and network with professionals.',
          type: 'competition',
          grade_levels: ['9', '10', '11', '12'],
          deadline: '2025-12-31',
          location: 'Nationwide',
          application_url: 'https://www.deca.org',
          interests: ['Business', 'Marketing', 'Leadership', 'Entrepreneurship'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_featured: false,
          created_by: null
        },
        {
          id: 'public-2',
          title: 'HOSA - Future Health Professionals',
          organization: 'HOSA',
          description: 'HOSA is a career and technical student organization for future health professionals. Compete in health science events, develop leadership skills, and explore healthcare careers.',
          type: 'competition',
          grade_levels: ['9', '10', '11', '12'],
          deadline: '2025-12-31',
          location: 'Nationwide',
          application_url: 'https://hosa.org',
          interests: ['Healthcare', 'Medicine', 'Biology', 'Leadership'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_featured: false,
          created_by: null
        },
        {
          id: 'public-3',
          title: "NASA Office of STEM Engagement Internship",
          organization: 'NASA',
          description: "NASA's Office of STEM Engagement (OSTEM) paid internships allow college-level students to contribute to the agency's mission to advance science, technology, aeronautics, and space exploration. OSTEM internships offer students an opportunity to gain practical work experience while working side-by-side with mentors who are research scientists, engineers, and individuals from many other professions. Internships may be full time or part time on a NASA center or facility. Join our NASA team and gain valuable on-the-job experience, build your resume, and strengthen your career readiness. We offer three sessions annually, so visit our website often for opportunities.",
          type: 'internship',
          grade_levels: ['11', '12'],
          deadline: '2026-02-27',
          location: 'Various NASA Centers',
          application_url: 'https://intern.nasa.gov',
          interests: ['STEM', 'Space', 'Science', 'Engineering', 'Research'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_featured: false,
          created_by: null
        },
        {
          id: 'public-4',
          title: 'Coca-Cola Scholars Program',
          organization: 'The Coca-Cola Scholars Foundation',
          description: 'The Coca-Cola Scholars $20,000 college scholarship is accepting applications August 1 - September 30, 2025, from high school seniors across the country.',
          type: 'scholarship',
          grade_levels: ['12'],
          deadline: '2025-09-30',
          location: 'Nationwide',
          application_url: 'https://www.coca-colascholarsfoundation.org',
          interests: ['Academic Excellence', 'Leadership', 'Community Service'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_featured: false,
          created_by: null
        },
        {
          id: 'public-5',
          title: 'ISEF - International Science and Engineering Fair',
          organization: 'Society for Science',
          description: 'ISEF is the world\'s largest international pre-college science competition. Students compete for awards, scholarships, and the chance to represent their research on a global stage. Present your independent research project and compete with students from around the world.',
          type: 'research',
          grade_levels: ['9', '10', '11', '12'],
          deadline: '2026-01-31',
          location: 'International',
          application_url: 'https://www.societyforscience.org/isef/',
          interests: ['Science', 'Research', 'Engineering', 'STEM', 'Innovation'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_featured: false,
          created_by: null
        },
        {
          id: 'public-6',
          title: 'MIT Undergraduate Research Technology Conference (URTC)',
          organization: 'MIT',
          description: 'Present your research at MIT\'s premier undergraduate research technology conference. Showcase innovative projects, network with peers and faculty, and gain recognition for your work in technology and engineering.',
          type: 'conference',
          grade_levels: ['11', '12'],
          deadline: '2026-02-15',
          location: 'Cambridge, MA',
          application_url: 'https://www.mit.edu',
          interests: ['Research', 'Technology', 'STEM', 'Engineering', 'Innovation'],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          is_featured: false,
          created_by: null
        }
      ];

      // Randomize the order of opportunities
      const shuffled = [...publicOpportunities].sort(() => Math.random() - 0.5);
      setOpportunities(shuffled);
      setLoading(false);
      return;
    }
  };

  const loadApplications = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('applications')
      .select('*')
      .eq('user_id', user.id);

    if (data) {
      setApplications(data);
    }
  };

  const handleSaveOpportunity = async (opportunityId: string) => {
    if (!user) {
      onAuthClick();
      return;
    }

    const existing = applications.find(app => app.opportunity_id === opportunityId);

    if (existing) {
      await supabase
        .from('applications')
        .delete()
        .eq('id', existing.id);
      setApplications(applications.filter(app => app.id !== existing.id));
    } else {
      const { data } = await supabase
        .from('applications')
        .insert({
          user_id: user.id,
          opportunity_id: opportunityId,
          status: 'saved' as const,
        } as any)
        .select()
        .single();

      if (data) {
        setApplications([...applications, data]);
        showCelebration('Opportunity saved!');
      }
    }
  };

  const handleApply = (url: string | null) => {
    // Always show sign-up modal for non-logged in users
    if (!user) {
      onAuthClick();
      return;
    }
    // For logged-in users, open the application URL
    if (url) {
      window.open(url, '_blank');
    }
  };

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'all' || opp.type === typeFilter;
    const matchesGrade = gradeFilter === 'all' || opp.grade_levels.includes(gradeFilter);

    return matchesSearch && matchesType && matchesGrade;
  });



  const getLightTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      internship: 'bg-blue-500/10 text-blue-400',
      scholarship: 'bg-emerald-500/10 text-emerald-400',
      summer_program: 'bg-purple-500/10 text-purple-400',
      research: 'bg-indigo-500/10 text-indigo-400',
      competition: 'bg-orange-500/10 text-orange-400',
      conference: 'bg-rose-500/10 text-rose-400',
    };
    return colors[type] || 'bg-gray-500/10 text-gray-400';
  };

  const getTypeIcon = (type: string) => {
    const icons: Record<string, JSX.Element> = {
      internship: <Briefcase className="w-4 h-4" />,
      scholarship: <Award className="w-4 h-4" />,
      summer_program: <GraduationCap className="w-4 h-4" />,
      research: <Beaker className="w-4 h-4" />,
      competition: <Trophy className="w-4 h-4" />,
      conference: <Calendar className="w-4 h-4" />,
    };
    return icons[type] || <Sparkles className="w-4 h-4" />;
  };

  const typeOptions = [
    { value: 'all', label: 'All Types', icon: <Filter className="w-4 h-4" /> },
    { value: 'internship', label: 'Internships', icon: <Briefcase className="w-4 h-4" /> },
    { value: 'scholarship', label: 'Scholarships', icon: <Award className="w-4 h-4" /> },
    { value: 'summer_program', label: 'Summer Programs', icon: <GraduationCap className="w-4 h-4" /> },
    { value: 'research', label: 'Research', icon: <Beaker className="w-4 h-4" /> },
    { value: 'competition', label: 'Competitions', icon: <Trophy className="w-4 h-4" /> },
    { value: 'conference', label: 'Conferences', icon: <Calendar className="w-4 h-4" /> },
  ];

  const getGradeLabel = (grade: string) => {
    const gradeLabels: Record<string, string> = {
      '9': 'Freshman',
      '10': 'Sophomore',
      '11': 'Junior',
      '12': 'Senior'
    };
    return gradeLabels[grade] || grade;
  };

  const isSaved = (opportunityId: string) => {
    return applications.some(app => app.opportunity_id === opportunityId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-navy flex items-center justify-center">
        <LoadingSpinner size="lg" message="Loading opportunities..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-navy relative">
      {/* Background Gradient - Matching Home Page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-white/80 text-sm font-medium">{filteredOpportunities.length} Opportunities Available</span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">Explore</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Opportunities</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Find the perfect internship, scholarship, or competition to accelerate your future.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 space-y-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search opportunities..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-white/40 transition-all duration-300
                  focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 focus:bg-white/10"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {/* Filter Label */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 text-white/50">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            {/* Type Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${typeFilter !== 'all'
                  ? 'bg-secondary/10 border-secondary/20 text-secondary'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                  }`}
              >
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">{typeOptions.find(opt => opt.value === typeFilter)?.label || 'All Types'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTypeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark-navy/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl z-[100] overflow-hidden py-1">
                  {typeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setTypeFilter(option.value);
                        setIsTypeDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-white/5 transition-colors"
                    >
                      <span className={`${typeFilter === option.value ? 'text-secondary' : 'text-white/50'} flex-shrink-0`}>{option.icon}</span>
                      <span className={`${typeFilter === option.value ? 'text-white font-medium' : 'text-white/80'} flex-grow`}>{option.label}</span>
                      {typeFilter === option.value && (
                        <span className="text-secondary ml-auto text-xs">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Grade Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setIsGradeDropdownOpen(!isGradeDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${gradeFilter !== 'all'
                  ? 'bg-secondary/10 border-secondary/20 text-secondary'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                  }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">{gradeFilter === 'all' ? 'All Grades' : getGradeLabel(gradeFilter)}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isGradeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isGradeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark-navy/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl z-[100] overflow-hidden py-1">
                  <button
                    onClick={() => {
                      setGradeFilter('all');
                      setIsGradeDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-white/5 transition-colors"
                  >
                    <GraduationCap className={`w-4 h-4 flex-shrink-0 ${gradeFilter === 'all' ? 'text-secondary' : 'text-white/50'}`} />
                    <span className={`flex-grow ${gradeFilter === 'all' ? 'text-white font-medium' : 'text-white/80'}`}>All Grades</span>
                    {gradeFilter === 'all' && (
                      <span className="text-secondary ml-auto text-xs">✓</span>
                    )}
                  </button>
                  {['9', '10', '11', '12'].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => {
                        setGradeFilter(grade);
                        setIsGradeDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-white/5 transition-colors"
                    >
                      <GraduationCap className={`w-4 h-4 flex-shrink-0 ${gradeFilter === grade ? 'text-secondary' : 'text-white/50'}`} />
                      <span className={`flex-grow ${gradeFilter === grade ? 'text-white font-medium' : 'text-white/80'}`}>{getGradeLabel(grade)}</span>
                      {gradeFilter === grade && (
                        <span className="text-secondary ml-auto text-xs">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {filteredOpportunities.length === 0 ? (
          <motion.div
            className="text-center py-20 px-6 rounded-3xl border border-dashed border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white/20" />
            </div>
            <h3 className="text-white text-xl font-medium mb-2">
              No opportunities found
            </h3>
            <p className="text-white/50">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredOpportunities.map((opp, index) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                {/* CARD CONTAINER */}
                <div className="relative group h-full flex flex-col bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">

                  {/* Card Header */}
                  <div className="p-6 pb-4 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      {/* Type Badge */}
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border border-white/5 ${getLightTypeColor(opp.type)}`}>
                        {getTypeIcon(opp.type)}
                        <span className="capitalize">{opp.type.replace('_', ' ')}</span>
                      </div>

                      {/* Bookmark */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleSaveOpportunity(opp.id);
                        }}
                        className={`p-2 rounded-full transition-colors ${isSaved(opp.id) ? 'text-secondary bg-secondary/10' : 'text-white/40 hover:text-white hover:bg-white/10'}`}
                      >
                        {isSaved(opp.id) ? (
                          <BookmarkCheck className="w-5 h-5" />
                        ) : (
                          <Bookmark className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary-400 transition-colors">
                      {opp.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4 text-white/60 text-sm">
                      <span className="font-medium text-white/80">{opp.organization}</span>
                      {opp.deadline && (
                        <>
                          <span>•</span>
                          <span className={`${new Date(opp.deadline) < new Date() ? 'text-red-400' : ''}`}>
                            {new Date(opp.deadline).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                          </span>
                        </>
                      )}
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-4">
                      {opp.description}
                    </p>

                    {/* Tags */}
                    {opp.interests && opp.interests.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {opp.interests.slice(0, 3).map((interest, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-white/50 border border-white/5"
                          >
                            {interest}
                          </span>
                        ))}
                        {opp.interests.length > 3 && (
                          <span className="px-2 py-0.5 text-[10px] text-white/40">+ {opp.interests.length - 3}</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Footer / Action */}
                  <div className="p-4 border-t border-white/5 bg-white/[0.02]">
                    <button
                      onClick={() => handleApply(opp.application_url)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-primary sm:hover:bg-primary text-white text-sm font-medium transition-all group-hover:bg-primary"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Sign-up CTA Section */}
        <motion.div
          className="mt-20 text-center py-16 px-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Find More Opportunities
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Sign up for Networkly to discover thousands more opportunities, get personalized recommendations, and never miss a deadline.
          </p>
          <InteractiveHoverButton
            text="Sign Up Now"
            onClick={onAuthClick}
            className="bg-primary text-white border-none px-8 py-3"
          />
        </motion.div>
      </div>
    </div>
  );
}
