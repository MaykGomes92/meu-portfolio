'use client';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function DefaultScene({ onLoaded, ...props }) {
  const ref = useRef();
  const gltf = useGLTF('/models/meu-modelo.glb');

  useEffect(() => {
    if (gltf && onLoaded) {
      onLoaded(); // avisa que carregou
    }
  }, [gltf, onLoaded]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x += 0.002;
    }
  });

  return <primitive ref={ref} object={gltf.scene} {...props} />;
}
