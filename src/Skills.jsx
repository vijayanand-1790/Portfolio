import React from "react";
import html from "./assets/html2.png";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.png";
import javascript from "./assets/javascript.png";
import css from "./assets/css.png";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0B1623] text-[#E4E8F1] flex flex-col items-center justify-center py-10"
    >
      {/* ====== Section Heading ====== */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-4"
      >
        <span className="text-[#00A8FF]">My</span> Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center text-[#A9B4C4] mb-10 md:mb-16 px-6 text-base sm:text-lg"
      >
        I’m skilled in the following front-end technologies.
      </motion.p>

      {/* ====== Skill Icons ====== */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 sm:gap-10 md:gap-14 mb-14"
      >
        {[
          { img: html, name: "HTML" },
          { img: javascript, name: "JavaScript" },
          { img: react, name: "React" },
          { img: tailwind, name: "Tailwind CSS" },
          { img: css, name: "CSS3" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="bg-[#111C2D] p-4 rounded-2xl shadow-[0_0_15px_rgba(0,168,255,0.2)] hover:shadow-[0_0_25px_rgba(0,168,255,0.5)] transition-all duration-300">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 sm:w-16 md:w-20 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#E4E8F1]">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      {/* ====== Skill Progress Bars ====== */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 1 }}
        className="w-[90%] md:w-[75%] flex flex-col gap-6"
      >
        {[
          { img: html, name: "HTML", percent: 85 },
          { img: javascript, name: "JavaScript", percent: 60 },
          { img: react, name: "React", percent: 75 },
          { img: tailwind, name: "Tailwind CSS", percent: 80 },
          { img: css, name: "CSS3", percent: 75 },
        ].map((skill, index) => (
          <div key={index} className="overflow-x-hidden">
            <div className="flex items-center gap-3 mb-2">
              <img src={skill.img} alt={skill.name} className="w-8" />
              <p className="font-medium text-[#A9B4C4]">{skill.name}</p>
            </div>

            <span className="w-full h-2 bg-[#1E2A3A] inline-flex rounded-lg overflow-hidden">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                className="relative rounded-lg bg-[#00A8FF] h-full shadow-[0_0_10px_#00A8FF]"
                style={{ width: `${skill.percent}%` }}
              >
                <span className="absolute right-0 -top-7 text-[#E4E8F1] text-sm">
                  {skill.percent}%
                </span>
              </motion.span>
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
