import MyPic from "./assets/HomePortfolio.png";
import { Link } from "react-scroll";
import { motion } from "motion/react";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#0B1623] text-[#E4E8F1] flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:gap-x-8 gap-y-10 px-6 md:px-10 lg:px-0 py-20 md:py-28">

        {/* ==== Left Section ==== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="md:w-1/2 flex flex-col gap-6 text-center md:text-left"
        >
          <p className="text-lg md:text-2xl font-medium text-[#A9B4C4]">
            Hi! 👋
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            I'm{" "}
            <span className="text-[#00A8FF] drop-shadow-md">
              Vijay Anand
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#E4E8F1] mt-2">
            a Front-End Developer
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#A9B4C4] leading-relaxed mt-4">
            Crafting responsive and visually stunning web interfaces using{" "}
            <span className="text-[#00A8FF] font-semibold">React</span> and{" "}
            <span className="text-[#00A8FF] font-semibold">Tailwind CSS</span>.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-6 py-2 rounded-full bg-[#00A8FF] text-white font-semibold text-base sm:text-lg cursor-pointer hover:bg-[#00C3FF] hover:shadow-[0_0_15px_#00A8FF] duration-300"
            >
              Personal Projects
            </Link>

            <a
              href="/Resume14.pdf"
              target="_blank"
              className="px-6 py-2 rounded-full border-2 border-[#00A8FF] text-[#E4E8F1] font-semibold text-base sm:text-lg cursor-pointer hover:bg-[#00A8FF] hover:text-white duration-300"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* ==== Right Section (Image) ==== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative bg-[#111C2D] rounded-3xl p-3 shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_rgba(0,168,255,0.5)] border border-[#1E2A3A] ">
            <img
              src={MyPic}
              alt="Vijay Anand"
              className="w-[280px] sm:w-[340px] md:w-[420px] lg:w-[460px] rounded-2xl object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
