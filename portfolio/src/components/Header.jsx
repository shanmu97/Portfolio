import React, { useState, useRef, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaTools, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const icons = [
  { icon: <FaHome />, label: 'Home' },
  { icon: <FaTools />, label: 'Skills' },
  { icon: <FaBriefcase />, label: 'Experience' },
  { icon: <FaProjectDiagram />, label: 'Projects' },
  { icon: <FaEnvelope />, label: 'Contact' },
];

function UFOModel() {
  const gltf = useGLTF('/spaceship.glb');
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.set(-Math.PI / 5, Math.PI / 4, 0);
    }
  }, []);

  return <primitive object={gltf.scene} ref={modelRef} scale={0.1} />;
}

const DraggableMenu = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const constraintsRef = useRef(null);
  const radius = 100;
  const angleStep = (2 * Math.PI) / icons.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 200);
        setPosition({ x, y });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div ref={constraintsRef} className="fixed inset-0 overflow-hidden z-40">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.3}
        animate={{ x: position.x, y: position.y }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="absolute"
      >
        <div
          className="relative flex items-center justify-center w-52 h-40 rounded-full text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Canvas className="absolute top-0 left-0 w-full h-full" camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={2} />
            <Suspense fallback={null}>
              <group
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
              >
                <UFOModel />
              </group>
              <OrbitControls enableZoom={false} autoRotate={!isHovered} autoRotateSpeed={0.2} />
            </Suspense>
          </Canvas>

          {open &&
            icons.map((item, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={item.label}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ x, y, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-yellow-700"
                >
                  {item.icon}
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </div>
  );
};

export default DraggableMenu;
