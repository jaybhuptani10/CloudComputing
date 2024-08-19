import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", delay: i * 0.4 },
    }),
  };

  return (
    <div className="flex h-full w-full flex-wrap">
      <motion.div
        className="h-1/5 w-full bg-[#FFB30F] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={0}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute left-10 uppercase">
          Environmental Factors
        </h1>
        <p className="text-[#344966] font-serif w-[70vw] font-semibold text-xl text-left px-5 absolute right-10">
          The marine environment presents unique challenges such as biofouling
          (marine organisms growing on the infrastructure), corrosion from
          saltwater, and pressure due to depth. These factors can degrade
          materials and components faster than in land-based data centers.
        </p>
      </motion.div>

      <motion.div
        className="h-1/5 w-full bg-[#D8D8D8] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={1}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute left-10 uppercase">
          Maintenance and Repairs
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left  w-[70vw] px-5 absolute right-10">
          Since the data centers are underwater, they cannot be accessed for
          routine maintenance or emergency repairs. This necessitates highly
          reliable systems, as any failure could require a costly and
          time-consuming retrieval and repair process.
        </p>
      </motion.div>

      <motion.div
        className="h-1/5 w-full bg-[#FFFFEA] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={2}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute left-10 uppercase">
          Power and Data Connectivity
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left  w-[70vw] px-5 absolute right-10">
          The data centers require a stable power supply and high-speed data
          connections. Although renewable energy sources (like tidal and wind)
          can be used, ensuring consistent and reliable energy and connectivity
          in the harsh marine environment is a challenge.
        </p>
      </motion.div>

      <motion.div
        className="h-1/5 w-full bg-[#00CECB] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={3}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute left-10  uppercase">
          Logistics and Deployment
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left  w-[70vw] px-5 absolute right-10">
          Deploying and recovering the data centers involves complex logistics.
          The deployment process must ensure the structure remains stable
          underwater and is securely connected to power and data networks.
        </p>
      </motion.div>

      <motion.div
        className="h-1/5 w-full bg-[#FFED66] bg-opacity-40 flex gap-5 flex-col items-center justify-center relative"
        custom={4}
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-2xl text-slate-100 text-center px-2 leading-6 absolute left-10 uppercase">
          Long-Term Viability
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left  w-[70vw] px-5 absolute right-10">
          Understanding how these data centers perform over several years
          without maintenance is still a key question. The durability of the
          technology under long-term marine exposure remains uncertain.
        </p>
      </motion.div>
    </div>
  );
};

export default Benefits;
