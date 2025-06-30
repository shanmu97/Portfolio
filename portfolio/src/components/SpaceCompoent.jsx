import React, { useEffect, useRef } from "react";

const STAR_COUNT = 150;
const FALLING_DOT_COUNT = 30;
const SHOOTING_STAR_COUNT = 5;

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export default function SpaceBackground() {
  const fallingDotsRef = useRef([]);
  const shootingStarsRef = useRef([]);

  useEffect(() => {
    const dots = [];
    for (let i = 0; i < FALLING_DOT_COUNT; i++) {
      dots.push({
        x: randomRange(0, window.innerWidth),
        y: randomRange(0, window.innerHeight),
        size: randomRange(1, 3),
        speed: randomRange(0.3, 0.8),
        color: `rgba(255,255,255,${randomRange(0.1, 0.6)})`,
      });
    }
    fallingDotsRef.current = dots;

    // shooting stars
    const shootingStars = Array.from({ length: SHOOTING_STAR_COUNT }).map(() => ({
      x: randomRange(0, window.innerWidth),
      y: randomRange(0, window.innerHeight / 2),
      length: randomRange(80, 150),
      opacity: 0,
      speed: randomRange(5, 10),
      delay: Date.now() + randomRange(2000, 10000),
    }));
    shootingStarsRef.current = shootingStars;
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const container = document.getElementById("falling-dots-container");
      const shootingContainer = document.getElementById("shooting-stars-container");

      if (!container || !shootingContainer) return;

      fallingDotsRef.current.forEach((dot) => {
        dot.y += dot.speed;
        if (dot.y > window.innerHeight) {
          dot.x = randomRange(0, window.innerWidth);
          dot.y = -10;
        }
      });

      fallingDotsRef.current.forEach((dot, i) => {
        const dotEl = container.children[i];
        dotEl.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
        dotEl.style.width = `${dot.size}px`;
        dotEl.style.height = `${dot.size}px`;
        dotEl.style.backgroundColor = dot.color;
      });

      const now = Date.now();
      shootingStarsRef.current.forEach((star, i) => {
        const starEl = shootingContainer.children[i];
        if (now > star.delay) {
          star.opacity = 1;
          star.x -= star.speed;
          star.y += star.speed * 0.5;

          if (star.x < -star.length || star.y > window.innerHeight + 50) {
            star.x = randomRange(window.innerWidth, window.innerWidth + 300);
            star.y = randomRange(0, window.innerHeight / 2);
            star.length = randomRange(80, 150);
            star.speed = randomRange(5, 10);
            star.delay = now + randomRange(2000, 8000);
            star.opacity = 0;
          }
        }

        starEl.style.transform = `translate(${star.x}px, ${star.y}px)`;
        starEl.style.width = `${star.length}px`;
        starEl.style.opacity = star.opacity;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <style>{`
        .background-container {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(ellipse at bottom, #0d1b2a 0%, #000 100%);
          overflow: hidden;
          z-index: -10;
        }
        .star {
          position: fixed;
          background: white;
          border-radius: 50%;
          opacity: 0.8;
          animation: twinkle 3s infinite ease-in-out alternate;
          pointer-events: none;
        }
        @keyframes twinkle {
          0% { opacity: 0.4; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.1); }
        }
        .falling-dot {
          position: fixed;
          border-radius: 50%;
          will-change: transform;
        }
        .shooting-star {
          position: fixed;
          height: 2px;
          background: linear-gradient(90deg, white, transparent);
          border-radius: 9999px;
          will-change: transform;
          opacity: 0;
        }
      `}</style>

      <div className="background-container">
        {/* Static Stars */}
        {Array.from({ length: STAR_COUNT }).map((_, i) => {
          const x = Math.random() * window.innerWidth;
          const y = Math.random() * window.innerHeight;
          const size = Math.random() * 2 + 1;
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
              }}
            />
          );
        })}

        {/* Falling Dots */}
        <div id="falling-dots-container">
          {Array.from({ length: FALLING_DOT_COUNT }).map((_, i) => (
            <div key={"dot-" + i} className="falling-dot" />
          ))}
        </div>

        {/* Shooting Stars */}
        <div id="shooting-stars-container">
          {Array.from({ length: SHOOTING_STAR_COUNT }).map((_, i) => (
            <div key={"shooting-" + i} className="shooting-star" />
          ))}
        </div>
      </div>
    </>
  );
}
