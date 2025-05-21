import React, { useEffect, useRef } from "react";

const STAR_COUNT = 150;        // increased star count
const FALLING_DOT_COUNT = 30;

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function SpaceBackground() {
  const fallingDotsRef = useRef([]);

  useEffect(() => {
    const dots = [];
    for (let i = 0; i < FALLING_DOT_COUNT; i++) {
      dots.push({
        x: randomRange(window.innerWidth * 0.7, window.innerWidth),
        y: randomRange(0, window.innerHeight * 0.5),
        size: randomRange(1, 3),
        speed: randomRange(0.3, 0.8),
        delay: randomRange(0, 5000),
        color: `rgba(255,255,255,${randomRange(0.1, 0.6)})`,
      });
    }
    fallingDotsRef.current = dots;
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const container = document.getElementById("falling-dots-container");
      if (!container) return;

      fallingDotsRef.current.forEach((dot) => {
        dot.x -= dot.speed;
        dot.y += dot.speed * 0.7;
        if (dot.x < -10 || dot.y > window.innerHeight + 10) {
          dot.x = randomRange(window.innerWidth * 0.7, window.innerWidth);
          dot.y = randomRange(-20, 0);
          dot.speed = randomRange(0.3, 0.8);
          dot.size = randomRange(1, 3);
          dot.color = `rgba(255,255,255,${randomRange(0.1, 0.6)})`;
        }
      });

      fallingDotsRef.current.forEach((dot, i) => {
        const dotEl = container.children[i];
        dotEl.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
        dotEl.style.width = `${dot.size}px`;
        dotEl.style.height = `${dot.size}px`;
        dotEl.style.backgroundColor = dot.color;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <style>{`
        .star {
          position: fixed;
          background: white;
          border-radius: 50%;
          opacity: 0.9;
          animation: twinkle 3s infinite alternate;
          pointer-events: none;
          z-index: 0;
        }
        @keyframes twinkle {
          from {opacity: 0.5;}
          to {opacity: 1;}
        }
        #falling-dots-container {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 0;
        }
        .falling-dot {
          position: fixed;
          border-radius: 50%;
          will-change: transform;
        }
      `}</style>

      {/* Static Stars */}
      {Array.from({ length: STAR_COUNT }).map((_, i) => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 4 + 1; // increased max size to 5px
        const delay = Math.random() * 3;

        return (
          <div
            key={"star-" + i}
            className="star"
            style={{
              left: x,
              top: y,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              opacity: 0.6 + Math.random() * 0.4, // increased opacity minimum to 0.6
            }}
          />
        );
      })}

      {/* Falling Dots Container */}
      <div id="falling-dots-container">
        {Array.from({ length: FALLING_DOT_COUNT }).map((_, i) => (
          <div key={"dot-" + i} className="falling-dot" />
        ))}
      </div>
    </>
  );
}
