// import React from "react";
import arm from "../../assets/arm.png";

function ConfirmationModal({ onSubmit, onCloseConfirm }) {
  return (
    <div className="grid grid-rows-4 w-full md:w-[30%] h-[45%] bg-white shadow-xl shadow-gray-300 px-4 py-6 rounded-[5px]">
      <img
        src={arm}
        alt=""
        className="row-span-3 w-45 h-45 justify-self-center items-center"
      />

      <p className="row-span-2 grid items-center justify-center font-bold">
        Confirm New Gig
      </p>
      <span className="row-span-3 grid text-center text-[12px] sm:text-[14px] md:text-[16px]">
        Job will be posted for applicants and 1000 USDC will be deducted from
        your account to be kept in smart contract
      </span>
      <div className="row-span-1 grid grid-cols-2 items-center justify-center gap-2 mt-1">
        <button
          className="bg-[#2f66f6] text-white rounded-[8px] py-1 col-span-1 text-[8px] sm:text-[10px] md:text-[14px]"
          onClick={onSubmit}
        >
          Confirm New Gig
        </button>
        <button
          className=" col-span-1 text-[#2f66f6] rounded-[8px] py-1 border border-[#2f66f6]  text-[8px] sm:text-[10px] md:text-[14px]"
          onClick={onCloseConfirm}
        >
          Cancel & Save to Drafts
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
