// import React from "react";
import search from "../../assets/search.svg";
import dp from "../../assets/Ellipse.png";
import down from "../../assets/down.png";
import bell2 from "../../assets/bell.png";

function Dashboard() {
  return (
    <div className="bg-gray-300 w-[85vw] grid grid-rows-10 px-4 py-2 gap-2">
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
      <div className="row-span-3 bg-red-600">rtttttt</div>
      <div className="row-span-6 bg-green-500">gggggggggg</div>
    </div>
  );
}

export default Dashboard;
