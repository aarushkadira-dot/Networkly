import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Opportunities', path: '/opportunities' },
      { name: 'Student Profiles', path: '/profile' },
      { name: 'About Us', path: '/about' },
      { name: 'Team', path: '/team' },
    ],
    support: [
      { name: 'Contact', path: '/contact' },
      { name: 'Help Center', path: '/help' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:hello@networkly.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/company/networkly', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/networkly', label: 'GitHub' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue to-teal rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-poppins font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-poppins font-semibold">Networkly</span>
            </div>
            <p className="text-blue-200 leading-relaxed mb-6 font-inter">
              Empowering Tomorrow's Leaders
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-poppins font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors duration-300 font-open-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-poppins font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors duration-300 font-open-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-lg font-poppins font-semibold mb-4">Stay Updated</h3>
            <p className="text-blue-200 mb-4 font-inter">
              Get the latest opportunities and updates delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all duration-300"
              />
              <motion.button
                className="px-4 py-2 bg-gradient-to-r from-blue to-teal hover:from-blue-600 hover:to-teal-600 text-white rounded-lg font-inter font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-blue-200 font-inter">
              <span>© {currentYear} Networkly. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>
              <span>by students.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-blue-200">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">
                Terms
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
