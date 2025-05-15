'use client'
import React from 'react'
import Header from '@/components/Header/Header'
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import MyTecnologias from '@/components/MyTecnologias/MyTecnologias';
import MinhaTrajetoria from '@/components/MinhaTrajetoria/MinhaTrajetoria';
import Loading from '@/components/Loading';
import Timeline from '@/components/MinhaTrajetoria/Timeline';
import Sidebar from '@/components/Sidebar/Sidebar'
import PageTransicao from '@/components/PageTransicao/PageTransicao';
import ParticlesComponent from '@/components/particles';

export default function Sobre() {

  const [load, setUpdateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateLoad(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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
        <motion.div className='relative pt-30 max-w-[100vw] m-auto md:pb-0 pb-8 z-[4]'
          animate={{ opacity: 1, }}
          initial={{ opacity: 0 }}
          transition={{ duration: .6, delay: 0.8 }}
        >
          <Header />
          <Sidebar />
          <motion.div className='max-w-[1200px] m-auto md:p-0 p-4'
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: [0, 0.4, 0.5], y: -90 }}
            transition={{ duration: .5, delay: 1 }}
          >
          <ParticlesComponent id="particles" />
            <h1 className='text-5xl font-bold text-white mb-10'>Sobre <span className='text-[#00d4ff]'>Mim</span></h1>
            <div className='md:flex text-white gap-8'>
              <div className='flex flex-col gap-4 text-[#b7b7b7] text-[18px] font-semibold'>
                <span className='text-[#c0cccc] font-semibold'>Olá! Sou Mayk Gomes, um desenvolvedor Full-stack apaixonado por criar experiências digitais interativas e inovadoras.</span><br />
                <p>
                  Com mais de 7 anos de experiência no desenvolvimento web, especializei-me em tecnologias modernas como React, Next.js, TypeScript e Three.js. Minha paixão está em construir aplicações que são não apenas funcionais, mas também visualmente impressionantes e intuitivas para os usuários.
                </p>

                <p>
                  Tenho experiência no desenvolvimento de aplicações web complexas, desde o planejamento e arquitetura até a implementação e lançamento. Trabalho confortavelmente tanto no front-end quanto no back-end, com um forte foco em performance, acessibilidade e experiência do usuário.
                </p>
                <p>
                  Além do desenvolvimento web, tenho grande interesse em visualização de dados, gráficos 3D e realidade aumentada. Estou constantemente explorando novas tecnologias e técnicas para criar experiências digitais mais imersivas e interativas.
                </p>
              </div>
              <div className='min-w-[340px] p-4 flex flex-col items-center rounded-2xl bg-[#2a2a2a] border-2 border-[#555555] hover:scale-105 transition-transform duration-600 ease-in-out md:mt-0 mt-8'>
                <h1 className='w-40 h-40 border-2 border-neon-blue/50 rounded-full text-center leading-[160px] text-[#00d4ff] font-bold text-3xl bg-gradient-to-br from-neon-blue/30 to-deep-black '>MG</h1>
                <h1 className='my-4 text-2xl font-semibold text-[#e0e0e0]'>Mayk Gomes</h1>
                <h2 className='text-light-gray font-semibold'>Desenvolvedor Front-end</h2>
                <ul className='flex justify-around'>
                  <motion.div
                    variants={itemVariants}
                    className="flex justify-center gap-10 p-4 mt-4 mb-8"
                  >
                    {[
                      { icon: <FaGithub color='#c7cbd2' size='30px' />, url: "https://github.com/MaykGomes92", label: "GitHub" },
                      { icon: <FaLinkedin color='#c7cbd2' size='30px' />, url: "https://www.linkedin.com/in/mayk-gomes-11b86222b/", label: "LinkedIn" },
                      { icon: <MdOutlineMail color='#c7cbd2' size='30px' />, url: "/contact", label: "Contact" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        className="text-gray-400 hover:text-[#818cf8] transition-colors relative group p-2"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                        target='blank'
                      >
                        <i className={`text-xl`}>{social.icon}</i>
                        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {social.label}
                        </span>
                        <div className="absolute -inset-1 rounded-lg bg-[#6366f1] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      </motion.a>
                    ))}
                  </motion.div>
                </ul>
                <div className='flex w-full justify-between pt-4 border-t-2 border-[#555555]'>
                  <h1 className='text-[#9ca3af] font-bold' >Email:</h1>
                  <p className='text-[#00d4ff]'>maykcontato98@hotmail.com</p>
                </div>
                <div className='flex w-full justify-between'>
                  <h1 className='text-[#9ca3af] font-bold'>Localização:</h1>
                  <p>Rio de Janeiro, Brasil</p>
                </div>
                <div className='flex w-full justify-between'>
                  <h1 className='text-[#9ca3af] font-bold'>Disponível:</h1>
                  <p className='text-green-500 font-semibold'>Entre em contato!</p>
                </div>
              </div>
            </div>
          </motion.div>
          <MyTecnologias title='Minhas' subTitle='Habilidades' />
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className=' max-w-[100vw] m-auto p-6 md:pb-0 pb-8'
          >
            <h2 className="text-4xl font-bold mb-8 text-white w-[50%] text-center">Minha <span className="text-neon-blue">Trajetória</span></h2>

            <Timeline events={timelineEvents} />
          </motion.div>
        </motion.div>
      </>
    )
  }
}
