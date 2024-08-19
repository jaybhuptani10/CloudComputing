import React from "react";
import { motion } from "framer-motion";
import img1 from "./Imgs/Save Ocean.png";
import img2 from "./Imgs/fix.png";
import img3 from "./Imgs/Power.png";
import img4 from "./Imgs/logs.png";
import img5 from "./Imgs/Viability.png";
const Problems = () => {
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
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute top-20 uppercase">
          Environmental Factors
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left px-5 absolute top-40">
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
        <p className="text-[#344966] font-serif font-semibold text-xl text-left px-5 absolute top-40">
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
        <p className="text-[#344966] font-serif font-semibold text-xl text-left px-5 absolute top-40">
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
        <p className="text-[#344966] font-serif font-semibold text-xl text-left px-5 absolute top-40">
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
        <p className="text-[#344966] font-serif font-semibold text-xl text-left px-5 absolute top-40">
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
