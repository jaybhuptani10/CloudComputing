import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgimg from "./assets/bgimg.png";
import bubbles from "./assets/bubbles.png";
import "./App.css"
const App = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    ref: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <div ref={targetRef} className="h-[300vh] relative bg2 ">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 ">
          <div className="h-screen w-screen bg ">
            <div>
              <img className="z-10 h-full w-full" src={bubbles} alt="" />
            </div>
          </div>
          <div className="h-screen w-screen bg2"></div>
          <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg-gray-600"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
