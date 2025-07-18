import React, { useState } from 'react'
import { data } from './data'
import { Link } from 'react-scroll'
import { MdClose, MdMenu, MdMenuOpen } from 'react-icons/md'
import MyPic from './assets/HomePortfolio.png'
import { SiHtml5, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from 'react-icons/fa'


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className='w-full border-b border-neutral-500 bg-black fixed top-0 left-0 z-[100] text-gray-200 overflow-x-hidden'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-0 md:px-8 py-3'>
                <div>
                    <h1 className='font-bold text-2xl'>Vijay Anand.</h1>
                </div>

                <div
                    className='hidden md:flex gap-x-8'>

                    {
                        data.map((item) =>

                            <ul key={item.id} className='text-base font-semibold tracking-wide hover:text-yellow-500 duration-400 cursor-pointer'>
                                <li>
                                    <Link activeClass="active"
                                        to={item.link}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}>{item.title}
                                    </Link>

                                </li>
                            </ul>

                        )
                    }

                </div>

                <span className='sm:block md:hidden cursor-pointer'>
                    <MdMenu size={28} onClick={toggleMenu} />
                </span>


                {/* Mobile Menu */}

                {
                    <div className={`${showMenu ? "right-0" : "-right-[100%] "} w-[80%] h-screen flex flex-col items-center bg-gradient-to-r from-black to-gray-900 p-5 duration-400 fixed top-0 z-[200] border-l-2 border-neutral-700 shadow-2xl rounded-l-4xl pt-12`}>
                        <img src={MyPic} className='flex w-20 rounded-full border-1 border-neutral-700 shadow-2xl' alt="" />
                        <div className='mt-10'>
                            <h1 className='flex text-center font-bold text-3xl'>Vijay Anand</h1>
                            <h5 className='text-base text-center mt-1'>a React Developer</h5>
                        </div>
                        <div className='space-y-5 mt-8'>
                            {
                                data.map((item) =>

                                    <ul key={item.id} className='text-lg font-semibold hover:text-red-500 duration-400 cursor-pointer'>
                                        <li>
                                            <Link activeClass="active"
                                                onClick={toggleMenu}
                                                to={item.link}
                                                spy={true}
                                                smooth={true}
                                                offset={-80}
                                                duration={500}>{item.title}
                                            </Link>
                                        </li>
                                    </ul>

                                )
                            }
                        </div>
                        <div className='mt-10 flex flex-col bg-neutral-900 p-2 rounded-xl space-y-5'>
                            <h3 className='flex justify-center'>Best Skills on</h3>
                            <div className='flex gap-3'>
                                <div className='bg-black text-2xl w-fit p-2 rounded'><FaReact /></div>
                                <div className='bg-black text-2xl w-fit p-2 rounded'><RiTailwindCssFill /></div>
                                <div className='bg-black text-2xl w-fit p-2 rounded'><SiJavascript /></div>
                                <div className='bg-black text-2xl w-fit p-2 rounded'><SiHtml5 /></div>
                            </div>
                        </div>

                        <div className='absolute top-5 right-5 cursor-pointer'><MdClose size={28} onClick={toggleMenu} /></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar