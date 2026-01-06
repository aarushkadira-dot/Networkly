import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { publicLinks, featureSections } from '../../config/navigation';

interface NavbarProps {
  onAuthClick: () => void;
}

export function Navbar({ onAuthClick }: NavbarProps) {
  const { user, signOut, isAdmin } = useAuth();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

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
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pointer-events-auto">
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] relative ${isScrolled
            ? 'bg-[#030617]/80 backdrop-blur-xl border-white/10 shadow-xl'
            : 'bg-transparent border-transparent'
            } py-3 px-6`}
        >
          {/* Logo Section */}
          <div className="flex items-center z-20">
            <Link
              to="/"
              className="group flex items-center gap-2.5 text-white font-heading text-xl font-bold tracking-tight transition-all"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-white/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/assets/logos/networklylogo.png"
                  alt="Networkly Logo"
                  className="relative h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
                Networkly
              </span>
            </Link>
          </div>

          {/* Navigation Links - Centered Absolutely with Grid for perfect symmetry */}
          <div className="hidden lg:grid grid-cols-3 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-[600px]">
            <div className="flex justify-center">
              <Link
                to="/about"
                className={`relative h-10 px-4 text-sm font-medium transition-all duration-300 rounded-xl flex items-center justify-center ${isActive('/about') ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
              >
                {isActive('/about') && (
                  <motion.div layoutId="nav-active" className="absolute inset-0 bg-white/10 rounded-xl" />
                )}
                <span className="relative z-10">About</span>
              </Link>
            </div>

            <div
              className="flex justify-center h-full items-center"
              ref={dropdownRef}
              onMouseEnter={() => setIsFeaturesOpen(true)}
              onMouseLeave={() => setIsFeaturesOpen(false)}
            >
              <div className="h-10 flex items-center relative">
                <Link
                  to="/all-features"
                  className={`relative h-10 flex items-center gap-1.5 px-4 text-sm font-medium transition-all duration-300 rounded-xl ${isFeaturesOpen ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                >
                  Features
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                </Link>

                <AnimatePresence>
                  {isFeaturesOpen && (
                    <div className="fixed inset-x-0 top-[72px] z-[100] flex justify-center pointer-events-none">
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="pointer-events-auto"
                      >
                        <div className="w-[850px] rounded-2xl border border-white/10 bg-[#0a0f1f] shadow-2xl">
                          <div className="flex">
                            {/* Left: Feature Grid */}
                            <div className="flex-1 p-6">
                              <div className="grid grid-cols-2 gap-x-8">
                                {featureSections.slice(0, 2).map((section) => (
                                  <div key={section.title}>
                                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 px-3">
                                      {section.title}
                                    </h3>
                                    <div className="space-y-1">
                                      {section.items.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                          <Link
                                            key={item.name}
                                            to={item.path}
                                            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                                          >
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-primary group-hover:bg-primary/10 transition-colors">
                                              <Icon className="h-4 w-4" />
                                            </div>
                                            <div className="pt-0.5">
                                              <p className="text-sm font-medium text-white">{item.name}</p>
                                              <p className="text-xs text-white/50 mt-0.5 line-clamp-1">{item.description}</p>
                                            </div>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right: Sidebar */}
                            <div className="w-[240px] bg-white/[0.02] border-l border-white/5 p-6 flex flex-col">
                              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
                                <div className="flex items-center gap-2 mb-2">
                                  <Sparkles className="h-4 w-4 text-primary" />
                                  <h4 className="text-sm font-semibold text-white">New Feature</h4>
                                </div>
                                <p className="text-xs text-white/60 leading-relaxed mb-3">
                                  Discover personalized research opportunities with our new AI engine.
                                </p>
                                <Link to="/features/ai-powered-matching" className="inline-flex items-center text-xs font-medium text-primary gap-1 hover:gap-2 transition-all">
                                  Try it now <ArrowRight className="h-3 w-3" />
                                </Link>
                              </div>

                              <div className="mb-5">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">
                                  Support & More
                                </h3>
                                <div className="space-y-1">
                                  {publicLinks.slice(2).map((link) => (
                                    <Link
                                      key={link.path}
                                      to={link.path}
                                      className="flex items-center gap-2 px-2 py-1.5 text-xs text-white/60 hover:text-white rounded-md hover:bg-white/5 transition-colors"
                                    >
                                      <span className="h-1 w-1 rounded-full bg-primary" />
                                      {link.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              <div className="mt-auto">
                                <Link
                                  to="/all-features"
                                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-white text-[#0a0f1f] px-4 py-2.5 text-xs font-semibold hover:bg-white/90 transition-colors"
                                >
                                  Explore all features
                                  <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                to="/features"
                className={`relative h-10 px-4 text-sm font-medium transition-all duration-300 rounded-xl flex items-center justify-center ${isActive('/features') && !location.pathname.includes('/features/') ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
              >
                {(isActive('/features') && !location.pathname.includes('/features/')) && (
                  <motion.div layoutId="nav-active" className="absolute inset-0 bg-white/10 rounded-xl" />
                )}
                <span className="relative z-10">Opportunities</span>
              </Link>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-3 z-20">
            {user ? (
              <div className="flex items-center gap-1.5">
                {isAdmin && (
                  <Link to="/admin" className="hidden sm:inline-block">
                    <button className="px-4 py-2 text-xs font-bold text-white/70 hover:text-white transition-colors">
                      Admin
                    </button>
                  </Link>
                )}
                <Link to="/profile">
                  <div className="h-10 w-10 rounded-full bg-primary p-0.5 cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                    <div className="h-full w-full rounded-full bg-[#080b1a] flex items-center justify-center overflow-hidden">
                      <span className="text-[10px] font-bold text-white">
                        {user.email?.[0].toUpperCase()}
                      </span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={signOut}
                  className="hidden md:inline-flex px-4 py-2 text-xs font-bold text-white/50 hover:text-white/80 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <button
                  onClick={onAuthClick}
                  className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => window.location.href = '/students'}
                  className="relative group px-6 py-2.5 rounded-xl overflow-hidden shadow-2xl transition-all"
                >
                  <div className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 text-sm font-bold text-white">
                    Join Networkly
                  </span>
                </button>
              </div>
            )}

            {/* Mobile Menu Toggle could be added here */}
          </div>
        </div>
      </div>
    </nav>
  );
}
