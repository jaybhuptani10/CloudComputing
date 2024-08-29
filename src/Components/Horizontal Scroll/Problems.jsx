import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "./Imgs/Save Ocean.png";
import img2 from "./Imgs/fix.png";
import img3 from "./Imgs/Power.png";
import img4 from "./Imgs/logs.png";
import img5 from "./Imgs/Viability.png";
import corroded from "./Imgs/corroded.jpeg";
import Modal from "./Modal";
const Problems = () => {
  const [visible, setVisible] = useState(0);
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
    }),
    exit: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex">
      <motion.div
        className="h-[100vh] w-1/5 bg-[#B8BEDD] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={0}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        viewport={{ amount: 0.2 }}
      >
        <svg
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          viewBox="0 0 920 1000"
          fill="currentColor"
          className=" cursor-pointer w-10 h-10 top-2 hover:cursor-pointer z-30 text-white absolute right-2"
        >
          <path d="M454 40c126.667-1.333 235.333 42 326 130s137.333 195.333 140 322c1.333 126.667-42.333 235.667-131 327S592.667 957.333 466 960c-126.667 1.333-235.667-42.333-327-131S1.333 632.667 0 506c-2.667-126.667 40.667-235.667 130-327S327.333 41.333 454 40m52 152c-28 0-49.667 8-65 24-15.333 16-23 32.667-23 50-1.333 18.667 3.667 33.333 15 44 11.333 10.667 27.667 16 49 16 25.333 0 45.667-7.333 61-22 15.333-14.667 23-32.667 23-54 0-38.667-20-58-60-58M386 786c20 0 48-8.667 84-26s71.333-43.333 106-78l-18-24c-32 24-56 36-72 36-9.333 0-10.667-12.667-4-38l42-160c17.333-64 10-96-22-96-20 0-49.667 9.667-89 29s-77.667 44.333-115 75l16 26c34.667-22.667 59.333-34 74-34 8 0 8 11.333 0 34l-36 152c-17.333 69.333-6 104 34 104" />
        </svg>
        {visible && (
          <Modal
            IMG={corroded}
            setShow={setVisible}
            className={" top-0 z-20 "}
          />
        )}
        <h1 className="text-2xl z-10 text-slate-100 text-center px-2 leading-6 absolute top-20 uppercase">
          Environmental Factors
        </h1>
        <p className="text-[#000] font-serif font-semibold text-xl text-left px-5 absolute top-40">
          The marine environment presents unique challenges such as biofouling
          (marine organisms growing on the infrastructure), corrosion from
          saltwater, and pressure due to depth. These factors can degrade
          materials and components faster than in land-based data centers.
        </p>
        <img
          src={img1}
          className="w-56 h-30 object-cover absolute bottom-10"
          alt=""
        />
      </motion.div>

      <motion.div
        className="h-[100vh] w-1/5 bg-[#D8D8D8] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={1}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute top-20 uppercase">
          Maintenance and Repairs
        </h1>
        <p className="text-[#000] font-serif font-semibold text-xl text-left px-5 absolute top-40">
          Since the data centers are underwater, they cannot be accessed for
          routine maintenance or emergency repairs. This necessitates highly
          reliable systems, as any failure could require a costly and
          time-consuming retrieval and repair process.
        </p>
        <img
          src={img2}
          className="w-56 h-30 object-cover absolute bottom-10"
          alt=""
        />
      </motion.div>

      <motion.div
        className="h-[100vh] w-1/5 bg-[#FFFFEA] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={2}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute top-20 uppercase">
          Power and Data Connectivity
        </h1>
        <p className="text-[#000] font-serif font-semibold text-xl text-left px-5 absolute top-40">
          The data centers require a stable power supply and high-speed data
          connections. Although renewable energy sources (like tidal and wind)
          can be used, ensuring consistent and reliable energy and connectivity
          in the harsh marine environment is a challenge.
        </p>
        <img
          src={img3}
          className="w-56 h-30 object-cover absolute bottom-10"
          alt=""
        />
      </motion.div>

      <motion.div
        className="h-[100vh] w-1/5 bg-[#00CECB] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={3}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute top-20 w-1/2 uppercase">
          Logistics and Deployment
        </h1>
        <p className="text-[#000] font-serif font-semibold text-xl text-left px-5 absolute top-40">
          Deploying and recovering the data centers involves complex logistics.
          The deployment process must ensure the structure remains stable
          underwater and is securely connected to power and data networks.
        </p>
        <img
          src={img4}
          className="w-56 h-30 object-cover absolute bottom-10"
          alt=""
        />
      </motion.div>

      <motion.div
        className="h-[100vh] w-1/5 bg-[#FFED66] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={4}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        viewport={{ amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute top-20 uppercase">
          Long-Term Viability
        </h1>
        <p className="text-[#000] font-serif font-semibold text-xl text-left px-5 absolute top-40">
          Understanding how these data centers perform over several years
          without maintenance is still a key question. The durability of the
          technology under long-term marine exposure remains uncertain.
        </p>
        <img
          src={img5}
          className="w-56 h-30 object-cover absolute bottom-10"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Problems;
