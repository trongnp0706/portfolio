'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.'
    },
    {
      icon: <FaServer size={24} />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and various databases.'
    },
    {
      icon: <FaMobile size={24} />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications using React Native.'
    },
    {
      icon: <FaDatabase size={24} />,
      title: 'Database Design',
      description: 'Designing and implementing efficient database schemas with SQL and NoSQL databases.'
    }
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            I am a passionate full-stack developer with a strong focus on creating efficient, 
            scalable, and user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-secondary">
              With over 5 years of experience in web development, I have worked on a variety of projects 
              ranging from small business websites to complex enterprise applications. My journey began 
              with a deep interest in creating user interfaces that are not only visually appealing 
              but also provide an excellent user experience.
            </p>
            <p className="text-secondary">
              I am constantly learning and adapting to new technologies and methodologies to ensure that 
              I can provide the best solutions for my clients. I believe in writing clean, maintainable 
              code and following best practices in software development.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium inline-block"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-light p-8 rounded-xl shadow-md"
        >
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-secondary">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-secondary">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-secondary">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-secondary">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 