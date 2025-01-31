import React, { useState } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const navLinks = [
    { title: 'HOME', href: '#home' },
    { title: 'SKILLS', href: '#skills' },
    { title: 'PROJECTS', href: '#projects' }
  ];

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={menuVariants}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="mailto:arshadali82401@gmail.com"
            className="hidden md:flex items-center px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-200"
          >
            <Mail size={18} className="mr-2" />
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-gray-800 hover:text-gray-600 font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <a
                href="mailto:arshadali82401@gmail.com"
                className="flex items-center px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors duration-200 w-fit"
              >
                <Mail size={18} className="mr-2" />
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;