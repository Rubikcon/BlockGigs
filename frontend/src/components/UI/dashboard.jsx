import { useState } from "react";
import search from "../../assets/search.svg";
import dp from "../../assets/Ellipse.png";
import icon from "../../assets/icon.png";
import crypto from "../../assets/crypto.png";
import app from "../../assets/app.png";
import frame from "../../assets/frame.svg";
import down from "../../assets/down.png";
import bell2 from "../../assets/bell.png";
import empty from "../../assets/empty.png";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OfferModal from "../modals/OfferModal";
import back from "../../assets/arrow-back.png";
import bat from "../../assets/bat.png";

const jobs = [
  {
    title: "Saas Website design",
    name: "Damon Alonko",
    duration: "2 days ago",
    image: dp,
    range: 50,
    started: "21st Jan, 2025",
    detail:
      "We are seeking a creative and detail-oriented Product Designer intern to join the CryptoKitties team. In this role, you will collaborate with our design and development teams to help create engaging and intuitive user experiences forour blockchain-based collectibles game. Your work will involve designing new UI components, optimizinuser flow and contributing to the overall visual aesthetics of th platform. THis is an exciting opportunity to work in the web3 space and gain hands-on experience in product design for a well-established blockchain project.",
    milestone: [
      {
        title: "milestone 1",
        detail: "Branding/Designing of logo",
        prize: 200,
        deadline: "31/01/2025",
        status: "Completed",
        image: crypto,
      },
      {
        title: "milestone 2",
        detail: "First set of design with the main feature",
        prize: 300,
        deadline: "07/02/2025",
        status: "Awaiting Approval",
        image: crypto,
      },
      {
        title: "milestone 3",
        detail: "Full web design ready for development",
        prize: 500,
        deadline: "20/02/2025",
        status: "Awaiting Approval",
        image: crypto,
      },
    ],
  },
  {
    title: "Sportswear Landing page",
    name: "Andrew Simon",
    duration: "5 days ago",
    image: dp,
    range: 75,
    started: "05th Feb, 2025",
    detail:
      "We are seeking a creative and detail-oriented Product Designer intern to join the CryptoKitties team. In this role, you will collaborate with our design and development teams to help create engaging and intuitive user experiences forour blockchain-based collectibles game. Your work will involve designing new UI components, optimizinuser flow and contributing to the overall visual aesthetics of th platform. THis is an exciting opportunity to work in the web3 space and gain hands-on experience in product design for a well-established blockchain project.",
    milestone: [
      {
        title: "milestone 1",
        detail: "Branding/Designing of logo",
        prize: 400,
        deadline: "21/03/2025",
        status: "Completed",
        image: crypto,
      },
      {
        title: "milestone 2",
        detail: "First set of design with the main feature",
        prize: 100,
        deadline: "16/02/2025",
        status: "Awaiting Approval",
        image: crypto,
      },
      {
        title: "milestone 3",
        detail: "Full web design ready for development",
        prize: 700,
        deadline: "25/02/2025",
        status: "Awaiting Approval",
        image: crypto,
      },
    ],
  },
];

// const offer = [];

const offer = [
  {
    title: "Product Designer at Crolz",
    name: "Crolz Tech",
    duration: "2 days ago",
    image: dp,
    status: "Pending",
  },
  {
    title: "Dex website",
    name: "Spratz Brand",
    duration: "2 days ago",
    image: dp,
    status: "Pending",
  },
];

const activity = [
  {
    title: "Maria Stiles",
    time: "2m ago",
    action: "Posted a comment",
    image: dp,
  },
  {
    title: "USDc Sent",
    time: "15m ago",
    action: "$100 is on its way to you",
    image: crypto,
  },
  {
    title: "Milestone Approved",
    time: "30m ago",
    action: "Maria approved Milestone 1",
    image: icon,
  },
  {
    title: "David Akure",
    time: "1hr ago",
    action: "started a new chat",
    image: dp,
  },
  {
    title: "App update",
    time: "2m ago",
    action: "New version 2.0",
    image: app,
  },
  {
    title: "David Akure",
    time: "1hr ago",
    action: "started a new chat",
    image: dp,
  },
];

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
    image2: frame,
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
    image2: frame,
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
    image2: frame,
  },
];

// const CircularRange = ({ progress = 50 }) => {
//   let radius = 50;
//   let strokeWidth = 50;
//   const normalizeRadius = radius - strokeWidth * 2;
//   const circumference = normalizeRadius * 2 * Math.PI;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;
//   return (
//     <div style={{ textAlign: "center" }}>
//       <svg height={radius * 2} width={radius * 2}>
//         <circle
//           stroke="#e0e0e0"
//           fill="transparent"
//           strokeWidth={strokeWidth}
//           r={normalizeRadius}
//           cx={radius}
//           cy={radius}
//         />
//         <circle
//           stroke="#007bff"
//           fill="transparent"
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference + " " + circumference}
//           style={{ strokeDashoffset }}
//           r={normalizeRadius}
//           cx={radius}
//           cy={radius}
//           transform={`rotate(-90${radius}${radius})`}
//         />
//       </svg>
//       <div className="absolute ">{progress}%</div>
//     </div>
//   );
// };

function Dashboard() {
  // const [myOffer, setMyOffer] = useState({});
  const [offerModal, setOfferModal] = useState(false);
  const [job, setJob] = useState("");

  const myOfferHandler = (value) => {
    console.log(value, "my offer");
    setOfferModal(true);
  };

  const myOfferCloseHnadler = () => {
    setOfferModal(false);
  };

  const renderActivity =
    activity.length === 0 ? (
      <p>No activites found</p>
    ) : (
      activity.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="flex border-b-gray-200 border-b-[2px] my-2 py-2"
        >
          <img src={item.image} alt="" className="mr-2 w-10 h-10" />
          <div>
            <div className="flex">
              <span className="font-bold text-sm mr-1">{item.title}</span>
              <p className="-mt-1">•</p>
              <span className="text-[12px] ml-1 text-gray-400">
                {item.time}
              </span>
            </div>
            <div className="text-sm">{item.action}</div>
          </div>
        </div>
      ))
    );

  const displayJob = (value) => {
    setJob(value);
  };

  const RenderJob = jobs
    .map((item, index) => (
      <div
        key={index}
        className="w-full border-[0.5px] border-blue-300 rounded-[10px] h-[40%] flex items-center justify-between px-4 my-2"
        onClick={() => displayJob(item)}
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
        <div className="w-8 h-8 font-bold">
          <CircularProgressbar value={item.range} text={`${item.range}%`} />
        </div>
      </div>
    ))
    .splice(0, 2);

  const renderRecommend = recommend.slice(0, 3).map((item, index) => (
    <div
      key={index}
      className=" bg-white rounded-[10px] mb-2 py-2 px-4 shadow shadow-gray-200"
    >
      <div className="flex justify-between">
        <div>
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
        </div>
        <img src={item.image2} alt="" />
      </div>
      <div className="text-[12px] mb-3 w-[70%]">{item.description}</div>
      <div className="flex justify-between">
        <div className="text-blue-600 text-[12px] mb-2">${item.price}</div>
        <button className="bg-[#2f66f6] rounded-[0.3rem] text-white text-[11.38px] w-[104px] h-[31px] mb-2">
          See Details
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="bg-gray-100 w-[83.85vw] h-[100vh] grid grid-rows-12 px-4 gap-2">
        {job === "" ? (
          <div>
            <div className="row-span-1 grid items-center px-2 mt-2">
              <div className="grid w-full">
                <div className="grid grid-cols-3 gap-1 w-full">
                  <div className="col-span-1">
                    <span className="flex gap-1">
                      Welcome back, Let's <p className="text-green-400">Work</p>
                    </span>
                  </div>
                  <div className="col-span-1">
                    <div className="flex bg-white items-center justify-center rounded-[8px] py-1">
                      <img
                        src={search}
                        alt=""
                        className="h-6 w-6 mr-4 my-1 ml-4"
                      />
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
                        className="w-full border-[0.5px] border-blue-300 cursor-pointer rounded-[10px] h-[40%] flex item-center justify-between items-center px-4 py-2 my-2"
                        onClick={() => myOfferHandler(item)}
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
                        <div className="text-sm">{item.status}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className="w-[66.56%] row-span-1 mt-2">
              <div className="flex w-full justify-between gap-4 pr-6">
                <p className="">Recommended Jobs</p>
                <Link className="">View All</Link>
              </div>
            </div>
            <div className="grid row-span-7 pr-4 pb-4">
              <div className="grid grid-cols-3 row-span-5 gap-4">
                <div className="col-span-2">{renderRecommend}</div>
                <div className="col-span-1 bg-white rounded-[10px] py-2 px-4 h-[93.5%]">
                  <div className="flex justify-between">
                    <p>Activity</p>
                    <Link className="text-[12px] text-[#2f66f6]">View All</Link>
                  </div>
                  {renderActivity}
                </div>
              </div>
            </div>{" "}
          </div>
        ) : (
          <div>
            <div className="row-span-1 grid items-center px-2 h-18">
              <div className="grid w-full">
                <div className="grid grid-cols-3 gap-1 w-full">
                  <div className=" flex col-span-1">
                    <img
                      src={back}
                      alt=""
                      className="w-12 h-6 mr-2 cursor-pointer"
                      onClick={() => setJob("")}
                    />
                    <span className="text-xl">Ongoing Gig/Saas Webs..</span>
                  </div>
                  <div className="col-span-1">
                    <div className="flex bg-white items-center justify-center rounded-[8px] py-1">
                      <img
                        src={search}
                        alt=""
                        className="h-6 w-6 mr-4 my-1 ml-4"
                      />
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
            </div>
            <div className="grid grid-cols-3 gap-10">
              <div className="col-span-2 px-4 py-2">
                <div className="flex justify-between bg-[#e3f1ff] w-full rounded-[5px] py-4 px-6">
                  <div>
                    <span>{job.title}</span>
                    <div className="flex gap-2">
                      <img src={job.image} alt="" className="h-6 w-6" />
                      <div>{job.name}</div>
                      <p className="">•</p>
                      <span className="text-gray-400 text-[14px] mt-1">
                        {job.started}
                      </span>
                    </div>
                  </div>
                  <div className="w-14 h-14 font-bold">
                    <CircularProgressbar
                      value={job.range}
                      text={`${job.range}%`}
                    />
                  </div>
                </div>
                <div className="p-4 px-6 bg-white rounded-[5px] mt-4 h-auto">
                  <div className="flex gap-2">
                    <img
                      src={bat}
                      alt=""
                      className="h-4 w-3 mt-1 bg-green-400"
                    />
                    <span className="text-[14px] mb-2">Gig Details</span>
                  </div>
                  <span className="text-[14px]">{job.detail}</span>
                </div>
                <div className="bg-white w-full h-auto max-h-[100%] mt-4 py-4 px-6 rounded-[5px]">
                  <div className="flex gap-2">
                    <img
                      src={bat}
                      alt=""
                      className="h-4 w-3 mt-1 bg-blue-400"
                    />
                    <span className="text-[14px] mb-2 text-black font-bold">
                      Milestone Payments
                    </span>
                  </div>
                  {job.milestone.map((d, index) => (
                    <div key={index} className="flex gap-2 space-y-2">
                      <div className="text-[12px]">{d.title}</div>
                      <span className="text-[12px]">–</span>
                      <img src={d.image} alt="" className="w-3 h-3 mt-1" />
                      <span className="text-[12px]">{d.prize}$</span>
                      <span className="-mt-1">•</span>
                      <p className="text-[12px] text-gray-600">{d.detail}</p>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <p className="text-[12px]">Total Job Pay –</p>
                    <img src={crypto} alt="" className="w-3 h-3 mt-1" />
                    <span className="text-[14px]">
                      {job.milestone
                        .map((item) => item.prize)
                        .reduce((acc, p) => acc + p, 0)}
                    </span>
                    <span className="-mt-1">•</span>
                    <p className="text-[12px]">{job.title} gig completed</p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                {job.milestone.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white h-auto mb-2 p-4 w-[80%] rounded-[5px] space-y-2"
                  >
                    <h2 className="font-bold text-[16px]">
                      {item.title[0].toUpperCase() + item.title.slice(1)}
                    </h2>
                    <div className="text-[12px] font-bold">
                      <span>{item.title}</span>
                      <p>involves {item.detail}</p>
                    </div>
                    <div className="text-[10px]">
                      Milestone Deadline :{item.deadline}
                    </div>
                    <div className="text-[10px]">
                      Milestone status : {item.status}
                    </div>
                    <button className="w-full bg-[#2f66f6] h-10 rounded-[5px] mt-2">
                      See Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <OfferModal visible={offerModal} onClose={myOfferCloseHnadler} />
    </div>
  );
}

export default Dashboard;
