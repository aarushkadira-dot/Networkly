import { useEffect, useState } from 'react';
import { Search, Filter, Calendar, MapPin, ExternalLink, Bookmark, BookmarkCheck, GraduationCap, Award, Briefcase, Beaker, Trophy, Sparkles, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useToast } from '../components/SuccessToast';
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

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      internship: 'from-blue-500 to-cyan-400',
      scholarship: 'from-emerald-500 to-teal-400',
      summer_program: 'from-purple-500 to-pink-400',
      research: 'from-indigo-500 to-violet-500',
      competition: 'from-orange-500 to-yellow-400',
      conference: 'from-rose-500 to-pink-400',
    };
    return colors[type] || 'from-gray-500 to-gray-400';
  };

  const getTypeGradientStyle = (type: string) => {
    const gradients: Record<string, string> = {
      internship: 'linear-gradient(to right, #3B82F6, #22D3EE)', // Blue to Cyan
      scholarship: 'linear-gradient(to right, #10B981, #2DD4BF)', // Emerald to Teal
      summer_program: 'linear-gradient(to right, #A855F7, #F472B6)', // Purple to Pink
      research: 'linear-gradient(to right, #6366F1, #8B5CF6)', // Indigo to Violet
      competition: 'linear-gradient(to right, #F97316, #FACC15)', // Orange to Yellow
      conference: 'linear-gradient(to right, #F43F5E, #F472B6)', // Rose to Pink
    };
    return gradients[type] || 'linear-gradient(to right, #6B7280, #9CA3AF)';
  };

  const getTypeIcon = (type: string) => {
    const icons: Record<string, JSX.Element> = {
      internship: <Briefcase className="w-5 h-5" />,
      scholarship: <Award className="w-5 h-5" />,
      summer_program: <GraduationCap className="w-5 h-5" />,
      research: <Beaker className="w-5 h-5" />,
      competition: <Trophy className="w-5 h-5" />,
      conference: <Calendar className="w-5 h-5" />,
    };
    return icons[type] || <Sparkles className="w-5 h-5" />;
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
    <div className="min-h-screen bg-dark-navy pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-bright-teal to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-10 -right-20 w-96 h-96 bg-gradient-to-br from-royal-blue to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
            <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-4 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-bright-teal" />
            <span className="text-white font-inter font-medium">{filteredOpportunities.length} Opportunities Available</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 bg-gradient-to-r from-bright-teal to-royal-blue bg-clip-text text-transparent">
            Explore Opportunities
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover internships, scholarships, programs, and competitions tailored for high schoolers.
          </p>
              </motion.div>

              <motion.div
          className="mb-8 space-y-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bright-teal" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search opportunities by title, organization, or description..."
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-blue-200 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-bright-teal focus:border-bright-teal focus:bg-white/20"
            />
          </div>

          <div className="flex flex-wrap gap-3 items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Filter className="w-4 h-4 text-bright-teal" />
              <span className="text-sm font-inter font-medium text-white">Filters</span>
            </div>
            
            <div className="relative dropdown-container">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Briefcase className="w-4 h-4 text-bright-teal" />
                <button
                  onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                  className="flex items-center gap-2 bg-transparent text-white text-sm font-inter font-medium focus:outline-none cursor-pointer rounded-full"
                >
                  <span>{typeOptions.find(opt => opt.value === typeFilter)?.label || 'All Types'}</span>
                  <ChevronDown className={`w-3 h-3 text-bright-teal transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Dropdown Menu */}
              {isTypeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark-navy border border-white/20 rounded-lg shadow-2xl z-[100] overflow-hidden">
                  {typeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setTypeFilter(option.value);
                        setIsTypeDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left text-white text-sm font-inter hover:bg-white/10 transition-colors"
                    >
                      <span className="text-bright-teal flex-shrink-0">{option.icon}</span>
                      <span className="flex-grow">{option.label}</span>
                      {typeFilter === option.value && (
                        <span className="ml-auto text-bright-teal flex-shrink-0">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative dropdown-container">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                <GraduationCap className="w-4 h-4 text-bright-teal" />
                <button
                  onClick={() => setIsGradeDropdownOpen(!isGradeDropdownOpen)}
                  className="flex items-center gap-2 bg-transparent text-white text-sm font-inter font-medium focus:outline-none cursor-pointer rounded-full"
                >
                  <span>{gradeFilter === 'all' ? 'All Grades' : getGradeLabel(gradeFilter)}</span>
                  <ChevronDown className={`w-3 h-3 text-bright-teal transition-transform ${isGradeDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Dropdown Menu */}
              {isGradeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-dark-navy border border-white/20 rounded-lg shadow-2xl z-[100] overflow-hidden">
                  <button
                    onClick={() => {
                      setGradeFilter('all');
                      setIsGradeDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-white text-sm font-inter hover:bg-white/10 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4 text-bright-teal flex-shrink-0" />
                    <span className="flex-grow">All Grades</span>
                    {gradeFilter === 'all' && (
                      <span className="ml-auto text-bright-teal flex-shrink-0">✓</span>
                    )}
                  </button>
                  {['9', '10', '11', '12'].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => {
                        setGradeFilter(grade);
                        setIsGradeDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left text-white text-sm font-inter hover:bg-white/10 transition-colors"
                    >
                      <GraduationCap className="w-4 h-4 text-bright-teal flex-shrink-0" />
                      <span className="flex-grow">{getGradeLabel(grade)}</span>
                      {gradeFilter === grade && (
                        <span className="ml-auto text-bright-teal flex-shrink-0">✓</span>
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
            className="text-center py-12 px-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-16 h-16 text-bright-teal mx-auto mb-4" />
            <p className="text-white text-xl font-medium">
              No opportunities found matching your criteria.
            </p>
            <p className="text-blue-200 mt-2">
              Try adjusting your filters or search query.
                </p>
              </motion.div>
        ) : (
          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredOpportunities.map((opp, index) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* CARD CONTAINER */}
                <div className="relative group bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-6 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/20">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${getTypeColor(opp.type)} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* BOOKMARK BUTTON - TOP RIGHT CORNER */}
                  <button
                    onClick={() => handleSaveOpportunity(opp.id)}
                    className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 shadow-lg z-50 text-white hover:text-blue-400"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      zIndex: 999
                    }}
                  >
                    {isSaved(opp.id) ? (
                      <BookmarkCheck className="w-5 h-5 text-bright-teal" />
                    ) : (
                      <Bookmark className="w-5 h-5 text-white" />
                    )}
                  </button>

                  {/* Type badge with icon - top left */}
                  <div className="absolute -top-3 -left-3 z-10">
                    <div 
                      className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg"
                      style={{
                        background: getTypeGradientStyle(opp.type),
                      }}
                    >
                      <span className="text-white">
                        {getTypeIcon(opp.type)}
                      </span>
                      <span className="text-white font-semibold text-sm capitalize">
                        {opp.type.replace('_', ' ')}
                      </span>
                    </div>
                  </div>

                    <div className="mt-8 mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                        {opp.title}
                    </h3>
                      <p className="text-bright-teal font-semibold text-lg">
                        {opp.organization}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {opp.deadline && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20">
                          <Calendar className="w-4 h-4 text-bright-teal" />
                          <span className="text-white text-sm font-medium">
                            {new Date(opp.deadline).toLocaleDateString()}
                          </span>
                    </div>
                      )}
                      {opp.location && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20">
                          <MapPin className="w-4 h-4 text-bright-teal" />
                          <span className="text-white text-sm font-medium">{opp.location}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-white mb-4 line-clamp-3 leading-relaxed">
                      {opp.description}
                    </p>

                    {/* Interest tags */}
                    {opp.interests && opp.interests.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {opp.interests.map((interest, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20 hover:bg-white/20 transition-colors"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Apply button with neon gradient */}
                    <div 
                      className="w-full cursor-pointer"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleApply(opp.application_url)}
                    >
                      <motion.button
                        className="w-full py-3 px-6 bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ 
                          cursor: 'pointer',
                          pointerEvents: 'auto',
                          border: 'none',
                          outline: 'none'
                        }}
                      >
                        <span>Apply Now</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
                </motion.div>
        )}

        {/* Sign-up CTA Section */}
        <motion.div
          className="mt-16 text-center py-12 px-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Find More Opportunities
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Sign up for Networkly to discover thousands more opportunities, get personalized recommendations, and never miss a deadline.
          </p>
          <InteractiveHoverButton
            text="Sign Up to Find More Opportunities"
            onClick={onAuthClick}
            className="text-lg px-8 py-4"
          />
        </motion.div>
      </div>
    </div>
  );
}
