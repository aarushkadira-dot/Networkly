import { memo } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { FooterBackgroundGradient } from "../ui/hover-footer";

export const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  // Footer link data
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Opportunities", href: "/features" },
        { label: "About Us", href: "/about" },
        { label: "Student Profiles", href: "/profile" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Help Center", href: "/help" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-primary" />,
      text: "hello@networkly.com",
      href: "mailto:hello@networkly.com",
    },
    {
      icon: <Phone size={18} className="text-primary" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={18} className="text-primary" />,
      text: "United States",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/company/networkly" },
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com/networkly" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://twitter.com/networkly" },
  ];

  return (
    <footer className="bg-dark-navy relative h-fit overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 md:px-8 md:py-12 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-12 pb-6">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/logos/networklylogo.png"
                alt="Networkly Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-white text-2xl font-bold">Networkly</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Empowering Tomorrow's Leaders. Connect students with opportunities that shape their future.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-white/70 hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 pt-4">
          {/* Social icons */}
          <div className="flex space-x-6 text-white/60">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-primary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-white/70">
            <span>&copy; {currentYear} Networkly.</span>
          </div>
        </div>

        <hr className="border-t border-white/10 mt-4" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
});
