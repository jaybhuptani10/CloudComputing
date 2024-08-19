import React, { useState, useEffect } from "react";
import IMG from "./map.png";

const Modal = ({ num, openModal, onHoverLeave }) => {
  const [img, setImg] = useState("");

  useEffect(() => {
    if (num === 1) {
      setImg(IMG);
    } else if (num === 2) {
      setImg(
        "https://www.leaskmarine.com/wp-content/uploads/2016/06/PLAT-O_deploy_1_1.jpg"
      );
    } else {
      setImg(
        "https://dgtlinfra.com/wp-content/uploads/2022/09/Microsoft-Project-Natick-Phase-2-Underwater-Servers-1068x640.jpg.webp"
      );
    }
  }, [num]); // Only re-run the effect if num changes

  return (
    <div
      onMouseLeave={onHoverLeave}
      className="absolute  h-80 w-96  z-30 top-0 transition-all delay-100 cursor-pointer "
    >
      <img
        className={`w-full scale-150 h-full object-cover rounded-xl ${
          openModal ? "block" : "hidden"
        }`}
        src={img}
        alt=""
      />
    </div>
  );
};

export default Modal;
