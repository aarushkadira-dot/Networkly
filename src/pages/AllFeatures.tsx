import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  Users,
  Zap,
  CalendarRange,
  BellRing,
  Trophy,
  Shield,
  BookOpen,
  ArrowRight,
  GraduationCap,
  School,
  Target,
  Briefcase,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter';
import { TubelightNavBar } from '@/components/ui/tubelight-navbar';

interface FeatureProps {
  onAuthClick: () => void;
}

interface Feature {
  name: string;
  description: string;
  path: string;
}

interface MainFeature {
  name: string;
  description: string;
  path: string;
  visual: React.ReactNode;
  tagline?: string;
  bulletPoints?: string[];
}

export default function AllFeatures({ onAuthClick }: FeatureProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = [
    {
      id: 'community',
      title: 'Discovery',
    },
    {
      id: 'applications',
      title: 'Applications',
    },
    {
      id: 'research',
      title: 'Research',
    },
    {
      id: 'competitive',
      title: 'Competitions',
    },
    {
      id: 'learning',
      title: 'Learning',
    },
  ];

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 64; // h-16 = 64px
      const categoryNavHeight = 80; // approximate height of category nav
      const offset = navbarHeight + categoryNavHeight;
      const scrollPosition = window.scrollY + offset + 50; // Add some threshold
      
      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          const elementTop = ref.getBoundingClientRect().top + window.pageYOffset;
          const elementBottom = elementTop + ref.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveCategory(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (index: number) => {
    const ref = categoryRefs.current[index];
    if (ref) {
      const navbarHeight = 64; // h-16 = 64px
      const categoryNavHeight = 80; // approximate height of category nav
      const offset = navbarHeight + categoryNavHeight;
      
      const elementTop = ref.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveCategory(index);
    }
  };

  const mainFeaturesByCategory: Record<string, MainFeature> = {
    community: {
      name: 'AI-Powered Matching & Community',
      description: 'Get personalized recommendations that match your interests, grade level, and goals. Build your network by connecting with like-minded students, share experiences, and discover opportunities designed for you.',
      path: '/features/ai-powered-matching',
      tagline: 'Find opportunities and connect with your community.',
      bulletPoints: [
        'Discover scholarships, research, and competitions tailored to your profile',
        'Connect with students and build meaningful relationships',
      ],
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-3 mb-4">
            <div className="h-4 bg-white/10 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-white/10 rounded w-2/3 mx-auto"></div>
            <div className="h-4 bg-gradient-to-r from-primary to-secondary rounded w-1/2 mx-auto"></div>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-white/20"></div>
            ))}
          </div>
        </div>
      ),
    },
    applications: {
      name: 'Instant Applications',
      description: 'Apply to multiple opportunities in seconds with your saved profile. No more repetitive forms—your profile does the work for you.',
      path: '/features/instant-applications',
      tagline: 'Apply faster with fewer clicks.',
      bulletPoints: [
        'Save hours with pre-filled applications',
        'Track all applications in one place',
      ],
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
            <Zap className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">One-Click Apply</span>
            </div>
            <div className="h-12 bg-white/5 rounded-lg"></div>
            <div className="h-12 bg-white/5 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    research: {
      name: 'Research Opportunities',
      description: 'Connect with research programs, labs, and mentors. Search by your project name or major to find relevant research professors. Find undergraduate research positions, summer programs, and academic collaborations that align with your interests.',
      path: '/features/research-opportunities',
      tagline: 'Find research that matches your interests.',
      bulletPoints: [
        'Search by project name or major to find relevant professors',
        'Connect with research labs and summer programs',
      ],
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="h-16 bg-white/5 rounded-lg flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/30 to-secondary/30"></div>
                <div className="flex flex-col gap-1">
                  <div className="h-3 bg-white/10 rounded w-24"></div>
                  <div className="h-2 bg-white/5 rounded w-32"></div>
                </div>
              </div>
            </div>
            <div className="h-16 bg-white/5 rounded-lg flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/30 to-secondary/30"></div>
                <div className="flex flex-col gap-1">
                  <div className="h-3 bg-white/10 rounded w-24"></div>
                  <div className="h-2 bg-white/5 rounded w-32"></div>
                </div>
              </div>
            </div>
            <div className="h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/40 to-secondary/40"></div>
                <div className="flex flex-col gap-1">
                  <div className="h-3 bg-white/20 rounded w-28"></div>
                  <div className="h-2 bg-white/10 rounded w-36"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    competitive: {
      name: 'DECA, FBLA, HOSA, and more',
      description: 'Excel in competitive organizations with flashcards, practice tests, and roleplay scenarios. Get mentorship from national winners. For HOSA, connect with healthcare professionals for real-time experience.',
      path: '/features',
      tagline: 'Excel in competitive organizations.',
      bulletPoints: [
        'Access flashcards, tests, and roleplay scenarios for DECA, FBLA, and HOSA',
        'Get mentorship from national winners and healthcare professionals',
      ],
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-accent" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-white/10 rounded w-full mb-1"></div>
                  <div className="h-2 bg-white/5 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/40 to-primary/40 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-white/10 rounded w-full mb-1"></div>
                  <div className="h-2 bg-white/5 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg border border-primary/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-white/20 rounded w-full mb-1"></div>
                  <div className="h-2 bg-white/10 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    learning: {
      name: 'Level up your academic portfolio',
      description: 'Track courses, projects, and academic achievements. Record professors, input PDF notes, and create personalized courses that adapt to your learning style.',
      path: '/features',
      tagline: 'Build your academic profile, your way.',
      bulletPoints: [
        'Record lectures and create personalized courses',
        'Track all your academic achievements in one place',
      ],
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="h-16 bg-white/5 rounded-lg flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/30 to-secondary/30"></div>
                <div className="flex flex-col gap-1">
                  <div className="h-3 bg-white/10 rounded w-24"></div>
                  <div className="h-2 bg-white/5 rounded w-32"></div>
                </div>
              </div>
            </div>
            <div className="h-16 bg-white/5 rounded-lg flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-primary/30 to-secondary/30"></div>
                <div className="flex flex-col gap-1">
                  <div className="h-3 bg-white/10 rounded w-24"></div>
                  <div className="h-2 bg-white/5 rounded w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const subFeaturesByCategory: Record<string, Feature[]> = {
    community: [
        {
          name: 'Discover Opportunities',
        description: 'Browse thousands of curated opportunities including internships, scholarships, research programs, competitions, and more from verified sources.',
          path: '/features/discover-opportunities',
        },
        {
          name: 'Personalized Recommendations',
        description: 'Get intelligent recommendations based on your profile, browsing history, and preferences. Our system learns what matters to you.',
          path: '/features/personalized-recommendations',
      },
      {
        name: 'Connect with Students',
        description: 'Build your network by connecting with like-minded students. Share experiences, collaborate on projects, and form teams for competitions.',
        path: '/features/connect-with-students',
      },
      {
        name: 'Internship Matching',
        description: 'Find internships that align with your career goals and academic interests through our comprehensive matching system.',
        path: '/features/internship-matching',
      },
      {
        name: 'Track Achievements',
        description: 'Build a verified profile that showcases your real impact. Networkly AI helps create a personalized roadmap to get into T20s and other top colleges.',
        path: '/features/track-achievements',
      },
      {
        name: 'Career Growth',
        description: 'Prep for internships and future careers with curated pathways. Get guidance on skill development, career exploration, and building the experience needed for your dream opportunities.',
        path: '/features/career-growth',
      },
      {
        name: 'Student Messaging',
        description: 'Connect and communicate with students directly through the platform. Share experiences and build meaningful relationships.',
        path: '/features/connect-with-students',
      },
      {
        name: 'Team Formation',
        description: 'Find teammates for competitions, projects, and group activities. Build teams with students who complement your skills.',
        path: '/features',
      },
    ],
    applications: [
        {
          name: 'Smart Deadline Tracker',
        description: 'Never miss an important deadline with automated reminders and a centralized calendar. Get notifications before deadlines approach.',
          path: '/features/smart-deadline-tracker',
        },
        {
          name: 'Real-Time Notifications',
        description: 'Stay updated on saved opportunities, new matches, deadline reminders, and important updates. Get instant alerts when something requires your attention.',
          path: '/features/real-time-notifications',
      },
      {
        name: 'Application Tracking',
        description: 'Track all your applications in one place with status updates, notes, and follow-up reminders to stay organized.',
        path: '/features',
      },
      {
        name: 'Document Management',
        description: 'Store and reuse documents like resumes, cover letters, and transcripts across multiple applications seamlessly.',
        path: '/features',
      },
      {
        name: 'Priority Management',
        description: 'Mark deadlines and opportunities by priority to focus on what matters most and manage your time effectively.',
        path: '/features',
      },
    ],
    research: [
      {
        name: 'College Visibility & Admissions',
        description: 'Colleges see you before you even apply. Your verified profile is searchable by admissions officers, with your achievements and impact showing up when they search for you.',
        path: '/features',
      },
      {
        name: 'Lab Positions',
        description: 'Find undergraduate research positions in university labs. Gain hands-on experience with cutting-edge science and technology.',
        path: '/features/research-opportunities',
      },
      {
        name: 'Summer Research Programs',
        description: 'Discover intensive summer research programs at prestigious universities nationwide. Connect with faculty and fellow researchers.',
        path: '/features',
      },
      {
        name: 'Mentor Connections',
        description: 'Connect with professors and graduate students who can guide your research journey and help you find the right opportunities.',
        path: '/features',
      },
      {
        name: 'Independent Projects',
        description: 'Find support and resources for conducting your own independent research. Get guidance on methodology and publication.',
        path: '/features',
      },
      {
        name: 'Research Search by Major',
        description: 'Search for research opportunities by your major or project name to find relevant professors and programs that match your interests.',
        path: '/features/research-opportunities',
      },
    ],
    competitive: [
      {
        name: 'DECA Resources',
        description: 'Access flashcards, practice tests, and roleplay scenarios for DECA competitions. Get mentorship from national winners.',
        path: '/features',
      },
      {
        name: 'FBLA Preparation',
        description: 'Excel in FBLA with comprehensive study materials, practice competitions, and guidance from successful FBLA members.',
        path: '/features',
      },
      {
        name: 'HOSA Connections',
        description: 'Connect with healthcare professionals for real-time experience. Get mentorship and insights from industry experts.',
        path: '/features',
      },
      {
        name: 'TSA Support',
        description: 'Access resources and connect with TSA members. Get tips on competitions and project presentations.',
        path: '/features',
      },
      {
        name: 'Competition Tracking',
        description: 'Track your progress across multiple competitive organizations. See your achievements and areas for improvement.',
        path: '/features',
      },
      {
        name: 'Mentorship Network',
        description: 'Get mentorship from national winners and top performers. Learn strategies and best practices from those who have succeeded.',
        path: '/features',
      },
    ],
    learning: [
      {
        name: 'Course Tracking',
        description: 'Track your courses, assignments, and academic progress all in one place. Stay organized and on top of your studies.',
        path: '/features',
      },
      {
        name: 'Lecture Recording',
        description: 'Record your professors and create personalized study materials. Review lectures at your own pace.',
        path: '/features',
      },
      {
        name: 'PDF Notes Integration',
        description: 'Input PDF notes and documents to create comprehensive study materials. Organize everything in one place.',
        path: '/features',
      },
      {
        name: 'Personalized Courses',
        description: 'Create personalized courses that adapt to your learning style. Get customized learning paths based on your preferences.',
        path: '/features',
      },
      {
        name: 'Academic Portfolio',
        description: 'Build a comprehensive academic portfolio showcasing your coursework, projects, and achievements.',
        path: '/features',
      },
      {
        name: 'Learning Analytics',
        description: 'Track your learning progress and identify areas for improvement. Get insights into your study habits and performance.',
        path: '/features',
      },
    ],
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-dark-navy text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-white/20">
            <Sparkles className="w-5 h-5 text-bright-teal" />
            <span className="text-white font-inter font-medium">All Features</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-1 text-white">
            Your network. Your tools.
          </h1>
          <div className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center -mt-1">
            <span className="text-white mr-3 md:mr-4">Your</span>
            <Typewriter
              text={[
                'future.',
                'opportunities.',
                'next step.',
                'momentum.',
                'edge.',
              ]}
              speed={70}
              waitTime={2000}
              deleteSpeed={40}
              loop={true}
              className="text-white"
              cursorChar="|"
              cursorClassName="ml-1 text-white"
            />
          </div>
        </motion.div>
            </div>

      {/* Category Navigation - Sticky (Full Width) */}
      <div className="sticky top-16 z-40 mb-12 bg-dark-navy/98 backdrop-blur-md border-t border-white/20 border-b border-white/10 shadow-lg w-full py-4 mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TubelightNavBar
            items={categories.map((category, index) => ({
              name: category.title,
              url: `#${category.id}`,
            }))}
            activeTab={categories[activeCategory]?.title}
            onItemClick={(name) => {
              const index = categories.findIndex(cat => cat.title === name)
              if (index !== -1) {
                scrollToCategory(index)
              }
            }}
            className="w-full"
          />
                          </div>
                        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Sections */}
        {categories.map((category, categoryIndex) => {
          const categoryId = category.id;
          const mainFeature = mainFeaturesByCategory[categoryId];
          const subFeatures = subFeaturesByCategory[categoryId] || [];

          return (
            <div
              key={categoryId}
              ref={(el) => {
                categoryRefs.current[categoryIndex] = el;
              }}
              className="min-h-screen flex flex-col justify-center py-16"
            >
              {/* Main Feature Card */}
                          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4 }}
                className="mb-12"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Visual Section */}
                    <div className="flex items-center justify-center order-2 lg:order-1">
                      {mainFeature.visual}
                              </div>

                    {/* Content Section */}
                    <div className="space-y-6 order-1 lg:order-2">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white">
                        {mainFeature.name}
                      </h2>
                      <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                        {mainFeature.description}
                      </p>
                      {mainFeature.tagline && (
                        <div className="pt-4 border-t border-white/10">
                          <p className="text-xl font-medium text-white mb-4">
                            {mainFeature.tagline}
                          </p>
                          {mainFeature.bulletPoints && (
                                <ul className="space-y-2">
                              {mainFeature.bulletPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/70">
                                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                          )}
                            </div>
                      )}
                      <Link
                        to={mainFeature.path}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-600 transition-colors font-medium"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sub-Features Grid */}
              {subFeatures.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {subFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                        {feature.name}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <Link
                        to={feature.path}
                        className="inline-flex items-center gap-1 text-primary hover:text-primary-600 transition-colors text-sm font-medium"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                  </motion.div>
              )}
            </div>
          );
        })}

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Explore all available opportunities and start building your future today.
          </p>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-white font-semibold shadow-[0_12px_24px_-12px_rgba(37,99,235,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(37,99,235,0.6)]"
          >
            Browse Opportunities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
