import { motion } from "framer-motion";
import rocket from '../Assets/rocket.png';

const RocketAnimation = () => (
  <motion.img
    src={rocket}
    alt="rocket"
    style={{
      position: "fixed",
      bottom: "-150px",
      right: "-150px",
      width: "160px",
      height: "160px",
      zIndex: 9999,
      pointerEvents: "none",
    }}
    initial={{ x: 0, y: 0 }}
    animate={{
      x: "-300vw",
      y: "-300vh",
      transition: { duration: 5, ease: "easeInOut" }
    }}
  />
);

export default RocketAnimation;
