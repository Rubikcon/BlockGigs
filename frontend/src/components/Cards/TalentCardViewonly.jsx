// import React from "react";
import dp from "../../assets/Ellipse.png";
import search from "../../assets/search.svg";
import bell2 from "../../assets/bell.png";
import down from "../../assets/down.png";
import arrow from "../../assets/arrow-back.png";
import pen from "../../assets/pen.png";
import toggle from "../../assets/toggle.png";
import pix from "../../assets/pix.png";
import page from "../../assets/page.png";
import locate from "../../assets/locate.png";
import x from "../../assets/x.png";
import github from "../../assets/github.png";
import global from "../../assets/global.png";
import pow from "../../assets/pow.png";
import pow1 from "../../assets/pow1.png";
import pow2 from "../../assets/pow2.png";
import pow3 from "../../assets/pow3.png";
import bulb from "../../assets/bulb.png";
import icon2 from "../../assets/icon2.png";
import amico from "../../assets/amico.png";
import off from "../../assets/off.png";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { talentService } from "../../services/talentService";
// const userData = JSON.parse(localStorage.getItem("userData") || "{}");
// console.log(userData.fullname);
const experience = [
  {
    title: "Senior UI/UX Designer",
    gig: "Blockgigs",
    from: "1/11/24",
    to: "15/10/25",
    time: "2 months",
    detail: [
      "Contribute to the development of our sleek and use-friendly web and mobile app scalable interface",
      "Collaborate with our talented engineering team to implement new features and optimize existing project to achieve your desired objective",
    ],
    image: [pow, pow1, pow2, pow3],
  },
  {
    title: "Junior UI/UX Designer",
    gig: "Rubicon",
    from: "1/11/23",
    to: "15/09/24",
    time: "11 months",
    detail: [
      "Assisted the design team to improve products user experience thereby contributing to 20% increase in online sales",
      "Collaborate with our talented engineering team to implement new features and optimize existing project to achieve your desired objective",
    ],
    image: [pow, pow1, pow2, pow3],
  },
];

{
  /* <Route path="/talent-detail/:id" element={<TalentProfileViewOnly />} /> */
}

function TalentProfileViewOnly() {
  const navigate = useNavigate();
  const [available, setAvailable] = useState(true);
  const [user, setUser] = useState({});
  const { id } = useParams(); // get user ID from URL
  const [error, setError] = useState("");
  // retrives the data from the localStorage to the frontend
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const role = "talent";
        const response = await talentService.getTalentById(role, id);
        setUser(response.data);
        console.log("This is the id from the user", response.data);
      } catch (err) {
        console.error(err.message || "Error Fetching User Profile");
        setError(err.message);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="bg-gray-100 w-[100%] h-[100%] grid grid-rows-12 px-4 gap-2">
      <div className="row-span-1 grid items-center px-2 mt-2">
        <div className="grid grid-cols-3 gap-1 w-full py-5">
          <div className="flex gap-2 ">
            <img
              src={arrow}
              alt=""
              className="w-12 h-12 border rounded-md cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            />
            <span className="text-[12px] mt-2 md:text-[16px]">
              Profile Information
            </span>
          </div>
        </div>
      </div>

      <div className="row-span-13 md:grid md:grid-cols-2 gap-4">
        <div className="col-span-2 grid grid-row-15 gap-3 px-4">
          <div className="row-span-1 bg-white rounded grid grid-rows-8 pb-2">
            <div className="row-span-3 border-b-[1px] border-gray-300 flex items-center justify-between px-4 py-2">
              <div className="flex  items-center gap-4 ">
                <img src={dp} alt="" className="md:w-22 md:h-22 w-10 h-10" />
                <div className="md:grid md:gap-3">
                  <span className="text-[12px] md:text-[16px]">
                    {user.fullname || "Username"}
                  </span>
                  <div className="flex md:gap-2">
                    <span className="text-[#1d4ed8] text-[8px] md:text-[12px] bg-[#e7eef1] md:px-1 rounded-[10px]">
                      {user.profession || "UI/UX Design"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="md:flex gap-2 -mt-4 md:mt-0">
                  <span className="text-[8px] md:text-[14px] text-gray-400">
                    {available ? "Available for gigs" : "Unavailable for gigs"}
                  </span>
                </div>
              </div>
            </div>
            <div className="row-span-5 md:grid md:grid-cols-2">
              <div className="col-span-1 grid ml-4 mt-4">
                <div className="flex items-center justify-start gap-2">
                  <img
                    src={pix}
                    alt=""
                    className="bg-[#dcf8e2] rounded-[8px] w-4 h-4 md:w-6 md:h-6"
                  />
                  <p className="text-gray-600 text-[12px] md:text-[16px]">
                    About
                  </p>
                </div>
                <span className="text-gray-600 text-[12px] p-2 md:text-[16px] ">
                  {user.about || "About Me"}
                </span>
              </div>
              <div className="bg-white col-span-1 md:-ml-15">
                <div className="flex gap-2 mt-6 ml-15">
                  <img
                    src={page}
                    alt=""
                    className="bg-[#dcf8e2] rounded-[8px] md:h-5 md:w-5 w-3 h-3 mt-1 md:mt-0"
                  />
                  <p className="text-gray-600 text-[12px] md:text-[16px]">
                    Other Information
                  </p>
                </div>
                <div className="flex gap-6 ml-15 mt-5 text-[10px] md:text-[14px]">
                  <div>
                    <p>Time Zone</p>
                    <div className="flex gap-1 mt-2">
                      <img
                        src={locate}
                        alt=""
                        className="w-3 h-3 md:w-4 md:h-4 md:mt-1"
                      />
                      <p>{user.time_zone}</p>
                    </div>
                  </div>
                  <div>
                    <p>Portfolio Links</p>
                    <div className="flex gap-2 mt-3">
                      <img
                        src={github}
                        alt=""
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                      <img src={x} alt="" className="w-2 h-2 md:w-3 md:h-3" />
                      <img
                        src={global}
                        alt=""
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </div>
                  </div>
                  <div>
                    <p>Pay/Range</p>
                    <span className="mt-2 flex">$ {user.min_pay} /hr</span>
                  </div>
                </div>
                <div className="flex ml-16 mt-4 gap-6 text-[10px] md:text-[14px]">
                  <p>Language</p>
                  <div className="flex gap-2">
                    <p>English</p>
                    <p>German</p>
                    <p>Spanish</p>
                  </div>
                </div>
                <div className="flex ml-16 mt-4 gap-6 text-[10px] md:text-[14px]">
                  <p className="border-1 p-1 rounded-md">Skills</p>
                  <div className="flex gap-2 flex-wrap">
                    {user?.skills && user.skills.length > 0 ? (
                      user.skills.map((skill, index) => (
                        <p
                          key={index}
                          className="border border-gray-300 p-1 rounded-md text-sm text-gray-700"
                        >
                          {skill}
                        </p>
                      ))
                    ) : (
                      <>
                        <p className="border p-1 rounded-md">Skill 1</p>
                        <p className="border p-1 rounded-md">Skill 2</p>
                        <p className="border p-1 rounded-md">Skill 3</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-14 bg-white grid grid-rows-14">
            <div className="w-full border-b-2 border-gray-400 row-span-1 grid grid-flow-col justify-center items-center gap-4 text-[12px] md:text-[14px]">
              <span>Works/Exprience</span>
              <span>Review </span>
            </div>
            <div className="row-span-13 mt-2">
              {experience.map((item, i) => (
                <div key={i} className="grid grid-cols-8 px-2 md:px-0">
                  <div className="col-span-1 grid justify-center">
                    <img src={dp} alt="" className="w-8 md:w-12 h-8 md:h-12" />
                  </div>
                  <div className="col-span-7 ">
                    <div className="font-bold text-[12px] md:text-[15px]">
                      {item.title}
                    </div>
                    <div className="flex text-[12px] text-gray-400 gap-2">
                      <span>{item.gig} •</span>
                      <span>
                        {item.from}–{item.to} ({item.time})
                      </span>
                    </div>
                    <div className="mt-2 text-[12px] gap-1 grid pr-4">
                      {item.detail.map((t, i) => (
                        <div key={i} className="truncate">
                          •{t}
                        </div>
                      ))}
                    </div>
                    <div className="flex py-4 gap-2">
                      {item.image.map((f, i) => (
                        <div key={i} className="md:w-20 md:h-20 w-10 h-10">
                          <img src={f} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
}

export default TalentProfileViewOnly;
