'use client';

import { motion } from 'framer-motion';

const Publications = () => {
  const publications = [
    {
      id: 1,
      src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7458024136691359744?collapsed=1',
    },
    {
      id: 2,
      src: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7456098451034923008',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="publications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/7 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Publicações
          </h2>
          <p className="text-slate-400 text-lg">
            Acompanhe minhas publicações e reflexões sobre desenvolvimento e tecnologia
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 place-items-center"
        >
          {publications.map((publication) => (
            <motion.div
              key={publication.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="w-full max-w-md md:max-w-2xl"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-emerald-400/20 hover:border-emerald-400/50 transition-colors duration-300 shadow-2xl">
                {/* Iframe container responsivo */}
                <div className="relative w-full" style={{ paddingBottom: '133%' }}>
                  <iframe
                    src={publication.src}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    frameBorder="0"
                    allowFullScreen
                    title="Publicação LinkedIn"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Clique para ver a publicação completa no LinkedIn →
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Publications;
