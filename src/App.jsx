import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const App = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    ref: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <div ref={targetRef} className="h-[300vh] relative bg-neutral-900 ">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0">
          <div className="h-screen w-screen bg-red-600"></div>
          <div className="h-screen w-screen bg-green-600"></div>
          <div className="h-screen w-screen bg-blue-600"></div>
          <div className="h-screen w-screen bg-gray-600"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
