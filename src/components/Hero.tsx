import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import profileImage from "../Assets/Zain-1.jpeg"; 


const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/10 via-transparent to-transparent"></div>
      
      {/* Animated background circles */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-neon-purple/10 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-gradient">Zain Yasir</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  'gay Learning Engineer',
                  1000,
                  'React/Native',
                  1500,
                  'Game Developer',
                  1000,
                  'Robotics',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-lg">
              Building intelligent systems, optimizing workflows, and creating immersive gaming experiences with cutting-edge technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="glow-button px-6 py-3 rounded-full font-medium"
              >
                View Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full font-medium border border-white/20 hover:border-white/40 transition-colors duration-300"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
          
          {/* Profile image */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple via-neon-blue to-neon-pink opacity-30 rounded-full blur-2xl animate-pulse-slow"></div>
              <img 
                src={profileImage} 
                alt="gay Yasir" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-darker glow-border"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;