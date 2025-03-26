import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCloudDownloadAlt } from "react-icons/fa";

function Home() {
  const [text, setText] = useState('');
  const fullText = "Hello, I'm Viru Kumar";
  const gradientStyle = 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text';
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 150); // Typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex w-full justify-between items-center p-10 md:p-20 bg-black min-h-screen'>
      {/* Left Section - Text */}
      <div className='md:w-2/4 md:pt-10'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`text-3xl md:text-6xl font-bold tracking-tighter ${gradientStyle}`}
        >
          {text}
        </motion.h1>
        <p className={`text-sm md:text-2xl tracking-tight mt-4 ${gradientStyle}`}>
          I'm a Frontend Developer passionate about crafting responsive web applications with React, JavaScript, HTML, and CSS.
        </p>
        <div className='flex space-x-4 mt-5 md:mt-10'>
          {/* Contact Me Button */}
          <button 
            onClick={() => navigate('/contact')} // Navigate to Contact page
            className="py-2 px-4 text-lg font-semibold rounded-r-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-pink-500 hover:to-blue-500"
          >
            Contact Me
          </button>

          {/* Resume Button */}
          <a 
            href="resume.pdf" // Make sure to place your resume file in the public folder
            download="viru_portfolio+latest.pdf"
            className="py-2 px-4 text-lg font-semibold rounded-l-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-500 hover:to-pink-500 flex items-center space-x-2"
          >
            <span>Resume</span> 
            <FaCloudDownloadAlt />
          </a>
        </div>
      </div>

      {/* Right Section - Image with glowing effect */}
      <div className='md:w-2/4 flex justify-center relative'>
        <div className='absolute w-[300px] h-[300px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-3xl opacity-50 animate-pulse'></div>
        <img
          className='w-full md:w-3/4 h-auto rounded-[50%] shadow-lg border-4 border-gray-700'
          src="https://static.vecteezy.com/system/resources/previews/052/254/926/non_2x/a-boy-working-laptop-silhouette-vector.jpg"
          alt="Viru working"
        />
      </div>
    </div>
  );
}

export default Home;
