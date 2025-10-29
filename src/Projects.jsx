import React from 'react';
import { projectdata } from './projectdata';
import { FaEye, FaGithub } from 'react-icons/fa';
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0B1623] text-[#E4E8F1] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-6 md:px-10 lg:px-0 py-10">

        {/* ==== Section Header ==== */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold"><span className="text-[#00A8FF]">Personal</span> Projects</h1>
          <p className="text-[#A9B4C4] text-base md:text-lg mt-3">
            Few from my own projects which were done for the practice and self analyzing
          </p>
        </div>

        {/* ==== Projects Grid ==== */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full "
        >
          {projectdata.map((project) => (
            <motion.div
              key={project.id}
              className="bg-[#111C2D] rounded-2xl border border-[#1E2A3A] shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_#00A8FF] hover:-translate-y-2 duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-56 object-cover rounded-t-2xl"
              />
              <div className="px-5 py-4 flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                <p className="text-[#A9B4C4] mb-4">{project.description}</p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-[#00A8FF] hover:bg-[#00C3FF] text-white font-semibold rounded-full cursor-pointer shadow-md hover:shadow-[0_0_15px_#00A8FF] duration-300"
                  >
                    <FaEye />
                    <span className="text-sm md:text-base">Live Demo</span>
                  </a>

                  <a
                    href={project.GitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 border-2 border-[#00A8FF] rounded-full text-[#E4E8F1] hover:bg-[#00A8FF] hover:text-white font-semibold cursor-pointer duration-300"
                  >
                    <FaGithub />
                    <span className="text-sm md:text-base">Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
