import { useState } from "react";
import crypto from "../../assets/crypto.png";
import down from "../../assets/down.png";
// import calender from "../../assets/calendar.png";

function ClientGigModal({ visible, onClose, item }) {
  const [gig, setGig] = useState({
    title: "",
    totalPrice: 0,
    detail: "",
    milestone: 1,
    milestones: [{ details: "", deadline: "", totalPrice: 0 }],
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
        details: gig.milestones[index]?.details || "",
        deadline: gig.milestones[index]?.deadline || "",
        totalPrice: gig.milestones[index]?.totalPrice || 0,
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

    setGig({
      title: "",
      totalPrice: 0,
      detail: "",
      milestone: 1,
      milestones: [{ details: "", deadline: "", totalPrice: 0 }],
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
            <p className="text-[14px]">Details</p>
            <input
              placeholder={`Milestones ${i + 1} involves...`}
              className="w-full border border-gray-400 focus:outline-none rounded text-[14px] py-2 pl-2"
              type="text"
              value={gig.milestones[i]?.details || ""}
              onChange={(e) =>
                onMilestoneChangeHandler(i, "details", e.target.value)
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
                  value={gig.milestones[i]?.totalPrice || ""}
                  onChange={(e) =>
                    onMilestoneChangeHandler(i, "totalPrice", e.target.value)
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
    //       <p className="text-[14px]">Details</p>
    //       <input
    //         placeholder={`Milestone ${i + 1} involves...`}
    //         className="w-full border border-gray-400 focus:outline-none rounded text-[14px] py-2 pl-2"
    //         type="text"
    //         value={milestone.details}
    //         onChange={(e) =>
    //           onMilestoneChangeHandler(i, "details", e.target.value)
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
            <p className="text-[12px] md:text-[14px]">Total Gig totalPrice</p>
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
          <p className="text-[12px] md:text-[14px]">Gig Details</p>
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
            className="bg-[#2f66f6] rounded text-white grid justify-center items-center col-span-2 text-[12px] py-2"
            onClick={submitGigHandler}
          >
            Post New Gig
          </button>
          <button
            className="border border-[#2f66f6] rounded text-[#2f66f6] grid justify-center items-center col-span-1 text-[12px]"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientGigModal;

{
  /* <div className="grid grid-cols-4">
<p className="col-span-1 text-[14px]">#1 Milestone</p>
<div className="grid col-span-3">
  <p className="text-[14px]">Details</p>
  <input
    placeholder="Milestone 1 involves logo"
    className="text-gray-400 pl-2 border border-gray-400 focus:outline-none rounded text-[14px] py-2"
    type="text"
    name="milestone1"
    value={gig.milestone1}
    onChange={onChangeHandler}
  />
</div>
<div className="col-start-2 grid grid-cols-2 col-span-3 gap-1">
  <div className="col-span-1">
    <p>Deadline</p>
    <div className="flex border border-gray-400 rounded pl-2  py-0.5">
      {/* <img
        src={calender}
        alt=""
        className="w-3 h-3 md:w-5 md:h-5 mt-1"
      /> */
}
//       <input
//         type="date"
//         className="focus:outline-none py-1 text-[14px] w-full"
//         name="milestone1deadline"
//         value={gig.milestone1deadline}
//         onChange={onChangeHandler}
//       />
//     </div>
//   </div>
//   <div className="col-span-1">
//     <p>#1 totalPrice</p>
//     <div className=" grid grid-cols-3 border border-gray-400 rounded">
//       <div className="flex gap-0.5 border-r border-gray-400 col-span-1 pr-1 py-2">
//         <img
//           src={crypto}
//           alt=""
//           className="w-2 h-2 md:w-4 md:h-4"
//         />
//         <p className="text-[#2f66f6] -mt-1 text-[10px] md:text-[14px]">
//           Usdc
//         </p>
//       </div>
//       <input
//         placeholder="0.00"
//         type="Number"
//         className="grid col-span-2 focus:outline-none pl-2"
//         name="milestone1totalPrice"
//         value={gig.milestone1totalPrice}
//         onChange={onChangeHandler}
//       />
//     </div>
//   </div>
// </div>
// </div>
// <div className="grid grid-cols-4">
// <p className="col-span-1 text-[14px]">#2 Milestone</p>
// <div className="grid col-span-3">
//   <p className="text-[14px]">Details</p>
//   <input
//     placeholder="Milestone 2 involves logo"
//     className="text-gray-400 pl-2 border border-gray-400 focus:outline-none rounded text-[14px] py-2"
//     type="text"
//     name="milestone2"
//     value={gig.milestone2}
//     onChange={onChangeHandler}
//   />
// </div>
// <div className="col-start-2 grid grid-cols-2 col-span-3 gap-1">
//   <div className="col-span-1">
//     <p>Deadline</p>
//     <div className="flex border border-gray-400 rounded pl-2  py-0.5">
//       {/* <img
//         src={calender}
//         alt=""
//         className="w-3 h-3 md:w-5 md:h-5 mt-1"
//       /> */}
//       <input
//         type="date"
//         className="focus:outline-none py-1 text-[14px] w-full"
//         name="milestone2deadline"
//         value={gig.milestone2deadline}
//         onChange={onChangeHandler}
//       />
//     </div>
//   </div>
//   <div className="col-span-1">
//     <p>#2 totalPrice</p>
//     <div className=" grid grid-cols-3 border border-gray-400 rounded">
//       <div className="flex gap-0.5 border-r border-gray-400 col-span-1 pr-1 py-2">
//         <img
//           src={crypto}
//           alt=""
//           className="w-2 h-2 md:w-4 md:h-4"
//         />
//         <p className="text-[#2f66f6] -mt-1 text-[8px] md:text-[12px]">
//           Usdc
//         </p>
//       </div>
//       <input
//         placeholder="0.00"
//         type="number"
//         className="grid col-span-2 focus:outline-none pl-2"
//         name="milestone2totalPrice"
//         value={gig.milestone2totalPrice}
//         onChange={onChangeHandler}
//       />
//     </div>
//   </div>
// </div>
// </div> */}
