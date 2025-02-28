import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Ddos from "../Assets/ddos.webp";
import ercu from "../Assets/ercu.jpg";
import horror from "../Assets/12-hour1.png";
import SkinD from "../Assets/SkinDjpg.jpg";
import intoD from "../Assets/intoD.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
  category: 'ai' | 'game' | 'devops';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'ERCU (RL Robot)',
      description: 'A reinforcement learning-based robot that learns to navigate complex environments autonomously.',
      image: ercu,
      techStack: ['Python', 'TensorFlow', 'ROS', 'PyTorch'],
      demoLink: '#',
      githubLink: '#',
      category: 'ai',
    },
    {
      id: 2,
      title: 'Skin Disease Scanner',
      description: 'AI-powered application for early detection and classification of skin diseases using computer vision.',
      image: SkinD,
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
      demoLink: '#',
      githubLink: '#',
      category: 'ai',
    },
    {
      id: 3,
      title: 'DDoS Attack Detection',
      description: 'Machine learning model for real-time detection of DDoS attacks in network traffic.',
      image: Ddos,
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'Elasticsearch'],
      demoLink: '#',
      githubLink: '#',
      category: 'ai',
    },
    {
      id: 4,
      title: '12th Hour',
      description: 'A survival horror game developed in UnReal with my Buddy Muhammad ABDULLAH  where players must survive for 12 hours in a haunted facility.',
      image: horror,
      techStack: ['Unreal 4', 'C#', 'Blender', 'C++'],
      demoLink: '#',
      githubLink: '#',
      category: 'game',
    },
    {
      id: 5,
      title: 'Digital Dash',
      description: 'A fast-paced racing game set in a futuristic cyberpunk world with procedurally generated tracks.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      techStack: ['Unreal Engine', 'C++', 'Substance Painter', 'Maya'],
      demoLink: '#',
      githubLink: '#',
      category: 'game',
    },
    {
      id: 6,
      title: 'Into the Dead',
      description: 'A zombie survival game with realistic physics and dynamic day-night cycle.',
      image:intoD,
      techStack: ['Unity 3D', 'C#', 'Blender', 'Adobe Photoshop'],
      demoLink: '#',
      githubLink: '#',
      category: 'game',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'AI & ML', value: 'ai' },
    { name: 'Game Dev', value: 'game' },
    { name: 'DevOps', value: 'devops' },
  ];

  return (
    <section id="projects" ref={ref} className="section relative overflow-hidden bg-darker">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            Featured Projects
          </motion.h2>
          
          {/* Filter buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-neon-purple text-white glow-border'
                    : 'bg-dark text-gray-400 border border-gray-800 hover:border-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>
          
          {/* Projects grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card group overflow-hidden"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent z-10 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 rounded-full bg-darker border border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-neon-blue hover:text-neon-purple transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;