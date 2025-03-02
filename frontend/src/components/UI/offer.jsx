// import React from 'react'
import search from "../../assets/search.svg";
import dp from "../../assets/Ellipse.png";
import down from "../../assets/down.png";
import bell2 from "../../assets/bell.png";
import bag3 from "../../assets/bag3.png";
import bag2 from "../../assets/bag2.svg";
import { NavLink } from "react-router-dom";
// import cancel from "../../assets/cancel.png";
// import clock from "../../assets/clock.png";
// import file from "../../assets/file.png";
// import crypto from "../../assets/crypto.png";
import { useState } from "react";

const offer = [
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Accepted",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-green-100 text-green-800 px-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Accepted",
    time: "10hours ago",
    link: "View Offer Details",
    color: "bg-green-100 text-green-800 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Pending",
    time: "1day ago",
    link: "View Offer Details",
    color: "bg-yellow-100 text-yellow-600 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Rejected",
    time: "1day ago",
    link: "View Offer Details",
    color: "bg-red-100 text-red-700 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Accepted",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-green-100 text-green-800 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Accepted",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-green-100 text-green-800 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Accepted",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-green-100 text-green-800 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Rejected",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-red-100 text-red-700 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Accepted",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-green-100 text-green-800 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Pending",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-yellow-100 text-yellow-600 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Accepted",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-green-100 text-green-800 px-2 py-1 rounded",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Rejected",
    time: "2hours ago",
    link: "View Offer Details",
    color: "bg-red-100 text-red-700 px-2 py-1 rounded",
  },
];

const application = [
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Opened",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-green-100 text-green-800 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Closed",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-gray-100 text-gray-600 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Opened",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-green-100 text-green-800 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Opened",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-green-100 text-green-800 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Closed",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-gray-100 text-gray-600 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Opened",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-green-100 text-green-800 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Closed",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-gray-100 text-gray-600 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Opened",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-green-100 text-green-800 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Opened",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-green-100 text-green-800 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Opened",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-green-100 text-green-800 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Closed",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-gray-100 text-gray-600 px-2 py-1",
  },
  {
    title: "Saas website design",
    client: "Andrea Simon",
    status: "Closed",
    date: "21st, Jan 2025",
    info: "View Job Details",
    color: "bg-gray-100 text-gray-600 px-2 py-1",
  },
];

function Offer() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <div className="bg-gray-100 w-[84.85vw] h-[100vh] grid grid-rows-12 px-6 pb-4 gap-2">
        <div className="row-span-1 grid items-center px-2 mt-2">
          <div className="grid grid-cols-3 gap-1 w-full">
            <span className="">Offers & Applications</span>
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
        <div className="flex justify-between">
          <div className="flex">
            <button
              className={`flex gap-4 bg-white items-center px-2 rounded-[8px] cursor-pointer ${
                active === 1 ? "border-b-[#2f66f6] border-b-2" : ""
              }`}
              onClick={() => setActive(1)}
            >
              <img src={bag2} alt="" className="w-4 h-4 text-[#2f66f6]" />
              <span
                className={`text-[14px] -mt-1 ${
                  active === 1 ? "text-[#2f66f6]" : "text-black"
                }`}
              >
                Offers
              </span>
              <span className="w-4 h-4 rounded-[50%] bg-red-500 text-white flex items-center justify-center text-[12px]">
                2
              </span>
            </button>
            <button
              className={`bg-white flex items-center rounded-[8px] px-2 gap-2 cursor-pointer ${
                active === 2 ? "border-b-[#2f66f6] border-b-2" : ""
              }`}
              onClick={() => setActive(2)}
            >
              <img src={bag3} alt="" className="w-4 h-4" />
              <span
                className={`text-[14px] -mt-1 ${
                  active === 2 ? "text-[#2f66f6]" : "text-black"
                }`}
              >
                Applications
              </span>
            </button>
          </div>
          <NavLink to={"gigs"} replace>
            <button className="flex items-center row-span-1 justify-center gap-2 text-[14px] border-2 border-[#177f9f] w-36 px-2 py-1 rounded-[5px] h-10">
              All Gigs
              <img src={down} alt="" className="w-8 h-8" />
            </button>
          </NavLink>
        </div>

        {active === 1 ? (
          <div className="row-span-9 bg-white rounded h-[100%] overflow-auto">
            <div className="flex justify-between px-4 py-4 border-b-gray-200 border-b-2">
              <span className="text-gray-400">Title</span>
              <span className="text-gray-400 ml-20">Client</span>
              <span className="text-gray-400 ">Status</span>
              <span className="text-gray-400">Time Sent</span>
              <span className="text-gray-400">Offer Information</span>
            </div>
            <div>
              {offer.map((item, index) => (
                <div key={index} className="flex justify-between px-4 pt-4">
                  <div className="font-bold text-[14px]">{item.title}</div>
                  <div className="text-[14px]">{item.client}</div>
                  <div className={`flex text-[14px] -ml-10 ${item.color}`}>
                    {item.status}
                  </div>
                  <div className="text-[14px]">{item.time}</div>
                  <span className="text-blue-500 text-[14px]">{item.link}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="row-span-9 bg-white rounded h-[100%] overflow-auto">
            <div className="flex justify-between px-4 py-4 border-b-gray-200 border-b-2">
              <span className="text-gray-400">Title</span>
              <span className="text-gray-400 ml-20">Client</span>
              <span className="text-gray-400 ">Status</span>
              <span className="text-gray-400">Date Posted</span>
              <span className="text-gray-400">Job Information</span>
            </div>
            <div>
              {application.map((item, index) => (
                <div key={index} className="flex justify-between px-4 pt-4">
                  <div className="font-bold text-[14px]">{item.title}</div>
                  <div className="text-[14px]">{item.client}</div>
                  <div className={`flex text-[14px] -ml-10 ${item.color}`}>
                    {item.status}
                  </div>
                  <div className="text-[14px]">{item.date}</div>
                  <span className="text-blue-500 text-[14px]">{item.info}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Offer;
