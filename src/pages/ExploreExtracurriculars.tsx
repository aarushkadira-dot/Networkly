import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Sparkles, TrendingUp, Star, Brain, Mail, Copy } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Card } from '../components/ui/card';
import { CTAButton } from '../components/sections/EnhancedCTA';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts';

type Program = {
  id: string;
  name: string;
  description: string;
  interests: string[];
  competitiveness: 'Low' | 'Medium' | 'High';
  popularity: number; // 1-100
  badge?: string;
};

const MOCK_PROGRAMS: Program[] = [
  {
    id: 'nasa-ostem',
    name: 'NASA OSTEM Research Internship',
    description: 'Paid aerospace research internship collaborating with NASA engineers and mentors on cutting-edge missions.',
    interests: ['Aerospace', 'Engineering', 'STEM'],
    competitiveness: 'High',
    popularity: 95,
    badge: 'Student Favorite',
  },
  {
    id: 'mit-primes',
    name: 'MIT PRIMES Research',
    description: 'Selective math and computer science research program working remotely with MIT faculty.',
    interests: ['Mathematics', 'Computer Science', 'Research'],
    competitiveness: 'High',
    popularity: 90,
    badge: 'Competitive',
  },
  {
    id: 'duke-neuroscience',
    name: 'Duke Neuroscience Scholars',
    description: 'Summer research and mentorship for students exploring neuroscience and cognitive science careers.',
    interests: ['Neuroscience', 'Healthcare', 'Biology'],
    competitiveness: 'Medium',
    popularity: 82,
  },
  {
    id: 'garfield-ai-lab',
    name: 'Garfield AI Lab Apprentice',
    description: 'Student-led AI research collective focusing on applied machine learning and community-driven projects.',
    interests: ['AI', 'Machine Learning', 'Community'],
    competitiveness: 'Medium',
    popularity: 76,
    badge: 'Student-led',
  },
  {
    id: 'stanford-biosciences',
    name: 'Stanford Bio-X High School Internship',
    description: 'Immersive lab experience in biomedical engineering with Stanford faculty mentors.',
    interests: ['Biomedical', 'Engineering', 'Healthcare'],
    competitiveness: 'High',
    popularity: 88,
  },
  {
    id: 'community-bio',
    name: 'CommunityBiolab Research Pod',
    description: 'Local lab program combining wet lab skills with entrepreneurial biotech challenges.',
    interests: ['Biology', 'Entrepreneurship'],
    competitiveness: 'Low',
    popularity: 70,
    badge: 'Great for starters',
  },
  {
    id: 'climate-innovation',
    name: 'Climate Innovation Challenge',
    description: 'Team-based climate science research culminating in a national showcase with university partners.',
    interests: ['Climate', 'Environmental Science', 'Policy'],
    competitiveness: 'Medium',
    popularity: 79,
  },
  {
    id: 'quantum-leap',
    name: 'Quantum Leap Scholars',
    description: 'Remote research mentorship exploring quantum computing applications and theory.',
    interests: ['Physics', 'Computer Science'],
    competitiveness: 'High',
    popularity: 85,
  },
];

const COMPETITIVENESS_ORDER = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const trendingFieldsData = [
  { field: 'AI Research', students: 240 },
  { field: 'Climate Science', students: 190 },
  { field: 'Biomedical', students: 170 },
  { field: 'Neuroscience', students: 160 },
  { field: 'Entrepreneurship', students: 140 },
];

const competitiveClubsData = [
  { club: 'MIT PRIMES', competitiveness: 94 },
  { club: 'NASA OSTEM', competitiveness: 92 },
  { club: 'Stanford Bio-X', competitiveness: 88 },
  { club: 'Quantum Leap', competitiveness: 85 },
  { club: 'Duke Neuroscience', competitiveness: 82 },
];

const tonePresets = [
  { label: 'Formal', value: 'formal' },
  { label: 'Enthusiastic', value: 'enthusiastic' },
  { label: 'Concise', value: 'concise' },
];

function generateEmailTemplate({
  professor,
  program,
  tone,
}: {
  professor: string;
  program: string;
  tone: string;
}) {
  if (!professor || !program) {
    return 'Please provide a professor name and program or research area to generate an email.';
  }

  const toneIntro: Record<string, string> = {
    formal: `My name is [Your Name], and I am a high school student deeply interested in ${program}.`,
    enthusiastic: `I’m thrilled to reach out because ${program} aligns perfectly with what I love to explore.`,
    concise: `I’m [Your Name], a student excited about ${program}.`,
  };

  const toneClosing: Record<string, string> = {
    formal: 'Thank you for considering my note. I would be grateful for any guidance you can offer.',
    enthusiastic: 'Thank you so much for reading, I'd love to learn more about your work!',
    concise: 'Thank you for your time. I’d appreciate any advice you can share.',
  };

  return `Subject: Inquiry About ${program} Opportunities\n
Dear Professor ${professor},

${toneIntro[tone]}

I have been following your work and admire how you ${'describe recent work or publication'}. I am eager to contribute, learn from your team, and grow through hands-on experience in ${program}.

Would you be open to a brief conversation or sharing steps I can take to get involved?

${toneClosing[tone]}

Sincerely,
[Your Name]
[School / Graduation Year]
[Contact Information]`;
}

export default function ExploreExtracurriculars() {
  const { user } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<'popularity' | 'competitiveness'>('popularity');
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailForm, setEmailForm] = useState({ professor: '', program: '', tone: tonePresets[0].value });
  const [emailOutput, setEmailOutput] = useState('');

  const allInterests = useMemo(() => {
    const interestSet = new Set<string>();
    MOCK_PROGRAMS.forEach((program) => {
      program.interests.forEach((interest) => interestSet.add(interest));
    });
    return Array.from(interestSet).sort();
  }, []);

  const filteredPrograms = useMemo(() => {
    let programs = MOCK_PROGRAMS.filter((program) => {
      const matchesSearch =
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesInterests =
        selectedInterests.length === 0 ||
        selectedInterests.some((interest) => program.interests.includes(interest));

      return matchesSearch && matchesInterests;
    });

    programs = programs.sort((a, b) => {
      if (sortOption === 'popularity') {
        return b.popularity - a.popularity;
      }

      return COMPETITIVENESS_ORDER[b.competitiveness] - COMPETITIVENESS_ORDER[a.competitiveness];
    });

    return programs;
  }, [searchTerm, selectedInterests, sortOption]);

  const recommendedPrograms = useMemo(() => {
    if (!user) {
      return [];
    }

    const userInterestSamples = selectedInterests.length > 0 ? selectedInterests : ['AI', 'Neuroscience'];

    return filteredPrograms
      .filter((program) => program.interests.some((interest) => userInterestSamples.includes(interest)))
      .slice(0, 3);
  }, [filteredPrograms, selectedInterests, user]);

  const handleInterestToggle = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest],
    );
  };

  const handleGenerateEmail = () => {
    const body = generateEmailTemplate(emailForm);
    setEmailOutput(body);
  };

  const handleCopyEmail = () => {
    if (emailOutput) {
      navigator.clipboard.writeText(emailOutput).catch(() => {});
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-navy text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-electric-blue/30 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-bright-teal" />
            <span>Discover research built around you</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Explore Research & Extracurricular Labs
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80">
            Search, compare, and track the programs that match your interests. Networkly highlights competitiveness,
            mentor access, and application deadlines, just like a coach in your corner.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <Card className="bg-white/10 border border-white/10 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <Search className="h-5 w-5 text-white/60" />
                  <input
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search NASA, Stanford Bio-X, AI research..."
                    className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSortOption('popularity')}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                      sortOption === 'popularity' ? 'bg-bright-teal text-dark-navy' : 'bg-white/10 text-white/70'
                    }`}
                  >
                    Sort: Popularity
                  </button>
                  <button
                    onClick={() => setSortOption('competitiveness')}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                      sortOption === 'competitiveness' ? 'bg-bright-teal text-dark-navy' : 'bg-white/10 text-white/70'
                    }`}
                  >
                    Sort: Competitiveness
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/70">
                  <Filter className="h-4 w-4" />
                  Quick filter by interests
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {allInterests.map((interest) => {
                    const isActive = selectedInterests.includes(interest);
                    return (
                      <button
                        key={interest}
                        onClick={() => handleInterestToggle(interest)}
                        className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                          isActive ? 'bg-bright-teal text-dark-navy' : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Card>

            <div className="mt-10 space-y-6">
              {filteredPrograms.map((program) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="bg-white/10 border border-white/10 backdrop-blur-lg">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-white">{program.name}</h3>
                          {program.badge && (
                            <span className="rounded-full bg-bright-teal/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-bright-teal">
                              {program.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-white/80">{program.description}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                            <Star className="h-3 w-3 text-yellow-300" />
                            Popularity {program.popularity}%
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                            <TrendingUp className="h-3 w-3 text-emerald-300" />
                            {program.competitiveness} competitiveness
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {program.interests.map((interest) => (
                              <span
                                key={interest}
                                className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/60"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <CTAButton variant="secondary" size="md">
                        View Details
                      </CTAButton>
                    </div>
                  </Card>
                </motion.div>
              ))}

              {filteredPrograms.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/70"
                >
                  <Brain className="mx-auto mb-4 h-10 w-10 text-bright-teal" />
                  <p>No programs match that combination yet. Try adjusting filters or explore trending fields below.</p>
                </motion.div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 border border-white/10 backdrop-blur">
              <h2 className="text-lg font-semibold text-white">Trending Fields</h2>
              <p className="mt-1 text-sm text-white/60">Where Networkly students are applying right now</p>
              <div className="mt-4 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trendingFieldsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
                    <XAxis dataKey="field" stroke="#cbd5f5" />
                    <YAxis stroke="#cbd5f5" />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none' }} />
                    <Legend />
                    <Bar dataKey="students" fill="#38bdf8" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="bg-white/10 border border-white/10 backdrop-blur">
              <h2 className="text-lg font-semibold text-white">Top Competitive Programs</h2>
              <p className="mt-1 text-sm text-white/60">Benchmark yourself before you apply</p>
              <div className="mt-4 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={competitiveClubsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
                    <XAxis dataKey="club" stroke="#cbd5f5" />
                    <YAxis stroke="#cbd5f5" />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none' }} />
                    <Legend />
                    <Line type="monotone" dataKey="competitiveness" stroke="#a855f7" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {user && (
              <Card className="bg-white/10 border border-white/10 backdrop-blur">
                <h2 className="text-lg font-semibold text-white">Recommended For You</h2>
                <p className="mt-1 text-sm text-white/60">Mock AI suggestions based on your interests</p>
                <div className="mt-4 space-y-4">
                  {recommendedPrograms.length === 0 ? (
                    <p className="text-sm text-white/60">
                      Tell us more about your interests to unlock tailored recommendations.
                    </p>
                  ) : (
                    recommendedPrograms.map((program) => (
                      <div key={program.id} className="rounded-xl bg-white/5 p-4 text-sm text-white/80">
                        <div className="font-semibold text-white">{program.name}</div>
                        <p className="mt-1 text-xs text-white/60">
                          Matched because you follow {program.interests.slice(0, 2).join(', ')} opportunities.
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </Card>
            )}

            <Card className="bg-white/10 border border-white/10 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">AI Email Assistant</h2>
                  <p className="mt-1 text-sm text-white/60">Reach out to mentors with confidence.</p>
                </div>
                <button
                  onClick={() => {
                    setEmailModalOpen(true);
                    setEmailOutput('');
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-bright-teal px-4 py-2 text-sm font-semibold text-dark-navy transition hover:opacity-90"
                >
                  <Mail className="h-4 w-4" />
                  Generate Email
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {emailModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-br from-dark-navy to-deep-blue p-6 text-white shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">AI Email Assistant</h3>
                <p className="mt-1 text-sm text-white/60">
                  Generate a polished outreach email to professors in seconds. Customize before you send.
                </p>
              </div>
              <button
                onClick={() => setEmailModalOpen(false)}
                className="rounded-full bg-white/10 p-2 text-white/60 transition hover:bg-white/20 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">Professor&apos;s Name</label>
                <input
                  value={emailForm.professor}
                  onChange={(event) => setEmailForm((prev) => ({ ...prev, professor: event.target.value }))}
                  placeholder="Dr. Chen"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-bright-teal/60"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">Program or Research Area</label>
                <input
                  value={emailForm.program}
                  onChange={(event) => setEmailForm((prev) => ({ ...prev, program: event.target.value }))}
                  placeholder="AI ethics, Bio-X lab, Quantum computing..."
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-bright-teal/60"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/50">Tone</label>
                <div className="mt-2 flex gap-2">
                  {tonePresets.map((tone) => (
                    <button
                      key={tone.value}
                      onClick={() => setEmailForm((prev) => ({ ...prev, tone: tone.value }))}
                      className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                        emailForm.tone === tone.value
                          ? 'bg-bright-teal text-dark-navy'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {tone.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleGenerateEmail}
                className="inline-flex items-center gap-2 rounded-lg bg-bright-teal px-5 py-3 text-sm font-semibold text-dark-navy transition hover:opacity-90"
              >
                <Sparkles className="h-4 w-4" />
                Generate Email
              </button>
              <button
                onClick={handleCopyEmail}
                disabled={!emailOutput}
                className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition ${
                  emailOutput ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white/5 text-white/40 cursor-not-allowed'
                }`}
              >
                <Copy className="h-4 w-4" />
                Copy Email
              </button>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
              {emailOutput ? (
                <pre className="whitespace-pre-wrap text-left font-sans text-white/90">{emailOutput}</pre>
              ) : (
                <p className="text-white/60">
                  Your generated email will appear here. Once you copy it, you can personalize further or paste into your
                  email client.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}


