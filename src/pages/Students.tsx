import { useState } from 'react';
import { Search, Filter, Mail, MessageCircle, Star, Award, BookOpen, Users, Briefcase, Microscope, Palette, Calculator, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Badge } from '../components/Badge';
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
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-text-primary mb-6">
            Connect with{' '}
            <span className="bg-gradient-to-r from-blue to-teal bg-clip-text text-transparent">
              Students
            </span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-inter">
            Discover ambitious students like you. Build connections, share experiences, and grow together.
          </p>
        </motion.div>

        {/* Search and Filters - Underneath the title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search students..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-blue-200 rounded-lg text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {interestFilters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue group-hover:to-teal">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue to-teal flex items-center justify-center text-white font-poppins font-bold text-2xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {student.avatar}
                  </motion.div>
                  
                  <h3 className="text-xl font-poppins font-semibold text-text-primary mb-2">
                    {student.name}
                  </h3>
                  
                  <p className="text-text-secondary font-inter mb-1">
                    {student.grade} • {student.school}
                  </p>
                  
                  <p className="text-blue font-inter font-medium italic">
                    "{student.tagline}"
                  </p>
                </div>

                {/* Interests */}
                <div className="mb-6">
                  <h4 className="text-sm font-poppins font-semibold text-text-primary mb-3 flex items-center">
                    <Star className="w-4 h-4 mr-2 text-blue" />
                    Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {student.interests.map((interest, idx) => {
                      const IconComponent = getInterestIcon(interest);
                      return (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          <IconComponent className="w-3 h-3 mr-1" />
                          {interest}
                        </Badge>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-poppins font-bold text-blue">{student.academics.gpa}</div>
                    <div className="text-xs text-text-secondary font-inter">GPA</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-lg font-poppins font-bold text-teal">{student.honors.length}</div>
                    <div className="text-xs text-text-secondary font-inter">Awards</div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-poppins font-semibold text-text-primary mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-teal" />
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {student.honors.slice(0, 2).map((honor, idx) => (
                      <div key={idx} className="text-sm text-text-secondary font-inter flex items-center">
                        <Star className="w-3 h-3 mr-2 text-yellow-400 fill-yellow-400" />
                        {honor}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <motion.div
                  className="flex gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue to-teal text-white font-inter font-medium"
                    onClick={() => setSelectedStudent(student)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue text-blue hover:bg-blue hover:text-white"
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredStudents.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-poppins font-semibold text-text-primary mb-2">
              No students found
            </h3>
            <p className="text-text-secondary font-inter">
              Try adjusting your search or filter criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Students;

