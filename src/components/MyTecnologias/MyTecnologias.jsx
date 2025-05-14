'use client';

import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MyTecnologias({title, subTitle, description}) {

  const skills = [
    { name: 'React', level: 95, icon: <FaReact size={50} /> },
    { name: 'JavaScript', level: 90, icon: <IoLogoJavascript size={50} /> },
    { name: 'TypeScript', level: 75, icon: '</>' },
    { name: 'Node.js', level: 40, icon: <FaNodeJs size={50} /> },
    { name: 'CSS/SCSS', level: 95, icon: <IoLogoCss3 size={50} /> },
    { name: 'HTML5', level: 95, icon: <FaHtml5 size={50} /> },
    { name: 'Git', level: 80, icon: <FaGitAlt size={50} /> },
  ];

  return (
    <div className='relative z-20 text-center text-red-400 m-auto pb-20'>
      <div className='max-w-[1200px] m-auto '>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className=""
        >
          <h2 className="text-[35px] text-left font-bold mb-8 text-[#e0e0e0]">{title} <span className="text-neon-blue">{subTitle}</span></h2>
          <p className='text-left font-bold -mt-8 text-gray-400'>{description}</p>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:p-0 p-8 mt-20"
          >
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                delay={0.2}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
