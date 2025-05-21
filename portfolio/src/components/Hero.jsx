import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import resume from '../Assets/ShanmukhaReddy_SoftwareDeveloper.pdf'
import hero from "../Assets/Hero_Photo.png";
import SpaceBackground from "./SpaceCompoent";

export default function Hero() {
  return (
    <div className="w-screen h-screen bg-black text-white flex items-center justify-around overflow-hidden hero-container">
      {/* Left Image */}
      <div className="absolute inset-0 -z-10">
        <SpaceBackground />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300, rotate: 0 }}
        animate={{
          opacity: 1,
          y: [300, 250, 200, 150, 100, 50, 0],
          rotate: [0, -10, 5, -5, 10, -6, 0],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          y: {
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.75, 0.9, 1],
          },
          rotate: {
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.75, 0.9, 1],
          },
          opacity: { duration: 1.2 },
        }}
        className="w-[350px] h-[550px] overflow-hidden"
      >
        <img
          src={hero}
          alt="Hero"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </motion.div>

      {/* Right Content */}
      <div className="w-1/2 h-5/6 flex flex-col justify-around py-12 px-10">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-light mb-1">
            <span className="text-3xl font-bold">Hello Folks!</span> I am
          </h3>
          <h1 className="text-6xl font-bold mb-1 cookie-regular">
            Shanmukha Reddy Vasa
          </h1>
          <h3 className="text-xl font-medium">Web Developer</h3>
        </motion.div>

        {/* Middle Section with Red Line aligned left */}
        <div className="flex flex-col items-start space-y-6 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-start space-x-4 max-w-lg"
          >
            {/* Red vertical line */}
            <div
              className="w-1 bg-red-500 rounded-sm"
              style={{ height: "100%" }}
            ></div>

            {/* Flowing text from red line */}
            <p className="text-sm font-light leading-relaxed text-justify w-xs">
            Pursuing final-year B.Tech degree with a passion for technology.
            Develop web applications and can integrate AI features into websites.
            Create innovative and practical projects to solve real problems.<br/>
            Always Learning, Always Improving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center space-x-6"
          >
            <a
              href="https://www.instagram.com/shanmukhareddy.vasa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/vsr07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/shanmu97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href={resume}
              download
              className="relative group text-gray-300 hover:text-blue-600 text-2xl"
            >
              <FiDownload />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2 pointer-events-none whitespace-nowrap transition-opacity duration-300">
                Download CV
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
