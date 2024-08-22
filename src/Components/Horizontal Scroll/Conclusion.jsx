import React from "react";
import UnderwaterImg from "./Imgs/Underwater-design.png";
import Turtle from "./Imgs/TURTLE.png";
const Conclusion = () => {
  //<h1>What is Project Natick?</h1>
  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div className="w-[60vw] h-[89vh] flex items-end rounded-3xl overflow-hidden  bg-red-500 relative">
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
        <div className="text-left w-[60%] h-full  bg-blue-500">
          <p className=" text-white text-l px-5">
            Project Natick Phase 2 has successfully demonstrated that underwater
            data centers can offer significant benefits in terms of
            sustainability, reliability, and efficiency. The submerged data
            center housed 864 servers in a nitrogen-infused container, which
            helped reduce corrosion and improve hardware performance. Over two
            years of operation, the facility exhibited an eighth of the failure
            rate seen in traditional land-based data centers, showcasing the
            resilience provided by the controlled underwater environment.
            Powered entirely by renewable energy, the data center also
            benefitted from the ocean's natural cooling, lowering energy
            consumption and operational costs. Additionally, the autonomous
            design of the facility significantly reduced maintenance
            requirements, further cutting down costs compared to land-based
            centers. By proving that these centers can operate efficiently with
            minimal human intervention, Microsoft has opened the door to the
            future of data infrastructure. Project Natick demonstrates a
            scalable and environmentally friendly model that could transform
            cloud services for coastal regions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
