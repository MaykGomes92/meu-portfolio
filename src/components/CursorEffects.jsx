'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorEffects() {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none), (pointer: coarse)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      document.body.style.cursor = 'auto';
    };
  }, [isMobile, mouseX, mouseY]);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
    );

    const handleMouseEnter = () => {
      setIsHovering(true);
      if (cursorRef.current) cursorRef.current.classList.add('cursor-expanded');
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      if (cursorRef.current) cursorRef.current.classList.remove('cursor-expanded');
    };

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          left: 0,
          top: 0,
        }}
      >
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full blur-md transition-all duration-200 ${
            isClicking
            ? 'bg-[#823cf540] scale-90'
            : isHovering
              ? 'bg-[#6366f130] scale-110'
              : 'bg-[#4f46e520]'
          }`}></div>

        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full blur-[2px] transition-all duration-200 
    ${
      isClicking
        ? 'bg-accent/80 scale-90'
        : isHovering
        ? 'bg-[#6366f150]'
        : 'bg-[#818cf840]'
    }`} ></div>

      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-200 
    ${
      isClicking
        ? 'bg-accent'
        : isHovering
        ? 'bg-primary-400 animate-pulse'
        : 'bg-primary-300'
    }`} ></div>
    </motion.div >

      <style jsx global>{`
        * {
          cursor: none !important;
        }

        @media (hover: none), (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }

        .cursor-expanded {
          mix-blend-mode: lighten;
        }
      `}</style>
    </>
  );
}
