import React, { useState } from "react";
import covid from "./Imgs/COVID.png";
const Covid = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="h-full w-full flex items-center justify-center ml-32 ">
      <div className="w-1/2 ">
        {" "}
        <h1
          onMouseEnter={() => setShow(true)}
          className="text-[4vw] font-extrabold text-[#D6FF2C]"
        >
          COVID-19 RESEARCH
          <div onMouseLeave={() => setShow(false)}>
            {show && (
              <iframe
                width="1000"
                height="600"
                src="https://www.youtube.com/embed/lBeepqQBpvU?si=Bsr8cHt4bhld8E7A"
                title="YouTube video player"
                frameborder="0"
                className="absolute top-5"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </h1>
        <p className="h-[60vh] w-full bg-[#3AD7FF] m-5 text-left text-lg p-2 rounded-2xl">
          During the COVID-19 pandemic, Microsoft's Northern Isles datacenter,
          part of Project Natick, played a crucial role in combating the virus.
          Located underwater in Scotland's Orkney Islands, this datacenter
          processed workloads for distributed computing projects like
          Folding@home, which aimed to understand COVID-19 proteins and develop
          therapeutics. By leveraging its constant processing power, the
          datacenter contributed significantly to research efforts, including
          simulating protein dynamics to identify potential drug targets.
          Additionally, the datacenter's servers supported global initiatives
          like the World Community Grid and collaborated with Microsoft
          employees working remotely, enhancing the overall impact on COVID-19
          research.
        </p>
      </div>

      <img src={covid} className="h-full w-[70vw] object-cover" alt="" />
    </div>
  );
};

export default Covid;
