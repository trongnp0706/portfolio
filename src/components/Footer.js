'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">Portfolio</h3>
              <p className="text-gray-300 pr-8">
                A passionate Full Stack Web Developer specializing in building exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="mailto:contact@example.com" className="text-gray-300 hover:text-primary transition-colors">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Frontend Development</li>
              <li className="text-gray-300">Backend Development</li>
              <li className="text-gray-300">Mobile Development</li>
              <li className="text-gray-300">UI/UX Design</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">San Francisco, USA</li>
              <li className="text-gray-300">contact@example.com</li>
              <li className="text-gray-300">+1 (123) 456-7890</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 text-sm"
          >
            © {currentYear} Portfolio. All rights reserved.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 bg-primary/20 hover:bg-primary/30 text-primary rounded-full flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;