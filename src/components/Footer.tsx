import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Phone, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: <Linkedin size={24} />,
    href: 'https://linkedin.com/in/arshad-ali-490079309',
    label: 'LinkedIn'
  },
  {
    icon: <Github size={24} />,
    href: 'https://github.com/ArshadAli01/',
    label: 'GitHub'
  },
  {
    icon: <Instagram size={24} />,
    href: '#',
    label: 'Instagram'
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, opacity: 0.8 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:text-gray-300 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2">
              <motion.a
                href="tel:8240199559"
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <Phone size={20} />
                <span>+91 8240199559</span>
              </motion.a>
              <motion.a
                href="mailto:arshadali82401@gmail.com"
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <Mail size={20} />
                <span>arshadali82401@gmail.com</span>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arshad Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;