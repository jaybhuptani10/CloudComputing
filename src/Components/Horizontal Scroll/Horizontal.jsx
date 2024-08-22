import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Map from "./Map";
import MSG from "./Imgs/MSG.png";
import Page1 from "./Page1";

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

  const emptyref = useRef(null);
  const introRef = useRef(null);
  const natickRef = useRef(null);
  const phase1Ref = useRef(null);
  const phase1TimeLineRef = useRef(null);
  const phase2Ref = useRef(null);
  const phase2TimeLineRef = useRef(null);
  const phase2TimeLine2Ref = useRef(null);
  const diffRef = useRef(null);
  const page1Ref = useRef(null);
  const whyUnderWaterRef = useRef(null);
  const benefitsRef = useRef(null);
  const problemsRef = useRef(null);
  const covidRef = useRef(null);
  const sustainref = useRef(null);
  const concluref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "empty") setCurrentSection(null);
          else setCurrentSection(entry.target.id);
          console.log(currentSection);
        }
      });
    },
    { threshold: 0.5 }
  );

    if (introRef.current) observer.observe(introRef.current);
    if (natickRef.current) observer.observe(natickRef.current);
    if (phase1Ref.current) observer.observe(phase1Ref.current);
    if (phase1TimeLineRef.current) observer.observe(phase1TimeLineRef.current);
    if (phase2Ref.current) observer.observe(phase2Ref.current);
    if (phase2TimeLineRef.current) observer.observe(phase2TimeLineRef.current);
    if (phase2TimeLine2Ref.current)
      observer.observe(phase2TimeLine2Ref.current);
    if (diffRef.current) observer.observe(diffRef.current);
    if (page1Ref.current) observer.observe(page1Ref.current);
    if (whyUnderWaterRef.current) observer.observe(whyUnderWaterRef.current);
    if (benefitsRef.current) observer.observe(benefitsRef.current);
    if (sustainref.current) observer.observe(sustainref.current);
    if (problemsRef.current) observer.observe(problemsRef.current);
    if (covidRef.current) observer.observe(covidRef.current);
    if (concluref.current) observer.observe(concluref.current);
    if (emptyref.current) observer.observe(emptyref.current);

    return () => {
      observer.disconnect();
    };
  }, [currentSection]);

  const x = useTransform(scrollYProgress, [0.4, 1], ["20%", "-90%"]);

  // Debugging: Log scrollYProgress and x values

  return (
    <div ref={targetRef} className="h-[200vh] relative bg-blue-900 ">
      <div className="fixed bottom-48 left-32 z-20">
        <h1 className="absolute left-4 top-4">{currentSection?currentSection:"Welcome"}</h1>
        <img src={MSG} className="w-full h-20 object-cover z-100 " alt="" />
      </div>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 z-40">
          {/* <div className="h-screen w-screen bg"></div>
          <div className="h-screen w-screen bg2"></div>
          <div className="h-screen w-screen bg"></div> */}
          {/* <div className="h-screen w-screen bg2"></div> */}
          <div className="h-screen w-screen bg" ref={emptyref} id="empty"></div>
          <div className="h-screen w-screen bg2 z-40" ref={introRef} id="Introduction">
            <Intro />
          </div>
          <div className="h-screen w-screen bg" ref={natickRef} id="Overview">
            <Natick />
          </div>
          <div className="h-screen w-screen bg2" ref={phase1Ref} id="Phase 1">
            <Phase1 />
          </div>
          <div
            className="h-screen w-screen bg "
            ref={phase1TimeLineRef}
            id="Phase 1 timeline"
          >
            <Phase1TimeLine />
          </div>
          <div className="h-screen w-screen bg2" ref={phase2Ref} id="Phase 2">
            <Phase2 />
          </div>
          <div
            className="h-screen w-screen bg "
            ref={phase2TimeLineRef}
            id="Phase 2 timeline"
          >
            <Phase2Timeline />
          </div>
          <div
            className="h-screen w-screen bg2"
            ref={phase2TimeLine2Ref}
            id="Phase 2 timeline "
          >
            <Phase2Timeline2 />
          </div>
          <div className="h-screen w-screen bg " ref={diffRef} id="Comparision">
            <Diff />
          </div>
          <div className="h-screen w-screen bg2" ref={page1Ref} id="Specs">
            <Page1 />
          </div>
          <div
            className="h-screen w-screen bg"
            ref={whyUnderWaterRef}
            id="Why Submerge"
          >
            <WhyUnderWater />
          </div>
          <div
            className="h-screen w-screen bg2"
            ref={benefitsRef}
            id="Benefits"
          >
            <Benefits />
          </div>
          <div className="h-screen w-screen bg" ref={sustainref} id="Sustainable" >
            <Sustainable />
          </div>
          <div className="h-screen w-screen bg2" ref={problemsRef} id="Problems" >
            <Problems />
          </div>
          <div className="h-screen w-screen bg"ref={covidRef} id="Application">
            <Covid />
          </div>
          <div className="h-screen w-screen bg2" ref={concluref} id="Conclusion">
            <Conclusion />
          </div>
          <div className="h-screen w-screen bg"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Horizontal;
