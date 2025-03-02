// import React from 'react'
import search from "../../assets/search.svg";
import dp from "../../assets/Ellipse.png";
import down from "../../assets/down.png";
import bell2 from "../../assets/bell.png";
import meta from "../../assets/metamask.png";
import crypto from "../../assets/crypto.png";
import crypto2 from "../../assets/crypto2.png";
import arm from "../../assets/arm.png";
import logo from "../../assets/logo.png";
import filter from "../../assets/filter.png";

const wallet = [
  {
    amount: "1000 USDc",
    client: "Samuel Arinze",
    date: "2 mins ago",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto,
  },
  {
    amount: "500 XLM",
    client: "Jason Snow",
    date: "20 hrs ago",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto2,
  },
  {
    amount: "2000 USDt",
    client: "Andrea Stiles",
    date: "20 hrs ago",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: logo,
  },
  {
    amount: "1000 USDt",
    client: "Apex Tech",
    date: "22nd Feb 2025",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: logo,
  },
  {
    amount: "3500 XLM",
    client: "Horizon",
    date: "22nd Feb 2025",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto2,
  },
  {
    amount: "1000 USDc",
    client: "Nenye Gold",
    date: "22nd Feb 2025",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto,
  },
  {
    amount: "600 USDc",
    client: "Alex Global",
    date: "22nd Feb 2025",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto,
  },
];

function Wallet() {
  return (
    <div className="bg-gray-100 w-[84.85vw] h-[100vh] grid grid-rows-14 px-6 pb-4 gap-2">
      <div className="row-span-1 grid items-center px-2 mt-2">
        <div className="grid grid-cols-3 gap-1 w-full">
          <span className="">Wallet Board</span>
          <div className="col-span-1 flex justify-between">
            <div className="flex bg-white items-center justify-center rounded-[8px] py-1 w-[100%]">
              <img src={search} alt="" className="h-6 w-6 mr-4 my-1 ml-4" />
              <input
                placeholder="Search for jobs, talents or clients"
                className="w-full flex"
              />
            </div>
          </div>
          <div className="col-span-1 grid justify-center">
            <div className="flex gap-2">
              <div className="h-6 w-6 rounded-[50%] bg-white grid items-center justify-center">
                <img src={bell2} alt="" className="h-4 w-4" />
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={dp} alt="" className="h-6 w-6" />
                </div>
                <div className="">
                  <p className="-m-2">Glory Dseign</p>
                  <span className="text-[10px] top-1 m-0">
                    Product Designer
                  </span>
                </div>
                <img src={down} alt="" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-4 gap-4 row-span-4">
        <div className="col-span-3 grid grid-rows-4 gap-2">
          <div className="row-span-1 flex gap-2 items-center">
            <div className="bg-white rounded flex gap-2 py-1 px-1 items-center">
              <img src={meta} alt="Meta Icon" className="w-4 h-4" />
              <p className="text-[12.5px]">0xfg55ytosis...E15</p>
              <img src={down} alt="Dropdown Icon" className="w-6 h-6 -mt-1" />
            </div>
            <p>Usd Balance</p>
          </div>
          <div className="row-span-3 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-[8px] pl-4 py-4">
              <span className="text-[#3e73c4] text-[25px]">USDC</span>
              <div className="flex items-center  justify-center gap-4 mt-8">
                <img src={crypto} alt="Crypto Icon" className="w-10 h-10" />
                <span className="text-[30px]">
                  $ 7,500.<span className="text-[22px] text-blue-400">39</span>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-[8px] pl-4 py-4">
              <span className="text-[#009393] text-[25px]">USDT</span>
              <div className="flex items-center  justify-center gap-4 mt-8">
                <img src={logo} alt="Logo Icon" className="w-10 h-10" />
                <span className="text-[30px]">
                  $ 1,500.<span className="text-[22px] text-blue-400">95</span>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-[8px] pl-4 py-4">
              <span className="text-black text-[25px]">XLM</span>
              <div className="flex items-center justify-center gap-4 mt-8">
                <img src={crypto2} alt="Logo Icon" className="w-14 h-14" />
                <span className="text-[30px]">
                  $ 1,900.<span className="text-[22px] text-blue-400">30</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-row-3 rounded-[8px] bg-white p-2 py-4">
          <img
            src={arm}
            alt=""
            className=" row-span-2 w-36 h-36 flex justify-self-center"
          />
          <p className="row-span-1 mb-4 text-center">
            Job pay-<span className="text-[#009393]">Stablecoins</span> are held
            in smart contracrs until specific milestone is approved by both
            talents and client
          </p>
        </div>
      </div>
      <div className="row-span-2 grid grid-flow-col items-center mt-6 justify-between">
        <p className=" mt-6">Transaction history</p>
        <div className="flex">
          <div className="flex bg-white h-10 mt-8 pl-4 w-[40%] mr-4 rounded-[10px]">
            <img src={search} alt="" className="w-6 h-6 mt-3" />
            <input placeholder="Search..." type="text" />
          </div>
          <div className="flex mt-8 bg-white border-blue-500 border-2 rounded-[8px] py-1 px-3 gap-1 cursor-pointer">
            <img src={filter} alt="" className="w-4 h-4 mt-1 mr-2" />
            <span>Newest-Oldest</span>
            <img src={down} alt="" className="w-8 h-8 -mt-1" />
          </div>
        </div>
      </div>
      <div className="bg-white row-span-8">
        <div className="flex justify-between px-4 py-4 border-b-gray-200 border-b-2">
          <span className="text-purple-800">Amount</span>
          <span className="text-purple-800 ml-20">Client</span>
          <span className="text-purple-800 ">Date</span>
          <span className="text-purple-800">Invoice</span>
          <span className="text-purple-800">Job Information</span>
        </div>
        <div className="overflow-auto mt-3">
          {wallet.map((item, index) => (
            <div
              key={index}
              className="grid grid-flow-col mb-3 justify-between"
            >
              <div className="grid grid-flow-col">
                <div className="grid grid-flow-col">
                  <img src={item.image} alt="" className="w-8 h-8" />
                  <img
                    src={item.currency}
                    alt=""
                    className="w-4 h-4 mt-4 ml-5 absolute"
                  />
                </div>
                <spam className="text-[13px] absolute ml-9 mt-1 font-bold">
                  {item.amount}
                </spam>
              </div>
              <span className="text-[15px]">{item.client}</span>
              <span className="text-[15px]">{item.date}</span>
              <span className="text-[15px] text-blue-500">{item.invoice}</span>
              <span className="text-[15px] text-blue-500 underline">
                {item.info}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wallet;
