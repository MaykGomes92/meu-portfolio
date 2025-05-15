'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function PageTransicao() {
  return (
    <motion.div className='bg-dark-black w-[99vw] h-[100vh] absolute top-0 left-0 z-10'
      initial={{ width: '99vw', height:'100vh' }}
      animate={{  width: '0vw', height:'0vh' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.div className="w-8 h-[100vh] bg-purple-500/30 shadow absolute top-0 left-0 blur-[12px]"
        initial={{ opacity: 0, x: '0vw' }}
        animate={{ opacity: [0, 0.4, 0.6, 0.8, 1, 0], x: '99vw', width: '0' }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
      </motion.div>
    </motion.div>
  )
}
