import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img 
            src="./public/viru.jpeg" 
            alt="Viru" 
            className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-xl border-4 border-gray-700 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-400 mb-6">About Me</h2>
          <ul className="space-y-6">
            <div className="flex items-start gap-3">
              <IoIosArrowRoundForward className="mt-1 text-blue-400" size={30} />
              <span>
                <h3 className="text-2xl font-semibold">Frontend Developer</h3>
                <p className="text-lg text-gray-300">
                  I'm passionate about creating visually appealing, user-friendly, and responsive websites and applications using HTML, CSS, JavaScript, and React.
                </p>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <IoIosArrowRoundForward className="mt-1 text-blue-400" size={30} />
              <span>
                <h3 className="text-2xl font-semibold">Libraries & Frameworks</h3>
                <p className="text-lg text-gray-300">
                  I have experience working with various libraries and frameworks like React, Bootstrap, and Tailwind CSS to build dynamic and responsive web applications.
                </p>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <IoIosArrowRoundForward className="mt-1 text-blue-400" size={30} />
              <span>
                <h3 className="text-2xl font-semibold">Backend Developer</h3>
                <p className="text-lg text-gray-300">
                  While I specialize in frontend development, I am also familiar with backend technologies like Node.js and MongoDB, which helps me build full-stack applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
