import down from "../../assets/down.png";
import crypto from "../../assets/crypto.png";

function FormModal({
  gig,
  onChange,
  onMilestoneChange,
  onSubmit,
  onClose,
  disable,
}) {
  const renderMilestones = () => {
    return Array.from({ length: gig.milestone }).map((_, i) => (
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
              onMilestoneChange(i, "description", e.target.value)
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
                  onMilestoneChange(i, "deadline", e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-span-1">
            <p>#{i + 1} totalPrice</p>
            <div className="grid grid-cols-4 border border-gray-400 rounded">
              <div className="flex gap-1 items-center border-r border-gray-400 col-span-2 px-2 py-2.5">
                <img
                  src={crypto}
                  alt="Currency icon"
                  className="w-3 h-3 md:w-4 md:h-4"
                />
                <p className="text-[#2f66f6] text-[12px] md:text-[14px]">
                  Usdc
                </p>
              </div>
              <input
                placeholder="0.00"
                type="number"
                className="col-span-2 focus:outline-none pl-2 text-[12px]"
                value={gig.milestones[i]?.amount || ""}
                onChange={(e) => onMilestoneChange(i, "amount", e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
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
          <p className="text-[10px] sm:text-[12px] md:text-[14px]">
            Job/Gig Title
          </p>
          <input
            placeholder="Dex Exchange web.."
            type="text"
            className="border border-gray-400 w-full focus:outline-none py-1.5 pl-1 rounded text-[12px]"
            name="title"
            value={gig.title}
            onChange={onChange}
          />
        </div>
        {/* <div className="col-span-1"> */}
        <div>
          <p className="text-[10px] sm:text-[10px] md:text-[12px]">
            Total Gig totalPrice
          </p>
          <div className=" grid grid-cols-4 border border-gray-400 rounded">
            <div className="flex gap-0.5 items-center border-r border-gray-400 col-span-2 px-1 py-1.5">
              <img
                src={crypto}
                alt="Currency icon"
                className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
              />
              <p className="text-[#2f66f6] -mt-1 text-[12px] md:text-[14px]">
                Usdc
              </p>
              <img src={down} alt="" className="w-4 h-4" />
            </div>
            <input
              placeholder="0.00"
              type="number"
              className="col-span-2 focus:outline-none pl-2 text-[12px]"
              name="totalPrice"
              value={gig.totalPrice}
              onChange={onChange}
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
          onChange={onChange}
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
            onChange={onChange}
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
          onClick={onSubmit}
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
  );
}

export default FormModal;
