import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';
import SectionWithMockup from '../components/ui/section-with-mockup';

interface HomeProps {
  onAuthClick: () => void;
}

// Animated header text component
function AnimatedHeaderText() {
  return (
    <span className="inline-block">
      One Platform. Every Student Opportunity.
    </span>
  );
}

const heroMetrics = [
  { label: 'Active Matches', value: '12', detail: 'this week' },
  { label: 'Deadlines', value: '3', detail: 'approaching' },
];

const heroTasks = [
  {
    title: 'Complete your profile',
    detail: 'Get better matches',
    accent: 'bg-primary',
  },
  {
    title: 'Save opportunities',
    detail: 'Build your list',
    accent: 'bg-secondary',
  },
];

const marqueeItems = [
  { label: 'NASA OSTEM Internship', detail: 'Deadline: Feb 27' },
  { label: 'Gates Scholarship', detail: 'Deadline: Mar 1' },
  { label: 'MIT URTC', detail: 'Deadline: Apr 15' },
  { label: 'Google CSSI', detail: 'Deadline: May 1' },
  { label: 'NSLI-Y Program', detail: 'Deadline: May 5' },
  { label: 'QuestBridge', detail: 'Deadline: Sep 26' },
];

export default function Home({ onAuthClick }: HomeProps) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-dark-navy overflow-hidden">
      <div className="relative pb-8 md:pb-12">
        <ContainerScroll
          titleComponent={
            <motion.div
              className="space-y-6 px-4 md:px-0 text-center flex flex-col items-center relative z-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {},
              }}
            >
              <motion.button
                onClick={onAuthClick}
                className="relative z-30 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white font-sans justify-center hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
              >
                <Sparkles className="h-4 w-4 text-secondary relative z-10" />
                <span className="relative z-10">Built by students, for students</span>
              </motion.button>
              <motion.div
                className="space-y-3 text-center relative z-20"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
              >
                <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl relative z-20">
                  <AnimatedHeaderText />
                </h1>
              </motion.div>
              <motion.div
                className="relative z-20 max-w-3xl space-y-4 text-center font-sans text-white/85 md:text-lg"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
              >
                <p className="text-white/80">
                  Match with internships, scholarships, competitions, and volunteering in seconds — then glide through
                  reminders, mentor feedback, and submissions without losing momentum.
                </p>
              </motion.div>
              <motion.div
                className="relative z-20 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.65 }}
              >
                {user ? (
                  <Link to="/features">
                    <InteractiveHoverButton 
                      text="Explore Matches" 
                      className="bg-gradient-to-r from-primary to-secondary text-white border-none px-8 py-3 hover:from-primary-600 hover:to-secondary-600 [&>span:nth-child(4)]:group-hover:text-white" 
                    />
                  </Link>
                ) : (
                  <InteractiveHoverButton
                    text="Join Networkly"
                    onClick={onAuthClick}
                    className="bg-gradient-to-r from-primary to-secondary text-white border-none px-8 py-3 hover:from-primary-600 hover:to-secondary-600 [&>span:nth-child(4)]:group-hover:text-white"
                  />
                )}
                <Link to="/features">
                  <InteractiveHoverButton
                    text="Browse Opportunities"
                    className="!bg-white/10 !from-transparent !to-transparent border-2 border-white/40 px-8 py-3 text-white/80 hover:border-white hover:text-white hover:!from-transparent hover:!to-transparent [&>span:nth-child(4)]:group-hover:text-white"
                  />
                </Link>
              </motion.div>
            </motion.div>
          }
        >
          <motion.div 
            className="relative h-full w-full text-white"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          >
            <div className="relative z-10 grid h-full w-full gap-4 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
                <img
                  src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg"
                  alt="NASA OSTEM logo"
                  className="absolute inset-0 h-full w-full object-contain opacity-35 mix-blend-screen"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/80 via-transparent to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-between text-left">
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60">Opportunity Spotlight</span>
                    <h3 className="mt-3 text-2xl font-semibold text-white">NASA OSTEM Internship</h3>
                    <p className="mt-3 text-sm text-white/75">
                      Matched to your aerospace interests, engineering projects, and volunteer record. Get feedback from
                      NASA mentors before you submit.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
                    <div className="rounded-xl bg-white/15 p-3">
                      <p className="text-xs text-white/60">Status</p>
                      <p className="mt-1 font-semibold text-white">Paid</p>
                    </div>
                    <div className="rounded-xl bg-white/15 p-3">
                      <p className="text-xs text-white/60">Deadline</p>
                      <p className="mt-1 font-semibold text-white">Feb 27, 2026</p>
                    </div>
                    <div className="rounded-xl bg-white/15 p-3">
                      <p className="text-xs text-white/60">Mentors</p>
                      <p className="mt-1 font-semibold text-white">3 matched</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['meeting', 'work', 'important'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/15 text-xs font-semibold uppercase tracking-wide text-white/80 border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <div className="flex -space-x-3">
                      <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&auto=format&fit=crop"
                        alt="Student 1"
                        className="h-10 w-10 rounded-full border border-white/20 object-cover"
                        loading="lazy"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1521566652839-697aa4737615?q=80&w=200&auto=format&fit=crop"
                        alt="Student 2"
                        className="h-10 w-10 rounded-full border border-white/20 object-cover"
                        loading="lazy"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop"
                        alt="Student 3"
                        className="h-10 w-10 rounded-full border border-white/20 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
                      Personalized match
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Live snapshot</p>
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {heroMetrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-2xl font-bold text-white">{m.value}</p>
                        <p className="text-xs text-white/70">{m.label}</p>
                        <p className="text-xs text-white/50">{m.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Next steps</p>
                  <div className="mt-4 space-y-4">
                    {heroTasks.map((t) => (
                      <div key={t.title} className="flex items-start gap-3">
                        <span className={`mt-2 h-2.5 w-2.5 rounded-full ${t.accent}`} />
                        <div>
                          <p className="text-sm font-medium text-white">{t.title}</p>
                          <p className="text-xs text-white/60">{t.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-secondary/10 border border-secondary/20 p-5 text-white">
                  <p className="text-sm font-semibold">Mentor check-in scheduled</p>
                  <p className="mt-1 text-xs text-white/70">
                    Sam from Duke University will review your essay tonight. Expect feedback by 8 PM ET.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </ContainerScroll>
      </div>

      <section className="relative pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Connect with Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/20 h-full">
                {/* Icon Container */}
                <div className="relative mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/logos/1st.png" 
                    alt="Connect with Opportunities" 
                    className="w-48 h-48 object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">Connect with Opportunities</h3>
                <p className="text-white/70 mb-8 leading-relaxed flex-grow">
                  Discover jobs, internships, competitions, and events that match your goals.
                </p>

                {/* CTA Button */}
                <Link to="/features">
                  <InteractiveHoverButton
                    text="Explore Opportunities"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Join as a Mentor or Organization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/20 h-full">
                {/* Icon Container */}
                <div className="relative mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/logos/2nd.png" 
                    alt="Join as a Mentor or Organization" 
                    className="w-48 h-48 object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">Join as a Mentor or Organization</h3>
                <p className="text-white/70 mb-8 leading-relaxed flex-grow">
                  Help students find the right opportunities while sharing your expertise.
                </p>

                {/* CTA Button */}
                <InteractiveHoverButton
                  text="Sign Up to Mentor"
                  onClick={onAuthClick}
                />
              </div>
            </motion.div>

            {/* Card 3: Get the Full Networkly Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/20 h-full">
                {/* Icon Container */}
                <div className="relative mb-6 flex items-center justify-center">
                  <img 
                    src="/assets/logos/networklylogo.png" 
                    alt="Get the Full Networkly Experience" 
                    className="w-40 h-40 object-contain"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">Get the Full Networkly Experience</h3>
                <p className="text-white/70 mb-8 leading-relaxed flex-grow">
                  Experience a smarter, all-in-one networking platform designed for students.
                </p>

                {/* CTA Button */}
                <InteractiveHoverButton
                  text="Download the App"
                  onClick={() => window.open('#', '_blank')}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="relative overflow-hidden border-y border-white/10 bg-dark-navy py-16">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="flex flex-col gap-4 text-center sm:text-left md:flex-row md:items-center md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                  Opportunity Radar
                </div>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">What&apos;s buzzing across Networkly this week</h2>
                <p className="mt-2 max-w-2xl text-white/70">
                  Programs, events, and research cohorts that students are bookmarking in real time. Tap one to add it to your watchlist.
                </p>
              </div>
              <Link to="/features">
                <InteractiveHoverButton 
                  text="Open Opportunity Hub" 
                  className="border-white/40 bg-white/10 px-8 py-3 text-white/80 hover:border-white hover:text-white [&>span:nth-child(4)]:group-hover:text-white" 
                />
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-dark-navy to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-dark-navy to-transparent" />
            <motion.div
              className="flex min-w-max gap-6 py-4"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
              style={{ willChange: 'transform' }}
            >
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  key={`${item.label}-${i}`}
                  className="flex min-w-[280px] flex-col gap-1 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-left shadow-lg"
                >
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                  <span className="text-xs text-white/60">{item.detail}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <SectionWithMockup
        title={
          <>
            Your opportunities,
            <br />
            personalized for you.
          </>
        }
        description={
          <>
            Get AI-powered recommendations delivered directly to
            <br />
            your dashboard, matching your interests, goals, and
            <br />
            achievements with the perfect opportunities waiting
            <br />
            for you.
          </>
        }
        primaryImageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
        secondaryImageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
      />

      <SectionWithMockup
        title={
          <>
            Connect with mentors,
            <br />
            grow your network.
          </>
        }
        description={
          <>
            Build meaningful connections with industry
            <br />
            professionals and experienced mentors. Get
            <br />
            personalized feedback, guidance, and insights
            <br />
            to accelerate your career growth.
          </>
        }
        primaryImageSrc="https://images.unsplash.com/photo-1517245386807-bb43f82c33d3?q=80&w=1000&auto=format&fit=crop"
        secondaryImageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
        reverseLayout={true}
      />

      <SectionWithMockup
        title={
          <>
            Track deadlines,
            <br />
            never miss an opportunity.
          </>
        }
        description={
          <>
            Stay on top of application deadlines with smart
            <br />
            reminders and notifications. Our deadline tracker
            <br />
            ensures you never miss a scholarship, internship,
            <br />
            or competition submission date.
          </>
        }
        primaryImageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
        secondaryImageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
      />

      {/* GitHub-style CTA Section */}
      <section className="relative bg-dark-navy py-24 md:py-32 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-dark-navy to-dark-navy/95"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
          {/* Networkly logo */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              type: "spring",
              stiffness: 150
            }}
            className="flex justify-center items-center mb-12"
          >
            <div className="relative">
              <motion.div 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center shadow-2xl shadow-primary/20 backdrop-blur-sm border border-white/10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.img 
                  src="/assets/logos/networklylogo.png" 
                  alt="Networkly" 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </motion.div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 blur-2xl -z-10 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Hundreds of students and organizations are on Networkly
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We're done with gatekeeping opportunities. Networkly helps students find what actually matters, without needing connections.
          </motion.p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center max-w-2xl mx-auto"
          >
            <div className="flex flex-1 w-full sm:w-auto gap-2 items-center bg-dark-navy border border-white/20 rounded-full px-2 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-white placeholder-white/50 rounded-full"
              />
              <button
                onClick={onAuthClick}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white/40 px-6 py-2 text-sm font-semibold text-white/80 shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:border-white hover:text-white"
              >
                <span className="absolute inset-0 z-10 rounded-full bg-gradient-to-r from-primary-600/50 via-primary-400/55 to-secondary/50 opacity-100 transition-all duration-300 group-hover:from-primary-600/70 group-hover:via-primary-400/75 group-hover:to-secondary/70" />
                <span className="relative z-30 flex items-center justify-center text-white/80 group-hover:text-white transition-colors duration-300">
                  Sign up for Networkly
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
