import { motion } from "framer-motion";
import react from "../Assets/github.svg";
import SpaceBackground from "./SpaceCompoent";

function Skills() {
  return (
    <motion.section
      className="relative h-screen text-black flex items-center justify-center text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 -z-10">
        <SpaceBackground />
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center relative z-10">
        <div className="text-center text-4xl flex flex-col items-center">
          <span className="mb-6 font-bold text-black">Skills</span>
          <img src={react} className="w-24 h-24" alt="React/Skill Icon" />
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
