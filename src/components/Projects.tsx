'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative pt-24"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="mx-auto px-8 relative z-10 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-mono">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4 text-white">
                <h3 className="text-xl font-semibold mb-2 font-mono">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-300 hover:text-blue-100 transition-colors" target='blank'>Ver Projeto</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;