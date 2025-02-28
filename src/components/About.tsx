import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Server, Gamepad2, Cloud, Bot } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    { 
      icon: <Brain size={32} className="text-neon-purple" />, 
      title: 'Artificial Intelligence',
      description: 'Developing intelligent systems that learn and adapt to solve complex problems.'
    },
    { 
      icon: <Server size={32} className="text-neon-blue" />, 
      title: 'DevOps',
      description: 'Streamlining development workflows and optimizing deployment pipelines.'
    },
    { 
      icon: <Gamepad2 size={32} className="text-neon-pink" />, 
      title: 'Game Development',
      description: 'Creating immersive gaming experiences with cutting-edge technology.'
    },
    { 
      icon: <Cloud size={32} className="text-neon-blue" />, 
      title: 'Cloud Computing',
      description: 'Building scalable and resilient cloud-native applications.'
    },
    { 
      icon: <Bot size={32} className="text-neon-purple" />, 
      title: 'Large Language Models',
      description: 'Implementing and fine-tuning LLMs for specialized applications.'
    },
  ];

  return (
    <section id="about" ref={ref} className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-gray-300 mb-6 text-center">
              I'm a passionate Machine Learning Engineer and Game Developer with expertise in building intelligent systems, 
              optimizing DevOps workflows, and creating immersive gaming experiences.
            </p>
            <p className="text-gray-400 mb-6 text-center">
              With a background in computer science and a deep interest in artificial intelligence, 
              I combine technical expertise with creative problem-solving to deliver innovative solutions 
              across various domains including healthcare, cybersecurity, and entertainment.
            </p>
          </motion.div>
          
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center text-gradient">
            Core Expertise
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card flex flex-col items-center text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 p-4 rounded-full bg-darker glow-border">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;