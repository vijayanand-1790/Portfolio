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
  <div className="w-full bg-[#0B1623] text-[#E4E8F1] shadow-md fixed top-0 left-0 z-[100]">
    {/* Main container with proper flex spacing */}
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

      {/* Left section — Logo/Name */}
      <h1 className="font-bold text-2xl text-[#00A8FF]">Vijay Anand.</h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-x-8">
        {data.map((item) => (
          <ul
            key={item.id}
            className="text-lg font-semibold tracking-wide hover:text-[#00A8FF] duration-300 cursor-pointer"
          >
            <li>
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          </ul>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <span className="md:hidden cursor-pointer">
        <MdMenu size={28} onClick={toggleMenu} />
      </span>
    </div>

    {/* Mobile Menu */}
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]"
      } w-[80%] h-screen flex flex-col items-center bg-[#111C2D] p-5 duration-300 fixed top-0 z-[200] border-l border-[#1E2A3A] shadow-2xl rounded-l-3xl pt-12`}
    >
      <img
        src={MyPic}
        className="w-20 rounded-full border border-[#1E2A3A] shadow-2xl"
        alt="Profile"
      />

      <div className="mt-6 text-center">
        <h1 className="font-bold text-2xl text-[#E4E8F1]">Vijay Anand</h1>
        <h5 className="text-base text-[#A9B4C4] mt-1">
          a Front-End Developer
        </h5>
      </div>

      <div className="space-y-5 mt-8">
        {data.map((item) => (
          <ul
            key={item.id}
            className="text-lg font-semibold hover:text-[#00A8FF] duration-300 cursor-pointer"
          >
            <li>
              <Link
                activeClass="active"
                onClick={toggleMenu}
                to={item.link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          </ul>
        ))}
      </div>

      <div className="mt-10 flex flex-col bg-[#0B1623] p-3 rounded-xl space-y-3 text-[#E4E8F1]">
        <h3 className="text-center font-serif">Best Skills on</h3>
        <div className="flex justify-center gap-3 text-[#00A8FF] text-2xl">
          <FaReact />
          <RiTailwindCssFill />
          <SiJavascript />
          <SiHtml5 />
        </div>
      </div>

      <div className="absolute top-5 right-5 cursor-pointer text-[#E4E8F1]">
        <MdClose size={28} onClick={toggleMenu} />
      </div>
    </div>
  </div>
);

}

export default Navbar