'use client'
import { motion } from 'framer-motion'


export default function SkillCard({ name, level, icon, delay }) {
  return (
    <motion.div
      className="glassmorphism flex flex-col items-center p-6 rounded-xl bg-[#2a2a2a]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 212, 255, 0.6)' }}
    >
      <div className="w-16 h-16 relative mb-4 flex items-center justify-center text-neon-blue text-4xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2 text-neon-blue">{name}</h3>
      
      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-2">
        <motion.div
          className="h-full bg-neon-blue"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      
      <p className="text-sm font-semibold text-[#9ca3af] mt-2">
        {level}% proficiência
      </p>
    </motion.div>
  )
} 