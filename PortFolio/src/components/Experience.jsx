import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiRadstudio } from 'react-icons/si';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <div id='Experience' className='p-10 md:p-24 bg-black text-white min-h-screen'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-6'
      >
        Experience & Skills
      </motion.h1>
      
      <div className='flex flex-wrap items-center justify-between'>
        {/* Icon Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='flex flex-wrap md:w-2/5 gap-4 md:p-13 py-10'
        >
          {[FaHtml5, FaCss3, FaReact, FaJs, FaFigma, SiMongodb, SiRadstudio].map((Icon, index) => (
            <span key={index} className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
              <Icon size={30} />
            </span>
          ))}
        </motion.div>

        {/* Experience Section */}
        <div className='md:w-2/5 p-5'>
          <h2 className='text-xl md:text-2xl font-semibold mb-4'>My Experience</h2>
          <p className='text-sm md:text-base mb-4'>
            <strong>Intern at Foxbiz:</strong><br />
            During my internship at Foxbiz, I worked on various web development projects using HTML, CSS, JavaScript, and React. I collaborated with a team to improve the company's internal tools and learned valuable problem-solving skills.
          </p>
          <p className='text-sm md:text-base'>
            <strong>Fresher:</strong><br />
            As a recent graduate, I have developed a solid foundation in front-end technologies such as HTML, CSS, JavaScript, and React. I am passionate about building responsive websites and web applications.
          </p>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className='mt-12'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>Skills 🚀</h2>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-4 text-lg'>
          <li>⚡ HTML & CSS</li>
          <li>⚡ JavaScript</li>
          <li>⚡ React.js</li>
          <li>⚡ Tailwind CSS</li>
          <li>⚡ MongoDB</li>
          <li>⚡ Git & GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
