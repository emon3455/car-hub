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
        background: "orange",
        transformOrigin: "0%",
      }}
    />
  )
}

export default TopScrollProvider;