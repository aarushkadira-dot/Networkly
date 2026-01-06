import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle, Sparkles, Heart, Clock, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/liquid-glass-button';
import { useToast } from '../components/common/SuccessToast';
import { ConfettiCelebration } from '../components/common/SuccessToast';
import { fadeInUp, staggerContainer } from '../lib/animations';

function Contact() {
  const { showCelebration } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'subject':
        return value.length < 5 ? 'Subject must be at least 5 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate on change if field was touched
    if (touchedFields.has(name)) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouchedFields(new Set([...touchedFields, name]));
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouchedFields(new Set(Object.keys(formData)));
      return;
    }

    setSubmitted(true);
    setShowConfetti(true);
    showCelebration('Message sent successfully!');

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTouchedFields(new Set());
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-dark-navy relative">
      {showConfetti && <ConfettiCelebration />}
      {/* Background Gradient - Standard Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        {/* Hero Section */}
        <motion.div
          className="text-center"
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
            <Sparkles className="h-4 w-4" />
            <span>We'd love to hear from you</span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Let's</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Have questions, ideas, or just want to chat? We're here to help you reach your goals.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/60">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm">Every message matters</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm">24hr response time</span>
            </div>
          </div>
        </motion.div>

        {/* Motivational Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white/70">
              <Heart className="w-6 h-6 text-secondary flex-shrink-0" />
              <p className="font-sans">
                <span className="font-semibold text-white">Don't hesitate!</span> Whether it's feedback, questions,
                or just a hello, we genuinely want to hear from you. Your input shapes Networkly!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <motion.div variants={fadeInUp}>
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-4 bg-primary/10 rounded-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Mail className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-white mb-2">Email Us Directly</h3>
                  <p className="text-white/60 mb-4 font-sans">For quick questions or feedback</p>
                  <div className="space-y-2">
                    <a
                      href="mailto:aarush.kadira@gmail.com"
                      className="block text-secondary hover:underline font-medium"
                    >
                      aarush.kadira@gmail.com
                    </a>
                    <a
                      href="mailto:saatviksantosh10@gmail.com"
                      className="block text-secondary hover:underline font-medium"
                    >
                      saatviksantosh10@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-4 bg-accent/10 rounded-2xl"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <MessageSquare className="w-8 h-8 text-accent" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-xl text-white mb-2">Share Your Ideas</h3>
                  <p className="text-white/60 mb-4 font-sans">
                    Got suggestions for features or improvements? Your feedback directly shapes what we build next!
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-medium">
                      Feature Requests
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                      Bug Reports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-secondary" />
              <h2 className="font-heading text-2xl font-bold text-white">Send us a Message</h2>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center"
                  >
                    <CheckCircle className="w-12 h-12 text-accent" />
                  </motion.div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-3">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-white/60 mb-2 font-sans">
                    Thanks for reaching out! We'll get back to you soon.
                  </p>
                  <p className="text-secondary font-medium">
                    Keep building your future! 🚀
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"
                        required
                      />
                      <AnimatePresence>
                        {errors.name && touchedFields.has('name') && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 mt-2 text-red-600 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.name}</span>
                          </motion.div>
                        )}
                        {formData.name && !errors.name && touchedFields.has('name') && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-green-600 text-sm"
                          >
                            <CheckCircle className="w-4 h-4" />
                            <span>Looks good!</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <Input
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        required
                      />
                      <AnimatePresence>
                        {errors.email && touchedFields.has('email') && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 mt-2 text-red-600 text-sm"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>{errors.email}</span>
                          </motion.div>
                        )}
                        {formData.email && !errors.email && touchedFields.has('email') && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mt-2 text-green-600 text-sm"
                          >
                            <CheckCircle className="w-4 h-4" />
                            <span>Perfect!</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="What's this about?"
                      required
                    />
                    <AnimatePresence>
                      {errors.subject && touchedFields.has('subject') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 mt-2 text-red-600 text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.subject}</span>
                        </motion.div>
                      )}
                      {formData.subject && !errors.subject && touchedFields.has('subject') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 mt-2 text-green-600 text-sm"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Great!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us what's on your mind... We're excited to hear from you! 💬"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-white/10 rounded-xl transition-all duration-200
                    bg-white/5 text-white placeholder-white/40
                    hover:border-white/20
                    focus:outline-none focus:ring-1 focus:ring-white/20 focus:border-white/20 focus:bg-white/10 resize-none"
                    />
                    <AnimatePresence>
                      {errors.message && touchedFields.has('message') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 mt-2 text-red-600 text-sm"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.message}</span>
                        </motion.div>
                      )}
                      {formData.message && !errors.message && touchedFields.has('message') && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 mt-2 text-green-600 text-sm"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span>Awesome message!</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <p className="text-sm text-white/50 mt-2">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="flex-1">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <motion.button
                      type="button"
                      onClick={() => {
                        setFormData({ name: '', email: '', subject: '', message: '' });
                        setErrors({});
                        setTouchedFields(new Set());
                      }}
                      className="px-6 py-3 border border-white/10 text-white rounded-xl font-medium hover:bg-white/5 hover:border-white/20 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Clear Form
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-white/50">
                    <Shield className="w-4 h-4 text-accent" />
                    <p>We respect your privacy and will never share your information</p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
