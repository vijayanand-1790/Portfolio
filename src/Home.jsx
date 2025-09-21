import MyPic from './assets/HomePortfolio.png'
import { Link } from 'react-scroll';
import { motion } from "motion/react";

const Home = () => {

    return (
        <div id='home' className='w-full h-auto text-white bg-black overflow-x-hidden'>

            <div className='max-w-6xl mx-auto flex md:flex-row flex-col-reverse md:gap-x-5 gap-x-3 lg:px-0 md:px-6 px-5 md:pt-40 pt-18 md:pb-50 md:mt-14 pb-20'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className='md:w-1/2 flex flex-col gap-7'>

                    <div
                        className='flex flex-col md:justify-normal items-start md:gap-5 gap-2 md:mt-0 mt-8'>
                        <p
                            className='md:text-3xl text-xl'>Hello!
                        </p>
                        <h1
                            className='text-4xl md:text-7xl font-extrabold pt-5'>I'm <span className='text-yellow-300'>Vijay Anand</span>
                        </h1>
                        <h6
                            className='md:text-4xl text-2xl font-bold'>a Frontend Developer.
                        </h6>
                        <p
                            className='md:text-2xl text-xl font-light md:mt-8 mt-5'>Crafting Responsive Interfaces Using React and Tailwind CSS.
                        </p>
                    </div>

                    <div
                        className='flex md:mt-10 mt-4 gap-5'>
                        <Link to='projects'
                            smooth={true}
                            offset={-80}
                            duration={500}><button className='px-4 py-2 bg-yellow-300 rounded-4xl md:text-xl text-base text-black font-semibold focus:outline-none cursor-pointer hover:bg-yellow-500 duration-300'>My Projects</button>
                        </Link>

                        {/* <button className='px-4 py-2 border-2 border-yellow-300 rounded-4xl text-white md:text-xl text-base font-semibold cursor-pointer hover:bg-yellow-300 hover:text-black duration-500'>Download Resume</button> */}
                        <a
                            href="/Resume6.pdf"
                            target="_blank"
                            className="px-4 py-2 border-2 border-yellow-300 rounded-4xl text-white md:text-xl text-base font-semibold cursor-pointer hover:bg-yellow-300 hover:text-black duration-500"
                        >
                            Download Resume
                        </a>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className='md:w-1/2 flex justify-center items-center'>
                    <img className='flex md:w-[450px] w-[300px] rounded-2xl' src={MyPic} alt="" />
                </motion.div>
            </div>

        </div>
    )
}

export default Home