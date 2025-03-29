
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  direction = "up" 
}: ScrollRevealProps) => {
  let initial = {};
  
  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 50 };
      break;
    case "down":
      initial = { opacity: 0, y: -50 };
      break;
    case "left":
      initial = { opacity: 0, x: 50 };
      break;
    case "right":
      initial = { opacity: 0, x: -50 };
      break;
    default:
      initial = { opacity: 0, y: 50 };
  }
  
  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
