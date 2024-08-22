import React, { useRef, useEffect, useState } from "react";
import road from "./Imgs/road.png";
import submarine from "./Imgs/Submarine.png";
import { animate, motion, useScroll, useTransform } from "framer-motion";
import Modal from "./Modal";

const Phase2Timeline = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(0);
  const [show, setShow] = useState(false);

  const x = useTransform(scrollYProgress, [0.92, 1], [0, 3200]);
  const y = useTransform(
    scrollYProgress,
    [0.92, 0.926, 0.931, 0.937, 0.943, 0.948, 0.957],
    [0, 100, 0, 101, 0, 101, 0]
  );

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (scrollYProgress.get() >= 0.71) {
        setVisible(5);
      } else if (scrollYProgress.get() >= 0.706) {
        setVisible(4);
      } else if (scrollYProgress.get() >= 0.7) {
        setVisible(3);
      } else if (scrollYProgress.get() >= 0.695) {
        setVisible(2);
      } else if (scrollYProgress.get() >= 0.69) {
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
        onMouseEnter={() => setShow(true)}
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
          Phase 2 Planning
        </h1>
        <p className="text-white text-md text-left w-[20vw] px-2 ml-1 z-30">
          We had a few major goals in mind: make it full scale, deploy it deeper
          and in harsher conditions, and power it with completely renewable
          energy.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-blue-600 z-30 absolute bottom-[5vw] bg-opacity-55 left-[25vw] flex flex-col gap-2 transition-opacity duration-300 ${
          visible >= 2 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30  text-slate-100 text-center px-1 leading-6 uppercase">
          Request for Information
        </h1>
        <p className="text-white text-md text-left w-[20vw] z-30">
          An RFI was issued seeking information about the feasibility of
          deploying a Natick datacenter in the ocean powered by renewable
          energy.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-1 w-[20vw] bg-green-600 z-30 absolute top-[9vw] bg-opacity-55 left-[40vw] flex flex-col gap-1 transition-opacity duration-300 ${
          visible >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30  text-slate-100 text-center px-2 leading-6 uppercase">
          Request for Proposals
        </h1>
        <p className="text-white text-md text-left w-[20vw] px-1 ml-1  z-30">
          A select group of marine organizations was invited to present
          proposals to realize our vision for Natick Phase 2.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-1 w-[20vw] bg-yellow-600 z-30 absolute bottom-[5vw] bg-opacity-55 right-[25vw] flex flex-col gap-1 transition-opacity duration-300 ${
          visible >= 4 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30  text-slate-100 text-center px-1 leading-5 uppercase">
          Naval Group Selected
        </h1>
        <p className="text-white text-md text-left w-[20vw]    z-30">
          From a very strong field of proposals, we selected Naval Group and its
          subsidiary, Naval Energies to lead design, fabrication, and deployment
          of the Phase 2 datacenter.
        </p>
      </div>
      <div
        className={`h-[13vw] rounded-xl p-2 w-[20vw] bg-gray-600 z-30 absolute top-[9vw] bg-opacity-55 right-[10vw] flex flex-col gap-0 transition-opacity duration-300 ${
          visible >= 5 ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-2xl z-30 text-slate-100 text-center  leading-5 uppercase">
          Design Complete
        </h1>
        <p className="text-white text-md text-left w-[20vw] px-1  z-30">
          We designed subsea equivalents of all elements typically found in a
          land datacenter including networking, electrical and cooling systems,
          environmental monitoring, and more.
        </p>
      </div>
    </div>
  );
};

export default Phase2Timeline;
