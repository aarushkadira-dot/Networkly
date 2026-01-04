import { AnimatedHero } from '@/components/ui/animated-hero';
import { StripeScrollAnimation } from '@/components/ui/stripe-scroll-animation';
import { OpportunityTypesSection } from '@/components/ui/opportunity-types-section';
import { StatsGrowthSection } from '@/components/ui/stats-growth-section';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { Sparkles, Calendar, Zap, Users, GraduationCap, School } from 'lucide-react';

interface AboutProps {
  onAuthClick: () => void;
}

export default function About({ onAuthClick }: AboutProps) {
  const features = [
    {
      title: "AI-Powered Matching",
      description: "Get personalized recommendations that match your interests, grade level, and goals. Access opportunities most students never find—scholarships, research programs, and competitions all surfaced just for you.",
      badge: "Smart Discovery",
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
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-white/5 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30"></div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Never Miss a Deadline",
      description: "Automatic reminders and deadline tracking keep you ahead. Focus on applications, not calendar management.",
      badge: "Time Management",
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
            <Calendar className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="text-white/80 text-sm">Application Due</span>
              <span className="text-primary font-semibold">3 days</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <span className="text-white/80 text-sm">Scholarship</span>
              <span className="text-primary font-semibold">1 week</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Instant Applications",
      description: "Apply to multiple opportunities in seconds with your saved profile. No more repetitive forms.",
      badge: "Save Time",
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
            <Zap className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">One-Click Apply</span>
            </div>
            <div className="h-12 bg-white/5 rounded-lg"></div>
            <div className="h-12 bg-white/5 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Research Opportunities",
      description: "Connect with research programs, labs, and mentors. Search by your project name or major to find relevant research professors. Find undergraduate research positions, summer programs, and academic collaborations that align with your interests.",
      badge: "Academic Excellence",
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
    {
      title: "College Visibility & Admissions",
      description: "Colleges see you before you even apply. Your verified profile is searchable by admissions officers, with your achievements and impact showing up when they search for you.",
      badge: "Get Noticed",
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
            <School className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30"></div>
              <div className="flex-1">
                <div className="h-3 bg-white/10 rounded w-24 mb-2"></div>
                <div className="h-2 bg-white/5 rounded w-32"></div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40"></div>
              <div className="flex-1">
                <div className="h-3 bg-white/20 rounded w-28 mb-2"></div>
                <div className="h-2 bg-white/10 rounded w-36"></div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30"></div>
              <div className="flex-1">
                <div className="h-3 bg-white/10 rounded w-24 mb-2"></div>
                <div className="h-2 bg-white/5 rounded w-32"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Connect with Peers",
      description: "Find students with similar interests. Build connections, share experiences, and grow together.",
      badge: "Community",
      visual: (
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 mx-auto">
            <Users className="w-10 h-10 text-primary" />
          </div>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-white/20"></div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const schoolLogos = [
    { name: "Enloe Magnet High School", id: 1, logoPath: "/assets/logos/enloe.png" },
    { name: "North Carolina School of Science and Mathematics", id: 2, logoPath: "/assets/logos/ncssmlogo.png" },
    { name: "Thomas Jefferson High School for Science and Mathematics", id: 3, logoPath: "/assets/logos/Tjlogo.png", applyWhiteFilter: true },
    { name: "Phillips Exeter Academy", id: 4, logoPath: "/assets/logos/philipsexter.png", customFilter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(7151%) hue-rotate(349deg) brightness(50%) contrast(95%)' },
    { name: "BASIS Schools", id: 5, logoPath: "/assets/logos/basislogo.png" },
    { name: "Nikola Tesla STEM High School", id: 6, logoPath: "/assets/logos/nikolatesla.png" },
    { name: "School for Talented and Gifted", id: 7, logoPath: "/assets/logos/talentedandgifted.png" },
    { name: "Whitney High School", id: 8, logoPath: "/assets/logos/whitney.png" },
    { name: "Oxford Academy", id: 9, logoPath: "/assets/logos/oxfordacademy.png" },
  ];

  return (
    <div className="bg-dark-navy text-white">
      <AnimatedHero />
      <StripeScrollAnimation features={features} />
      <OpportunityTypesSection />
      <StatsGrowthSection />
      <section className="py-24 bg-dark-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 py-12">
            <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
              <div className="text-center">
                <p className="text-lg md:text-xl mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                  The best are already here
                </p>
                <button
                  onClick={onAuthClick}
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 cursor-pointer outline-none border-none bg-transparent p-0 leading-tight relative inline-block pb-1"
                >
                  Join Networkly
                  <span className="absolute bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
                </button>
              </div>
              <LogoCarousel columnCount={3} logos={schoolLogos} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
