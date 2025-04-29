// import React from 'react'
import bad from "../../assets/bad.png";
import close from "../../assets/close.png";

function ClientFailureModal({ onClose }) {
  return (
    <div className="shadow-xs bg-white w-full md:w-[25%] h-[50%] rounded-[5px] p-4  flex flex-col  gap-4 overflow-auto">
      <div className="col-span-1 flex basis-1/9 justify-end">
        <img
          src={close}
          alt=""
          className="cursor-pointer w-4 h-4"
          onClick={onClose}
        />
      </div>
      <div className="grid justify-center">
        <img src={bad} alt="" className="w-45 h-45" />
      </div>
      <div className="">
        <span className="grid justify-center font-bold">
          Unable to post Gig!
        </span>
        <p className="text-center">
          There was a problem while trying to post this gig, please try again
          later, Thanks
        </p>
      </div>
    </div>
  );
}

export default ClientFailureModal;
