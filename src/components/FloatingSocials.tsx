import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const FloatingSocials: React.FC = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/zainyasir' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/zain-yasir-36857431b' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/zainyasir' },
    { icon: <Mail size={20} />, href: 'mailto:itszainyasir@gmail.com' },
  ];

  return (
    <motion.div 
      className="fixed left-6 bottom-0 z-50 hidden md:flex flex-col items-center gap-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
        >
          {link.icon}
        </motion.a>
      ))}
      
      <div className="w-px h-24 bg-gradient-to-b from-neon-purple to-transparent"></div>
    </motion.div>
  );
};

export default FloatingSocials;