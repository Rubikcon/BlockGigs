// import React from "react";
import search from "../../assets/search.svg";
import dp from "../../assets/Ellipse.png";
import down from "../../assets/down.png";
import bell2 from "../../assets/bell.png";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Saas Website design",
    name: "Damon Alonko",
    duration: "2 days ago",
    image: dp,
    range: 50,
  },
  {
    title: "Sportswear Landing page",
    name: "Andrew Simon",
    duration: "5 days ago",
    image: dp,
    range: 75,
  },
];
function Dashboard() {
  const RenderJob = jobs
    .map((item) => (
      <div
        key={item.index}
        className="w-full border-[0.5px] border-blue-300 rounded-[10px] h-[40%] flex items-center justify-between px-4 my-2"
      >
        <div>
          <h3>{item.title}</h3>
          <div className="flex gap-2">
            <img src={item.image} alt="" className="h-4 w-4 " />
            <p className="text-[12px]">{item.name}</p>
          </div>
        </div>
        <div>circle</div>
      </div>
    ))
    .splice(0, 2);
  return (
    <div className="bg-gray-300 w-[85vw] h-[100vh] grid grid-rows-10 px-4 py-2 gap-2">
      <div className="row-span-1 grid items-center px-2">
        <div className="grid w-full">
          <div className="grid grid-cols-3 gap-1 w-full">
            <div className="col-span-1">
              <span className="flex gap-1">
                Welcome back, Let's <p className="text-green-400">Work</p>
              </span>
            </div>
            <div className="col-span-1">
              <div className="flex">
                <img src={search} alt="" className="h-6 w-6" />
                <input placeholder="Search for jobs, talents or clients" />
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
      </div>
      <div className="row-span-3 grid grid-cols-5 gap-4">
        <div className="bg-white shadow-2xl shadow-gray-400 col-span-3 rounded-[0.6rem] grid">
          <div className="flex justify-between items-center w-full py-4 px-3 bg-yellow-700">
            <p className="">Ongoing Jobs</p>
            <Link className="ml-auto">View All</Link>
          </div>
          <div className="px-4 py-2 bg-red-500 col-span-3">{RenderJob}</div>
        </div>
        <div className="bg-white shadow-2xl shadow-gray-400 col-span-2 rounded-[0.6rem]">
          jjjjj
        </div>
      </div>
      <div className="row-span-6 bg-green-500">gggggggggg</div>
    </div>
  );
}

export default Dashboard;
