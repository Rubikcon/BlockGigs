// import React from 'react'
import close from "../../assets/close.png";
import frame from "../../assets/Frame.png";

function ClientSuccessModal({ onClose }) {
  return (
    <div className="shadow-xs bg-white w-full md:w-[25%] h-[50%] rounded-[5px] p-4 flex flex-col gap-4 overflow-auto">
      <div className="col-span-1 flex basis-1/9 justify-end">
        <img
          src={close}
          alt=""
          className="cursor-pointer w-4 h-4"
          onClick={onClose}
        />
      </div>
      <div className="grid justify-center">
        <img src={frame} alt="" className="w-45 h-45" />
      </div>
      <div className="">
        <span className="grid justify-center font-bold">
          Success-Gig Posted!
        </span>
        <p className="text-center">
          Talents will be able to view the job to apply. Get ready to review
          Applications
        </p>
      </div>
    </div>
  );
}

export default ClientSuccessModal;
