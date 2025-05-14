import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {
  HomeIcon, UserIcon, FolderIcon,
  EnvelopeIcon,
  ChevronLeftIcon, ChevronRightIcon,
  CodeBracketIcon, BriefcaseIcon
} from '../icons';


export default function Sidebar({ activePage, open=true }) {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Início", path: "/", icon: <HomeIcon className="w-4 h-4" /> },
    { name: "Sobre", path: "/sobre", icon: <UserIcon className="w-4 h-4" /> },
    { name: "Projetos", path: "/projetos", icon: <FolderIcon className="w-4 h-4" /> },
    { name: "Habilidades", path: "/habilidades", icon: <CodeBracketIcon className="w-4 h-4" /> },
    { name: "Experiência", path: "/experiencia", icon: <BriefcaseIcon className="w-4 h-4" /> },
    { name: "Contato", path: "/contato", icon: <EnvelopeIcon className="w-4 h-4" /> }
  ];

  if (!mounted) return null;

  return (
    open ??
    <motion.aside
      className="fixed inset-0 flex justify-center items-center z-[98]"
      animate={{
        width: expanded ? 220 : 64,
        height: 'auto',
      }}
      initial={{ width: 64 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex flex-col bg-[#0f172a80] backdrop-blur-md border border-[#6366f110] rounded-full shadow-xl p-4">
        {/* Sidebar centralizado */}
        <nav className="flex flex-col justify-center items-center py-4 space-y-2">
          {/* Lista de navegação */}
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = usePathname() === item.path;

              return (
                <li key={item.name}>
                  <Link href={item.path} legacyBehavior>
                    <a title={item.name}>
                      <motion.div
                        className={`flex items-center ${expanded ? 'justify-start' : 'justify-center'} p-2 rounded-full transition-all relative ${isActive
                          ? "text-white  border-l-[3px] border-purple-padrao"
                          : "text-gray-300 hover:text-white hover:bg-[#6366f1]/5"
                          }`}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-[#6366f110] rounded-full border-l-2 border-[#6366f1]"
                            layoutId="activeNavItem"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span className={`relative z-10 ${expanded ? 'mr-3' : ''}`}>{item.icon}</span>
                        {expanded && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative z-10 text-sm font-medium"
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </motion.div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Botão de expandir/recolher o menu */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors text-primary-400"
            aria-label={expanded ? "Recolher menu" : "Expandir menu"}
          >
            {expanded ?
              <ChevronLeftIcon className="w-4 h-4" /> :
              <ChevronRightIcon className="w-4 h-4" />
            }
          </button>
        </nav>
      </div>
    </motion.aside>
  );
}
