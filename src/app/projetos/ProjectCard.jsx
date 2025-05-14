'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl bg-[#1e293b50] backdrop-blur-sm border border-primary-500/10 flex flex-col shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Imagem */}
      <div className="relative overflow-hidden aspect-video w-full group">
        <div className={`absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 ${!imageError ? 'opacity-0' : 'opacity-100'}`} />
        {!imageError && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            onError={() => setImageError(true)}
            priority={project.featured}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a50] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        {/* Ações */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <motion.a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-amber-600 text-white text-sm py-2.5 px-5 font-medium flex items-center gap-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c..."></path>
            </svg>
            Código
          </motion.a>
          {project.demo && (
            <motion.a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#334155] text-white text-sm py-2.5 px-7 font-medium flex  shadow-lg text-center "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demo
            </motion.a>
          )}
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 flex items-center gap-1.5">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198..."></path>
            </svg>
            Destaque
          </div>
        )}
      </div>

      {/* Informações */}
      <div className="p-6 flex-1 flex flex-col">
        <a href={project.github} target='_blank' className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">{project.title}</a>
        <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3">{project.description}</p>

        <div className="mb-3 flex flex-wrap gap-2">
          {project.category.map((cat, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-0.5 rounded-full bg-[#1e293b10] text-[#a5b4fc] border border-primary-[#1e293b20]"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-primary-500/10">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-0.5 rounded-md bg-[#334155] text-[#c7d2fe]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
