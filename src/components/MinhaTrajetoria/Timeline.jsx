'use client'

import { motion } from 'framer-motion';

export default function Timeline({ events }) {
  return (
    <div className="relative max-w-4xl mx-auto pb-12">
      {/* Linha vertical */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-neon-blue/50 transform md:translate-x-px"></div>

      {events.map((event, index) => (
        <motion.div
          key={index}
          className={`relative mb-12 md:w-1/2 ${
            index % 2 === 0 ? 'md:pr-8 md:ml-auto' : 'md:pl-8'
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          {/* Ponto da linha do tempo */}
          <div 
            className="absolute md:top-2 top-11 left-5 md:left-auto md:right-0 w-5 h-5 rounded-full border-2 border-neon-blue bg-deep-black z-10 shadow-md shadow-neon-blue/50"
            style={{ 
              [index % 2 === 0 ? 'right' : 'left']: '7px',
            }}
          ></div>

          {/* Badge do ano */}
          <div 
            className={`inline-block px-3 py-1 rounded text-sm font-medium mb-3 bg-neon-blue text-deep-black shadow-md shadow-neon-blue/30 ${
              index % 2 === 0 ? 'md:float-right md:mr-2' : 'md:float-left md:ml-2'
            }`}
          >
            {event.year}
          </div>

          {/* Cartão de conteúdo */}
          <div className="bg-[#2a2a2a] p-4 rounded-xl hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300 text-[#c0cccc] font-semibold">
            <h3 className="text-xl font-bold mb-1 text-neon-blue mt-4">{event.title}</h3>
            <h4 className="font-semibold mb-3 text-light-gray/80">{event.company}</h4>
            <p className="text-light-gray/80">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 