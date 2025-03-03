// import React from 'react'
import search from "../../assets/search.svg";
import dp from "../../assets/Ellipse.png";
import down from "../../assets/down.png";
import bell2 from "../../assets/bell.png";
import vector from "../../assets/vector.png";
import logo from "../../assets/logo.png";
import bag from "../../assets/bag.png";
import cancel from "../../assets/cancel.png";
import clock from "../../assets/clock.png";
import file from "../../assets/file.png";
import crypto from "../../assets/crypto.png";

const gigs = [
  {
    title: "dApp Web Designer for New P..",
    client: "Gracia Alex",
    amount: 2600,
    image: crypto,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "NFT Marketplace Website Desi..",
    client: "Global Venture",
    amount: 3800,
    image: crypto,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "Blockchain Explorer Interface",
    client: "Andres Simon",
    amount: 1800,
    image: vector,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "Virtual Land Website Design M..",
    client: "Noveau Laun",
    amount: 2500,
    image: crypto,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "Website redesign for Crypto E..",
    client: "Wrenzy Corps.",
    amount: 1000,
    image: logo,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "NFT Minting Platform User Int..",
    client: "Celestial Dys.",
    amount: 2000,
    image: logo,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "Virtual Reality Gaming Experie..",
    client: "Nova Teach Sco..",
    amount: 5000,
    image: vector,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "Design of Blockchain-Based S..",
    client: "Quantum Les",
    amount: 3200,
    image: crypto,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "logo Design for a New NFT Col..",
    client: "Honeygrace I..",
    amount: 700,
    image: vector,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "dApp Web Designer for New P..",
    client: "Oludare Silivia",
    amount: 1900,
    image: crypto,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "3D Avatars for a Metaverse Co..",
    client: "David Chen",
    amount: 1200,
    image: logo,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "Crypto Wallet Mobile App",
    client: "Emily Carter",
    amount: 3500,
    image: crypto,
    date: "1/11/24",
    info: "View Job Details",
  },
  {
    title: "Design for a Crypto Trading P..",
    client: "Javiar Rodig",
    amount: 1600,
    image: vector,
    date: "1/11/24",
    info: "View Job Details",
  },
];
function clientGig() {
  return (
    <div>
      <div className="bg-gray-100 w-[84.85vw] h-[100vh] grid grid-rows-12 px-6 pb-4 gap-2">
        <div className="row-span-1 grid items-center px-2 mt-2">
          <div className="grid grid-cols-3 gap-1 w-full">
            <span className="">My Gigs</span>
            <div className="col-span-1 flex justify-between">
              <div className="flex bg-white items-center justify-center rounded-[8px] py-1 w-[72%]">
                <img src={search} alt="" className="h-6 w-6 mr-4 my-1 ml-4" />
                <input
                  placeholder="Search for jobs, talents or clients"
                  className="w-full flex"
                />
              </div>
              <button className="bg-[#2f66f6] px-2 text-white rounded-[8px]">
                Post New gig
              </button>
            </div>
            <div className="col-span-1 grid justify-center">
              <div className="flex gap-2">
                <div className="h-6 w-6 rounded-[50%] bg-white grid items-center justify-center">
                  <img src={bell2} alt="" className="h-4 w-4" />
                </div>
                <div className="flex bg-gray-400 hover:bg-white hover:border-2 hover:border-gray-300 -mt-1 mb-3 rounded-[20px] pl-1">
                  <img src={dp} alt="" className="h-8 w-8" />
                  <img src={down} alt="" className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex w-full justify-between items-center my-4">
          <div className="flex bg-white rounded-[8px] px-4 py-[12px] gap-4">
            <span className="bg-[#bff1c9] p-1 rounded-[5px] w-6">
              <img src={bag} alt="" />
            </span>
            <p className="text-[#3c8e3c]">Completed gigs</p>
            <span className=" text-[14px]">15</span>
          </div>
          <div className="flex bg-white rounded-[8px] px-4  py-[12px] gap-4">
            <span className="bg-[#ffd3ab] rounded-[5px] w-6">
              <img src={clock} alt="" />
            </span>
            <p className="text-[#eb7e1c]">Ongoing gigs</p>
            <span className=" text-[14px]">3</span>
          </div>
          <div className="flex bg-white rounded-[8px] px-4  py-[12px] gap-4">
            <span className="bg-[#b2c8ff] rounded-[5px] w-6">
              <img src={file} alt="" />
            </span>
            <p className="text-[#3d4e79]">No status gigs</p>
            <span className=" text-[14px]">2</span>
          </div>
          <div className="flex bg-white rounded-[8px] px-4  py-[12px] gap-4">
            <span className="bg-[#ffc1c1] rounded-[5px] w-6">
              <img src={cancel} alt="" />
            </span>
            <p className="text-[#d83131]">Cancelled gigs</p>
            <span className=" text-[14px]">1</span>
          </div>
        </div>
        <button className="flex items-center row-span-1 justify-center gap-2 text-[14px] border-2 border-[#177f9f] w-36 px-2 py-1 rounded-[5px] h-10">
          All Gigs
          <img src={down} alt="" className="w-8 h-8" />
        </button>
        <div className="row-span-9 bg-white rounded h-[100%] overflow-auto">
          <div className="flex justify-between px-4 py-4 border-b-gray-200 border-b-2">
            <span className="text-blue-500">Title</span>
            <span className="text-blue-500 ml-20">Client</span>
            <span className="text-blue-500 ">Amount</span>
            <span className="text-blue-500">Date</span>
            <span className="text-blue-500">Job Information</span>
          </div>
          <div>
            {gigs.map((item, index) => (
              <div key={index} className="flex justify-between px-4 pt-4">
                <div className="font-bold text-[14px]">{item.title}</div>
                <div className="text-[14px]">{item.talent}</div>
                <div className="flex text-[14px] -ml-10">
                  <img src={crypto} alt="" className="w-4 h-4 mr-1 mt-1" />
                  {item.amount}$
                </div>
                <div className="text-[14px]">{item.date}</div>
                <span className="text-blue-500 text-[14px]">{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default clientGig;
