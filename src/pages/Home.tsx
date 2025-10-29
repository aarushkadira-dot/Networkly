import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Award, Sparkles, GraduationCap, Target, Star, Rocket, Lightbulb, Trophy, BookOpen, Zap, Globe, Heart, Shield, Clock, TrendingUp } from 'lucide-react';
import { Card } from '../components/Card';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

interface HomeProps {
  onAuthClick: () => void;
}

export function Home({ onAuthClick }: HomeProps) {
  const { user } = useAuth();

  const features = [
    {
      icon: Users,
      title: 'Student Profiles',
      description: 'Showcase who you are, your projects, skills, and achievements in one place.',
      color: 'text-electric-blue',
    },
    {
      icon: Briefcase,
      title: 'Real Opportunities',
      description: 'Find internships, scholarships, and programs tailored to your interests and grade.',
      color: 'text-emerald-green',
    },
    {
      icon: Award,
      title: 'Never Miss a Deadline',
      description: 'Get automatic reminders and updates about opportunities you care about.',
      color: 'text-coral-peach',
    },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-dark-navy via-deep-blue to-royal-blue overflow-hidden">
      {/* Floating elements - HERO SECTION ONLY */}
      <div className="pointer-events-none absolute inset-0 z-0" style={{ height: '88vh' }}>
        {/* Corner icons - minimal and clean with floating animation */}
        <motion.div 
          className="absolute top-[15%] left-[3%] animate-float-slow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-12 h-12 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <GraduationCap className="w-6 h-6 text-cyan-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[15%] right-[3%] animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-12 h-12 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Briefcase className="w-6 h-6 text-blue-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[15%] left-[3%] animate-float-reverse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-12 h-12 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <BookOpen className="w-6 h-6 text-purple-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[15%] right-[3%] animate-float-slow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-12 h-12 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Rocket className="w-6 h-6 text-cyan-300" />
          </div>
        </motion.div>

        {/* Clean notification cards - well spaced with floating animation */}
        <motion.div 
          className="absolute top-[22%] left-[8%] w-56 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 animate-float-slow"
          initial={{ opacity: 0, x: -30, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 2, duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">Scholarship Alert</p>
              <p className="text-xs text-gray-600">STEM Grant - $5,000</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[18%] right-[15%] w-52 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 animate-float"
          initial={{ opacity: 0, x: 30, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 2.3, duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">Internship</p>
              <p className="text-xs text-gray-600">NASA Program</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[40%] right-[1%] w-44 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 animate-float-reverse"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-1">
              <Users className="w-4 h-4 text-cyan-600" />
            </div>
            <p className="text-sm font-bold text-gray-800">2,847</p>
            <p className="text-xs text-gray-600">Students</p>
            <p className="text-xs text-green-600">+127 this week</p>
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[35%] left-[1%] w-56 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 animate-float-slow"
          initial={{ opacity: 0, x: -30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 2.9, duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">Research</p>
              <p className="text-xs text-gray-600">Duke Lab</p>
              <p className="text-xs text-red-600 font-semibold">3 days left</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[85%] right-[35%] w-48 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 animate-float"
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3.2, duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-1">
              <Trophy className="w-4 h-4 text-yellow-600" />
            </div>
            <p className="text-xs font-semibold text-gray-800">Success!</p>
            <p className="text-xs text-gray-600">Sarah → MIT</p>
            <p className="text-xs text-blue-600">Read more</p>
          </div>
        </motion.div>

        {/* Additional notification card */}
        <motion.div 
          className="absolute top-[95%] left-[20%] w-52 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 animate-float-slow"
          initial={{ opacity: 0, x: -20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3.5, duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">Deadline Alert</p>
              <p className="text-xs text-gray-600">Summer Program</p>
              <p className="text-xs text-red-600 font-semibold">2 days left</p>
            </div>
          </div>
        </motion.div>

        {/* Second card below buttons */}
        <motion.div 
          className="absolute top-[80%] right-[5%] w-48 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/20 animate-float"
          initial={{ opacity: 0, x: 20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 3.8, duration: 0.7, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-1">
              <Sparkles className="w-4 h-4 text-blue-600" />
            </div>
            <p className="text-xs font-semibold text-gray-800">New Feature</p>
            <p className="text-xs text-gray-600">AI Matching</p>
            <p className="text-xs text-green-600">Try now</p>
          </div>
        </motion.div>

        {/* Additional floating icons - well spread out */}
        <motion.div 
          className="absolute top-[40%] left-[8%] animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Zap className="w-5 h-5 text-yellow-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[30%] left-[32%] animate-float-reverse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Globe className="w-5 h-5 text-green-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[70%] left-[25%] animate-float-slow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Heart className="w-5 h-5 text-pink-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[30%] right-[25%] animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Shield className="w-5 h-5 text-indigo-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute bottom-[50%] right-[12%] animate-float-reverse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.6, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <TrendingUp className="w-5 h-5 text-emerald-300" />
          </div>
        </motion.div>

        {/* Icons below the buttons */}
        <motion.div 
          className="absolute top-[48%] left-[20%] animate-float-slow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3.8, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Star className="w-5 h-5 text-yellow-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[80%] right-[25%] animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.0, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Target className="w-5 h-5 text-red-300" />
          </div>
        </motion.div>

        <motion.div 
          className="absolute top-[85%] left-[35%] animate-float-reverse"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-10 h-10 rounded-xl border border-white/30 bg-white/10 backdrop-blur-sm grid place-items-center">
            <Lightbulb className="w-5 h-5 text-amber-300" />
          </div>
        </motion.div>

        {/* Subtle decorative dots - minimal */}
        <div className="absolute top-[30%] left-[20%] w-1 h-1 rounded-full bg-cyan-300 opacity-60"></div>
        <div className="absolute top-[40%] right-[25%] w-1 h-1 rounded-full bg-blue-300 opacity-60"></div>
        <div className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-purple-300 opacity-60"></div>
        <div className="absolute bottom-[40%] right-[20%] w-1 h-1 rounded-full bg-pink-300 opacity-60"></div>
        <div className="absolute top-[55%] left-[30%] w-1 h-1 rounded-full bg-yellow-300 opacity-60"></div>
        <div className="absolute top-[70%] right-[30%] w-1 h-1 rounded-full bg-green-300 opacity-60"></div>
        <div className="absolute top-[25%] left-[15%] w-1 h-1 rounded-full bg-teal-300 opacity-60"></div>
        <div className="absolute top-[35%] right-[15%] w-1 h-1 rounded-full bg-indigo-300 opacity-60"></div>
        <div className="absolute bottom-[25%] left-[15%] w-1 h-1 rounded-full bg-violet-300 opacity-60"></div>
        <div className="absolute bottom-[35%] right-[15%] w-1 h-1 rounded-full bg-amber-300 opacity-60"></div>
        <div className="absolute top-[50%] left-[10%] w-1 h-1 rounded-full bg-emerald-300 opacity-60"></div>
        <div className="absolute top-[60%] right-[10%] w-1 h-1 rounded-full bg-rose-300 opacity-60"></div>
        <div className="absolute top-[45%] left-[40%] w-1 h-1 rounded-full bg-sky-300 opacity-60"></div>
        <div className="absolute top-[65%] right-[40%] w-1 h-1 rounded-full bg-lime-300 opacity-60"></div>
        <div className="absolute top-[75%] left-[10%] w-1 h-1 rounded-full bg-orange-300 opacity-60"></div>
        <div className="absolute top-[85%] right-[10%] w-1 h-1 rounded-full bg-fuchsia-300 opacity-60"></div>
        <div className="absolute top-[20%] left-[35%] w-1 h-1 rounded-full bg-cyan-300 opacity-60"></div>
        <div className="absolute top-[80%] right-[35%] w-1 h-1 rounded-full bg-violet-300 opacity-60"></div>
        <div className="absolute top-[90%] left-[5%] w-1 h-1 rounded-full bg-teal-300 opacity-60"></div>
        <div className="absolute top-[95%] right-[5%] w-1 h-1 rounded-full bg-purple-300 opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section 
          className="relative z-10 min-h-[88vh] pt-6 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-white/20 backdrop-blur-md text-gray-800 mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 text-bright-teal" />
            <span className="text-sm">Join 5,000+ students growing their future</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-bright-teal to-royal-blue">
              Networkly
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Built by Students, For Students
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover internships, scholarships, and opportunities that help you grow.
            Real connections. Real results.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {user ? (
              <Link to="/opportunities">
                <motion.button 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-royal-blue to-bright-teal text-white font-semibold shadow-lifted hover:opacity-95 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </Link>
            ) : (
              <motion.button 
                onClick={onAuthClick} 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-royal-blue to-bright-teal text-white font-semibold shadow-lifted hover:opacity-95 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            )}
            <Link to="/about">
              <motion.button 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 bg-transparent relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ borderColor: '#3b82f6', color: '#3b82f6' }}
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{ zIndex: -1 }}
                />
                <span className="relative z-10">
                Learn More
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>
          </div>


      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.section 
          className="py-16 mt-48 md:mt-64 lg:mt-80"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card hover>
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section 
          className="py-16 text-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Floating background orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-2xl"
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-2xl"
              animate={{ 
                y: [0, 30, 0],
                x: [0, -25, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-blue-400/15 rounded-full blur-2xl"
              animate={{ 
                y: [0, -20, 0],
                x: [0, 15, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute bottom-10 left-1/4 w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-2xl"
              animate={{ 
                y: [0, 25, 0],
                x: [0, -20, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>

          <motion.div 
            className="bg-gradient-to-r from-electric-blue to-soft-teal rounded-2xl p-12 shadow-lifted relative z-10"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              className="text-white text-lg mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Join hundreds of high schoolers discovering opportunities that match their ambitions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
            {user ? (
              <Link to="/profile">
                <motion.button
                  className="bg-white text-electric-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.4), 0 0 20px rgba(6, 182, 212, 0.5)",
                    backgroundColor: "#f0fdfa"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  Complete Your Profile
                </motion.button>
              </Link>
            ) : (
              <motion.button
                className="bg-white text-electric-blue px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
                onClick={onAuthClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.4), 0 0 20px rgba(6, 182, 212, 0.5)",
                  backgroundColor: "#f0fdfa"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Join Networkly
              </motion.button>
            )}
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
