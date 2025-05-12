'use client'
import React from 'react'
import MyTecnologias from '@/components/MyTecnologias/MyTecnologias'
import Header from '@/components/Header/Header'
import Loading from '@/components/Loading'
import Sidebar from '@/components/Sidebar/Sidebar'
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
      <div className='flex flex-col justify-center h-[100vh] bg-[#121212]'>
        <Header />
        <Sidebar />
        <div className='mt-12 bg-white m-auto'>
          <h1 className='text-blue-400'>TESTE</h1>
        </div>
      </div>
    )
  }
}
