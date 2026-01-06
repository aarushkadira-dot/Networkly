import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BellRing,
  BookOpen,
  CalendarRange,
  Compass,
  Shield,
  Sparkles,
  Trophy,
  Users,
  Zap,
  ChevronDown,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  onAuthClick: () => void;
}

export function Navbar({ onAuthClick }: NavbarProps) {
  const { user, signOut, isAdmin } = useAuth();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const publicLinks = [
    { name: 'About', path: '/about' },
    { name: 'Opportunities', path: '/features' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const featureSections = [
    {
      title: 'Matching & Discovery',
      items: [
        {
          name: 'AI-Powered Matching',
          description: 'Personalized matches across clubs, internships, and research.',
          path: '/features/ai-powered-matching',
          icon: Sparkles,
        },
        {
          name: 'Discover Opportunities',
          description: 'Search competitions, scholarships, and programs.',
          path: '/features/discover-opportunities',
          icon: Compass,
        },
        {
          name: 'Personalized Recommendations',
          description: 'Suggestions tuned to your interests and goals.',
          path: '/features/personalized-recommendations',
          icon: Users,
        },
      ],
    },
    {
      title: 'Applications & Tracking',
      items: [
        {
          name: 'Instant Applications',
          description: 'Reuse your profile to apply faster with fewer clicks.',
          path: '/features/instant-applications',
          icon: Zap,
        },
        {
          name: 'Smart Deadline Tracker',
          description: 'Get reminders before key due dates.',
          path: '/features/smart-deadline-tracker',
          icon: CalendarRange,
        },
        {
          name: 'Real-Time Notifications',
          description: 'Stay updated on saved opportunities.',
          path: '/features/real-time-notifications',
          icon: BellRing,
        },
      ],
    },
    {
      title: 'Community & Growth',
      items: [
        {
          name: 'Connect with Students',
          description: 'Team up with peers for projects and competitions.',
          path: '/features/connect-with-students',
          icon: Users,
        },
        {
          name: 'Track Achievements',
          description: 'Showcase milestones, wins, and certifications.',
          path: '/features/track-achievements',
          icon: Trophy,
        },
        {
          name: 'Career Growth',
          description: 'Prep for internships with curated pathways.',
          path: '/features/career-growth',
          icon: Shield,
        },
      ],
    },
    {
      title: 'Explore',
      items: [
        {
          name: 'Opportunities Hub',
          description: 'Browse every opportunity in one view.',
          path: '/features',
          icon: Compass,
        },
        {
          name: 'About Networkly',
          description: 'Learn about our mission and story.',
          path: '/about',
          icon: BookOpen,
        },
        {
          name: 'Meet the Team',
          description: 'Discover the people behind Networkly.',
          path: '/team',
          icon: Users,
        },
      ],
    },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFeaturesOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFeaturesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    setIsFeaturesOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-navy border-b border-white/10 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)] transition-colors duration-300 font-inter">
      <div className="max-w-7xl mx-auto flex h-16 items-center gap-6 px-4 sm:px-6 relative">
        {/* Left: Brand */}
        <div className="flex items-center z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white font-heading text-lg md:text-xl font-semibold tracking-tight transition-colors hover:text-bright-teal"
          >
            <img 
              src="/assets/logos/networklylogo.png" 
              alt="Networkly Logo" 
              className="h-8 w-auto object-contain"
            />
            Networkly
          </Link>
        </div>

        {/* Center: Links - Absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-sm font-medium text-white">
          {/* About first */}
          <Link
            to="/about"
            className={`rounded-xl px-4 py-2 transition-all duration-200 ${
              isActive('/about')
                ? 'bg-white/15 text-white shadow-inner shadow-white/20'
                : 'hover:bg-white/10 hover:text-white/90'
            }`}
          >
            About
          </Link>

          {/* Features dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsFeaturesOpen(true)}
          >
            <button
              onClick={() => setIsFeaturesOpen((prev) => !prev)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 transition-all duration-200 ${
                isFeaturesOpen
                  ? 'bg-white/15 text-white shadow-inner shadow-white/20'
                  : 'hover:bg-white/10 hover:text-white/90'
              }`}
              aria-expanded={isFeaturesOpen}
              aria-haspopup="true"
            >
              Features
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isFeaturesOpen && (
              <div
                className="absolute left-1/2 top-full z-50 mt-4 w-[min(90vw,1040px)] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1026]/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[85vh]"
              >
                <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-auto flex-1 min-h-0">
                  {featureSections.map((section) => (
                    <div key={section.title} className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                        {section.title}
                      </p>
                      <div className="space-y-1.5">
                        {section.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="group flex gap-2.5 rounded-lg p-2.5 transition-colors duration-150 hover:bg-white/5"
                            >
                              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-bright-teal group-hover:bg-white/10 shrink-0">
                                <Icon className="h-4 w-4" />
                              </div>
                              <div className="space-y-0.5 min-w-0">
                                <p className="text-sm font-semibold text-white group-hover:text-white leading-tight">
                                  {item.name}
                                </p>
                                <p className="text-xs text-white/70 leading-snug">{item.description}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/5 px-5 py-3 shrink-0">
                  <div className="text-sm text-white/70">
                    Explore everything Networkly offers to students and teams.
                  </div>
                      <Link
                        to="/all-features"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(37,99,235,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(37,99,235,0.6)]"
                      >
                        View all features
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                </div>
              </div>
            )}
          </div>

          {/* Remaining links: Opportunities, Contact, Blog */}
          {publicLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-xl px-4 py-2 transition-all duration-200 ${
                isActive(link.path)
                  ? 'bg-white/15 text-white shadow-inner shadow-white/20'
                  : 'hover:bg-white/10 hover:text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center justify-end gap-3 ml-auto z-10 pr-8 md:pr-0 md:-mr-6">
            {user ? (
              <>
                {isAdmin && (
                  <Link to="/admin">
                  <button className="rounded-xl px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10">
                    Admin
                  </button>
                </Link>
              )}
              <Link to="/profile">
                <button className="rounded-xl px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10">
                  Profile
                </button>
                </Link>
                <button
                onClick={signOut}
                className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/15"
                >
                  Sign Out
                </button>
              </>
            ) : (
            <>
              <button 
                onClick={() => window.location.href = '/students'}
                className="rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_-12px_rgba(37,99,235,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-12px_rgba(37,99,235,0.6)] hover:from-primary-600 hover:to-secondary-600"
              >
                Connect with Students
              </button>
              <button
                onClick={onAuthClick}
                className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/30"
              >
                Sign In
              </button>
            </>
            )}
          </div>
        </div>
    </nav>
  );
}