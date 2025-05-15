'use client'
import React from 'react'
import MyTecnologias from '@/components/MyTecnologias/MyTecnologias'
import Header from '@/components/Header/Header'
import Loading from '@/components/Loading'
import Sidebar from '@/components/Sidebar/Sidebar'
import PageTransicao from '@/components/PageTransicao/PageTransicao'
import { motion } from 'framer-motion'
import ParticlesComponent from '@/components/particles'
export default function Habilidades() {

  const [load, setUpdateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateLoad(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);


  if (load) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  } else {
    return (
      <>
        <PageTransicao />
        <ParticlesComponent id="particles" />
        <motion.div className='relative z-20 flex flex-col md:justify-center mt-12 p-2 h-[100vh] md:mt-0 md:p-0'
          animate={{ opacity: 1, }}
          initial={{ opacity: 0 }}
          transition={{ duration: .6, delay: 0.8 }}
        >
          <Header />
          <Sidebar />
          <div className=''>
            <MyTecnologias subTitle='Habilidades Técnicas' description='Explore minhas competências e níveis de proficiência em diferentes tecnologias

'/>
          </div>
        </motion.div>
      </>
    )
  }
}
