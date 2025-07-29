import React from 'react'
import html from './assets/html2.png'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.png'
import javascript from './assets/javascript.png'
import css from './assets/css.png'
import { motion } from "motion/react";
import { useMediaQuery } from 'react-responsive';

const Skills = () => {

  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div id='skills' className='text-white bg-black overflow-x-hidden'>

      <div className='max-w-7xl mx-auto flex flex-col justify-center items-center md:px-5 lg:px-0 px-4 md:pb-25'>

        <h2 className='text-white md:text-6xl text-4xl font-bold text-center'>My Skills</h2>
        <p className='flex px-4 justify-center items-center text-center md:pt-1 pt-0'>I'm skilled in the below front-end technologies.</p>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className='grid grid-cols-3 md:grid-cols-6 items-center text-center md:gap-15 gap-5 md:pl-35 pl-4 px-5 md:pt-10 pt-4'>

          <div
            className='flex flex-col justify-center items-center text-center gap-2'>
            <img src={html} className='md:w-20 w-15' alt="" />
            <h3 className='text-lg'>HTML</h3>
          </div>

          <div
            className='flex flex-col justify-center items-center text-center gap-2'>
            <img src={javascript} className='md:w-20 w-15' alt="" />
            <h3 className='text-lg'>JavaScript</h3>
          </div>

          <div
            className='flex flex-col justify-center items-center text-center gap-2'>
            <img src={react} className='md:w-20 w-15 mb-1' alt="" />
            <h3 className='text-lg'>React</h3>
          </div>

          <div
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            className='flex flex-col justify-center items-center text-center gap-2'>
            <img src={tailwind} className='md:w-20 w-15' alt="" />
            <h3 className='text-lg'>Tailwind CSS</h3>
          </div>

          <div
            className='flex flex-col justify-center items-center text-center gap-2'>
            <img src={css} className='md:w-20 w-15' alt="" />
            <h3 className='text-lg'>CSS</h3>
          </div>

        </motion.div>

        {/* Range Bars */}


        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className='md:w-[80%] w-[100%] md:mt-10 mt-8 '>


          <div className=' flex flex-col md:gap-3 gap-2'>

            <div

              className='overflow-x-hidden mx-2 mb-5'>
              <div className='flex items-center gap-3'>
                <img src={html} className='w-10' alt="" />
                <p>HTML</p>
              </div>
              <span className='w-full h-2 bg-neutral-800 inline-flex rounded'>

                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.0 }}
                  className=' w-[80%] h-full bg-yellow-300 relative rounded'>
                  <span className='absolute right-0 -top-8'>80%</span>

                </motion.span>

              </span>


            </div>

            <div

              className='overflow-x-hidden mx-2 mb-5'>
              <div className='flex items-center gap-3'>
                <img src={javascript} className='w-9' alt="" />
                <p>JavaScript</p>
              </div>
              <span className='w-full h-2 bg-neutral-800 inline-flex rounded'>

                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className=' w-[60%] h-full bg-yellow-300 relative rounded'>
                  <span className='absolute right-0 -top-8'>60%</span>

                </motion.span>

              </span>


            </div>

            <div

              className='overflow-x-hidden mx-2 mb-5'>
              <div className='flex items-center gap-3'>
                <img src={react} alt="" />
                <p>React</p>
              </div>
              <span className='w-full h-2 bg-neutral-800 inline-flex rounded'>

                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className=' w-[75%] h-full bg-yellow-300 relative rounded'>
                  <span className='absolute right-0 -top-8'>75%</span>

                </motion.span>

              </span>


            </div>

            <div

              className='overflow-x-hidden mx-2 mb-5'>
              <div className='flex items-center gap-3'>
                <img src={tailwind} className='w-10' alt="" />
                <p>Tailwind CSS</p>
              </div>
              <span className='w-full h-2 bg-neutral-800 inline-flex rounded'>

                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className=' w-[80%] h-full bg-yellow-300 relative rounded'>
                  <span className='absolute right-0 -top-8'>80%</span>

                </motion.span>

              </span>


            </div>

            <div

              className='overflow-x-hidden mx-2'>
              <div className='flex items-center gap-3'>
                <img src={css} className='w-10' alt="" />
                <p>CSS</p>
              </div>
              <span className='w-full h-2 bg-neutral-800 inline-flex rounded'>

                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className=' w-[75%] h-full bg-yellow-300 relative rounded'>
                  <span className='absolute right-0 -top-8'>75%</span>

                </motion.span>

              </span>


            </div>

          </div>

        </motion.div>


      </div>


    </div>
  )
}

export default Skills