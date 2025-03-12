import React, { useState } from "react";
import close from "../../assets/close.png";
import download from "../../assets/download.png";
import image from "../../assets/image.png";
import logo from "../../assets/BlockGigs.png";
import crypto from "../../assets/crypto.png";
import good from "../../assets/good.png";

function WalletInvoice({ visible, onClose, item }) {
  const [print, setPrint] = useState(false);
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="grid grid-rows-7 shadow-xs w-[35%] h-[90%] rounded-[5px]">
        <div className="grid items-center grid-flow-col justify-between w-full h-[80%] bg-white rounded-[10px] shadow px-4">
          <div className="flex gap-2">
            <button
              className="border-2 border-[#2f66f6] flex px-2 items-center rounded-[5px] gap-2"
              onClick={() => setPrint(true)}
            >
              <img src={download} alt="" className="w-6 h-6" />
              <span className="text-[14px]">Download PDF</span>
            </button>
            <button
              className="border-2 border-[#db2777] flex px-1 py-2 items-center rounded-[5px] gap-2"
              onClick={() => setPrint(true)}
            >
              <img src={image} alt="" className="w-6 h-6" />
              <span>Download PNG</span>
            </button>
          </div>
          <img
            src={close}
            alt=""
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="grid grid-rows-8 w-full h-[77vh] bg-white rounded-[5px] shadow py-4 px-6">
          <div className="flex justify-between row-span-1 items-center">
            <img src={logo} alt="" className="w-25 h-7" />
            <span>#Transaction Invoice</span>
          </div>
          {print && (
            <div className="absolute bg-white w-[33.5%] h-13 flex border-2 border-[#047857] justify-between items-center px-2 rounded-[8px]">
              <div className=" flex gap-2">
                <img src={good} alt="" />
                <p>Your invoice has been downloaded successful</p>
              </div>
              <img
                src={close}
                alt=""
                onClick={() => setPrint(false)}
                className="cursor-pointer"
              />
            </div>
          )}
          <div className="grid row-span-1 justify-center items-center">
            <div className="flex justify-center gap-2">
              <img src={crypto} alt="" className="w-9 h-9" />
              <span className=" text-[25px]">{item.amount}</span>
            </div>
            <div className="text-gray-400 mt-2">{item.time}</div>
          </div>
          <div className="row-span-4 grid items-center mt-4 space-y-2">
            <div className="flex justify-between">
              <p>Talent Details</p>
              <div>
                <span>{item.talent}</span>
                <p className="text-gray-400">{item.talentId}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Client Details</p>
              <div>
                <span>{item.client}</span>
                <p className="text-gray-400">{item.clientID}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Job Details</p>
              <div>
                <span>{item.job}</span>
                <p className="text-gray-400">
                  milestone #{item.milestone} of #{item.totalMilestone}
                </p>
              </div>
            </div>
            <div className=" flex grid-cols-2 justify-between w-full">
              <p className="">Transaction ID</p>
              <span className="col-span-1 w-[45%] break-words whitespace-normal">
                {item.transactionID}
              </span>
            </div>
          </div>
          <div className="row-start-8 row-span-1 text-center">
            Transaction Successful, Pay has been sent to Talent. Any more
            enquires, reach us at{" "}
            <span className="text-[#2f66f6]">rubiconconsulting@gmail.com</span>
            for assistance
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletInvoice;
