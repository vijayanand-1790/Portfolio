import React from 'react'
import MyPic from './assets/AboutPortfolio.png'
import { Link } from 'react-scroll'
import { motion } from "motion/react";
import { useMediaQuery } from 'react-responsive';

const About = () => {

	// const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

	return (
		<div id='about' className='bg-black text-white overflow-x-hidden'>
			<h1 className='text-white md:text-6xl text-4xl font-bold text-center md:mb-20 mb-10'>About Me</h1>
			<div className='max-w-5xl mx-auto flex md:flex-row flex-col md:gap-6 gap-3 justify-center items-center md:px-5 lg:px-0 px-5 md:pb-40 pb-15'>

				{/* image div */}
				<motion.div

					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false }}
					transition={{ delay: 0.1, duration: 0.5 }}

					className='md:w-1/2'>
					<img src={MyPic} className='md:w-[400px] w-[200px] rounded-full shadow-2xl shadow-neutral-700 object-cover' alt="Image" />
				</motion.div>

				{/* Content div */}
				<motion.div

					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: false }}
					transition={{ delay: 0.1, duration: 0.5 }}

					className='md:w-1/2'>
					<div>
						{/* <p className='text-xl font-semibold'>Frontend Developer (Fresher)</p> */}
						<h4 className='md:text-2xl text-lg text-gray-400'>Get to know more about me.</h4>
					</div>
					<p className='md:mt-10 mt-5 md:text-lg text-base'>
						I am a passionate Frontend Developer with a strong foundation in React.js, JavaScript, Tailwind CSS, HTML and CSS3. My journey into frontend development began with a deep curiosity and passion for creating interactive, user-friendly web applications. I continuously sharpen my skills by building personal projects, experimenting with new features, and applying best practices to improve both functionality and design. Transitioning into tech has been driven by my commitment and enthusiasm to craft modern, responsive interfaces that deliver engaging user experiences.					</p>
					<Link to='contact' smooth={true} offset={-80} duration={500}>
						<button
							className='px-4 py-2 md:mt-10 mt-5 border-2 bg-yellow-300 hover:bg-yellow-500 duration-500 rounded-4xl text-black md:text-xl text-base font-semibold cursor-pointer'>Contact Me
						</button>
					</Link>
				</motion.div>

			</div>

		</div>
	)
}

export default About