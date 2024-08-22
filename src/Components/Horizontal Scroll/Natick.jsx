import React, { useState } from "react";
import UnderwaterImg from "./Imgs/Underwater-design.png";
import Turtle from "./Imgs/TURTLE.png";
import Modal from "./Modal";
const Natick = () => {
  const [show, setShow] = useState(false);
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
          <svg
            onMouseEnter={() => setShow(true)}
            viewBox="0 0 920 1000"
            fill="currentColor"
            className=" cursor-pointer w-10 h-10 top-2 hover:cursor-pointer z-30 text-white absolute right-2"
          >
            <path d="M454 40c126.667-1.333 235.333 42 326 130s137.333 195.333 140 322c1.333 126.667-42.333 235.667-131 327S592.667 957.333 466 960c-126.667 1.333-235.667-42.333-327-131S1.333 632.667 0 506c-2.667-126.667 40.667-235.667 130-327S327.333 41.333 454 40m52 152c-28 0-49.667 8-65 24-15.333 16-23 32.667-23 50-1.333 18.667 3.667 33.333 15 44 11.333 10.667 27.667 16 49 16 25.333 0 45.667-7.333 61-22 15.333-14.667 23-32.667 23-54 0-38.667-20-58-60-58M386 786c20 0 48-8.667 84-26s71.333-43.333 106-78l-18-24c-32 24-56 36-72 36-9.333 0-10.667-12.667-4-38l42-160c17.333-64 10-96-22-96-20 0-49.667 9.667-89 29s-77.667 44.333-115 75l16 26c34.667-22.667 59.333-34 74-34 8 0 8 11.333 0 34l-36 152c-17.333 69.333-6 104 34 104" />
          </svg>
          {show && (
            <Modal
              IMG={
                "https://news.microsoft.com/wp-content/uploads/prod/2018/06/Natick_Scotland_86-1920x1080.jpg"
              }
              setShow={setShow}
            />
          )}
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
