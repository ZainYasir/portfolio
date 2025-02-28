import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Twitter, Globe } from 'lucide-react';

const Contact: React.FC = () => {
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

  const contactMethods = [
    {
      icon: <Mail size={24} className="text-neon-purple" />,
      title: 'Email',
      value: 'itszainyasir@gmail.com',
      link: 'mailto:itszainyasir@gmail.com',
    },
    {
      icon: <Linkedin size={24} className="text-neon-blue" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/zainyasir',
      link: 'https://www.linkedin.com/in/zain-yasir-36857431b',
    },
    {
      icon: <Github size={24} className="text-neon-pink" />,
      title: 'GitHub',
      value: 'github.com/zainyasir',
      link: 'https://github.com/zainyasir',
    },
   
    {
      icon: <Globe size={24} className="text-neon-purple" />,
      title: 'Whatsapp',
      value: '+923133344333',
      link: 'https://zainyasir.com',
    },
  ];

  return (
    <section id="contact" ref={ref} className="section relative overflow-hidden bg-darker">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-heading text-center">
            Let's Build Something Great
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-12 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Contact form */}
            <motion.div variants={itemVariants} className="card">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-dark border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-dark border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-dark border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="glow-button w-full py-3 rounded-lg font-medium"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            {/* Contact info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-dark border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-300"
                  >
                    <div className="mr-4">{method.icon}</div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400">{method.title}</h4>
                      <p className="text-white">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-800">
                <p className="text-gray-400 mb-4">Available for freelance work and full-time positions.</p>
                <p className="text-gray-400">Based in <span className="text-white">Pakistan, Rawalpindi</span></p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;