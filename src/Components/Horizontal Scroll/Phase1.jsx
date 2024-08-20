import React from "react";
import img from "./Imgs/Phase-1.png";
import img2 from "./Imgs/TURTLE.png";
const Phase1 = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      <img src={img2} className="absolute -top-10 h-96 w-96" alt="" />
      <img
        src={img}
        className="h-[100vh] w-[80vw] object-cover absolute -bottom-24 z-20"
        alt=""
      />
      <h1 className="text-5xl text-black z-20 absolute top-40 left-[37vw]">
        NATICK PHASE 1
      </h1>
      <p className="text-[#344966] z-20  text-xl text-left  w-[50vw] px-5 absolute bottom-48 left-72">
        It all started in 2013 when Microsoft employee, Sean James, who served
        on a US Navy submarine submitted a ThinkWeek Paper. Norm Whitaker read
        the paper and built a team to explore the idea of placing computers or
        even entire datacenters in water. In late 2014, Microsoft kicked off
        Project Natick. The rest is history.
      </p>
    </div>
  );
};

export default Phase1;
