import { Mail, Linkedin, Code, Coffee, Rocket, Heart, Quote, Target, Users, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card } from '../components/ui/card';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { Link } from 'react-router-dom';

function Team() {
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
    <div className="min-h-screen bg-dark-navy pt-24 text-white relative overflow-hidden">
      <div className="flex items-center justify-center h-screen">
        <p className="text-white/70">Team page coming soon...</p>
      </div>
      {/* 
    <div className="min-h-screen bg-dark-navy pt-24 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-electric-blue to-soft-teal opacity-20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 transform rounded-full bg-gradient-to-br from-emerald-green to-green-500 opacity-10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Hero Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Team
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Two high school students who decided to solve a problem we all face:
            <span className="font-bold text-bright-teal"> finding and tracking opportunities shouldn't be this hard</span>.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 border border-white/15 backdrop-blur-xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4 text-white">
                <Heart className="w-5 h-5 text-bright-teal" />
                <span className="font-semibold tracking-wide">Our Commitment</span>
              </div>
              <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
                We're not just building a platform, we're creating a <span className="font-bold text-white">community</span>. 
                Every feature, every update, every decision is made with one goal: helping students like us discover
                opportunities that matter. Because we're students too, and we get it.
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
                <Card className="h-full relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur">
                  {/* Hover background effect */}
                  <AnimatePresence>
                    {hoveredMember === index && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
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
                      
                <h3 className="text-2xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                      <p className="text-bright-teal font-medium mb-2">
                  {member.role}
                </p>
              </div>

                    {/* Bio */}
              <p className="text-white/75 leading-relaxed mb-6">
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
                          <div className="bg-white/10 border-l-4 border-yellow-400/60 rounded-lg p-4">
                            <div className="flex gap-3">
                              <Quote className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                              <p className="text-sm text-white/80 italic">
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
                        <span className="text-sm font-bold text-white/80">Fun Facts</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.funFacts.map((fact, factIndex) => (
                          <motion.span
                            key={factIndex}
                            className="px-3 py-1 text-white/80 rounded-full text-sm"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: factIndex * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59,130,246,0.3)' }}
                          >
                            {fact}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex justify-center gap-3 pt-4 border-t border-white/10">
                      <motion.a
                  href={`mailto:${member.email}`}
                        className="p-3 bg-white/10 hover:bg-electric-blue hover:text-white rounded-lg transition-colors group text-white/80"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                      </motion.a>
                      <motion.button 
                        className="p-3 bg-white/10 hover:bg-electric-blue hover:text-white rounded-lg transition-colors group text-white/80"
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

        {/* Our Mission Section */}
        <motion.section 
          className="relative mx-auto max-w-7xl px-6 py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-4xl font-bold">Our Mission</h2>
              <p className="mb-6 text-lg text-white/70 leading-relaxed">
                Every day, thousands of opportunities pass by students simply because they never knew they existed. 
                We're changing that.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Networkly uses cutting-edge technology to match students with personalized opportunities that align 
                with their goals, interests, and dreams. No more endless searching. No more missed deadlines. 
                Just the right opportunities, at the right time.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { icon: Target, title: 'Personalized', desc: 'Matches tailored to you' },
                { icon: Zap, title: 'Real-time', desc: 'Instant notifications' },
                { icon: Users, title: 'Community', desc: 'Connect with peers' },
                { icon: Heart, title: 'Free', desc: 'Always accessible' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <item.icon className="mb-4 h-10 w-10 text-electric-blue" />
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* How it started Section */}
        <motion.section 
          className="relative mx-auto max-w-5xl px-6 py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="rounded-3xl bg-gradient-to-br from-electric-blue/10 to-soft-teal/10 p-12 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold">How it started</h2>
            <p className="mb-6 text-lg text-white/70 leading-relaxed">
              Networkly was founded by high school students who experienced the frustration firsthand: 
              scrolling through hundreds of irrelevant opportunities, missing deadlines, and feeling 
              like the system wasn't built for them.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              We knew there had to be a better way. So we built it. Today, Networkly serves thousands 
              of students nationwide, helping them discover opportunities they never knew existed 
              and achieve goals they never thought possible.
            </p>
          </motion.div>
        </motion.section>

        {/* What we stand for Section */}
        <motion.section 
          className="relative mx-auto max-w-7xl px-6 py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="mb-16 text-center text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What we stand for
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Accessibility',
                desc: 'Every student deserves access to life-changing opportunities, regardless of background or resources.',
                emoji: '🌍'
              },
              {
                title: 'Innovation',
                desc: 'We leverage the latest technology to make opportunity discovery seamless and personalized.',
                emoji: '💡'
              },
              {
                title: 'Community',
                desc: 'Building a supportive network where students can connect, share, and grow together.',
                emoji: '🤝'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 text-5xl">{value.emoji}</div>
                <h3 className="mb-4 text-2xl font-semibold">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join the movement Section */}
        <motion.section 
          className="relative mx-auto max-w-4xl px-6 py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="rounded-3xl bg-gradient-to-br from-electric-blue/20 to-soft-teal/20 p-12 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold">Join the movement</h2>
            <p className="mb-8 text-xl text-white/70">
              Be part of a community that's redefining how students discover and seize opportunities.
            </p>
            <Link to="/">
              <motion.button
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-electric-blue to-soft-teal px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
    */}
  );
}

export default Team;
