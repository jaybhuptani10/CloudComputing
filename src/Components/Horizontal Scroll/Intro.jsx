import React, { useState } from "react";
import IMG from "./Imgs/Intro-Tortoise.png";
import Modal from "./Modal";
import stats from "./Imgs/Stats.jpeg";
const Intro = () => {
  const [show, setShow] = useState(false);
  const [graph, setGraph] = useState(false);

  return (
    <div className="relative h-full w-full flex items-center z-40  ml-5">
      <div className="w-1/2 flex flex-col gap-4   rounded-xl p-2 backdrop-blur-xl overflow-hidden z-40 relative">
        <svg
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          viewBox="0 0 920 1000"
          fill="currentColor"
          className=" cursor-pointer w-10 h-10 top-2 hover:cursor-pointer z-30 text-white absolute right-2"
        >
          <path d="M454 40c126.667-1.333 235.333 42 326 130s137.333 195.333 140 322c1.333 126.667-42.333 235.667-131 327S592.667 957.333 466 960c-126.667 1.333-235.667-42.333-327-131S1.333 632.667 0 506c-2.667-126.667 40.667-235.667 130-327S327.333 41.333 454 40m52 152c-28 0-49.667 8-65 24-15.333 16-23 32.667-23 50-1.333 18.667 3.667 33.333 15 44 11.333 10.667 27.667 16 49 16 25.333 0 45.667-7.333 61-22 15.333-14.667 23-32.667 23-54 0-38.667-20-58-60-58M386 786c20 0 48-8.667 84-26s71.333-43.333 106-78l-18-24c-32 24-56 36-72 36-9.333 0-10.667-12.667-4-38l42-160c17.333-64 10-96-22-96-20 0-49.667 9.667-89 29s-77.667 44.333-115 75l16 26c34.667-22.667 59.333-34 74-34 8 0 8 11.333 0 34l-36 152c-17.333 69.333-6 104 34 104" />
        </svg>
        {show && (
          <Modal
            IMG={
              "https://news.microsoft.com/wp-content/uploads/prod/2018/05/Natick_Deployment_59-1920x1080.jpg"
            }
            setShow={setShow}
          />
        )}
        <h1 className="text-xl -z-10 text-[#fff] text-left px-2 leading-6  ">
          There are approximately 10,978 data center locations worldwide as of
          December 2023. (References: Cloudscene, Datacentermap, Statista)
        </h1>
        <h1 className="text-xl -z-10 text-[#FFFFEA] text-right px-2 leading-6">
          The electricity used by data centers could power 6,482,400 average
          American homes. (Reference: Carbon Collective)
        </h1>
        <h1 className="text-xl -z-10  text-[#fff] text-left  px-2 leading-2 relative">
          The top 15 countries with the most data centers(References:
          Cloudscene, Datacentermap, Statista)
          <svg
            onMouseEnter={() => setGraph(true)}
            viewBox="0 0 920 1000"
            fill="currentColor"
            className=" cursor-pointer w-7  h-7 top-7  hover:cursor-pointer -z-30 text-white absolute right-64"
          >
            <path d="M454 40c126.667-1.333 235.333 42 326 130s137.333 195.333 140 322c1.333 126.667-42.333 235.667-131 327S592.667 957.333 466 960c-126.667 1.333-235.667-42.333-327-131S1.333 632.667 0 506c-2.667-126.667 40.667-235.667 130-327S327.333 41.333 454 40m52 152c-28 0-49.667 8-65 24-15.333 16-23 32.667-23 50-1.333 18.667 3.667 33.333 15 44 11.333 10.667 27.667 16 49 16 25.333 0 45.667-7.333 61-22 15.333-14.667 23-32.667 23-54 0-38.667-20-58-60-58M386 786c20 0 48-8.667 84-26s71.333-43.333 106-78l-18-24c-32 24-56 36-72 36-9.333 0-10.667-12.667-4-38l42-160c17.333-64 10-96-22-96-20 0-49.667 9.667-89 29s-77.667 44.333-115 75l16 26c34.667-22.667 59.333-34 74-34 8 0 8 11.333 0 34l-36 152c-17.333 69.333-6 104 34 104" />
          </svg>
          {graph && <Modal IMG={stats} classN={1} setShow={setGraph} />}
        </h1>
        <h1 className="text-xl -z-50 text-[#FFFFEA] text-right px-2 leading-6">
          Data centers consumed 7.4 Gigawatts of power in 2023, a 55% increase
          from the 4.9 Gigawatts in 2022. (Reference: Cushman Wakefield)
        </h1>
        <h1 className="text-xl -z-50 text-[#fff] text-left px-2 leading-6">
          Data centers account for between 1% and 5% of global greenhouse gas
          emissions. (Reference: Channel News Asia)
        </h1>
        <h1 className="text-xl -z-50  text-[#F1F5F2] text-right px-2 leading-6">
          The 1st half of 2023 saw the largest amount of construction of data
          center construction in history in primary markets. (Reference: CBRE)
        </h1>
      </div>
      <img
        src={IMG}
        className="w-[50vw] z-40 h-[100vh] bottom-0 object-cover absolute right-0"
        alt=""
      />
    </div>
  );
};

export default Intro;
