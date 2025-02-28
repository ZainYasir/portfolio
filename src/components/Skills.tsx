import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const skills = {
    languages: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ],
    frameworks: [
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    ],
    tools: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Unity 3D', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    ],
  };

  const certifications = [
    {
      name: 'Oracle Generative AI Professional',
      issuer: 'Oracle',
      date: '2024',
      icon: '🏆',
    },
    {
      name: 'Google Python Professional',
      issuer: 'Google',
      date: '2023',
      icon: '🏆',
    },
    {
      name: 'IBM Machine Learning Professional',
      issuer: 'IBM',
      date: '2023',
      icon: '🏆',
    },
    {
      name: 'AWS Certified DevOps Engineer',
      issuer: 'Amazon Web Services',
      date: '2022',
      icon: '🏆',
    },
  ];

  return (
    <section id="skills" ref={ref} className="section relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            Skills & Certifications
          </motion.h2>
          
          {/* Skills */}
          <div className="mb-16">
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl font-bold mb-8 text-center text-gradient"
            >
              Technical Skills
            </motion.h3>
            
            {/* Languages */}
            <motion.div variants={itemVariants} className="mb-12">
              <h4 className="text-xl font-semibold mb-6 text-center">Programming Languages</h4>
              <div className="flex flex-wrap justify-center gap-6">
                {skills.languages.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="skill-icon flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <span className="text-xs mt-2 text-gray-400">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Frameworks */}
            <motion.div variants={itemVariants} className="mb-12">
              <h4 className="text-xl font-semibold mb-6 text-center">Frameworks & Libraries</h4>
              <div className="flex flex-wrap justify-center gap-6">
                {skills.frameworks.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="skill-icon flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <span className="text-xs mt-2 text-gray-400">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Tools */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-center">Tools & Platforms</h4>
              <div className="flex flex-wrap justify-center gap-6">
                {skills.tools.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="skill-icon flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    <span className="text-xs mt-2 text-gray-400">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Certifications */}
          <motion.div variants={containerVariants}>
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl font-bold mb-8 text-center text-gradient"
            >
              Certifications
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card text-center"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  <p className="text-neon-purple text-sm mt-2">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;