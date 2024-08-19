import React from "react";
import UnderwaterImg from "./Imgs/Underwater-design.png";
import Turtle from "./Imgs/TURTLE.png";
const Natick = () => {
  //<h1>What is Project Natick?</h1>
  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div className="w-[60vw] h-[89vh] flex items-end rounded-3xl overflow-hidden  bg-[#00A676] relative">
        <div>
          {" "}
          <img
            src={Turtle}
            className="h-full w-1/2 object-cover absolute -top-32 -left-8 transform rotate-12 "
            alt=""
          />
          <img
            src={UnderwaterImg}
            className="h-30 absolute -bottom-6 object-cover w-full"
            alt=""
          />
        </div>
        <div className="w-[40%]"></div>
        <div className="text-left w-[60%] h-full  bg-red-500">
          <p className="mt-5 text-white text-l px-10">
            Project Natick is a research project to build an underwater
            datacenter. Microsoft is investigating the numerous potential
            benefits that a standard, manufacturable, deployable undersea
            datacenter could provide to cloud users all over the world.
          </p>
          <br />
          <p className="text-white text-l px-10">
            Project Natick reflects Microsoft’s ongoing quest for cloud
            datacenter solutions that offer less resource intensive options,
            rapid provisioning, lower costs, and high agility in meeting
            customer needs.
          </p>
          <br />
          <p className="text-white text-l px-10">
            Project Natick envisions deploying underwater datacenters near major
            population centers by large bodies of water. This approach offers
            low-latency data access, natural cooling, and potential use of
            renewable energy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Natick;
