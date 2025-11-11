import React from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import AboutPic from "./assets/just.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#0B1623] text-[#E4E8F1] flex flex-col items-center justify-center py-10"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 md:mb-20"
      >
        <span className="text-[#00A8FF]">About</span> Me
      </motion.h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:gap-12 gap-10 px-6 md:px-10 lg:px-0">
        {/* ==== Left Section (Image) ==== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="md:w-1/2 flex justify-center "
        >
          <div className="bg-[#111C2D] shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_rgba(0,168,255,0.5)] rounded-3xl p-4 flex justify-center">
            <img
              src={AboutPic}
              alt="Vijay Anand"
              className="rounded-2xl object-cover w-[220px] sm:w-[280px] md:w-[360px] lg:w-[400px]"
            />
          </div>
        </motion.div>

        {/* ==== Right Section (Content) ==== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h4 className="text-lg sm:text-xl text-[#A9B4C4] mb-3">
            Get to know more about me 👇
          </h4>

          <p className="text-[#E4E8F1] text-base sm:text-lg md:text-[17px] leading-relaxed">
            I am a dedicated{" "}
            <span className="text-[#00A8FF] font-semibold">
              Front-End Developer
            </span>{" "}
            with{" "}
            <span className="text-[#00A8FF] font-semibold">
              2 years of professional experience
            </span>
            , specializing in{" "}
            <span className="text-[#00A8FF] font-semibold">
              React.js, JavaScript, Tailwind CSS, HTML
            </span>{" "}
            and{" "}
            <span className="text-[#00A8FF] font-semibold">CSS3</span>. Throughout my
            career, I have focused on building{" "}
            <span className="text-[#00A8FF] font-semibold">
              high-performing, interactive, and user-centric web applications
            </span>{" "}
            that align with modern design standards.
            <br />
            <br />
            I continuously enhance my expertise by staying updated with emerging
            technologies and implementing{" "}
            <span className="text-[#00A8FF] font-semibold">
              best practices in performance optimization, responsive design, and accessibility
            </span>
            . My goal is to develop{" "}
            <span className="text-[#00A8FF] font-semibold">
              scalable, visually appealing, and intuitive interfaces
            </span>{" "}
            that provide seamless digital experiences across all devices.
          </p>


          <Link to="contact" smooth={true} offset={-80} duration={500}>
            <button className="mt-8 px-6 py-2 rounded-full bg-[#00A8FF] text-white font-semibold text-base sm:text-lg hover:bg-[#00C3FF] hover:shadow-[0_0_15px_#00A8FF] cursor-pointer duration-300">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
