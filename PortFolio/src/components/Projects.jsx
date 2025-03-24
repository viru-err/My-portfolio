import React, { useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: 'Whispr - Chat App',
      description: 'Whispr is a real-time messaging application built with React, Socket.io, and MongoDB. It allows users to chat seamlessly with secure message storage and fast communication.',
      github: 'https://github.com/viru-err/whispr',
      website: 'https://yourwebsite.com' // Add the website link here
    }
  ]);

  const gradientStyle = 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text';

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl w-full flex flex-col items-center gap-12">
        {/* Project Section Title */}
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${gradientStyle}`}>My Projects</h1>
        
        {/* Projects List */}
        {projects.map((project, index) => (
          <div key={index} className="w-full md:w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h2 className={`text-2xl font-semibold ${gradientStyle}`}>{project.name}</h2>
            <p className="text-lg text-gray-300 mt-3">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                >
                  View on GitHub
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-green-600 py-2 px-4 rounded-md hover:bg-green-700 transition-all"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
