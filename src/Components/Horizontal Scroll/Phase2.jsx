import React from "react";
import img from "./Imgs/Phase-1.png";
import img2 from "./Imgs/TURTLE.png";
const Phase2 = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <img src={img2} className="absolute -top-10 h-96 w-96" alt="" />
      <img
        src={img}
        className="h-[100vh] w-[80vw] object-cover absolute -bottom-24 z-20"
        alt=""
      />
      <h1 className="text-5xl text-black z-20 absolute top-40 left-[37vw]">
        NATICK PHASE 2
      </h1>
      <p className="text-[#344966] z-20  text-xl text-left  w-[50vw] px-5 absolute bottom-40 left-72">
        Phase 1 of Project Natick showed the underwater datacenter concept is
        feasible; Phase 2 is focused on researching whether the concept is
        logistically, environmentally and economically practical. Microsoft’s
        Project Natick team deployed the Northern Isles datacenter 117 feet deep
        to the seafloor in spring 2018. For the next two years, team members
        tested and monitored the performance and reliability of the datacenter’s
        servers.
      </p>
    </div>
  );
};

export default Phase2;
