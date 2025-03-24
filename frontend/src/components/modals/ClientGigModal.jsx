import { useState } from "react";
import crypto from "../../assets/crypto.png";
import down from "../../assets/down.png";
import { postApi } from "../../helpers";
import arm from "../../assets/arm.png";
// import calender from "../../assets/calendar.png";

function ClientGigModal({ visible, onClose, item }) {
  const [post, setPost] = useState(false);
  const [gig, setGig] = useState({
    title: "",
    totalPrice: 0,
    detail: "",
    milestone: 1,
    milestones: [{ description: "", deadline: "", amount: 0 }],
    talent: null,
    accepted: false,
  });
  if (!visible) return null;

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "milestone") {
      const milestoneCount = Math.max(1, parseInt(value, 10) || 1);
      const milestones = Array.from({ length: milestoneCount }, (_, index) => ({
        description: gig.milestones[index]?.description || "",
        deadline: gig.milestones[index]?.deadline || "",
        amount: gig.milestones[index]?.amount || 0,
      }));
      setGig({
        ...gig,
        [name]: milestoneCount,
        milestones,
      });
    } else {
      setGig({
        ...gig,
        [name]: value,
      });
    }
  };

  const onMilestoneChangeHandler = (index, field, value) => {
    const updatedMilestones = [...gig.milestones];
    updatedMilestones[index] = {
      ...updatedMilestones[index],
      [field]: value,
    };
    setGig({
      ...gig,
      milestones: updatedMilestones,
    });
  };

  const submitGigHandler = () => {
    console.log(gig, "gig");

    postApi(
      "job/create",
      gig,
      (res) => console.log(res, "response from the backend"),
      (e) => console.log(e, "error for the backend")
    );
    setGig({
      title: "",
      totalPrice: 0,
      detail: "",
      milestone: 1,
      milestones: [{ description: "", deadline: "", amount: 0 }],
      talent: null,
      accepted: false,
    });
  };

  const renderMilestones = () => {
    const milestones = [];
    for (let i = 0; i < gig.milestone; i++) {
      milestones.push(
        <div key={i} className="grid grid-cols-4 gap-2 mb-4">
          <p className="col-span-1 text-[14px]">#{i + 1} Milestone</p>
          <div className="col-span-3">
            <p className="text-[14px]">description</p>
            <input
              placeholder={`Milestones ${i + 1} involves...`}
              className="w-full border border-gray-400 focus:outline-none rounded text-[14px] py-2 pl-2"
              type="text"
              value={gig.milestones[i]?.description || ""}
              onChange={(e) =>
                onMilestoneChangeHandler(i, "description", e.target.value)
              }
            />
          </div>
          <div className="col-start-2 grid grid-cols-2 col-span-3 gap-2">
            <div className="col-span-1">
              <p>Deadline</p>
              <div className="flex border border-gray-400 rounded pl-2 py-1">
                <input
                  type="date"
                  className="focus:outline-none py-1 text-[14px] w-full"
                  value={gig.milestones[i]?.deadline || ""}
                  onChange={(e) =>
                    onMilestoneChangeHandler(i, "deadline", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="col-span-1">
              <p>#{i + 1} totalPrice</p>
              <div className="grid grid-cols-3 border border-gray-400 rounded">
                <div className="flex gap-1 items-center border-r border-gray-400 col-span-1 px-2 py-1.5">
                  <img src={crypto} alt="Currency icon" className="w-4 h-4" />
                  <p className="text-[#2f66f6] text-[12px]">Usdc</p>
                </div>
                <input
                  placeholder="0.00"
                  type="number"
                  className="col-span-2 focus:outline-none pl-2 text-[12px]"
                  value={gig.milestones[i]?.amount || ""}
                  onChange={(e) =>
                    onMilestoneChangeHandler(i, "amount", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return milestones;

    // return gig.milestones.map((milestone, i) => (
    //   <div key={i} className="grid grid-cols-4 gap-2 mb-4">
    //     <p className="col-span-1 text-[14px]">#{i + 1} Milestone</p>
    //     <div className="col-span-3">
    //       <p className="text-[14px]">description</p>
    //       <input
    //         placeholder={`Milestone ${i + 1} involves...`}
    //         className="w-full border border-gray-400 focus:outline-none rounded text-[14px] py-2 pl-2"
    //         type="text"
    //         value={milestone.description}
    //         onChange={(e) =>
    //           onMilestoneChangeHandler(i, "description", e.target.value)
    //         }
    //       />
    //     </div>
    //     <div className="col-start-2 grid grid-cols-2 col-span-3 gap-2">
    //       <div className="col-span-1">
    //         <p>Deadline</p>
    //         <div className="flex border border-gray-400 rounded pl-2 py-1">
    //           <input
    //             type="date"
    //             className="focus:outline-none py-1 text-[14px] w-full"
    //             value={milestone.deadline}
    //             onChange={(e) =>
    //               onMilestoneChangeHandler(i, "deadline", e.target.value)
    //             }
    //           />
    //         </div>
    //       </div>
    //       <div className="col-span-1">
    //         <p>#{i + 1} totalPrice</p>
    //         <div className="grid grid-cols-3 border border-gray-400 rounded">
    //           <div className="flex gap-1 items-center border-r border-gray-400 col-span-1 pl-0.5 py-2.5">
    //             <img src={crypto} alt="Currency Icon" className="w-4 h-4" />
    //             <p className="text-[#2f66f6] text-[12px]">Usdc</p>
    //           </div>
    //           <input
    //             placeholder="0.00"
    //             type="number"
    //             className="col-span-2 focus:outline-none pl-2 text-[12px]"
    //             value={milestone.totalPrice}
    //             onChange={(e) =>
    //               onMilestoneChangeHandler(i, "totalPrice", e.target.value)
    //             }
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // ));
  };

  return (
    <>
      {" "}
      {!post ? (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
          {/* <div className="md:grid md:grid-rows-10 shadow-xs bg-white w-full md:w-[30%] h-[80%] rounded-[5px] p-4"> */}
          <div className="shadow-xs bg-white w-full md:w-[30%] h-[80%] rounded-[5px] p-4 flex flex-col gap-4 overflow-auto">
            {/* <div className="grid row-span-1"> */}
            <div>
              <span className="font-bold text-[14px]">Post A New Gig</span>
              <p className="text-gray-400 text-[12px]">
                Create a gig post to get talents' applictions
              </p>
            </div>
            {/* <div className="row-span-1 grid grid-cols-2"> */}
            <div className="grid grid-cols-2 gap-4">
              {/* <div className="col-span-1"> */}
              <div>
                <p className="text-[12px] md:text-[14px]">Job/Gig Title</p>
                <input
                  placeholder="Dex Exchange web.."
                  type="text"
                  className="border border-gray-400 w-full focus:outline-none py-1.5 pl-1 rounded text-[12px]"
                  name="title"
                  value={gig.title}
                  onChange={onChangeHandler}
                />
              </div>
              {/* <div className="col-span-1"> */}
              <div>
                <p className="text-[12px] md:text-[14px]">
                  Total Gig totalPrice
                </p>
                <div className=" grid grid-cols-3 border border-gray-400 rounded">
                  <div className="flex gap-0.5 items-center border-r border-gray-400 col-span-1 px-1 py-1.5">
                    <img src={crypto} alt="Currency icon" className="w-4 h-4" />
                    <p className="text-[#2f66f6] -mt-1">Usdc</p>
                    <img src={down} alt="" className="w-4 h-4" />
                  </div>
                  <input
                    placeholder="0.00"
                    type="number"
                    className="col-span-2 focus:outline-none pl-2 text-[12px]"
                    name="totalPrice"
                    value={gig.totalPrice}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>
            {/* <div className="row-span-3 grid mt-2"> */}
            <div>
              <p className="text-[12px] md:text-[14px]">Gig Detail</p>
              <textarea
                placeholder="Changly brand needs a web designer for cutting edge..."
                className="border border-gray-400 rounded w-full min-h-[120px] focus:outline-none p-2 text-[12px]"
                name="detail"
                value={gig.detail}
                onChange={onChangeHandler}
              />
            </div>
            {/* <div className="row-span-1 grid grid-cols-3 my-2"> */}
            <div className="grid grid-cols-3 my-2">
              <div className="flex col-span-1 gap-2 items-center">
                <p className="text-[10px] md:text-[12px]">Milestone Number</p>
                <input
                  placeholder="#2"
                  className="border border-[#2f66f6] w-[30%] focus:outline-none pl-2 rounded"
                  type="number"
                  name="milestone"
                  value={gig.milestone}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            {/**********************************************************/}
            <div className="row-span-6 overflow-auto">{renderMilestones()}</div>
            {/********************************************************************/}
            {/* <div className="row-span-1 grid grid-cols-3 gap-2"> */}
            <div className="grid grid-cols-3 gap-2">
              <button
                className="bg-[#2f66f6] rounded text-white grid justify-center items-center col-span-2 text-[12px] py-2 cursor-pointer"
                onClick={() => setPost(true)}
              >
                Post New Gig
              </button>
              <button
                className="border border-[#2f66f6] rounded text-[#2f66f6] grid justify-center items-center col-span-1 text-[12px] cursor-pointer"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className="grid grid-rows-4 w-full md:w-[30%] h-[45%] bg-white shadow-xl shadow-gray-300 px-4 py-6 rounded-[5px]">
              <img
                src={arm}
                alt=""
                className="row-span-3 w-45 h-45 justify-self-center items-center"
              />

              <p className="row-span-2 grid items-center justify-center font-bold">
                Confirm New Gig
              </p>
              <span className="row-span-3 grid text-center text-[15px]">
                Job will be posted for applicants and 1000 USDC will be deducted
                from your account to be kept in smart contract
              </span>
              <div className="row-span-1 grid grid-cols-2 items-center justify-center gap-2 mt-1">
                <button className="bg-[#2f66f6] text-white rounded-[8px] py-1 col-span-1 text-[12px] md:text-[16px]">
                  Confirm New Gig
                </button>
                <button className=" col-span-1 text-[#2f66f6] rounded-[8px] py-1 border border-[#2f66f6] text-[12px] md:text-[16px]">
                  Cancel & Save to Drafts
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ClientGigModal;
