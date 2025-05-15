import React from 'react'
import Header from './components/Header/Header'
import ParticlesComponent from '@/components/particles';
import dynamic from 'next/dynamic'
import Sidebar from './components/Sidebar/Sidebar';
import PageTransicao from './components/PageTransicao/PageTransicao';
import { motion } from 'framer-motion';

const SceneActive = dynamic(() => import('@/components/Scene/SceneActive'), { ssr: false });

export default function WelcomeTela() {

  return (
    <>
      <PageTransicao />
      <motion.div className='relative  mt-[150px] '
        animate={{ opacity: 1, }}
        initial={{ opacity: 0 }}
        transition={{ duration: .6, delay: 0.8 }}
      >
        <Header />
        <Sidebar open={false} />
        <SceneActive />
        <ParticlesComponent id="particles" />
      </motion.div>
    </>
  )
}
