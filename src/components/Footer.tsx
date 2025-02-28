import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/zainyasir' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/zainyasir' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com/zainyasir' },
    { icon: <Mail size={18} />, href: 'mailto:contact@zainyasir.com' },
  ];

  return (
    <footer className="py-8 bg-darker border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zain Yasir. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;