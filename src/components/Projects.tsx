'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const reversedProjects = projectsData.toReversed();
  const totalPages = Math.ceil(reversedProjects.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProjects = reversedProjects.slice(current * itemsPerPage, (current + 1) * itemsPerPage);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80')] bg-cover bg-center relative pt-24"
    >
      <div className="absolute inset-0 bg-slate-950/80"></div>
      <div className="mx-auto px-4 md:px-8 relative z-10 max-w-8xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white font-mono">Projetos</h2>
        <div className="flex items-center justify-center mb-8 gap-2 md:gap-4">
          <button 
            onClick={prev} 
            className="text-white bg-emerald-900 hover:bg-emerald-700 px-2 md:px-4 py-1 md:py-2 rounded-full text-lg md:text-xl transition-colors"
          >
            ‹
          </button>
          <div className="flex justify-center overflow-hidden">
            <div className="flex gap-4 md:gap-6 lg:gap-8 transition-all duration-300">
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 h-96 md:h-[550px] lg:h-[600px] bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20 w-64 sm:w-72 md:w-80 lg:w-96"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: project.id * 0.1 }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-32 md:h-40 lg:h-48 object-cover" />
                  </a>
                  <div className="p-3 md:p-4 text-white flex flex-col ">
                    <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2 font-mono line-clamp-2">{project.title}</h3>
                    <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4 overflow-y-auto flex-grow">{project.description}</p>
                  </div>
                  <div className='px-3 md:px-4 pb-3 md:pb-4 fixed bottom-0 right-0'>
                    <a 
                      href={project.link} 
                      className="text-emerald-200 hover:text-white transition-colors bg-emerald-900 text-white py-2 md:py-3 px-3 md:px-5 rounded-full text-xs md:text-sm inline-block"
                      target='blank'
                    >
                      Ver Projeto
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button 
            onClick={next} 
            className="text-white bg-emerald-900 hover:bg-emerald-700 px-2 md:px-4 py-1 md:py-2 rounded-full text-lg md:text-xl transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;