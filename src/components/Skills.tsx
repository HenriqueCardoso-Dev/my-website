'use client';

import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            className={`text-lg ${i < rating ? 'text-emerald-300' : 'text-slate-500'}`}
            whileHover={{ scale: 1.2 }}
          >
            ★
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-20 bg-slate-950 text-white min-h-screen flex items-center"
    >
      <div className="mx-auto px-8 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Tecnologias & Habilidades
          </h2>
          <p className="text-slate-400 text-lg">
            Tecnologias e ferramentas nas quais tenho experiência prática
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
              }}
              className="bg-slate-900 rounded-lg p-4 border border-slate-700 hover:border-emerald-400 transition-colors duration-300 flex flex-row items-center"
            >
              <motion.div
                className={`${skill.color} w-10 h-10 rounded-lg flex items-center justify-center text-2xl mr-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {skill.icon}
              </motion.div>

              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 text-white">
                  {skill.name}
                </h3>

                <StarRating rating={skill.rating} />

                <motion.div
                  className="mt-2 text-xs text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {skill.rating === 5 && 'Avançado'}
                  {skill.rating === 4 && 'Intermediário'}
                  {(skill.rating === 2 || skill.rating === 3) && 'Básico'}
                  {skill.rating === 1 && 'Iniciante'}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
