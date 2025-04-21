import React from 'react'
import Header from './components/Header/Header'
import ParticlesComponent from '@/components/particles';
import SceneActive from './components/Scene/SceneActive';
export default function WelcomeTela() {
  return (
    <div className='relative  mt-[150px] '>
      <Header />
      <SceneActive/>
      <ParticlesComponent id="particles"/>
    </div>
  )
}
