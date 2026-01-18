'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import aboutData from '../data/about.json';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative pt-24"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="mx-auto px-8 relative z-10 max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-white font-mono">Sobre Mim</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 p-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="w-48 h-48 md:w-[200px] md:h-[200px] bg-white/10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-white/20 md:mr-12"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <Image
                src={aboutData.profileImage}
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="text-white mt-6 md:mt-0 max-w-[900px]">
              <h3 className="text-2xl font-semibold mb-2 font-mono">{aboutData.name}</h3>
              <p className="text-lg text-gray-300 mb-4">{aboutData.title}</p>
              <p className="text-gray-200">{aboutData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;