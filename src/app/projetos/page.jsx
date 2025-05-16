'use client'
import React from 'react'
import Header from '@/components/Header/Header'
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard';
import Loading from '@/components/Loading';
import Sidebar from '@/components/Sidebar/Sidebar'
import PageTransicao from '@/components/PageTransicao/PageTransicao';
import ParticlesComponent from '@/components/particles';
const categories = ['All', 'Web', 'Mobile', 'UI/UX', '3D', 'Backend']

const projects = [
  {
    id: 1,
    title: 'Global Series',
    description: 'Todas as séries do mundo em um só lugar!',
    image: '/global-series.jpg',
    category: ['ReactJs', 'StyledComponents', 'Javascript', 'Web'],
    technologies: ['React', 'Three.js', 'TailwindCSS'],
    github: 'https://github.com/MaykGomes92',
    demo: 'https://www.linkedin.com/in/mayk-gomes-11b86222b/',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with React and Node.js',
    image: '/global-series.jpg',
    category: ['Web', 'Backend'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/MaykGomes92',
    demo: 'https://www.linkedin.com/in/mayk-gomes-11b86222b/',
    featured: true,
  },
  {
    id: 3,
    title: 'Mobile Weather App',
    description: 'Weather forecast app with beautiful UI and smooth animations',
    image: '/global-series.jpg',
    category: ['Mobile', 'UI/UX'],
    technologies: ['React Native', 'Weather API'],
    github: 'https://github.com/MaykGomes92',
    demo: 'https://www.linkedin.com/in/mayk-gomes-11b86222b/',
    featured: false,
  },
  {
    id: 4,
    title: '3D Product Viewer',
    description: 'Interactive 3D product visualization for e-commerce',
    image: '/global-series.jpg',
    category: ['Web', '3D'],
    technologies: ['Three.js', 'React', 'GSAP'],
    github: 'https://github.com/MaykGomes92',
    demo: 'https://www.linkedin.com/in/mayk-gomes-11b86222b/',
    featured: true,
  },
  {
    id: 5,
    title: 'Data Dashboard',
    description: 'Interactive data visualization dashboard with real-time updates',
    image: '/global-series.jpg',
    category: ['Web', 'UI/UX', 'Backend'],
    technologies: ['React', 'D3.js', 'Node.js', 'Socket.io'],
    github: 'https://github.com/MaykGomes92',
    demo: 'https://www.linkedin.com/in/mayk-gomes-11b86222b/',
    featured: false,
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time chat application with WebSockets',
    image: '/global-series.jpg',
    category: ['Web', 'Mobile', 'Backend'],
    technologies: ['React', 'WebSockets', 'Express', 'MongoDB'],
    github: 'https://github.com/MaykGomes92',
    demo: 'https://www.linkedin.com/in/mayk-gomes-11b86222b/',
    featured: false,
  },
]

export default function Projetos() {

  const [load, setUpdateLoad] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [activeCategory, setActiveCategory] = React.useState('All')
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category.includes(activeCategory)
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
        <div className='hidden md:block'>
          <ParticlesComponent id="particles" />
        </div>
        <motion.div className='relative pt-20 min-h-[100vh] max-w-[100vw] m-auto md:pb-0 z-[4]'
          animate={{ opacity: 1, }}
          initial={{ opacity: 0 }}
          transition={{ duration: .6, delay: 0.8 }}
        >
          <Header activePage="sobre" />
          <Sidebar />
          <motion.h1
            className="text-4xl md:text-5xl font-bold p-4 text-center text-blue-500 brightness-200 contrast-200 shadow-white"
            style={{
              textShadow: '0 0 5px #333fea, 0 0 10px #333fea, 0 0 20px #333fea, 0 0 40px #333fea',
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
          >
            My Projects
          </motion.h1>

          <motion.p
            className="text-light-gray text-center mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            A collection of my work across web, mobile, and 3D interactive experiences
          </motion.p>

          {/* Filters */}
          <div className="mb-10">
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-white text-sm font-medium transition-colors  cursor-pointer ${activeCategory === category
                    ? 'bg-neon-blue text-deep-black'
                    : 'bg-white/10 text-light-gray hover:bg-white/20'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search projects by name, description or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border-2 border-neon-blue/30 focus:border-neon-blue rounded-lg py-3 px-4 pl-10 text-[#c7cbd2] outline-none transition-colors"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-light-gray/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 p-8 items-center justify-items-center w-[80%] m-auto min-h-[600px]">
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 120 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    layout
                    className='w-[90%]'
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center py-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-xl text-light-gray/70">No projects found matching your criteria</p>
                  <button
                    onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                    className="mt-4 text-neon-blue hover:underline"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </>
    )
  }
}