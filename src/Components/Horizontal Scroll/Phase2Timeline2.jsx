import React, { useRef, useEffect, useState } from "react";
import road from "./Imgs/road.png";
import submarine from "./Imgs/Submarine.png";
import { animate, motion, useScroll, useTransform } from "framer-motion";

const Phase2Timeline2 = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(0);

  const x = useTransform(scrollYProgress, [0.92, 1], [0, 3200]);
  const y = useTransform(
    scrollYProgress,
    [0.92, 0.926, 0.931, 0.937, 0.943, 0.948, 0.957],
    [0, 100, 0, 101, 0, 101, 0]
  );

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (scrollYProgress.get() >= 0.947) {
        setVisible(5);
      } else if (scrollYProgress.get() >= 0.942) {
        setVisible(4);
      } else if (scrollYProgress.get() >= 0.936) {
        setVisible(3);
      } else if (scrollYProgress.get() >= 0.93) {
        setVisible(2);
      } else if (scrollYProgress.get() >= 0.924) {
        setVisible(1);
      } else {
        setVisible(0);
      }
    });
  }, [scrollYProgress]);

  return (
    <div className="h-full w-full flex items-center justify-center relative">
      <div className="relative">
        <motion.img
          style={{ x, y }}
          src={submarine}
          className="w-[8vw] absolute z-10 top-[42%] hidden"
          alt=""
        />
        <img src={road} className="w-full z-10" alt="" />
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-red-600 z-30 absolute top-[9vw] bg-opacity-55 left-[10vw] flex flex-col gap-4 transition-opacity duration-300 ${
          visible === 1 ||
          visible === 2 ||
          visible === 3 ||
          visible === 4 ||
          visible === 5
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30 text-slate-100 text-center px-2 leading-6 uppercase">
          Fabrication Complete
        </h1>
        <p className="text-white text-md text-left w-[20vw] px-2 ml-1 z-30">
          Fabrication of datacenter complete. All IT equipment installed and
          tested. The vessel is shipped to Stromness, UK.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-blue-600 z-30 absolute bottom-[5vw] bg-opacity-55 left-[25vw] flex flex-col gap-4 transition-opacity duration-300 ${
          visible >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30  text-slate-100 text-center px-2 leading-6 uppercase">
          Deployment
        </h1>
        <p className="text-white text-md text-left w-[20vw] ml-2 z-30">
          The Natick Phase 2 vessel, "Northern Isles", was deployed at the
          European Marine Energy Centre on June 1st, 2018.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-1 w-[20vw] bg-green-600 z-30 absolute top-[9vw] bg-opacity-55 left-[40vw] flex flex-col gap-1 transition-opacity duration-300 ${
          visible >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30 mt-2  text-slate-100 text-center px-2 leading-6 uppercase">
          Operations
        </h1>
        <p className="text-white mt-5 text-md text-left w-[20vw] px-1 ml-1  z-30">
          Natick Northern Isles was used by more than 18 groups inside Microsoft
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-yellow-600 z-30 absolute bottom-[5vw] bg-opacity-55 right-[25vw] flex flex-col gap-4 transition-opacity duration-300 ${
          visible >= 4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30  text-slate-100 text-center px-2 leading-6 uppercase">
          Pandemic Work
        </h1>
        <p className="text-white text-md text-left w-[20vw]  z-30">
          Natick Northern Isles was re-tasked to provide additional resources
          for COVID-19 vaccine research via Folding at Home and World Community
          Grid
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-gray-600 z-30 absolute top-[9vw] bg-opacity-55 right-[10vw] flex flex-col gap-2 transition-opacity duration-300 ${
          visible >= 5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30 text-slate-100 text-center px-2 leading-6 uppercase">
          Retrieval
        </h1>
        <p className="text-white text-md text-left w-[19vw] ml-2 z-30">
          After more than 2 years at the bottom of the ocean, Natick Northern
          Isles was retrieved for analysis.
        </p>
      </div>
    </div>
  );
};

export default Phase2Timeline2;
