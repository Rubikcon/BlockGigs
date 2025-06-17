import { useState, useEffect } from "react";
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
import ClientGigModal from "../modals/ClientGigModal";
import crypto from "../../assets/crypto.png";

// import the Job API service
import { jobService } from "../../services/jobService";

function clientGig() {
  const [openGig, setOpenGig] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      const returnedData = await jobService.getAllJobs();
      setJobs(returnedData.jobs);
      console.log(returnedData.jobs);
      setIsLoading(false);
    } catch (err) {
      setError(err.message || "Error fetching jobs");
    }
  };

  useEffect(() => {
    fetchJobs();
  });

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
              <button
                className="bg-[#2f66f6] px-2 text-white rounded-[8px] cursor-pointer"
                onClick={() => setOpenGig(true)}
              >
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
            <span className="text-blue-500 ml-40">Status</span>
            <span className="text-blue-500 ">Amount</span>
            <span className="text-blue-500">Created On</span>
            <span className="text-blue-500">Job Information</span>
          </div>
          <div>
            {/* <pre>{JSON.stringify(jobs, null, 2)}</pre> */}
            {/* <pre>{console.log(jobs)}</pre> */}
            {jobs.map((item, index) => (
              <div key={index} className="flex justify-between px-4 pt-4 ">
                <div className="font-bold text-[14px] max-w-[200px]">
                  {item.title}
                </div>
                <div className="text-[14px] -ml-9">{item.status}</div>
                <div className="flex text-[14px] -ml-22">
                  <img src={crypto} alt="" className="w-4 h-4 mr-1 mt-1 " />$
                  {item.totalPrice}
                </div>
                <div className="text-[14px] -ml-22">
                  {item.createdAt.slice(0, -14)}
                </div>
                <span className="text-blue-500 text-[14px]">{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ClientGigModal
        visible={openGig}
        onSubmit={() => setOpenGig(false)}
        onClose={() => setOpenGig(false)}
      />
    </div>
  );
}

export default clientGig;
