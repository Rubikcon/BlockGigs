import React, { useState } from "react";
import up from "../../assets/up.png";
import link from "../../assets/link.png";
import down from "../../assets/down.png";
import empty from "../../assets/empty.png";
import dp from "../../assets/Ellipse.png";

function MilestoneModal({ visible, onClose, item }) {
  const [comment, setComment] = useState("");
  const [http, setHttp] = useState("");
  const [todo, setTodo] = useState([]);
  if (!visible) return null;

  const onCommentHandler = (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, comment]);
    setComment("");
  };

  const reviewHandler = (e) => {
    e.preventDefault();
    const data = { ...item, link: http };
    console.log(item, "send link to backend", http, "goat", data);
    setHttp("");
  };

  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="grid grid-rows-8 shadow-xs bg-white w-full md:w-[30%] md:h-[70%] rounded-[5px] p-4">
        <div className="flex justify-between row-span-1">
          <p>{item.title[0].toUpperCase() + item.title.slice(1)}</p>
          <span className="bg-[#ffefc7] text-[#eead06] px-3 rounded-[10px] h-6 ">
            Pending
          </span>
        </div>
        <div className="grid gap-2 row-span-3">
          <p className="text-[12px] text-gray-400">
            {item.title} involves Full web design ready for the development
          </p>
          <div className="flex justify-between">
            <p>Submission Type</p>
            <button className="border-2 border-[#2f66f6] rounded text-[#2f66f6] flex px-2">
              Link
              <img src={down} alt="" className="w-4 h-4 mt-1" />
            </button>
          </div>
          <div className="flex rounded border border-gray-400">
            <div className=" border-r border-gray-400 px-2 cursor-pointer grid items-center">
              <img src={link} alt="" className="w-5 h-5 mt-1" />
            </div>
            <input
              type="text"
              placeholder="https://"
              className="w-full px-2 py-1"
              name="http"
              value={http}
              onChange={(e) => setHttp(e.target.value)}
            />
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
                className="bg-[#2f66f6] grid justify-center items-center px-2 cursor-pointer"
                onClick={onCommentHandler}
              >
                <img src={up} alt="" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3  overflow-auto">
          <p>Older Comments</p>
          {todo.length === 0 ? (
            <div className="grid justify-center items-center mt-4">
              <img src={empty} alt="" />
              <p className="text-gray-400 text-[12px]">No comment yet</p>
            </div>
          ) : (
            todo.map((t, i) => (
              <div key={i} className="flex gap-2">
                <img src={dp} alt="" className="w-5 h-5" />
                <div className="grid space-x-1">
                  <div className="flex gap-2">
                    <p className="text-[12px] font-bold -mt-1">Maria Stiles</p>
                    <span className="-mt-1.5">•</span>
                    <span className="text-gray-400 text-[12px] -mt-1">
                      2m ago
                    </span>
                  </div>
                  <span className="text-gray-400 text-[12px]">{t}</span>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="row-span-1 grid grid-cols-3 gap-2 py-2.5">
          <button
            className="col-span-2 bg-[#2f66f6] text-white rounded text-[12px] cursor-pointer hover:scale-95 duration-300"
            onClick={reviewHandler}
          >
            Submit for Review
          </button>
          <button
            className="col-span-1 border border-[#2f66f6] text-[#2f66f6] rounded cursor-pointer hover:scale-95 duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MilestoneModal;
