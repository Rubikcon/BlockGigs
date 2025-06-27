// import React from "react";
import PropTypes from "prop-types";
import AcceptOffer from "./AcceptOffer";
import close from "../../assets/close.png";
import crypto from "../../assets/crypto.png";
import bat from "../../assets/bat.png";
// import dp from "../../assets/Ellipse.png";

const item = [
  {
    title: "Milestone 1",
    amt: 200,
    job: "Branding/Designing of logo for web design",
  },
  {
    title: "Milestone 2",
    amt: 300,
    job: "First set of design with the main features",
  },
  {
    title: "Milestone 3",
    amt: 500,
    job: "Full web design to be passed on to Developer",
  },
];
function ClientOfferModal({ visible, onClose, accept }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="md:grid md:grid-rows-12 shadow-xs bg-white w-full md:w-[30%] md:h-[50%] rounded-[5px] p-4">
        <div className="row-span-1 flex justify-between w-full">
          <span className="text-black">Offer for Gig</span>
          <img
            src={close}
            alt=""
            className="w-3 h-3 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="row-span-1 flex justify-between items-center pt-1">
          <div>
            <p className="text-[15px] font-bold text-gray-400">{item.title}</p>
            <div className="flex">
              <div className="flex w-full text-gray-400 gap-1">
                <span className="text-[13px]">{item.officer}</span>
                <span className="-mt-1">•</span>
                <span className="text-[13px]">Sent on {item.date}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <img src={crypto} alt="" className="w-3 h-3 mt-1" />
            <span className="text-[14px] text-black">
              {item.milestone.reduce((curr, acc) => acc.amt + curr, 0)}$
            </span>
          </div>
        </div>
        <div className="row-span-3 pt-3">
          <div className="flex gap-1">
            <img src={bat} alt="" className="w-4 h-4 mt-1 bg-green-200" />
            <span className="text-[15px] text-black">Gig Details</span>
          </div>
          <p className="text-[12.5px] text-gray-400">
            {item.detail}{" "}
            <span className="text-[#2f66f6]">View Job Details</span>
          </p>
        </div>
        <div className="row-span-3 pt-4  mt-2">
          <div className="flex gap-1">
            <img src={bat} alt="" className="bg-blue-300 w-4 h-4 mt-1" />
            <p className="text-black text-[15px]">Milestone Payments</p>
          </div>
          <div className="">
            {item.milestone.map((item, index) => (
              <div
                key={index}
                className="grid grid-flow-col text-gray-400 gap-1"
              >
                <span className="-mt-1">•</span>
                <div className="text-[10px] md:text-[12px]">{item.title}</div>
                <span className="-mt-1">–</span>
                <img src={crypto} alt="" className="w-3 h-3 mt-1" />
                <div className="text-[10px] md:text-[12px]">{item.amt}$</div>
                <span className="-mt-1">•</span>
                <span className="text-[10px] md:text-[12px]">{item.job}</span>
              </div>
            ))}
            <div className="flex text-gray-400 gap-1">
              <span className="-mt-0.5">•</span>
              <span className="text-[10px] md:text-[14px]">Total Job pay</span>
              <span className="-mt-0.5">–</span>
              <div className="text-[10px] md:text-[13px] mt-1 md:mt-0">
                {item.milestone.reduce((curr, acc) => acc.amt + curr, 0)}$
              </div>
              <span className="-mt-0.5">•</span>
              <span className="text-[10px] md:text-[13px] mt-1 md:mt-0">
                Saas website design gig completed
              </span>
            </div>
          </div>
        </div>
        <div className="row-span-4 grid grid-cols-3 gap-2 mt-16 pt-2">
          <button
            className="col-span-2 bg-[#2f66f6] cursor-pointer text-white rounded-[5px]"
            onClick={accept}
          >
            Accept Offer
          </button>
          <button
            className="col-span-1 border-2 border-red-500 rounded-[5px] text-red-500 cursor-pointer"
            onClick={onClose}
          >
            Reject Offer
          </button>
        </div>
      </div>
      <AcceptOffer />
    </div>
  );
}

ClientOfferModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ClientOfferModal;
