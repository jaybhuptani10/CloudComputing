import React from "react";
import background from "./Imgs/Page Design-2.png";
const Diff = () => {
  return (
    <div className="flex h-full items-center w-full relative">
      <img
        src={background}
        className="h-[84%] z-10 w-[70%] object-cover absolute  overflow-hidden"
        alt=""
      />
      <div className="absolute z-20 w-1/2 left-36">
        <p className="mt-2 text-black text-l px-10 text-left">
          The Natick Phase 1 vessel was operated on the seafloor approximately
          one kilometer off the Pacific coast of the United States from August
          to November of 2015.{" "}
          <span className="text-2xl uppercase text-red-700">- Phase 1</span>
        </p>

        <p className="mt-12 text-black text-l px-10 text-right">
          <span className="text-2xl uppercase text-[#4059AD]">Phase 2- </span>
          Phase 2 of Natick aims to demonstrate that we can economically
          manufacture full scale undersea datacenter modules and deploy them in
          under 90 days from decision to power on. The Phase 2 vessel was
          deployed at the European Marine Energy Centre located in the Orkney
          Islands, UK in June of 2018.
        </p>
      </div>
    </div>
  );
};

export default Diff;
