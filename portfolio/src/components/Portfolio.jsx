import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./Hero";
import Skills from "./Skills";
import RocketAnimation from "./RocketAnimation";

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState("hero");
  const [playTransition, setPlayTransition] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const scrollEnabled = useRef(true);

  const SCROLL_UP_THRESHOLD = 100;
  const SCROLL_DOWN_TRIGGER = 100;

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollEnabled.current) return;
  
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY.current;
  
      // SCROLL DOWN
      if (
        scrollDelta > 0 &&
        currentSection === "hero" &&
        !playTransition &&
        scrollY > SCROLL_DOWN_TRIGGER
      ) {
        scrollEnabled.current = false;
        setPlayTransition(true);
  
        setTimeout(() => {
          setCurrentSection("skills");
          setPlayTransition(false);
          window.scrollTo({ top: 10, behavior: "auto" }); // add scroll offset to allow upward detection
  
          setTimeout(() => {
            scrollEnabled.current = true;
            lastScrollY.current = 10;
          }, 500);
        }, 2000);
      }
  
      // SCROLL UP
      else if (
        scrollDelta < 0 &&
        currentSection === "skills" &&
        !playTransition &&
        scrollY <= 10 // allow small scrolls upward
      ) {
        scrollEnabled.current = false;
        setPlayTransition(true);
  
        setTimeout(() => {
          setCurrentSection("hero");
          setPlayTransition(false);
          window.scrollTo({ top: 0, behavior: "auto" });
  
          setTimeout(() => {
            scrollEnabled.current = true;
            lastScrollY.current = 0;
          }, 500);
        }, 2000);
      }
  
      lastScrollY.current = scrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, playTransition]);
  

  return (
    <div
      className={`relative min-h-screen ${
        playTransition ? "pointer-events-none" : ""
      }`}
    >
      <AnimatePresence mode="wait">
        {currentSection === "hero" && (
          <motion.div key="hero" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <Hero fadeOut={playTransition} />
          </motion.div>
        )}
        {currentSection === "skills" && (
          <motion.div key="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Skills />
          </motion.div>
        )}
      </AnimatePresence>

      {playTransition && currentSection === "hero" && <RocketAnimation />}
    </div>
  );
}
