import React, { useState } from "react";
import up from "../../assets/up.png";
import link from "../../assets/link.png";
import down from "../../assets/down.png";
import empty from "../../assets/empty.png";

function MilestoneModal({ visible, onClose, item, accept }) {
  const [comment, setComment] = useState("");
  const [todo, setTodo] = useState([]);
  if (!visible) return null;

  const onCommentHandler = (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, comment]);
    setComment("");
  };

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="grid grid-rows-7 shadow-xs bg-white w-[30%] h-[60%] rounded-[5px] p-4">
        <div className="flex justify-between row-span-1">
          <p>Milestaone 3</p>
          <span className="bg-[#ffefc7] text-[#eead06] px-3 rounded-[10px] h-6 ">
            Pending
          </span>
        </div>
        <div className="grid gap-2 row-span-3">
          <p className="text-[12px] text-gray-400">
            Milestone 3 involves Full web design ready for the development
          </p>
          <div className="flex justify-between">
            <p>Submission Type</p>
            <button className="border-2 border-[#2f66f6] rounded text-[#2f66f6] flex px-2">
              Link
              <img src={down} alt="" className="w-4 h-4 mt-1" />
            </button>
          </div>
          <div className="flex rounded gap-2 border border-gray-400">
            <div className=" border-r border-gray-400 px-3 py-1">
              <img src={link} alt="" className="w-5 h-5 mt-1" />
            </div>
            <input type="text" placeholder="https://" />
          </div>
          <div>
            <p className="text-[12px]">Comment</p>
            <div className="border border-gray-400 rounded flex">
              <input
                type="text"
                placeholder="Comment about work"
                className="w-full px-2 py-1"
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <div
                className="bg-[#2f66f6] grid justify-center items-center px-2"
                onClick={onCommentHandler}
              >
                <img src={up} alt="" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3">
          <p>Older Comments</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default MilestoneModal;
