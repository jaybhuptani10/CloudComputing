import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const Horizontal = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    ref: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <div ref={targetRef} className="h-[200vh] relative bg2">
      <div className="sticky top-0 h-screen flex items-center  overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0">
          <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2"></div>
          <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2"></div>
          <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Horizontal;
