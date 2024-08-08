import React, { useEffect, useState } from "react";
import Img from "./up.png";
import Images from "./Images";
import bubbles from "./bubbles.png";
import { motion } from "framer-motion";
import birds from "./birds.png";
import movingBird from "./birdMoving.gif";
import rotatedMovingBird from "./birdMovingrotated.gif";
const Vertical = () => {
  const bubble = {
    hidden: { opacity: 0, bottom: "-100%" },
    visible: {
      opacity: 1,
      bottom: "120%",

      transition: {
        duration: 5,
        delay: 0,
      },
    },
  };
  return (
    <>
      <div className="up z-30 h-[120vh] w-[100%] flex flex-col">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          transition={{ duration: 10, ease: "easeOut" }}
          animate={{ y: 0, opacity: 1 }}
          className="z-30 h-1/5 p-5 rounded-xl w-1/2 bg-[#004777] relative flex items-center justify-center self-center mt-10 sm:mt-20"
        >
          <img
            src={movingBird}
            className="h-24 w-22 absolute -top-10 -left-10"
            alt=""
          />
          <h1 className=" z-30 uppercase text-[#FBFAF8] text-5xl relative font-extrabold">
            Microsoft Project Natick{" "}
            <span className="text-[#AFE0CE]">Phase-2</span>
          </h1>
          <img
            src={rotatedMovingBird}
            className="h-20 w-22 absolute -top-10 -right-20"
            alt=""
          />
        </motion.div>
        {/* <motion.div
          variants={bubble}
          initial="hidden"
          animate="visible"
          className="h-full w-full relative z-20"
        >
          <img className="z-20 h-full w-full" src={bubbles} alt="Bubbles" />
        </motion.div> */}

        <Images />
      </div>
    </>
  );
};

export default Vertical;
