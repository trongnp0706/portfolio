'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: <FaHtml5 size={40} />, color: 'text-orange-500' },
    { name: 'CSS3', icon: <FaCss3Alt size={40} />, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs size={40} />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, color: 'text-blue-600' },
    { name: 'React', icon: <FaReact size={40} />, color: 'text-cyan-400' },
    { name: 'Next.js', icon: <SiNextdotjs size={40} />, color: 'text-dark' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, color: 'text-sky-500' },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs size={40} />, color: 'text-green-600' },
    { name: 'Express', icon: <FaNodeJs size={40} />, color: 'text-gray-600' },
    { name: 'MongoDB', icon: <SiMongodb size={40} />, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, color: 'text-blue-500' },
    { name: 'REST API', icon: <FaDatabase size={40} />, color: 'text-indigo-500' },
    { name: 'AWS', icon: <FaAws size={40} />, color: 'text-yellow-500' },
    { name: 'Git', icon: <FaGit size={40} />, color: 'text-red-500' },
    { name: 'Docker', icon: <FaDocker size={40} />, color: 'text-blue-500' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="skills" className="bg-light py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            I specialize in a range of technologies, focusing on modern web development
            with an emphasis on performance, accessibility, and user experience.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Frontend Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className={`${skill.color} mb-4 flex justify-center`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Backend & DevOps</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className={`${skill.color} mb-4 flex justify-center`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 