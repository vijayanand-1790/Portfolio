import React from 'react'
import { MdArrowRightAlt, MdEmail } from 'react-icons/md'
import { data } from './data'
import { Link } from 'react-scroll'
import { FaPhoneAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='text-white bg-black overflow-x-hidden'>
            <hr />
            <div className='max-w-7xl mx-auto pt-20 pb-15'>
                <div className='flex md:flex-row flex-col justify-between md:px-5 px-4'>
                    <div className='md:w-1/4 flex flex-col justify-center gap-5 md:pb-0 pb-8'>
                        <h1 className='text-2xl font-bold'>About</h1>
                        <p className='text-lg'>I'm deeply passionate about front-end development with a strong focus on React.js and Tailwind CSS to build a modern web development.</p>
                    </div>
                    <div className='flex flex-col md:pb-0 pb-5'>
                        <h2 className='text-2xl font-bold md:pb-5 pb-2'>Links</h2>
                        {
                            data.map((item) =>

                                <ul key={item.id} className='text-lg hover:text-red-500 duration-400 cursor-pointer md:pb-3 pb-1'>
                                    <li> <Link activeClass="active"
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}>{item.title}</Link> </li>
                                </ul>

                            )
                        }
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-bold pb-5'>Have a Questions?</h2>
                        <div className='flex gap-3 text-lg items-center pb-3'>
                            <FaPhoneAlt size={20} />
                            <p className='text-lg'>9884127840</p>
                        </div>
                        <div className='flex gap-3 text-lg items-center'>
                            <MdEmail size={20} />
                            <p className='text-lg'>vijayvjrj@gmail.com</p>
                        </div>
                    </div>

                </div>

                <div className='flex gap-5 text-4xl md:px-5 px-4 mt-10'>
                    <a href="https://linkedin.com/in/vijay-anand-4a206a374" target='_blank' rel="noopener noreferrer" className='hover:translate-y-1.5 duration-200'><FaLinkedin size={35} /></a>
                    <a href="https://github.com/vijayanand-1790" target='_blank' rel="noopener noreferrer" className='hover:translate-y-1.5 duration-200'><FaGithub size={35} /></a>
                </div>

                <p className='mt-18 lg:text-lg md:text-base text-sm md:px-4 px-3'>Copyright &copy;2025 All Rights Reserved | Created by<span className='text-yellow-300 px-2'>Vijay Anand</span>with React and Tailwind CSS  </p>

            </div>

        </div>
    )
}

export default Footer