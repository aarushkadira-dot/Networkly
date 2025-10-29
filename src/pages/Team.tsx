import { Mail, Linkedin, Code, Coffee, Rocket, Heart, Quote, Hand, Handshake, Zap, Target, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card } from '../components/Card';
import { CTAButton } from '../components/EnhancedCTA';
import { fadeInUp, staggerContainer } from '../lib/animations';

export function Team() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team = [
    {
      name: 'Saatvik Santosh',
      role: 'Co-Founder & Developer',
      email: 'saatviksantosh10@gmail.com',
      bio: 'Passionate about building tools that genuinely help students succeed. When not coding, probably exploring opportunities and discovering new tech.',
      quote: "Every feature we build should solve a real problem we've faced ourselves.",
      funFacts: ['☕ Coffee enthusiast', '🎮 Gamer', '📚 Always learning'],
      color: 'from-electric-blue to-soft-teal'
    },
    {
      name: 'Aarush Kadira',
      role: 'Co-Founder & Developer',
      email: 'aarush.kadira@gmail.com',
      bio: 'Student developer on a mission to democratize opportunity discovery. Big believer that student-led innovation creates the best solutions.',
      quote: 'If we can make opportunity discovery easier for even one student, it\'s worth it.',
      funFacts: ['🚀 Space geek', '🎵 Music lover', '🏀 Basketball fan'],
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-beige to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-soft-teal flex items-center justify-center shadow-lg"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Hand className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-royal-purple mb-6">
            Meet the Team
          </h1>
          <p className="text-xl text-charcoal leading-relaxed max-w-3xl mx-auto">
            Two high school students who decided to solve a problem we all face:
            <span className="font-bold text-electric-blue"> finding and tracking opportunities shouldn't be this hard</span>.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-electric-blue/10 to-purple-500/10 border-2 border-electric-blue/20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-electric-blue/10 px-4 py-2 rounded-full mb-4">
                <Heart className="w-5 h-5 text-electric-blue" />
                <span className="font-bold text-electric-blue">Our Commitment</span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                We're not just building a platform—we're creating a <span className="font-bold">community</span>. 
                Every feature, every update, every decision is made with one goal: helping students like us 
                discover opportunities that matter. Because we're students too, and we get it.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Team Members */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full relative overflow-hidden">
                  {/* Hover background effect */}
                  <AnimatePresence>
                    {hoveredMember === index && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-5`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-10">
                    {/* Avatar */}
                    <div className="text-center mb-6">
                      <motion.div
                        className={`w-28 h-28 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center relative`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <span className="text-white text-4xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                        
                        {/* Floating badge */}
                        <motion.div
                          className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.2, rotate: 15 }}
                        >
                          <Code className="w-5 h-5 text-white" />
                        </motion.div>
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-charcoal mb-1">
                        {member.name}
                      </h3>
                      <p className="text-electric-blue font-medium mb-2">
                        {member.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Quote - Shows on hover */}
                    <AnimatePresence>
                      {hoveredMember === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-6"
                        >
                          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-4">
                            <div className="flex gap-3">
                              <Quote className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                              <p className="text-sm text-gray-700 italic">
                                "{member.quote}"
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Fun Facts */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Coffee className="w-4 h-4 text-coral-peach" />
                        <span className="text-sm font-bold text-charcoal">Fun Facts</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.funFacts.map((fact, factIndex) => (
                          <motion.span
                            key={factIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: factIndex * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.05, backgroundColor: '#e0f2fe' }}
                          >
                            {fact}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex justify-center gap-3 pt-4 border-t border-gray-200">
                      <motion.a
                        href={`mailto:${member.email}`}
                        className="p-3 bg-gray-100 hover:bg-electric-blue hover:text-white rounded-lg transition-colors group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail className="w-5 h-5" />
                      </motion.a>
                      <motion.button 
                        className="p-3 bg-gray-100 hover:bg-electric-blue hover:text-white rounded-lg transition-colors group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-royal-purple text-center mb-12">
            What We Believe In
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: 'Student-First',
                description: 'Built by students, for students. Your needs drive every decision.',
                color: 'from-electric-blue to-soft-teal'
              },
              {
                icon: Zap,
                title: 'Empowerment',
                description: 'Giving every student access to life-changing opportunities.',
                color: 'from-emerald-green to-green-500'
              },
              {
                icon: TrendingUp,
                title: 'Constant Growth',
                description: 'Always improving, always learning, always evolving.',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover>
                    <div className="text-center">
                      <motion.div
                        className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ValueIcon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-royal-purple via-electric-blue to-soft-teal rounded-2xl p-12 shadow-lifted text-center relative overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />

            <div className="relative z-10">
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Handshake className="w-12 h-12 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Join the Mission?
              </h2>
              <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                We're always looking for passionate students who want to make a difference.
                Whether it's development, design, content, or community building—there's a place for you!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton variant="secondary" size="lg">
                  Learn More
                </CTAButton>
                <CTAButton variant="gradient" size="lg">
                  Get in Touch
                </CTAButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
