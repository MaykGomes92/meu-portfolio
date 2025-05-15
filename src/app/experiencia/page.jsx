'use client'
import React from 'react'
import Header from '@/components/Header/Header'
import Loading from '@/components/Loading'
import Sidebar from '@/components/Sidebar/Sidebar'
import { motion } from 'framer-motion';
import Timeline from '@/components/MinhaTrajetoria/Timeline'
import PageTransicao from '@/components/PageTransicao/PageTransicao';
import ParticlesComponent from '@/components/particles'
const timelineEvents = [
  {
    year: '2024 - Presente',
    title: 'Técnologo em Análise e Desenvolvimento de Sistemas',
    company: 'Universidade Estácio de Sá',
    description: 'Formação em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento web, mobile, fullstack e algoritmos.'
  },
  {
    year: '2023 - 2024',
    title: 'Desenvolvedor Front-end Júnior',
    company: 'GêniuZ',
    description: 'Desenvolvimento de aplicativo mobile com React Native e TypeScript, integração de APIs internas e externas e colaboração em equipe usando Scrum e controle de versão com Git.'
  },
  {
    year: '2023 - 2023',
    title: 'Desenvolvedor Web Júnior',
    company: 'Global Series',
    description: 'Desenvolvimento de website de streaming com React.js e JavaScript. Integração com APIs externas, estilização utilizando Styled-components e controle de versionamento com Git.'
  },

];

export default function Experiencia() {

  const [load, setUpdateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateLoad(false);
    }, 1000);

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
        <motion.div className='relative z-30 flex flex-col h-[100vh]'
          animate={{ opacity: 1, y: 20 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: .6, delay: 1.5 }}
        >
          <Header />
          <Sidebar />
          <div className='mt-20'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >

              <motion.h1
                className="text-4xl font-bold text-neon-blue mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Experiência Profissional
              </motion.h1>

              <motion.p
                className="text-light-gray/70 mb-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Minha jornada profissional e principais conquistas ao longo dos anos
              </motion.p>

              <Timeline events={timelineEvents} />

              <motion.div
                className="mt-16 mb-10 bg-[#2a2a2a] p-4 rounded-xl hover:shadow-[0_0_15px_rgba(0,212,255,0.5)] transition-all duration-300 text-[#c0cccc] font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0 }}
              >
                <h2 className="text-2xl font-bold text-neon-blue mb-4">Destaques da Carreira</h2>
                <ul className="space-y-3 text-light-gray/80">
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Experiência prática com tecnologias modernas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Organização de projetos com boas práticas de arquitetura.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Capacidade de aprendizado contínuo e adaptação.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-blue mr-2">•</span>
                    <span>Portfólio ativo e em constante evolução.</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </>
    )
  }
}
