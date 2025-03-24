import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub ,FaInstagram} from "react-icons/fa";

const Footer = () => {
  const gradientStyle = 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text';

  return (
    <div className="bg-black text-white py-10 md:py-12 flex flex-row items-center justify-evenly">
      {/* Contact Heading */}
      <h1 className={`text-2xl md:text-4xl font-bold ${gradientStyle}`}>Create, Explore, Conquer</h1>
      <h3 className={`text-sm md:text-xl font-normal mt-2 ${gradientStyle}`}>
        Feel free to reach out!
      </h3>

      {/* Contact Information */}
      <ul className="mt-4 space-y-2 text-sm md:text-lg">
        <li className="flex items-center gap-2 hover:scale-105 transition duration-300">
          <MdOutlineEmail size={20} className="text-blue-400" />
          <a href="mailto:realvirus4u@gmail.com" className="hover:text-gray-400">realvirus4u@gmail.com</a>
        </li>
        <li className="flex items-center gap-2 hover:scale-105 transition duration-300">
          <FaInstagram  size={20} className="text-blue-500" />
          <a href="https://www.instagram.com/viru_err/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            Instagram
          </a>
        </li>
        <li className="flex items-center gap-2 hover:scale-105 transition duration-300">
          <FaGithub size={20} className="text-gray-400" />
          <a href="https://github.com/viru-err" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            github
          </a>
        </li>
      </ul>

      
     
    </div>
  );
};

export default Footer;
