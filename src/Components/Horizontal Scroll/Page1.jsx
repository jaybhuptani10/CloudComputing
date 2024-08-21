import React from "react";

const Page1 = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-4 flex-wrap gap-5">
      <div className="h-[40vh] w-1/4 bg-gray-800 bg-opacity-35 flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:scale-105 cursor-pointer duration-150 transition-all">
        <h1 className="text-xl w-[80%] font-extrabold text-white">
          Electrical Power Consumption
        </h1>
        <p className="text-lg text-gray-300">240 KW.</p>
      </div>
      <div className="h-[40vh] w-1/4 bg-gray-800 bg-opacity-35 flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:scale-105 cursor-pointer duration-150 transition-all">
        <h1 className="text-xl w-[80%] font-extrabold text-white">
          Pressure Vessel Dimensions
        </h1>
        <p className="text-lg text-gray-300">12.2m length, 2.8m diameter</p>
      </div>

      <div className="h-[40vh] w-1/4 bg-gray-800 bg-opacity-35 flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:scale-105 cursor-pointer duration-150 transition-all">
        <h1 className="text-xl w-[80%] font-extrabold text-white">Payload</h1>
        <p className="text-lg text-gray-300">
          12 racks containing 864 standard Microsoft datacenter servers with
          FPGA acceleration and 27.6 petabytes of disk.
        </p>
      </div>
      <div className="h-[40vh] w-1/4 bg-gray-800 bg-opacity-35 flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:scale-105 cursor-pointer duration-150 transition-all">
        <h1 className="text-xl w-[80%] font-extrabold text-white">
          Internal Operating Environment
        </h1>
        <p className="text-lg text-gray-300">
          1 atmosphere pressure, dry nitrogen.
        </p>
      </div>
      <div className="h-[40vh] w-1/4 bg-gray-800 bg-opacity-35 flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:scale-105 cursor-pointer duration-150 transition-all">
        <h1 className="text-xl w-[80%] font-extrabold text-white">
          Planned Length of Operation Without Maintenance
        </h1>
        <p className="text-lg text-gray-300">Up to 5 years.</p>
      </div>
      <div className="h-[40vh] w-1/4 bg-gray-800 bg-opacity-35 flex flex-col items-center justify-center gap-2 p-2 rounded-xl hover:scale-105 cursor-pointer duration-150 transition-all">
        <h1 className="text-xl w-[80%] font-extrabold text-white">Location</h1>
        <p className="text-lg text-gray-300">
          European Marine Energy Centre, Scotland, UK.
        </p>
      </div>
    </div>
  );
};

export default Page1;
