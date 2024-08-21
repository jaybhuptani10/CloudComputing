import React from "react";
import img from "./Imgs/hmm.png";
const Sustainable = () => {
  return (
    <div className="h-full we-full flex items-center relative justify-center">
      <img
        src={img}
        className="h-[120vh] w-[100vw] absolute -bottom-36 z-10"
        alt=""
      />
      <div className="z-20 absolute top-[19%] left-[7%]">
        <h1 className="text-2xl"></h1>
        <p className="text-[16px] w-1/2 z-20 text-left  ">
          <span className=" font-bold ">
            {" "}
            They aim to develop a sustainable datacenter that utilizes locally
            produced green energy, offering customers more choices to fulfill
            their sustainability goals.
          </span>

          <ul className=" list-disc">
            <li>
              Natick datacenters are envisioned to be fully recycled. Made from
              recycled material which in turn is recycled at the end of life of
              the datacenter.
            </li>
            <li>
              A Natick datacenter co-located with offshore renewable energy
              sources could be truly zero emission: no waste products, whether
              due to the power generation, computers, or human maintainers are
              emitted into the environment.
            </li>
            <li>
              They see this as an opportunity to deploy resilient datacenters
              that operate without onsite personnel, ensuring high reliability
              throughout their entire lifespan, potentially up to 10 years.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Sustainable;
