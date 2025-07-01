import { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

import react from '../../Assets/react.png';
import redux from '../../Assets/redux.png';
import css from '../../Assets/css3.png';
import python from '../../Assets/python.png';
import javascript from '../../Assets/javascript.png';
import html from '../../Assets/html.png';
import tailwind from '../../Assets/tailwind.png';
import node from '../../Assets/nodejs.png';
import mongo from '../../Assets/mongo-db.png';
import mysql from '../../Assets/mysql.png';
import java from '../../Assets/java.png';
import springboot from '../../Assets/springboot.png';
import hibernate from '../../Assets/hibernate.png';
import spring from '../../Assets/spring.png';
import git from '../../Assets/git.png';
import github from '../../Assets/github.png';
import spark from '../../Assets/pyspark.png';
import maven from '../../Assets/maven.png';

const skills = [
  { image: html, name: "html", rating: 4.7 },
  { image: css, name: "css", rating: 4.4 },
  { image: tailwind, name: "tailwind", rating: 4.9 },
  { image: javascript, name: "javascript", rating: 4.6 },
  { image: react, name: "react", rating: 4.8 },
  { image: redux, name: "redux", rating: 4.2 },
  { image: node, name: "node", rating: 4.5 },
  { image: mysql, name: "mysql", rating: 4.3 },
  { image: mongo, name: "mongo", rating: 4.7 },
  { image: git, name: "git", rating: 4.6 },
  { image: python, name: "python", rating: 4.8 },
  { image: spark, name: "spark", rating: 4.1 },
  { image: java, name: "java", rating: 4.5 },
  { image: spring, name: "spring", rating: 4.4 },
  { image: springboot, name: "springboot", rating: 4.9 },
  { image: hibernate, name: "hibernate", rating: 4.2 },
  { image: maven, name: "maven", rating: 4.3 },
  { image: github, name: "github", rating: 4.6 },
];


export default function Skills() {
  const [burstIndexes, setBurstIndexes] = useState([]);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    if (hasEnteredView) {
      skills.forEach((_, index) => {
        setTimeout(() => {
          setBurstIndexes((prev) => [...prev, index]);
        }, index * 200);
      });
    }
  }, [hasEnteredView]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center py-10 space-y-8 h-screen mt-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={() => setHasEnteredView(true)}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold doto-900 text-white"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-9 grid-rows-2 gap-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <SkillCard
              image={skill.image}
              name={skill.name}
              rating={skill.rating}
              burst={hasEnteredView && burstIndexes.includes(index)}
              bounce={hasEnteredView}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
