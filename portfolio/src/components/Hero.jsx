import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import resume from '../Assets/ShanmukhaReddy_SoftwareDeveloper.pdf';
import hero from "../Assets/Hero_Photo.png";
import SpaceBackground from "./SpaceCompoent";

export default function Hero({ fadeOut }) {
  return (
    <motion.div
      className="w-screen h-screen text-white flex items-center justify-around relative orbitron-500"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0 }}
    >
      {/* Space Background */}
      <div className="absolute inset-0 -z-10">
        <SpaceBackground />
      </div>

      {/* Left Image */}
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
        className="w-[370px] h-[580px] flex items-center justify-center overflow-hidden z-40 rounded-b-[150px]"
      >
        <img
          src={hero}
          alt="Shanmukha Reddy Vasa"
          className="w-[370px] h-[580px] flex items-center justify-center mt-16 z-50 "
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
          <h1 className="text-6xl font-bold mb-1 bungee-spice-regular">
            Shanmukha Reddy Vasa
          </h1>
          <h3 className="text-xl font-medium orbitron-500">Full Stack Web Developer | Data Engineer</h3>
        </motion.div>

        {/* Middle Section with Red Line aligned left */}
        <div className="flex flex-col items-start space-y-6 mt-6 pixelify-sans-500">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-start space-x-4 max-w-lg"
          >
            {/* Red vertical line */}
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 h-full w-1 bg-red-500"></div>
              <p className="text-[14px] font-light leading-relaxed text-justify comic-relief-regular">
                Software Developer Intern at Lumiq.ai with hands-on experience in Full Stack Development and Data Engineering.
                Skilled in building dynamic web applications, designing scalable data pipelines, and integrating AI capabilities into modern websites.
                Driven by innovation and committed to continuous learning.<br />
                Always Learning, Always Improving.

              </p>
            </div>



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
    </motion.div>
  );
}
