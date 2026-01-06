import { useState } from 'react';
import { Search, MessageCircle, Star, Award, Users, Briefcase, Microscope, Palette, Calculator, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/animations';

interface StudentProfile {
  id: string;
  name: string;
  grade: string;
  school: string;
  tagline: string;
  avatar: string;
  interests: string[];
  academics: {
    gpa: string;
    courses: string[];
    apIb: string[];
  };
  extracurriculars: {
    clubs: string[];
    leadership: string[];
    volunteer: string[];
  };
  honors: string[];
  projects: {
    title: string;
    description: string;
    type: string;
  }[];
  research: {
    title: string;
    institution: string;
    description: string;
  }[];
}

const sampleStudents: StudentProfile[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    grade: '12th Grade',
    school: 'Lincoln High School',
    tagline: 'Aspiring Biomedical Engineer',
    avatar: 'SC',
    interests: ['STEM', 'Medicine', 'Research'],
    academics: {
      gpa: '4.0',
      courses: ['AP Biology', 'AP Chemistry', 'AP Calculus BC', 'AP Physics'],
      apIb: ['AP Biology (5)', 'AP Chemistry (5)', 'AP Calculus BC (5)']
    },
    extracurriculars: {
      clubs: ['Science Olympiad', 'Robotics Club', 'Math Team'],
      leadership: ['Science Olympiad President', 'Robotics Team Captain'],
      volunteer: ['Hospital Volunteer', 'Tutoring Program']
    },
    honors: ['National Merit Scholar', 'Science Fair Winner', 'Dean\'s List'],
    projects: [
      {
        title: 'AI-Powered Medical Diagnosis Tool',
        description: 'Developed machine learning model for early disease detection',
        type: 'Research Project'
      }
    ],
    research: [
      {
        title: 'Cancer Cell Analysis',
        institution: 'Stanford Medical School',
        description: 'Summer research on cancer cell behavior patterns'
      }
    ]
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    grade: '11th Grade',
    school: 'Roosevelt High School',
    tagline: 'Future Tech Entrepreneur',
    avatar: 'MJ',
    interests: ['Business', 'Technology', 'Leadership'],
    academics: {
      gpa: '3.9',
      courses: ['AP Computer Science', 'AP Economics', 'AP Statistics', 'Business Management'],
      apIb: ['AP Computer Science (5)', 'AP Economics (4)']
    },
    extracurriculars: {
      clubs: ['Entrepreneurship Club', 'Debate Team', 'Student Government'],
      leadership: ['Entrepreneurship Club Founder', 'Student Body President'],
      volunteer: ['Community Food Bank', 'Youth Mentorship Program']
    },
    honors: ['Young Entrepreneur Award', 'Debate State Champion', 'Leadership Excellence'],
    projects: [
      {
        title: 'Eco-Friendly Delivery App',
        description: 'Mobile app connecting local businesses with sustainable delivery options',
        type: 'Startup'
      }
    ],
    research: []
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    grade: '12th Grade',
    school: 'Washington High School',
    tagline: 'Passionate Environmental Advocate',
    avatar: 'ER',
    interests: ['Environment', 'Policy', 'Activism'],
    academics: {
      gpa: '3.8',
      courses: ['AP Environmental Science', 'AP Government', 'AP English Literature', 'AP Spanish'],
      apIb: ['AP Environmental Science (5)', 'AP Government (4)']
    },
    extracurriculars: {
      clubs: ['Environmental Club', 'Model UN', 'Green Team'],
      leadership: ['Environmental Club President', 'Model UN Secretary General'],
      volunteer: ['Beach Cleanup Coordinator', 'Climate Action Network']
    },
    honors: ['Environmental Leadership Award', 'Model UN Best Delegate', 'Community Service Recognition'],
    projects: [
      {
        title: 'School Solar Panel Initiative',
        description: 'Led campaign to install solar panels at school, reducing carbon footprint by 30%',
        type: 'Environmental Project'
      }
    ],
    research: [
      {
        title: 'Climate Change Impact Study',
        institution: 'Local University',
        description: 'Research on climate change effects on local ecosystems'
      }
    ]
  },
  {
    id: '4',
    name: 'David Kim',
    grade: '11th Grade',
    school: 'Jefferson High School',
    tagline: 'Creative Digital Artist',
    avatar: 'DK',
    interests: ['Arts', 'Technology', 'Design'],
    academics: {
      gpa: '3.7',
      courses: ['AP Art History', 'Digital Media', 'Graphic Design', 'AP English Language'],
      apIb: ['AP Art History (4)', 'AP English Language (4)']
    },
    extracurriculars: {
      clubs: ['Art Club', 'Digital Media Club', 'Yearbook Committee'],
      leadership: ['Art Club Vice President', 'Yearbook Design Editor'],
      volunteer: ['Art Therapy Program', 'Community Mural Project']
    },
    honors: ['Art Competition Winner', 'Digital Media Excellence', 'Creative Writing Award'],
    projects: [
      {
        title: 'Virtual Reality Art Gallery',
        description: 'Created immersive VR experience showcasing student artwork',
        type: 'Digital Art Project'
      }
    ],
    research: []
  },
  {
    id: '5',
    name: 'Alex Thompson',
    grade: '12th Grade',
    school: 'Madison High School',
    tagline: 'Future Aerospace Engineer',
    avatar: 'AT',
    interests: ['STEM', 'Engineering', 'Space'],
    academics: {
      gpa: '4.0',
      courses: ['AP Physics C', 'AP Calculus BC', 'AP Chemistry', 'Engineering Design'],
      apIb: ['AP Physics C (5)', 'AP Calculus BC (5)', 'AP Chemistry (5)']
    },
    extracurriculars: {
      clubs: ['Aerospace Club', 'Engineering Society', 'Rocketry Team'],
      leadership: ['Aerospace Club President', 'Rocketry Team Lead'],
      volunteer: ['STEM Tutoring', 'Science Museum Volunteer']
    },
    honors: ['Engineering Excellence Award', 'Rocketry Competition Winner', 'STEM Scholarship'],
    projects: [
      {
        title: 'High-Altitude Balloon Project',
        description: 'Designed and launched weather balloon to study atmospheric conditions',
        type: 'Engineering Project'
      }
    ],
    research: [
      {
        title: 'Satellite Communication Systems',
        institution: 'NASA Research Center',
        description: 'Summer internship studying satellite communication protocols'
      }
    ]
  },
  {
    id: '6',
    name: 'Zoe Patel',
    grade: '11th Grade',
    school: 'Franklin High School',
    tagline: 'Dedicated Social Justice Advocate',
    avatar: 'ZP',
    interests: ['Social Justice', 'Law', 'Activism'],
    academics: {
      gpa: '3.9',
      courses: ['AP Government', 'AP English Literature', 'AP Psychology', 'Social Studies'],
      apIb: ['AP Government (5)', 'AP English Literature (4)']
    },
    extracurriculars: {
      clubs: ['Social Justice Club', 'Mock Trial', 'Student Newspaper'],
      leadership: ['Social Justice Club Co-Founder', 'Mock Trial Captain'],
      volunteer: ['Legal Aid Society', 'Youth Advocacy Program']
    },
    honors: ['Social Justice Leadership Award', 'Mock Trial State Champion', 'Writing Excellence'],
    projects: [
      {
        title: 'Youth Voter Registration Drive',
        description: 'Organized campaign registering 500+ young voters in local elections',
        type: 'Civic Engagement Project'
      }
    ],
    research: []
  }
];

const interestFilters = [
  'All',
  'STEM',
  'Business',
  'Medicine',
  'Arts',
  'Environment',
  'Social Justice',
  'Engineering',
  'Technology',
  'Leadership'
];

function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);

  const filteredStudents = sampleStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || student.interests.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  const getInterestIcon = (interest: string) => {
    const iconMap: { [key: string]: any } = {
      'STEM': Microscope,
      'Business': Briefcase,
      'Medicine': Heart,
      'Arts': Palette,
      'Environment': Users,
      'Social Justice': Users,
      'Engineering': Calculator,
      'Technology': Briefcase,
      'Leadership': Users
    };
    return iconMap[interest] || Users;
  };

  return (
    <div className="min-h-screen bg-dark-navy relative">
      {/* Background Gradient - Standard Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-secondary mb-6"
          >
            <Users className="h-4 w-4" />
            <span>Find your community</span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Connect with</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Students
            </span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Discover ambitious students like you. Build connections, share experiences, and grow together.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-12 space-y-6 max-w-5xl mx-auto"
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search students..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-white/40 transition-all duration-300
                  focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 focus:bg-white/10"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {interestFilters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${selectedFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Student Profiles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              variants={fadeInUp}
              custom={index}
              className="h-full"
            >
              {/* Dark Glassmorphism Card */}
              <div className="h-full flex flex-col bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading font-bold text-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {student.avatar}
                  </motion.div>

                  <h3 className="text-lg font-heading font-semibold text-white mb-1">
                    {student.name}
                  </h3>

                  <p className="text-white/60 font-sans text-sm mb-2">
                    {student.grade} • {student.school}
                  </p>

                  <p className="text-secondary font-sans text-sm italic">
                    "{student.tagline}"
                  </p>
                </div>

                {/* Interests */}
                <div className="mb-4">
                  <h4 className="text-xs font-heading font-semibold text-white/80 mb-2 flex items-center">
                    <Star className="w-3 h-3 mr-1.5 text-secondary" />
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {student.interests.map((interest, idx) => {
                      const IconComponent = getInterestIcon(interest);
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-white/60"
                        >
                          <IconComponent className="w-3 h-3" />
                          {interest}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-primary/10 rounded-xl border border-primary/20">
                    <div className="text-lg font-heading font-bold text-primary">{student.academics.gpa}</div>
                    <div className="text-[10px] text-white/50 font-sans">GPA</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-xl border border-accent/20">
                    <div className="text-lg font-heading font-bold text-accent">{student.honors.length}</div>
                    <div className="text-[10px] text-white/50 font-sans">Awards</div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6 flex-1">
                  <h4 className="text-xs font-heading font-semibold text-white/80 mb-2 flex items-center">
                    <Award className="w-3 h-3 mr-1.5 text-accent" />
                    Key Achievements
                  </h4>
                  <div className="space-y-1.5">
                    {student.honors.slice(0, 2).map((honor, idx) => (
                      <div key={idx} className="text-xs text-white/60 font-sans flex items-center">
                        <Star className="w-3 h-3 mr-1.5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                        <span className="line-clamp-1">{honor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <button
                  onClick={() => setSelectedStudent(student)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-primary text-white text-sm font-medium transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Connect
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredStudents.length === 0 && (
          <motion.div
            className="text-center py-20 px-6 rounded-3xl border border-dashed border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white/20" />
            </div>
            <h3 className="text-white text-xl font-heading font-medium mb-2">
              No students found
            </h3>
            <p className="text-white/50 font-sans">
              Try adjusting your search or filter criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Students;
