import React, { useEffect, useState } from "react";
import surf from "./surf.png";
import surfIMG from "./surf2.png";
import { motion } from "framer-motion";
import Boat from "./Boat.png";
import birds from "./birds.png";

const Images = () => {
  const [xPosition, setXPosition] = useState(0);
  const [surf2, setSurf2] = useState(false);

  useEffect(() => {
    if (xPosition >= xlength - 250 && !surf2) {
      setSurf2(true);
    } else if (xPosition <= 10 && surf2) {
      setSurf2(false);
    }
  }, [xPosition, surf2]);
  const xlength = window.innerWidth;
  const time = xlength / 240;
  const height = window.innerHeight;
  return (
    <div>
      {surf2 ? (
        <motion.img
          initial={{ x: xlength - 200 }}
          animate={{ x: 0 }}
          transition={{ duration: time, repeat: Infinity }}
          className={`object-cover object-center w-52 h-52 -left-5  absolute z-10 ${
            height < 400 ? " bottom-10 " : " bottom-20"
          } `}
          src={surfIMG}
          onUpdate={(latest) => setXPosition(latest.x)}
          alt=""
        />
      ) : (
        <motion.img
          initial={{ x: 0 }}
          animate={{ x: xlength - 200 }}
          transition={{ duration: time, repeat: Infinity }}
          className={`object-cover object-center w-52 h-52 -left-5  absolute z-10 ${
            height < 400 ? " bottom-10 " : " bottom-20"
          } `}
          src={surf}
          alt=""
          onUpdate={(latest) => setXPosition(latest.x)}
        />
      )}
      <img
        src={birds}
        className={`absolute w-52 h-42  right-36 z-0 ${
          height < 400 ? "top-10" : "top-20"
        }`}
        alt=""
      />
      <img
        src={Boat}
        className={`absolute w-22 h-20  left-36 z-0 ${
          height < 400 ? "bottom-10" : "bottom-20"
        }`}
        alt=""
      />
    </div>
  );
};

export default Images;
