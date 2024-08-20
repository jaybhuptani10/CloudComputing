import React from "react";

const WhyUnderWater = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <div className="h-[80vh] w-[80vw] bg-blue-950 bg-opacity-70 flex flex-col items-center p-5">
        <h1 className="text-2xl z-30 mt-7 text-slate-100 text-center px-2 leading-6 uppercase">
          Why Here?
        </h1>
        <div className="w-full p-4 mt-10 ">
          <ul className="flex text-left list-disc  text-[#E8F1F2] w-full  items-center justify-center flex-wrap gap-12">
            <li className="w-[40%] text-xl    ">
              Renewable energy: The Orkney Islands provided a 100% renewable
              energy grid, allowing Microsoft to test the underwater datacenter
              on a grid that would be considered unreliable for land-based
              datacenters.
            </li>
            <li className="w-[40%] text-xl">
              Remote location: The remote location of the Orkney Islands made it
              an ideal place to test the deployment and retrieval of the
              underwater datacenter without affecting nearby communities or
              infrastructure.
            </li>
            <li className="w-[40%] text-xl mb-4">
              Strong tidal currents: The strong tidal currents in the Orkney
              Islands provided a natural cooling mechanism for the underwater
              datacenter, reducing the need for energy-intensive cooling
              systems.
            </li>
            <li className="w-[40%] text-xl ">
              Experimental purpose: Phase 2 of Project Natick was primarily an
              experiment to test the feasibility and sustainability of
              underwater datacenters. The Orkney Islands provided a suitable
              location for these tests.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUnderWater;
