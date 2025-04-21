'use client';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';


export default function DefaultScene(props) {
  const ref = useRef();
  const gltf = useGLTF('/models/meu-modelo.glb');


  useFrame(() => {
    if (ref.current) {
      if(ref.current){
        ref.current.rotation.y += 0.005;
        ref.current.rotation.x += 0.002;
      }
    }
  });


  return <primitive ref={ref} object={gltf.scene} {...props}/>;
}
