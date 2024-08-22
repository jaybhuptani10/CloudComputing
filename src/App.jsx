import React, { useEffect, useState } from "react";
import submarine from "./assets/submarine.png";
import "./App.css";
import Horizontal from "./Components/Horizontal Scroll/Horizontal";
import Vertical from "./Components/Verical/Vertical";
import { motion, useViewportScroll } from "framer-motion";

const App = () => {
  const [maxScrollHeight, setMaxScrollHeight] = useState(0);
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };
  const { scrollY } = useViewportScroll();
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setOffsetY(latest);
    });
  }, [scrollY]);

  return (
    <div className="">
      <Vertical />
      <div className="z-30">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{
            position: "fixed",

            top: `calc(${(offsetY / maxScrollHeight) * 100}%)`, // Adjust the position based on scroll progress
            width: "200px",
            left: "50px",
            zIndex: 30,
            transition: "top 1s ease", // Smooth transition for the movement
          }}
          className="h-[20px] w-[20px] bg-white fixed z-30"
        >
          hy
        </motion.div>
        <motion.img
          initial="hidden"
          animate="visible"
          variants={variants}
          src={submarine}
          style={{
            position: "fixed",

            top: `calc(${(offsetY / maxScrollHeight) * 100}%)`, // Adjust the position based on scroll progress
            width: "200px",
            left: "10px",
            zIndex: 30,
            transition: "top 1s ease", // Smooth transition for the movement
          }}
          className=" w-44 h-38 object-cover object-center bottom-10 right-10"
          alt=""
        />
      </div>

      <Horizontal />
    </div>
  );
};

export default App;
