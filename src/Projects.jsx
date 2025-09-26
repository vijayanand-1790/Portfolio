import React from 'react'
import { projectdata } from './projectdata'
import { FaEye, FaGit, FaGithub } from 'react-icons/fa'
import { motion } from "motion/react";
import { useMediaQuery } from 'react-responsive';

const Projects = () => {

  return (
    <div id='projects' className='bg-neutral-200 text-black overflow-y-hidden'>
      <div className='max-w-7xl mx-auto flex flex-col justify-center items-center md:px-5 lg:px-0 px-3 md:pt-0 pt-8 md:pb-15 pb-14'>

        <div>
          <h1 className='text-black md:text-6xl text-4xl font-bold text-center'>My Projects</h1>
          <p className='flex px-4 justify-center items-center text-center md:pt-2 pt-3 pb-5'>Below are the projects I've done for the better practice</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 1 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-0 px-5 mt-3 md:gap-15 gap-8'>

          {
            projectdata.map((project) =>
              <div key={project.id}
                className='bg-neutral-100 text-black shadow-neutral-600 shadow-md border-1 border-neutral-500 rounded-2xl hover:-translate-y-2 duration-200 hover:shadow-[0_0_25px_5px_rgba(250,204,21,0.9)]'>
                <img src={project.image} alt={project.title} className='rounded-tr-2xl rounded-tl-2xl object-cover md:h-50 h-40' />
                <div className='px-4 py-2 flex flex-col justify-center items-center md:space-y-6 space-y-3'>
                  <h2 className='md:text-3xl text-2xl font-bold pt-3'> {project.title} </h2>
                  <p className='md:mb-6 mb-3'> {project.description} </p>

                  {/* <p className='md:text-base text-sm'>Built with: <span className='px-2 py-0 bg-neutral-600 rounded mr-1'>React</span> <span className='px-2 py-0 bg-neutral-600 rounded '>Tailwind CSS</span> </p> */}


                  <div className='flex justify-center items-center md:gap-4 gap-3 mb-5'>
                    <a className='flex justify-center items-center md:px-4 px-3 md:py-3 py-2 bg-blue-600 hover:bg-blue-700 duration-300 rounded-4xl text-xl text-white font-semibold cursor-pointer md:gap-1 gap-3' href={project.liveUrl} target='_blank' rel="noopener noreferrer" >
                      <FaEye />
                      <p className='md:text-base font-semibold text-sm'>Live Demo</p>
                    </a>
                    <a className='flex justify-center items-center md:px-4 px-3 md:py-3 py-2 border-3 border-blue-600 rounded-4xl text-xl text-black hover:text-white font-semibold cursor-pointer md:gap-1 gap-3 hover:bg-blue-600 duration-300' href={project.GitHubUrl} target='_blank' rel="noopener noreferrer">
                      <FaGithub />
                      <p className='md:text-base text-sm font-semibold'>Source Code</p>
                    </a>
                  </div>
                </div>


              </div>
            )
          }

        </motion.div>
      </div>
    </div>
  )
}

export default Projects