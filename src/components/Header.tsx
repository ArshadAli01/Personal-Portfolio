import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Header = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer', 'AI Enthusiast', 'Java Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header id="home" className="min-h-screen bg-gray-50 flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900">
            ARSHAD ALI
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-600 font-medium">
            <span ref={typedRef}></span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed"
          >
            Full-stack web developer with expertise in Java, Python, and AI-driven solutions. 
            Experienced in leading projects that enhance user engagement and solve real-world problems, 
            including resume analysis tools and adaptive IoT systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a
              href="https://www.overleaf.com/read/xjgrnrxmrcqk#5aa729"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;