"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function Magnetic({
  children,
  strength = 0.5,
}: {
  children: React.ReactElement;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const springOptions = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      // Calculate how close the mouse is
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
      
      // Only apply magnetism if mouse is relatively close (e.g. within 100px of center)
      if (distance < width * 0.8 || distance < 100) {
        x.set(distanceX * strength);
        y.set(distanceY * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y, strength]);

  return (
    <motion.div ref={ref} style={{ x, y }} className="inline-block">
      {children}
    </motion.div>
  );
}
