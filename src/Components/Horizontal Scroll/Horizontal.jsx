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
import Phase2 from "./Phase2";
import WhyUnderWater from "./WhyUnderWater";
import Phase2Timeline from "./Phase2Timeline";
import Phase2Timeline2 from "./Phase2Timeline2";
import Covid from "./Covid";

const Horizontal = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    ref: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.4, 1], ["20%", "-90%"]);

  // Debugging: Log scrollYProgress and x values

  return (
    <div ref={targetRef} className="h-[200vh] relative bg-blue-900 ">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 z-40">
          {/* <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2"></div>
          <div className="h-screen w-screen bg"></div> */}
          {/* <div className="h-screen w-screen bg2"></div> */}
          <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2 z-40">
            <Intro />
          </div>
          <div className="h-screen w-screen bg">
            <Natick />
          </div>
          <div className="h-screen w-screen bg2">
            <Phase1 />
          </div>
          <div className="h-screen w-screen bg ">
            <Phase1TimeLine />
          </div>
          <div className="h-screen w-screen bg2">
            <Phase2 />
          </div>
          <div className="h-screen w-screen bg ">
            <Phase2Timeline />
          </div>
          <div className="h-screen w-screen bg2">
            <Phase2Timeline2 />
          </div>
          <div className="h-screen w-screen bg ">
            <Diff />
          </div>
          <div className="h-screen w-screen bg2">
            <Page1 />
          </div>
          <div className="h-screen w-screen bg">
            <WhyUnderWater />
          </div>
          <div className="h-screen w-screen bg2">
            <Benefits />
          </div>
          <div className="h-screen w-screen bg">
            <Problems />
          </div>
          <div className="h-screen w-screen bg2">
            <Covid />
          </div>
          <div className="h-screen w-screen bg"> </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Horizontal;
