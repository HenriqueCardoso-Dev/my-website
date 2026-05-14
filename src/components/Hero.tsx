'use client';

import { motion, easeInOut } from 'framer-motion';

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  // Componente de partículas
  const Particle = ({ delay }: { delay: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        y: [0, Math.random() * 100 - 50],
        x: [0, Math.random() * 100 - 50],
        opacity: [0.5, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
      }}
      className="absolute w-2 h-2 bg-cyan-400 rounded-full"
      style={{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
      }}
    />
  );

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-950 flex items-center justify-center">
      {/* Background com efeito grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(52,211,153,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(52,211,153,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <motion.div
            className="inline-block px-4 py-2 rounded-full border border-emerald-400 bg-emerald-400/10 backdrop-blur-sm"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.35)' }}
          >
            <span className="text-emerald-300 text-sm font-semibold">✨ Bem-vindo ao meu portfólio</span>
          </motion.div>
        </motion.div>

        {/* Título principal */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="relative inline-block">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                Olá, eu sou o Henrique!
              </motion.h1>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-25 -z-10"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Subtítulo com efeito de digitação */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 font-light"
            >
              Desenvolvedor Full Stack apaixonado por criar{' '}
              <motion.span
                className="text-emerald-300 font-semibold"
                animate={{ color: ['rgb(16, 185, 129)', 'rgb(56, 189, 248)', 'rgb(16, 185, 129)'] }}
              >
                experiências digitais
              </motion.span>
              <span className="inline-block ml-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="inline-block"
                >
                  🚀
                </motion.span>
              </span>
            </motion.p>
          </motion.div>

          {/* Descrição */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-lg max-w-2xl mx-auto leading-relaxed px-4"
          >
            Transformando ideias em código inteligente. Especializado em React, Next.js e desenvolvimento web moderno.
            Vamos criar algo incrível juntos?
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.a
              href="#about"
              className="px-5 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Conhecer mais sobre mim
            </motion.a>

            <motion.a
              href="#projects"
              className="px-5 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 rounded-lg border-2 border-emerald-400 text-emerald-300 font-semibold text-sm sm:text-base md:text-lg hover:bg-emerald-400/10 transition-colors duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Ver meus projetos
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={floatingVariants}
            initial="hidden"
            animate="visible"
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex justify-center"
            >
              <motion.a href="#about" className="border-2 border-cyan-400 rounded-full p-3 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 transition-colors cursor-pointer inline-flex" whileHover={{ scale: 1.1 }}>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Efeitos flutuantes decorativos */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-emerald-500 rounded-full filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-20"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Hero;
