import React from "react";

const Modal = ({ IMG, setShow, classN, className }) => {
  return (
    <div className="">
      <img
        src={IMG}
        className={` ease-in-out transition duration-200 w-full rounded-xl left-0   object-cover absolute ${className} ${
          classN && "-top-52 h-[80vh] w-auto left-20 z-50 "
        }`}
        onMouseLeave={() => setShow(false)}
        alt=""
      />
    </div>
  );
};

export default Modal;
