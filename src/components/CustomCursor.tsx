import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorVariant } = useCursor();

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(59, 130, 246, 0.3)",
      scale: 1,
    },
    button: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "rgba(139, 92, 246, 0.4)",
      scale: 1,
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-8 w-8 rounded-full bg-blue-500 mix-blend-difference md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.3,
      }}
    />
  );
};

export default CustomCursor;
