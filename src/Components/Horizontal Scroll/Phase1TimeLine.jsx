import React, { useRef, useEffect, useState } from "react";
import road from "./Imgs/road.png";
import submarine from "./Imgs/Submarine.png";
import { animate, motion, useScroll, useTransform } from "framer-motion";

const Phase1TimeLine = () => {
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
          className="w-[8vw] absolute z-10 top-[42%]"
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
          Initial White Paper
        </h1>
        <p className="text-white text-md text-left w-[20vw] px-5 ml-2 z-30">
          A Microsoft white paper comes to the attention of senior leaders. It
          describes an underwater datacenter, powered by renewable ocean energy.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-blue-600 z-30 absolute bottom-[5vw] bg-opacity-55 left-[25vw] flex flex-col gap-4 transition-opacity duration-300 ${
          visible >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30 mt-7 text-slate-100 text-center px-2 leading-6 uppercase">
          Project Natick Begins
        </h1>
        <p className="text-white text-md text-left w-[20vw] ml-5 z-30">
          Project begins with kickoff meeting in Redmond.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-green-600 z-30 absolute top-[9vw] bg-opacity-55 left-[40vw] flex flex-col gap-4 transition-opacity duration-300 ${
          visible >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30 mt-7 text-slate-100 text-center px-2 leading-6 uppercase">
          Project Natick Operational
        </h1>
        <p className="text-white text-md text-left w-[20vw] px-2 ml-5 z-30">
          The Leona Philpot is christened and deployed off the coast of
          California.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-yellow-600 z-30 absolute bottom-[5vw] bg-opacity-55 right-[25vw] flex flex-col gap-4 transition-opacity duration-300 ${
          visible >= 4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30 mt-7 text-slate-100 text-center px-2 leading-6 uppercase">
          Testing
        </h1>
        <p className="text-white text-md text-left w-[20vw] ml-5 z-30">
          The Leona Philpot system is thoroughly tested and monitored.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-gray-600 z-30 absolute top-[9vw] bg-opacity-55 right-[10vw] flex flex-col gap-2 transition-opacity duration-300 ${
          visible >= 5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30 text-slate-100 text-center px-2 leading-6 uppercase">
          Project Natick returns to Redmond
        </h1>
        <p className="text-white text-md text-left w-[19vw] ml-2 z-30">
          After a very successful series of tests, the Leona Philpot is lifted
          out of the water and is brought back to Redmond for analysis and
          refitting.
        </p>
      </div>
    </div>
  );
};

export default Phase1TimeLine;
