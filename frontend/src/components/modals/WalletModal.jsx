import React, { useState } from "react";
import close from "../../assets/close.png";
import metamask from "../../assets/metamask.png";
import celo from "../../assets/celo.png";
import w from "../../assets/bat2.png";

const connections = [
  {
    icon: metamask,
    name: "Metamask",
  },
  {
    icon: celo,
    name: "Celo",
  },
  {
    icon: w,
    name: "Wallet Connect",
  },
];

function WalletModal({ visible, onClose, onItemsClick }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="grid grid-rows-8 w-[23%] h-[45%] bg-white shadow-xl shadow-gray-300 px-4 py-6 rounded-[5px]">
        <div className="row-span-1 justify-between flex">
          <span className="font-bold text-[14px]">Wallet Connection</span>
          <img
            src={close}
            alt=""
            className=" w-3 h-3 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <p className="text-gray-400 row-span-1 text-[14px]">
          Connect Wallet that will be used to receive payments (stablecoins) for
          Gigs
        </p>
        <div className="grid row-span-5 mt-6 items-center">
          {connections.map((item, i) => (
            <div
              key={i}
              className="flex gap-2 w-full rounded-[5px] bg-gray-200 justify-start p-3 hover:scale-105 duration-170"
              onClick={() => onItemsClick(item)}
            >
              <img src={item.icon} alt="" className="w-4 h-4" />
              <span className="text-[14px] -mt-1">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
