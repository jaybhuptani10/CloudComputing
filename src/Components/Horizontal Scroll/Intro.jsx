import React from "react";
import IMG from "./Imgs/Intro-Tortoise.png";
const Intro = () => {
  return (
    <div className="relative h-full w-full flex items-center z-40  ml-5">
      <div className="w-1/2 flex flex-col gap-4 z-30  rounded-xl p-2 backdrop-blur-xl overflow-hidden">
        <h1 className="text-xl text-[#fff] text-left px-2 leading-6 ">
          There are approximately 10,978 data center locations worldwide as of
          December 2023. (References: Cloudscene, Datacentermap, Statista)
        </h1>
        <h1 className="text-xl text-[#FFFFEA] text-right px-2 leading-6">
          The electricity used by data centers could power 6,482,400 average
          American homes. (Reference: Carbon Collective)
        </h1>
        <h1 className="text-xl text-[#fff] text-left  px-2 leading-2">
          The top 15 countries with the most data centers(References:
          Cloudscene, Datacentermap, Statista)
        </h1>
        <h1 className="text-xl text-[#FFFFEA] text-right px-2 leading-6">
          Data centers consumed 7.4 Gigawatts of power in 2023, a 55% increase
          from the 4.9 Gigawatts in 2022. (Reference: Cushman Wakefield)
        </h1>
        <h1 className="text-xl text-[#fff] text-left px-2 leading-6">
          Data centers account for between 1% and 5% of global greenhouse gas
          emissions. (Reference: Channel News Asia)
        </h1>
        <h1 className="text-xl z-30 text-[#F1F5F2] text-right px-2 leading-6">
          The 1st half of 2023 saw the largest amount of construction of data
          center construction in history in primary markets. (Reference: CBRE)
        </h1>
      </div>
      <img
        src={IMG}
        className="w-[50vw] z-50 h-[100vh] bottom-0 object-cover absolute right-0"
        alt=""
      />
    </div>
  );
};

export default Intro;
