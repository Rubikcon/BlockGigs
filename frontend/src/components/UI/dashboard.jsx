// import React from "react";
import search from "../../assets/search.svg";
import dp from "../../assets/Ellipse.png";
import down from "../../assets/down.png";
import bell2 from "../../assets/bell.png";
import empty from "../../assets/empty.png";
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

const offer = [];

// const offer = [
//   {
//     title: "Product Designer at Crolz",
//     name: "Crolz Tech",
//     duration: "2 days ago",
//     image: dp,
//     status: "Pending",
//   },
//   {
//     title: "Dex website",
//     name: "Spratz Brand",
//     duration: "2 days ago",
//     image: dp,
//     status: "Pending",
//   },
// ];

const recommend = [
  {
    title: "Product Designer for a DEFI Product",
    duration: "Posted 2hr ago",
    image: dp,
    name: "Jacod",
    experience: "worked with 10 talents",
    description:
      "Design  and develop user friendly interfaces for Web3 applications such as NFT marketplaces, decentralized exchanges and metaverse platforms...",
    price: "1000/3 milestones",
  },
  {
    title: "Wed3 Content Creator for a Decentrilized Exchange",
    duration: "Posted 15hr ago",
    image: dp,
    name: "Chisam",
    experience: "worked with 2 talents",
    description:
      "Create engaging and informative content about Web3, blockchain technology, NFTs, DAOs, and the metaverse. This can include blog post, articles...",
    price: "700/1 milestones",
  },
  {
    title: "Technical Writer for an E-commerce Brand",
    duration: "Posted 2hr ago",
    image: dp,
    name: "Jacod",
    experience: "worked with 10 talents",
    description:
      "Explain complex technical concept in a clear and concise way Create documentation tutorials and blog posts, making them accessible...",
    price: "1000/3 milestones",
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
            <p className="text-[12px]">
              {item.name} | {item.duration}
            </p>
          </div>
        </div>
        <div>circle</div>
      </div>
    ))
    .splice(0, 2);

  const renderRecommend = recommend.slice(0, 3).map((item, index) => (
    <div key={index} className=" bg-white rounded-[10px] mb-2 py-2 px-4">
      <div className="font-bold">{item.title}</div>
      <div className="flex">
        <div className="text-[12px] text-gray-400">{item.duration} | </div>
        <div className="flex ml-2">
          <img src={item.image} alt="" className="h-[20px] w-[20px]" />
          <div className="text-[12px] ml-1 text-gray-400">
            {item.experience}
          </div>
        </div>
      </div>
      <div className="text-[14px] mb-3">{item.description}</div>
      <div className="text-blue-600 text-[12px] mb-2">${item.price}</div>
    </div>
  ));

  return (
    <div className="bg-gray-300 w-[85vw] h-[100vh] grid grid-rows-12 px-4 gap-2">
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
          <div className="flex items-center w-full p-4">
            <p className="">Ongoing Jobs</p>
            <Link className="ml-auto">View All</Link>
          </div>
          <div className="px-4 py-2">{RenderJob}</div>
        </div>
        <div className="bg-white shadow-2xl shadow-gray-400 col-span-2 rounded-[0.6rem] p-4">
          <div className="">
            <div className="flex mb-8">
              <p className="">My Offers</p>
              <Link className="ml-auto">View All</Link>
            </div>
            {offer.length === 0 ? (
              <div className="grid justify-center mt-4">
                <img src={empty} alt="" className="h-18 w-18" />
                <div className="grid justify-center ">
                  <p className="text-black text-sm mt-4">No Offers yet</p>
                  <p className="text-[10px] -ml-8">
                    Keep on applying You got THIS!
                  </p>
                </div>
              </div>
            ) : (
              offer.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className="w-full border-[0.5px] border-blue-300 rounded-[10px] h-[40%] flex item-center justify-between items-center px-4 py-2 my-2"
                >
                  <div>
                    <div>{item.title}</div>
                    <div className="flex gap-2">
                      <img src={dp} alt="" className="h-4 w-4" />
                      <span className="text-[12px]">
                        {item.name} | {item.duration}
                      </span>
                    </div>
                  </div>
                  <div>{item.status}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="w-[66.56%] row-span-1 mt-6">
        <div className="flex w-full justify-between gap-4 pr-6">
          <p className="">Recommended Jobs</p>
          <Link className="">View All</Link>
        </div>
      </div>
      <div className="grid row-span-7 pr-4 pb-4">
        <div className="grid grid-cols-3 row-span-5 gap-4">
          <div className="col-span-2">{renderRecommend}</div>
          <div className="col-span-1 bg-red-600"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
