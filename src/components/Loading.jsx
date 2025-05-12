'use client'
import React from "react";
import { motion } from "framer-motion";
function Loading(props) {
  return <div className="bg-dark-black min-w-screen min-h-screen flex justify-center items-center">
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="relative w-20 h-20 mx-auto mb-10"
      >
        <div className="absolute inset-0 bg-purple-padrao rounded-full animate-ping"></div>
        <div className="absolute inset-0 border-t-2 border-r-2 border-[#6366f1] rounded-full animate-spin"></div>
        <div className="absolute inset-2 bg-dark-black rounded-full flex items-center justify-center">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#818cf8] to-[#4f46e5]">MG</span>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-[#909dda] font-medium"
      >
        Iniciando...
      </motion.p>
    </div>
  </div>;
}

export default Loading; 