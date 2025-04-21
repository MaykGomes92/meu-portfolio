'use client';
import React from 'react';
import WelcomeTela from '@/WelcomeTela';
import { motion } from 'framer-motion';
import ParticlesComponent from '@/components/particles';
import Loading from '@/components/Loading';
import Projetos from '@/components/Projetos/Projetos';

export default function Home() {
  const [load, setUpdateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if(load){
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading/>
      </div>
    );
  }else {
    return (
      <div className="">
      <WelcomeTela/>
      <Projetos/>
    </div>
  );
}
}
