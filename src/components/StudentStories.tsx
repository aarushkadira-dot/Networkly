import { motion } from 'framer-motion';
import { Quote, ExternalLink, Heart, Code, Microscope, GraduationCap, Rocket, Award, BookOpen, Lightbulb, Target, TrendingUp, Star } from 'lucide-react';
import { useState } from 'react';

const studentStories = [
  {
    name: "Sarah Chen",
    school: "Lincoln High School",
    grade: "12th Grade",
    story: "Networkly helped me find a summer internship at a tech startup. I learned so much about software development and made amazing connections!",
    achievement: "Software Engineering Intern at TechCorp",
    icon: Code,
    avatarColor: "from-electric-blue to-soft-teal",
    tags: ["Technology", "Internship"],
    color: "from-electric-blue to-soft-teal"
  },
  {
    name: "Marcus Johnson",
    school: "Roosevelt Academy",
    grade: "11th Grade",
    story: "I discovered a scholarship I never knew existed through Networkly. It covered my summer program costs completely!",
    achievement: "$5,000 STEM Scholarship Winner",
    icon: GraduationCap,
    avatarColor: "from-emerald-green to-green-500",
    tags: ["Scholarship", "STEM"],
    color: "from-emerald-green to-green-500"
  },
  {
    name: "Priya Patel",
    school: "Washington Prep",
    grade: "10th Grade",
    story: "The research opportunity I found here opened doors I didn't know existed. Now I'm passionate about environmental science!",
    achievement: "Research Assistant at State University",
    icon: Microscope,
    avatarColor: "from-purple-500 to-pink-500",
    tags: ["Research", "Science"],
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Alex Rivera",
    school: "Central High",
    grade: "12th Grade",
    story: "Networkly's opportunities helped me build a portfolio that got me into my dream college's early admission program!",
    achievement: "Accepted to MIT Early Action",
    icon: Rocket,
    avatarColor: "from-coral-peach to-orange-500",
    tags: ["College", "Success"],
    color: "from-coral-peach to-orange-500"
  },
];

export function StudentStories() {
  const [likedStories, setLikedStories] = useState<Set<number>>(new Set());

  const toggleLike = (index: number) => {
    setLikedStories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Star className="w-10 h-10 text-yellow-500 fill-yellow-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-royal-purple">
            Success Stories
          </h2>
        </div>
        <p className="text-gray-600 text-lg">
          Real students, real opportunities, real success!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {studentStories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-soft overflow-hidden h-full"
              whileHover={{ y: -8, boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${story.color} p-6 relative`}>
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-16 h-16 text-white" />
                </div>
                
                <div className="relative z-10">
                  {/* Avatar with icon */}
                  <motion.div
                    className={`w-20 h-20 mb-3 rounded-full bg-gradient-to-br ${story.avatarColor} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <story.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-white font-bold text-xl mb-1">{story.name}</h3>
                  <p className="text-white/90 text-sm">
                    {story.grade} • {story.school}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed italic">
                  "{story.story}"
                </p>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-yellow-600" />
                    <p className="text-sm font-bold text-yellow-900">
                      Achievement Unlocked!
                    </p>
                  </div>
                  <p className="text-sm text-yellow-800 font-medium">
                    {story.achievement}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <motion.button
                    onClick={() => toggleLike(index)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      likedStories.has(index)
                        ? 'bg-red-50 text-red-600'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={likedStories.has(index) ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Heart 
                        className="w-4 h-4" 
                        fill={likedStories.has(index) ? 'currentColor' : 'none'}
                      />
                    </motion.div>
                    <span>{likedStories.has(index) ? 'Inspired!' : 'Inspiring'}</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Did You Know component
const didYouKnowFacts = [
  {
    icon: Lightbulb,
    fact: "Students who apply to 5+ opportunities have a 3x higher success rate!",
    tip: "Cast a wide net and apply strategically.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    icon: Target,
    fact: "70% of students find opportunities they love within their first week!",
    tip: "Start exploring today!",
    color: "text-electric-blue",
    bgColor: "bg-blue-100"
  },
  {
    icon: TrendingUp,
    fact: "Internships increase college admission chances by 40%!",
    tip: "Build experience early!",
    color: "text-emerald-green",
    bgColor: "bg-green-100"
  },
  {
    icon: Award,
    fact: "Most scholarships go unclaimed because students don't apply!",
    tip: "Don't leave money on the table!",
    color: "text-coral-peach",
    bgColor: "bg-orange-100"
  },
  {
    icon: Rocket,
    fact: "Early applicants are 2x more likely to receive offers!",
    tip: "Apply early, apply often!",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
];

export function DidYouKnow() {
  const [currentFact, setCurrentFact] = useState(0);

  const rotateFact = () => {
    setCurrentFact((prev) => (prev + 1) % didYouKnowFacts.length);
  };

  const fact = didYouKnowFacts[currentFact];
  const FactIcon = fact.icon;

  return (
    <motion.div
      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`${fact.bgColor} p-4 rounded-2xl flex-shrink-0 shadow-md`}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <FactIcon className={`w-10 h-10 ${fact.color}`} />
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-royal-purple" />
            <h3 className="text-royal-purple font-bold text-lg">
              Did You Know?
            </h3>
          </div>
          
          <motion.p
            key={currentFact}
            className="text-charcoal font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {fact.fact}
          </motion.p>
          
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-purple-700 flex-shrink-0 mt-0.5" />
            <p className="text-purple-700 text-sm italic">
              {fact.tip}
            </p>
          </div>

          <motion.button
            onClick={rotateFact}
            className="mt-4 text-sm text-purple-600 font-medium hover:text-purple-800 flex items-center gap-1"
            whileHover={{ x: 5 }}
          >
            <span>Next fact</span>
            <ExternalLink className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

