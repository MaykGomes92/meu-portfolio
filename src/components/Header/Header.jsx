'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HomeIcon, 
  UserIcon, 
  FolderIcon, 
  CodeBracketIcon, 
  BriefcaseIcon, 
  PencilIcon, 
  EnvelopeIcon
} from "../icons";
import { useParams } from "next/navigation";

// Animation variants
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

const Navbar = ({ activePage = "/" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(activePage);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section when the activePage prop changes
  useEffect(() => {
    setActiveSection(activePage);
  }, [activePage]);

  // Navigation items
  const navItems = [
    { name: "Início", path: "/", icon: <HomeIcon className="w-4 h-4" /> },
    { name: "Sobre", path: "/sobre", icon: <UserIcon className="w-4 h-4" /> },
    { name: "Projetos", path: "/projetos", icon: <FolderIcon className="w-4 h-4" /> },
    { name: "Habilidades", path: "/habilidades", icon: <CodeBracketIcon className="w-4 h-4" /> },
    { name: "Experiência", path: "/experiencia", icon: <BriefcaseIcon className="w-4 h-4" /> },
    { name: "Contato", path: "/contato", icon: <EnvelopeIcon className="w-4 h-4" /> }
  ];

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed  top-0 w-full z-99 transition-all duration-300 ease-in-out hover:scale-105${
        scrolled 
          ? "bg-secondary-900/80 backdrop-blur-md shadow-md border-b border-primary-500/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center gap-2 group">
                <div className="hidden sm:block">
                  <h2 className="text-sm font-semibold text-white group-hover:text-primary-300 transition-colors hover:text-[#909dda]">Portfolio</h2>
                  <span className="text-xs font-medium text-[#909dda]">Desenvolvedor Front-end</span>
                </div>
              </a>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <motion.ul 
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-1"
            >
              {navItems.map((item) => {
                const isActive = usePathname() === item.path;
                
                return (
                  <motion.li key={item.name} variants={itemVariants}>
                    <Link href={item.path} legacyBehavior>
                      <a 
                        className={`flex items-center px-3 py-2 text-sm font-medium rounded-full transition-all ${
                          isActive 
                            ? "text-white  border-l-[3px] border-purple-padrao" 
                            : "text-gray-300 hover:text-white hover:bg-primary-500/5"
                        }`}
                        onClick={() => {
                          setActiveSection(item.path);
                          
                        }}
                      >
                        <span className="mr-1.5">{item.icon}</span>
                        {item.name}
                      </a>
                    </Link>
                  </motion.li>
                );
              })}
              
              {/* CTA button */}
              <motion.li variants={itemVariants} className="ml-3">
                <a 
                  href="https://github.com/MaykGomes92" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm font-medium rounded-full bg-purple-padrao text-white hover:bg-primary-600 transition-all transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </motion.li>
            </motion.ul>
          </nav>

          <button 
            type="button"
            className="md:hidden p-2 cursor-pointer rounded-full bg-white text-primary-400 hover:text-white hover:bg-purple-padrao transition delay-50 duration-300 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Abrir menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-secondary-900/95 backdrop-blur-md border-b border-primary-500/10"
          >
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path} 
                  legacyBehavior
                >
                  <a 
                    className={`flex items-center px-3 py-2 text-base font-medium rounded-lg ${
                      activeSection === item.path 
                        ? "text-white bg-primary-500/20 border-l-2 border-primary-500" 
                        : "text-gray-300 hover:text-white hover:bg-primary-500/10"
                    }`}
                    onClick={() => {
                      setActiveSection(item.path);
                      setIsOpen(false);
                    }}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </a>
                </Link>
              ))}
              
              <a 
                href="https://github.com/MaykGomes92" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-base font-medium rounded-lg text-white bg-purple-padrao hover:bg-primary-500"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar; 