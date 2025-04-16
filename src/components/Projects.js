'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
      image: '/project1.jpg',
      category: ['web', 'frontend', 'backend'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration with real-time updates.',
      image: '/project2.jpg',
      category: ['web', 'frontend'],
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
    {
      id: 3,
      title: 'Real Estate Listing Portal',
      description: 'A comprehensive real estate platform with property listings, search functionality, and agent profiles.',
      image: '/project3.jpg',
      category: ['web', 'fullstack'],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations.',
      image: '/project4.jpg',
      category: ['mobile'],
      technologies: ['React Native', 'Redux', 'Firebase'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A weather application providing current conditions and forecasts with interactive maps and visualizations.',
      image: '/project5.jpg',
      category: ['web', 'frontend'],
      technologies: ['React', 'API Integration', 'Chart.js'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A content management system for creating and publishing blog posts with user comments and analytics.',
      image: '/project6.jpg',
      category: ['web', 'fullstack'],
      technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-secondary">
            Explore my latest projects showcasing my skills in web and mobile development.
            Each project demonstrates my attention to detail and problem-solving abilities.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeFilter === filter.value 
                  ? 'bg-primary text-white' 
                  : 'bg-light text-secondary hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/30 to-blue-400/30 text-white text-xl font-bold">
                  {project.title}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark hover:text-primary transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-dark hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
          >
            <FaGithub /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 