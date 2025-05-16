'use client';
import { Canvas } from '@react-three/fiber';
import Typewriter from 'typewriter-effect';
import { Environment } from '@react-three/drei';
import DefaultScene from './DefaultScene';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";

export default function SceneActive() {

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

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

  const radius = 40;
  const angle = useMotionValue(0)

  useAnimationFrame((t) => {
    const rotationSpeed = 0.001;
    angle.set(t * rotationSpeed)
  })

  const x = useTransform(angle, (a) => Math.cos(a) * radius)
  const y = useTransform(angle, (a) => Math.sin(a) * radius)

  return (
    <div className="w-full h-[800px]"
    >
      <motion.div className='relative m-auto z-[99] max-w-[800px] p-5 transition-transform duration-1000 transform hover:scale-105'
        initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, }}>
        <motion.div
          style={{
            x,
            y,
            width: '10px',
            height: '10px',
            background: '#6366f1',
            borderRadius: '50%',
            marginLeft: '55%',
            marginBottom: '-40px',
            position: 'absolute',
            zIndex: 99
          }}
        >
        </motion.div>
        <Image
          src="/avatar.png"
          width={140}
          height={140}
          alt='Mayk Gomes'
          priority
          className='rounded-full m-auto border-2 border-purple-padrao ring-1 ring-purple-padrao shadow-[0_0_25px_5px_rgba(0,0,255,0.5)] transition-transform duration-1000 transform hover:scale-115 hover:rotate-x-[25deg] hover:rotate-y-[25deg]'
        />
        <h1 className='text-white text-center text-[80px] transition-transform duration-1000 transform hover:scale-115 hover:rotate-x-[-25deg] hover:rotate-y-[5deg]'>Mayk <span className='text-[#818cf8] font-bold'>Gomes</span></h1>
        <div className='text-[#818cf8] text-3xl text-center mb-14 mt-5 font-extralight font-sans tracking-wider'>
          <Typewriter
            options={{
              strings: ['Frontend Development', 'React & Next.Js', 'TailwindCss', 'Mobile Developer', 'Apaixonado por Games & Animes!'],
              autoStart: true,
              loop: true,
              delay: 30,
            }}
          />

        </div>
        <p className='text-white text-center text-[20px] transition-transform duration-1000 transform hover:scale-115 hover:rotate-x-[5deg] hover:rotate-y-[25deg]'>Desenvolvedor Full-stack especializado em criar experiências digitais modernas,interativas e de alto impacto. Combinando design elegante com código eficiente para desenvolver soluções web inovadoras.</p>
        <div className='flex justify-center gap-10 mt-10'>
          <Link href="/sobre" legacyBehavior>
            <a>
              <motion.button
                className="relative cursor-pointer px-7 py-3 font-medium text-white bg-purple-600 rounded-lg overflow-hidden group"
                whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ y: 0, boxShadow: "none", scale: 0.98 }}
              >
                <span className="relative">Explorar Portfólio</span>
                <motion.div
                  className="absolute inset-0 bg-primary-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.button>
            </a>
          </Link>
          <Link href="/contato" legacyBehavior>
            <a>
              <motion.button
                className="relative cursor-pointer px-7 py-3 font-medium text-[#909dda] bg-transparent rounded-lg border border-primary-500/30 overflow-hidden group"
                whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ y: 0, boxShadow: "none", scale: 0.98 }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Entre em Contato</span>
                <motion.div
                  className="absolute inset-0 bg-primary-600/90"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.button>
            </a>
          </Link>
        </div>
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-14 p-4 mt-4"
        >
          {[
            { icon: <FaGithub color='#ffff' size='30px' />, url: "https://github.com/MaykGomes92", label: "GitHub" },
            { icon: <FaLinkedin color='#ffff' size='30px' />, url: "https://www.linkedin.com/in/mayk-gomes-11b86222b/", label: "LinkedIn" },
            { icon: <MdOutlineMail color='#ffff' size='30px' />, url: "/contato", label: "Contato" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="text-gray-400 hover:text-[#818cf8] transition-colors p-2 relative group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
              target='blank'
            >
              <i className='text-xl'>{social.icon}</i>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </span>
              <div className="absolute -inset-1 rounded-lg bg-[#6366f1] opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }} className='hidden md:block absolute top-[-100%] h-[700px] opacity-65 z-40'>
        <ambientLight intensity={0.1} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Environment preset="sunset" />

        <Suspense fallback={null}>
          <DefaultScene scale={0.15} position={[0, -1.2, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}