// import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import arrow from "../assets/arrow-back.png";
import search from "../assets/search.svg";
import bell2 from "../assets/bell.png";
import down from "../assets/down.png";
import dp from "../assets/Ellipse.png";
import crypto from "../assets/crypto.png";
import bat from "../assets/bat.png";
import frame from "../assets/frame.svg";
import JobModal from "../components/modals/JobModal";
import { useState } from "react";

const jobs = [
  {
    title: "Product Designer for a Crypto..",
    time: "Posted 2hrs ago",
    name: "Jacob",
    num: 10,
    amt: 1700,
    milestone: 2,
  },
  {
    title: "Web Designer for Sport Agency",
    time: "Posted 1 wk ago",
    name: "Great",
    num: 10,
    amt: 1300,
    milestone: 2,
  },
  {
    title: "Website Re-design needed for DEX",
    time: "Posted 2hrs ago",
    name: "Apez",
    num: 10,
    amt: 1700,
    milestone: 3,
  },
  {
    title: "Rebranding Logo for Real estate",
    time: "Posted 3hrs ago",
    name: "Apricot",
    num: 10,
    amt: 250,
    milestone: 1,
  },
  {
    title: "Product Designer for a Dreng Tec..",
    time: "Posted 10hrs ago",
    name: "Apex Tech",
    num: 10,
    amt: 2000,
    milestone: 3,
  },
  {
    title: "WordPress Designer for Credly",
    time: "Posted 5hrs ago",
    name: "Eva",
    num: 0,
    amt: 3500,
    milestone: 3,
  },
];
function Job() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [apply, setApply] = useState(false);

  return (
    <div className="bg-gray-100  w-full h-full grid grid-rows-12 px-4 gap-2">
      <div className="row-span-1 grid items-center px-2 mt-2">
        <div className="grid grid-cols-3 gap-1 w-full">
          <div className="flex gap-2">
            <img
              src={arrow}
              alt=""
              className="w-7 h-5 mt-1 cursor-pointer"
              onClick={() => navigate("/TalentDashboard")}
            />
            <span className="">Profile Information</span>
          </div>
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
      <div className="row-span-11">
        <div className="grid grid-cols-3 h-full">
          <div className="col-span-2 grid grid-rows-7 gap-4">
            <div className="row-span-1 bg-[#e3f1ff] rounded-[8px] p-4">
              <div className="flex justify-between">
                <p>{state.title}</p>
                <div className="flex gap-2">
                  <img src={crypto} alt="" className="w-4 h-4 mt-1" />
                  <span className="text-[14px]">{state.amt} USDC</span>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <img src={dp} alt="" className="w-6 h-6" />
                  <p className="text-[14px]">
                    {state.name} •{" "}
                    <span className="text-gray-400">{state.duration}</span>
                  </p>
                </div>
                <div className="">
                  <button
                    className="bg-[#2f66f6] w-24 py-1 rounded-[5px] text-[14px] text-white cursor-pointer hover:bg-[#7296f2]"
                    onClick={() => setApply(true)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white row-span-2 px-4 py-2 rounded-[5px]">
              <div className="flex gap-2">
                <img src={bat} alt="" className="w-4 h-4 mt-1 bg-[#bff1c9]" />
                <p>Details</p>
              </div>
              <div className="text-gray-400 text-[14px]">
                {state.detail}
                <span className="text-[#2f66f6]">View more</span>
              </div>
            </div>
            <div className="bg-white rounded row-span-2 p-4 gap-2">
              <div className="flex gap-1">
                <img src={bat} alt="" className="bg-[#70d4ff] w-4 h-4 mt-1" />
                <p className="text-[14px]">Milestone Payments</p>
              </div>
              <div>
                {state.milestone.map((t, i) => (
                  <div key={i} className="flex text-gray-400 gap-3 my-2">
                    <span className="-mt-1">•</span>
                    <div className="text-[12px]">{t.title} –</div>
                    <img src={crypto} alt="" className="w-3 h-3 mt-1" />
                    <span className="text-[14px]">{t.amt}$</span>
                    <span className="text-[12px]">• {t.job}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex justify-between px-8">
              <p>Similar Jobs</p>
              <p className="text-[#2f66f6]">View All</p>
            </div>
            <div className="grid justify-center mt-2">
              {jobs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white mb-4 px-4 py-2 w-[120%] flex flex-col gap-2"
                >
                  <div className="flex justify-between">
                    <span className="text-[14px]">{f.title}</span>
                    <img src={frame} alt="" className="w-4 h-4" />
                  </div>
                  <div className="flex justify-start">
                    <span className="text-[12px] text-gray-400 mt-1">
                      {f.time}
                    </span>
                    <span className="text-gray-400">|</span>
                    <img src={dp} alt="" className="w-4 h-4 mt-1" />
                    <span className="text-[12px] mt-1 text-gray-400">
                      {f.name}
                    </span>
                    <span className="text-gray-400 text-[12px] mt-1">
                      ({f.num}talents)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[12px] text-gray-400">
                      ${f.amt}/{f.milestone}milestone
                    </span>
                    <button className="bg-[#2f66f6] w-24 py-1 rounded-[5px] text-[12px] text-white cursor-pointer hover:bg-[#7296f2]">
                      See Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <JobModal visible={apply} item={state} onClose={() => setApply(false)} />
    </div>
  );
}

export default Job;
