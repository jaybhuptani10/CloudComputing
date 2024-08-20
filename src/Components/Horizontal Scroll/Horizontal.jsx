import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Map from "./Map";

import Page1 from "./Page1";
import Page2 from "./Natick";
import Page3 from "./Diff";
import Page4 from "./Intro";
import Natick from "./Natick";
import Diff from "./Diff";
import Intro from "./Intro";
import Features from "./Problems";
import Problems from "./Problems";
import Benefits from "./Benefits";
import Phase1 from "./Phase1";
import Phase1TimeLine from "./Phase1TimeLine";

const Horizontal = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    ref: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-90%"]);

  // Debugging: Log scrollYProgress and x values
  useEffect(() => {
    scrollYProgress.onChange((value) => {
      console.log("scrollYProgress:", value);
      console.log("x:", x.get());
    });
  }, [scrollYProgress, x]);

  return (
    <div ref={targetRef} className="h-[200vh] relative bg-blue-900">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 z-40">
          <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2"></div>
          <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2"></div>
          <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2 z-40">
            <Intro />
          </div>
          <div className="h-screen w-screen bg">
            <Natick />
          </div>
          <div className="h-screen w-screen bg2">
            <Page1 />
          </div>
          <div className="h-screen w-screen bg ">
            <Diff />
          </div>
          <div className="h-screen w-screen bg2">
            <Problems />
          </div>
          <div className="h-screen w-screen bg ">
            <Benefits />
          </div>
          <div className="h-screen w-screen bg2">
            <Phase1 />
          </div>
          <div className="h-screen w-screen bg ">
            <Phase1TimeLine />
          </div>
          <div className="h-screen w-screen bg2"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Horizontal;
