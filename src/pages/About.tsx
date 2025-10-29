import { Heart, Target, Lightbulb, Search, Bookmark, Send, CheckCircle, TrendingUp, Users, ArrowRight, Rocket, UserCheck, Sparkles, Bell, BarChart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { CTAButton } from '../components/EnhancedCTA';
import { fadeInUp, staggerContainer } from '../lib/animations';

export function About() {
  const processSteps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'Browse curated opportunities tailored to your interests and goals',
      color: 'from-electric-blue to-soft-teal'
    },
    {
      icon: Bookmark,
      title: 'Save',
      description: 'Bookmark opportunities you love and never miss a deadline',
      color: 'from-emerald-green to-green-500'
    },
    {
      icon: Send,
      title: 'Apply',
      description: 'Submit applications directly or through our partner links',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      title: 'Track',
      description: 'Monitor your applications and celebrate your successes',
      color: 'from-coral-peach to-orange-500'
    }
  ];

  const testimonials = [
    {
      quote: "Networkly helped me find my dream internship! The platform is so easy to use and the opportunities are actually relevant.",
      author: "Sarah M.",
      school: "11th Grade, Lincoln High"
    },
    {
      quote: "I saved so much time not having to search through multiple websites. Everything I need is in one place!",
      author: "Marcus T.",
      school: "12th Grade, Roosevelt Academy"
    },
    {
      quote: "The deadline reminders are a lifesaver. I used to miss so many opportunities before finding this platform.",
      author: "Priya K.",
      school: "10th Grade, Washington Prep"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '1,247+', label: 'Opportunities', color: 'text-electric-blue' },
    { icon: Users, value: '5,420+', label: 'Students Helped', color: 'text-emerald-green' },
    { icon: CheckCircle, value: '94%', label: 'Success Rate', color: 'text-royal-purple' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-navy via-deep-blue to-royal-blue pt-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-bright-teal to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-10 -right-20 w-96 h-96 bg-gradient-to-br from-royal-blue to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-soft-teal flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simplifying Your Path to Success
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            We're high school students who experienced the struggle of finding opportunities firsthand.
            That's why we built Networkly—to make discovering internships, scholarships, and programs
            <span className="font-bold text-bright-teal"> simple, organized, and stress-free</span>.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-6 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block mb-3"
              >
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto`} />
              </motion.div>
              <div className={`text-3xl md:text-4xl font-bold text-bright-teal mb-2`}>
                {stat.value}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-20"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <div className="flex items-start gap-6">
                <motion.div 
                  className="p-4 bg-electric-blue bg-opacity-10 rounded-2xl flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Target className="w-10 h-10 text-electric-blue" />
                </motion.div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    To create a <span className="font-bold text-electric-blue">single, centralized platform</span> where
                    high school students can showcase their authentic selves and discover opportunities that genuinely
                    align with their goals and interests.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    No more endless searching. No more missed deadlines. No more overwhelm.
                    Just <span className="font-bold text-emerald-green">real connections</span> that help you grow.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <div className="flex items-start gap-6">
                <motion.div 
                  className="p-4 bg-emerald-green bg-opacity-10 rounded-2xl flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Lightbulb className="w-10 h-10 text-emerald-green" />
                </motion.div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">Why We Built This</h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    As students ourselves, we lived through the frustration of finding opportunities scattered across
                    dozens of websites, uncertain which were legitimate, and constantly worried about missing deadlines.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    We wanted a platform that felt <span className="font-bold text-purple-600">human, not corporate</span>.
                    One built by people who understand the struggle because we're experiencing it too.
                  </p>
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-4">
                    <p className="text-yellow-900 font-medium">
                      💡 <span className="font-bold">Our Philosophy:</span> If it helps us, it'll help you.
                      Every feature we build solves a real problem we've faced.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <div className="flex items-start gap-6">
                <motion.div 
                  className="p-4 bg-coral-peach bg-opacity-10 rounded-2xl flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Heart className="w-10 h-10 text-coral-peach" />
                </motion.div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">What Makes Us Different</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: UserCheck, title: 'Built by Students', desc: 'Created by people who actually use it daily', color: 'text-electric-blue', bgColor: 'bg-blue-100' },
                      { icon: Sparkles, title: 'Curated Quality', desc: 'Verified opportunities, not spam dumps', color: 'text-purple-600', bgColor: 'bg-purple-100' },
                      { icon: Bell, title: 'Smart Reminders', desc: 'Never miss another deadline', color: 'text-coral-peach', bgColor: 'bg-orange-100' },
                      { icon: Target, title: 'Real Profiles', desc: 'Show who you really are, not just grades', color: 'text-emerald-green', bgColor: 'bg-green-100' },
                      { icon: BarChart, title: 'Track Progress', desc: 'Monitor all your applications in one place', color: 'text-soft-teal', bgColor: 'bg-teal-100' },
                      { icon: MessageCircle, title: 'Student First', desc: 'Your feedback shapes every update', color: 'text-pink-600', bgColor: 'bg-pink-100' }
                    ].map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                          whileHover={{ x: 5, backgroundColor: '#f0f9ff' }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            className={`${feature.bgColor} p-2.5 rounded-lg flex-shrink-0`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <FeatureIcon className={`w-5 h-5 ${feature.color}`} />
                          </motion.div>
                          <div>
                            <div className="font-bold text-charcoal mb-1">{feature.title}</div>
                            <div className="text-sm text-gray-600">{feature.desc}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* How It Works - Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-royal-purple text-center mb-4">
            How Networkly Works
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Your journey from discovery to success in four simple steps
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <div className="text-center">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="text-4xl font-bold text-gray-200 mb-2">{index + 1}</div>
                      <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </Card>
                  
                  {/* Arrow connector */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-royal-purple text-center mb-4">
            What Students Are Saying
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Real feedback from real students using Networkly
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="text-6xl text-electric-blue mb-4 leading-none">"</div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-bold text-charcoal">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.school}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-electric-blue via-purple-500 to-pink-500 rounded-2xl p-12 shadow-lifted">
            <motion.div
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              This is Just the Beginning
            </h2>
            <p className="text-white text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              We're constantly evolving based on what students actually need.
              Got ideas or feedback? We're listening and building together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton variant="secondary" size="lg">
                Start Exploring
              </CTAButton>
              <CTAButton variant="gradient" size="lg">
                Share Your Feedback
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
