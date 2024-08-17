import React, { useState } from "react";
import Modal from "./Modal";
const Page1 = () => {
  const [openModalNum, setOpenModalNum] = useState(null); // Track which modal is open
  const onHoverEnter = (num) => {
    setOpenModalNum(num); // Open the modal corresponding to the hovered button
  };

  const onHoverLeave = () => {
    setOpenModalNum(null); // Close the modal when the mouse leaves the button
  };

  return (
    <div className="w-full h-full flex gap-2 justify-center">
      <div className="relative self-center h-96 w-1/4 bg-[#A02334] bg-opacity-35 rounded-xl flex flex-col items-center gap-10 py-10">
        <svg
          viewBox="0 0 576 512"
          fill="currentColor"
          className="h-20 w-20 text-white"
        >
          <path d="M408 120c0 54.6-73.1 151.9-105.2 192-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120 168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6.5-1.2 1-2.5 1.5-3.7l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zm-278.4-62.1c2.4 14.1 7.2 28.3 12.8 41.5 2.9 6.8 6.1 13.7 9.6 20.6v251.4L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77v249.3l-192-54.9V255c20.5 31.3 42.3 59.6 56.2 77 20.5 25.6 59.1 25.6 79.6 0zM288 152c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z" />
        </svg>
        <h1 className="text-2xl text-slate-100">
          European Marine Energy Centre, Scotland, UK.
        </h1>

        <Modal num={1} openModal={openModalNum === 1} />

        <button
          onMouseEnter={() => onHoverEnter(1)}
          onMouseLeave={onHoverLeave}
          className="bg-[#179BAE] w-1/2 h-10 rounded-lg text-xl font-semibold absolute bottom-5"
        >
          Hover Here
        </button>
      </div>
      <div className="relative self-center h-96 w-1/4 bg-[#A02334] bg-opacity-35 rounded-xl flex flex-col items-center gap-10 py-10">
        <svg fill="none" viewBox="0 0 15 15" className="h-20 w-20 text-white">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.252.066a.5.5 0 01.496 0l7 4A.5.5 0 0115 4.5v.72c0 4.532-3.005 8.516-7.363 9.76a.5.5 0 01-.274 0A10.152 10.152 0 010 5.22V4.5a.5.5 0 01.252-.434l7-4zm-.18 10.645l4.318-5.399-.78-.624-3.682 4.601L4.32 7.116l-.64.768 3.392 2.827z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-2xl text-slate-100 leading-6">
          The servers in Natick Northern Isles showed a failure rate of 1/8th
          that of our land-based control group.
        </h1>

        <Modal num={2} openModal={openModalNum === 2} />

        <button
          onMouseEnter={() => onHoverEnter(2)}
          onMouseLeave={onHoverLeave}
          className="bg-[#179BAE] w-1/2 h-10 rounded-lg text-xl font-semibold absolute bottom-5 "
        >
          Hover Here
        </button>
      </div>
      <div className="relative self-center h-96 w-1/4 bg-[#A02334] bg-opacity-35 rounded-xl flex flex-col items-center gap-10 py-10">
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          className="h-20 w-20 text-white"
        >
          <path d="M832 64H192c-17.7 0-32 14.3-32 32v224h704V96c0-17.7-14.3-32-32-32zM288 232c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM160 928c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V704H160v224zm128-136c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zM160 640h704V384H160v256zm128-168c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z" />
        </svg>
        <h1 className="text-2xl text-slate-100 leading-7">
          Natick was used to perform COVID-19 research for Folding at Home and
          World Community Grid.
        </h1>

        <Modal num={3} openModal={openModalNum === 3} />

        <button
          onMouseEnter={() => onHoverEnter(3)}
          onMouseLeave={onHoverLeave}
          className="bg-[#179BAE] w-1/2 h-10 rounded-lg text-xl font-semibold absolute bottom-5"
        >
          Hover Here
        </button>
      </div>
    </div>
  );
};

export default Page1;
