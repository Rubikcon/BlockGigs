import React from "react";
import close from "../../assets/close.png";
import good from "../../assets/Frame.png";

function AcceptOffer({ visible, onClose, item }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="grid grid-rows-7 shadow-xs bg-white w-full md:w-[30%] md:h-[50%] rounded-[5px] p-4">
        <img
          src={close}
          alt=""
          className="row-span-1 justify-self-end cursor-pointer"
          onClick={onClose}
        />
        <img
          src={good}
          alt=""
          className="row-span-3 justify-self-center items-center w-[180px] h-[180px]"
        />
        <span className="row-span-1 justify-self-center items-self-center font-bold mt-10 text-[14px] md:text-[20px]">
          Offer Accepted
        </span>
        <span className="row-span-2 justify-self-center items-self-center text-center mt-5">
          Good work, You have accepted the offer "{item.title}" from {item.name}
        </span>
      </div>
    </div>
  );
}

export default AcceptOffer;
