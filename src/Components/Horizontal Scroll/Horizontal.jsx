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
import Conclusion from "./Conclusion";
import Sustainable from "./Sustainable";

const Horizontal = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    ref: targetRef,
  });
  const [currentSection, setCurrentSection] = useState(null);

  const introRef = useRef(null)
  const natickRef = useRef(null)
  const phase1Ref = useRef(null)
  const phase1TimeLineRef = useRef(null)
  const phase2Ref = useRef(null)
  const phase2TimeLineRef = useRef(null)
  const phase2TimeLine2Ref = useRef(null)
  const diffRef = useRef(null)
  const page1Ref = useRef(null)
  const whyUnderWaterRef = useRef(null)
  const benefitsRef = useRef(null)
  const problemsRef = useRef(null)
  const covidRef = useRef(null)

  useEffect(() => {


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentSection(entry.target.id)
        console.log(currentSection)
      }
    });
  });

  if (introRef.current) observer.observe(introRef.current)
  if (natickRef.current) observer.observe(natickRef.current)
  if (phase1Ref.current) observer.observe(phase1Ref.current)
  if (phase1TimeLineRef.current) observer.observe(phase1TimeLineRef.current)
  if (phase2Ref.current) observer.observe(phase2Ref.current)
  if (phase2TimeLineRef.current) observer.observe(phase2TimeLineRef.current)
  if (phase2TimeLine2Ref.current) observer.observe(phase2TimeLine2Ref.current)
  if (diffRef.current) observer.observe(diffRef.current)
  if (page1Ref.current) observer.observe(page1Ref.current)
  if (whyUnderWaterRef.current) observer.observe(whyUnderWaterRef.current)
  if (benefitsRef.current) observer.observe(benefitsRef.current)
  if (problemsRef.current) observer.observe(problemsRef.current)
  if (covidRef.current) observer.observe(covidRef.current)


  return () => {
    observer.disconnect()
  }
  }, [currentSection])
  

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
          <div className="h-screen w-screen bg2 z-40" ref={introRef} id="intro">
            <Intro />
          </div>
          <div className="h-screen w-screen bg" ref={natickRef} id="natick">
            <Natick />
          </div>
          <div className="h-screen w-screen bg2" ref={phase1Ref} id="phase1">
            <Phase1 />
          </div>
          <div className="h-screen w-screen bg " ref={phase1TimeLineRef} id="phase1timeline">
            <Phase1TimeLine />
          </div>
          <div className="h-screen w-screen bg2" ref={phase2Ref} id="phase2">
            <Phase2 />
          </div>
          <div className="h-screen w-screen bg " ref={phase2TimeLineRef} id="phase2timeline">
            <Phase2Timeline />
          </div>
          <div className="h-screen w-screen bg2" ref={phase2TimeLine2Ref} id="phase2timeline2">
            <Phase2Timeline2 />
          </div>
          <div className="h-screen w-screen bg " ref={diffRef} id="diff">
            <Diff />
          </div>
          <div className="h-screen w-screen bg2" ref={page1Ref} id="page1">
            <Page1 />
          </div>
          <div className="h-screen w-screen bg" ref={whyUnderWaterRef} id="whyunderwater">
            <WhyUnderWater />
          </div>
          <div className="h-screen w-screen bg2" ref={benefitsRef} id="benefits">
            <Benefits />
          </div>
          <div className="h-screen w-screen bg" ref={problemsRef} id="problems">
            <Problems />
          </div>
          <div className="h-screen w-screen bg2" ref={covidRef} id="covid">
            <Covid />
          </div>
          <div className="h-screen w-screen bg">
            <Sustainable />
          </div>
          <div className="h-screen w-screen bg2"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Horizontal;
