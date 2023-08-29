"use client"
import { motion, useScroll } from "framer-motion";

function TopScrollProvider({ children }: any) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        background: "violet",
        transformOrigin: "0%",
        zIndex: 50
      }}
    />
  )
}

export default TopScrollProvider;