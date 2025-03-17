import { useState } from "react";
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
import WalletModal from "../modals/WalletModal";
import WalletInvoice from "../modals/WalletInvoice";
import WalletConnect from "../modals/WalletConnect";

const wallet = [
  {
    amount: "1000 USDc",
    client: "Samuel Arinze",
    clientID: "0xcfg3tf...E5e",
    talent: "Glory Design | Product Designer",
    talentId: "0xfr45effr...E45",
    job: "Website for DEFI brand",
    milestone: 1,
    totalMilestone: 3,
    transactionID: "0x345reft78wasE32DCfhgyt78000ew0210fhgnt0rty098ry7hww78",
    time: "Jan 11th, 2025 | 15:12:34",
    date: "2 mins ago",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto,
  },
  {
    amount: "500 XLM",
    client: "Jason Snow",
    clientID: "0xbgfr78u...E5e",
    talent: "Product Branding",
    talentId: "0xfr45effr...E45",
    job: "Product branding",
    milestone: 2,
    totalMilestone: 3,
    transactionID: "0x345reft78wasE32DCfhgyt78000ew0210fhgnt0rty098ry7hww78",
    time: "Feb 16th, 2025 | 12:10:34",
    date: "20 hrs ago",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto2,
  },
  {
    amount: "2000 ETH ",
    client: "Andrea Stiles",
    clientID: "0xcfg3tf...E5e",
    talent: "Web developer | Product Designer",
    talentId: "0xth45rdes89...E45",
    job: "Website for NFT brand",
    milestone: 2,
    totalMilestone: 4,
    transactionID: "0x345rfhryt87756ti9fhgyt78000ew0210fhgnt0rty098ry7hww78",
    time: "Mar 11th, 2025 | 14:45:34",
    date: "20 hrs ago",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: logo,
  },
  {
    amount: "1000 ETH",
    client: "Apex Tech",
    clientID: "0xduyr58uyt7...E5e",
    talent: "Apex Design | Product Designer",
    talentId: "0xfr45effr...E45",
    job: "Website for DEFI brand",
    milestone: 3,
    totalMilestone: 3,
    transactionID: "0x345reft78wasDOMRectReadOnlyH00ew0210fhgnt0rty098ry7hww78",
    time: "Apr 2nd, 2025 | 02:12:34",
    date: "22nd Feb 2025",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: logo,
  },
  {
    amount: "3500 XLM",
    client: "Horizon",
    clientID: "0xryhe78f...E5e",
    talent: "Product Brand Designer",
    talentId: "0xfr45effr...E45",
    job: "Product Branding",
    milestone: 2,
    totalMilestone: 4,
    transactionID: "0x345reft78wasE32DCfhgyt78000ew0210fhgnt0rty098ry7hww78",
    time: "Dec 13th, 2024 | 1:12:34",
    date: "22nd Feb 2025",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto2,
  },
  {
    amount: "1000 USDc",
    client: "Nenye Gold",
    clientID: "0x0yiut09jkgjhf...E5e",
    talent: "Product Designer",
    talentId: "0xfr45effr...E45",
    job: "Website for DEFI brand",
    milestone: 3,
    totalMilestone: 3,
    transactionID: "0x345reft758uty76rht67hf857000ew0210fhgnt0rty098ry7hww78",
    time: "Jan 21st, 2025 | 15:12:34",
    date: "22nd Feb 2025",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto,
  },
  {
    amount: "600 USDc",
    client: "Alex Global",
    clientID: "0xcfg3tf...E5e",
    talent: "Glory Design | Product Designer",
    talentId: "0xfr45effr...E45",
    job: "Website for DEFI brand",
    milestone: 1,
    totalMilestone: 3,
    transactionID: "0x345reft78wasE32DCfhgyt78000ew0210fhgnt0rty098ry7hww78",
    time: "Jan 11th, 2025 | 15:12:34",
    date: "22nd Feb 2025",
    invoice: "view invoice",
    info: "View Job Details",
    image: dp,
    currency: crypto,
  },
];

function Wallet() {
  const [openWallet, setOpenWallet] = useState(false);
  const [openWalletInvoice, setOpenWalletInvoice] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  const [connect, setConnect] = useState(null);
  const [walletDetail, setWalletDetail] = useState({});

  const WalletInvoiceHandler = (value) => {
    setWalletDetail(value);
    setOpenWalletInvoice(true);
  };

  const selectedConnectHandler = (item) => {
    console.log(item, "wallet");
    setOpenWallet(false);
    setOpenConnect(true);
    setConnect(item);
  };

  return (
    <div className="bg-gray-100 w-full md:w-[84.85vw] h-[100vh] grid grid-rows-14 md:px-6 pb-4 md:gap-2 overflow-auto">
      <div className="row-span-1 grid items-center md:px-2 mt-2">
        <div className="grid grid-cols-3 md:gap-1 w-full">
          <span className="text-[12px] md:text-[16px]">Wallet Board</span>
          <div className="col-span-1 flex md:justify-between">
            <div className="flex bg-white items-center justify-center rounded-[8px] py-1 w-[100%]">
              <img src={search} alt="" className="h-6 w-6 mr-4 my-1 ml-4" />
              <input
                placeholder={
                  window.innerWidth >= 768
                    ? "Search for jobs, talents or clients"
                    : ""
                }
                className="w-[50%] md:w-full flex"
              />
            </div>
          </div>
          <div className="col-span-1 grid justify-center">
            <div className="flex md:gap-2">
              <div className="h-6 w-6 rounded-[50%] bg-white md:grid items-center justify-center hidden">
                <img src={bell2} alt="" className="h-4 w-4" />
              </div>
              <div className="flex md:gap-4">
                <div className="hidden md:block">
                  <img src={dp} alt="" className="h-6 w-6" />
                </div>
                <div className="">
                  <p className="-m-2 text-[12px] md:text-[16px]">
                    Glory Dseign
                  </p>
                  <span className="text-[8px] md:text-[10px] top-1 m-0">
                    Product Designer
                  </span>
                </div>
                <img src={down} alt="" className="w-4 h-4 md:w-8 md:h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-flow-col md:grid-cols-4 gap-4 row-span-8 md:row-span-4">
        <div className="col-span-3 grid md:grid-rows-4 gap-2">
          <div className="row-span-1 flex gap-2 items-center">
            <div className="bg-white rounded flex gap-2 py-1 px-1 items-center">
              <img
                src={meta}
                alt="Meta Icon"
                className="w-3 h-3 md:w-4 md:h-4"
              />
              <p className="text-[8.5px] md:text-[12.5px]">
                0xfg55ytosis...E15
              </p>
              <img
                src={down}
                alt="Dropdown Icon"
                className="w-4 h-4 md:w-6 md:h-6 -mt-1 cursor-pointer"
                onClick={() => setOpenWallet(true)}
              />
            </div>
            <p className="text-[12px] md:text-[16px]">Usd Balance</p>
          </div>
          <div className="row-span-3 md:grid md:grid-cols-3 md:gap-4 space-y-2">
            <div className="bg-white rounded-[8px] pl-2 md:pl-4 py-2  md:py-4 border-b border-gray-400 md:border-none">
              <span className="text-[#3e73c4] text-[14px] md:text-[25px]">
                USDC
              </span>
              <div className="flex md:items-center  md:justify-center md:gap-4 md:mt-8">
                <img
                  src={crypto}
                  alt="Crypto Icon"
                  className="w-5 h-5 md:w-10 md:h-10"
                />
                <span className="text-[14px] md:text-[30px]">
                  $ 7,500.
                  <span className="text-[10px] md:text-[22px] text-blue-400">
                    39
                  </span>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-[8px] pl-2 md:pl-4 py-2 md:py-4 border-b border-gray-400 md:border-none">
              <span className="text-[#009393] text-[14px] md:text-[25px]">
                ETH
              </span>
              <div className="flex md:items-center  md:justify-center md:gap-4 md:mt-8">
                <img
                  src={logo}
                  alt="Logo Icon"
                  className="w-5 h-5 md:w-10 md:h-10"
                />
                <span className="text-[14px] md:text-[30px]">
                  $ 1,500.
                  <span className="text-[10px] md:text-[22px] text-blue-400">
                    95
                  </span>
                </span>
              </div>
            </div>
            <div className="bg-white rounded-[8px] pl-2 md:pl-4 py-2 md:py-4 border-b border-gray-400 md:border-none">
              <span className="text-black  text-[14px] md:text-[25px]">
                XLM
              </span>
              <div className="flex md:items-center md:justify-center md:gap-4 md:mt-8">
                <img
                  src={crypto2}
                  alt="Logo Icon"
                  className="w-5 h-5 md:w-14 md:h-14"
                />
                <span className="text-[14px] md:text-[30px]">
                  $ 1,900.
                  <span className="text-[10px] md:text-[22px] text-blue-400">
                    30
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-row-3 rounded-[8px] bg-white p-2 py-4">
          <img
            src={arm}
            alt=""
            className=" row-span-2 w-36 h-36 md:flex justify-self-center"
          />
          <p className="row-span-1 mb-4 text-center">
            Job pay-<span className="text-[#009393]">Stablecoins</span> are held
            in smart contracrs until specific milestone is approved by both
            talents and client
          </p>
        </div>
      </div>
      <div className="row-span-2 grid md:grid-flow-col items-center mt-6 justify-between pl-4">
        <p className=" md:mt-6">Transaction history</p>
        <div className="flex">
          <div className="flex bg-white h-10 md:mt-8 pl-4 w-[40%] mr-4 rounded-[10px]">
            <img src={search} alt="" className="w-6 h-6 mt-3" />
            <input placeholder="Search..." type="text" />
          </div>
          <div className="flex md:mt-8 bg-white border-blue-500 border-2 rounded-[8px] py-1 px-3 gap-1 cursor-pointer">
            <img src={filter} alt="" className="w-4 h-4 mt-1 mr-2" />
            <span className="text-[15px] md:text-[16px]">Newest-Oldest</span>
            <img src={down} alt="" className="w-8 h-8 -mt-1" />
          </div>
        </div>
      </div>
      <div className="bg-white row-span-6 md:row-span-8">
        <div className="flex justify-between px-4 py-4 border-b-gray-200 border-b-2">
          <span className="text-purple-800 text-[12px] md:text-[16px]">
            Amount
          </span>
          <span className="text-purple-800 text-[12px] md:text-[16px] md:ml-20">
            Client
          </span>
          <span className="text-purple-800 text-[12px] md:text-[16px] ">
            Date
          </span>
          <span className="text-purple-800 text-[12px] md:text-[16px]">
            Invoice
          </span>
          <span className="text-purple-800 text-[12px] md:text-[16px]">
            Job Information
          </span>
        </div>
        <div className="overflow-auto mt-3 px-1 md:px-4">
          {wallet.map((item, index) => (
            <div
              key={index}
              className="grid grid-flow-col mb-3 justify-between gp-1"
            >
              <div className="grid grid-flow-col">
                <div className="grid grid-flow-col">
                  <img
                    src={item.image}
                    alt=""
                    className="w-5 h-5 md:w-8 md:h-8"
                  />
                  <img
                    src={item.currency}
                    alt=""
                    className="w-3 h-3 md:w-4 md:h-4 mt-4 -ml-0.5 md:ml-5 md:absolute"
                  />
                </div>
                <span className="text-[8px] md:text-[13px] md:absolute md:ml-9 mt-1 font-bold">
                  {item.amount}
                </span>
              </div>
              <span className="text-[12px] md:text-[15px]">{item.client}</span>
              <span className="text-[12px] md:text-[15px]">{item.date}</span>
              <span
                className="text-[12px] md:text-[15px] text-blue-500 cursor-pointer"
                onClick={() => WalletInvoiceHandler(item)}
              >
                {item.invoice}
              </span>
              <span className="text-[10px] md:text-[15px] text-blue-500 underline">
                {item.info}
              </span>
            </div>
          ))}
        </div>
      </div>
      <WalletModal
        visible={openWallet}
        onClose={() => setOpenWallet(false)}
        onItemsClick={selectedConnectHandler}
      />
      <WalletConnect
        visible={openConnect}
        onClose={() => setOpenConnect(false)}
        item={connect}
        onConnectAnother={() => setOpenWallet(true)}
      />
      <WalletInvoice
        item={walletDetail}
        visible={openWalletInvoice}
        onClose={() => setOpenWalletInvoice(false)}
      />
    </div>
  );
}

export default Wallet;
