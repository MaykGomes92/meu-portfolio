'use client';
import { motion } from 'framer-motion';

export default function SucessoContato({ onReset }) {
  return (
    <motion.div
      className="glassmorphism p-12 rounded-xl text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animação de marca de verificação de sucesso */}
      <motion.div
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#00D4FF20] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          delay: 0.2,
          type: "spring",
          stiffness: 200
        }}
      >
        <svg className="w-10 h-10 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <motion.path
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </svg>
      </motion.div>
      
      <motion.h3
        className="text-2xl font-bold mb-2 text-neon-blue"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Mensagem Enviada com Sucesso!
      </motion.h3>
      
      <motion.p
        className="mb-8 text-light-gray/80 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Obrigado por entrar em contato! Retornarei assim que possível.
        Enquanto isso, sinta-se à vontade para conferir meus projetos ou posts no blog.
      </motion.p>
      
      <motion.button
        onClick={onReset}
        className="`text-dark-black  rounded-lg  bg-[rgb(0,212,255)] px-6 py-3 font-bold shadow-[0_0_15px_rgba(0,212,255,0.5)]  transition   duration-300   hover:shadow-[0_0_25px_rgba(0,212,255,0.7)]  cursor-pointer  ease-in-out"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Enviar Outra Mensagem
      </motion.button>
      
      {/* Animação de partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-neon-blue/20"
            initial={{ 
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 + 100 + '%',
              scale: Math.random() * 1 + 0.5
            }}
            animate={{ 
              y: -100,
              transition: {
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: Math.random() * 2
              }
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
} 