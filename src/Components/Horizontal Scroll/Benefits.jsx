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
          Sustainability
        </h1>
        <p className="text-[#344966] font-serif w-[70vw] font-semibold text-xl text-left px-5 absolute right-10">
          Project Natick is designed to be environmentally friendly. The
          datacenters are powered by renewable energy sources, such as offshore
          wind and tide, with no emissions or waste products. Additionally, they
          are fully recyclable, reducing their environmental impact at the end
          of their life cycle.
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
        <h1 className="text-2xl  text-slate-100 text-center px-2 leading-6 absolute left-10 uppercase">
          Improved Performance <br /> <span>and Reliability</span>
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left  w-[70vw] px-5 absolute right-10">
          Underwater datacenters like Natick have proven to be more reliable
          than traditional land-based datacenters. The controlled underwater
          environment and the use of nitrogen instead of oxygen in the vessel
          reduce equipment failures significantly. The project has shown an
          eightfold improvement in reliability compared to land datacenters.
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
          Rapid Deployment
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left  w-[70vw] px-5 absolute right-10">
          Natick datacenters can be deployed quickly, in less than 90 days,
          allowing for a fast response to market demand. This rapid provisioning
          is essential for businesses needing immediate scalability.
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
          Lower Latency
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left  w-[70vw] px-5 absolute right-10">
          By placing datacenters close to coastal populations (where nearly half
          of the world's population lives), Natick reduces data travel time,
          thereby decreasing latency. This proximity enhances user experiences
          for applications requiring low-latency, such as online gaming and
          real-time data processing.
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
          Resource Efficiency
        </h1>
        <p className="text-[#344966] font-serif font-semibold text-xl text-left  w-[70vw] px-5 absolute right-10">
          The underwater environment offers natural cooling, eliminating the
          need for water or additional cooling resources. This results in lower
          energy consumption and a perfect water usage effectiveness (WUE) score
          of zero.
        </p>
      </motion.div>
    </div>
  );
};

export default Benefits;
