import React, { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [menu, setMenu] = useState(false);
  
  const gradientStyle = "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text";
  
  return (
    <div className="relative bg-black text-white border-b border-gray-700 px-8 md:px-20 py-4 flex justify-between items-center">
      
      {/* Animated Portfolio Text */}
      <motion.span 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className={`text-2xl md:text-3xl font-bold tracking-wide ${gradientStyle}`}
      >
        Portfolio
      </motion.span>

      {/* Navbar Links (Desktop) */}
      <ul className="hidden md:flex gap-6 text-lg font-semibold">
        <li><Link to="/" className="hover:text-gray-400 transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400 transition-colors">About</Link></li>
        <li><Link to="/experience" className="hover:text-gray-400 transition-colors">Experience</Link></li>
        <li><Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenu(!menu)}>
        {menu ? <IoIosClose size={32} className="text-white" /> : <IoIosMenu size={32} className="text-white" />}
      </button>

      {/* Mobile Menu */}
      {menu && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }} 
          className="absolute top-16 left-0 w-full bg-black text-white border-t border-gray-700 flex flex-col items-center py-4 space-y-4 md:hidden"
        >
          <Link to="/" className="hover:text-gray-400" onClick={() => setMenu(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-400" onClick={() => setMenu(false)}>About</Link>
          <Link to="/experience" className="hover:text-gray-400" onClick={() => setMenu(false)}>Experience</Link>
          <Link to="/projects" className="hover:text-gray-400" onClick={() => setMenu(false)}>Projects</Link>
          <Link to="/contact" className="hover:text-gray-400" onClick={() => setMenu(false)}>Contact</Link>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
