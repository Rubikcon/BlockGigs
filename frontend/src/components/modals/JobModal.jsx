import React, { useState } from "react";
import man from "../../assets/man.png";
import close from "../../assets/close.png";
import frame from "../../assets/Frame.png";
import { useNavigate, useLocation } from "react-router-dom";

function JobModal({ visible, onClose, item }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [apply, setApply] = useState(false);
  if (!visible) return null;

  const jobModalHandler = () => {
    onClose;
    navigate(-1);
  };
  return (
    <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="md:grid md:grid-rows-7 shadow-xs bg-white w-full md:w-[30%] h-[50%] rounded-[5px] p-4">
        {!apply ? (
          <div className="md:grid md:gap-4">
            <img
              src={man}
              alt=""
              className="row-span-4 justify-self-center"
              onClick={onClose}
            />
            <div className="row-span-2">
              <p className="grid justify-center font-bold">Send Application</p>
              <p className="text-center">
                Your Application will be sent to Andrea Simon for Review. Stay
                Active for offer if chosen, so you can accept promptly
              </p>
            </div>
            <div className="row-span-1 grid grid-cols-5 justify-between gap-1 mt-4">
              <button
                className="col-span-3 bg-[#2f66f6] rounded-[8px] text-white py-2 hover:bg-white hover:text-[#2f66f6] hover:border-[#2f66f6] hover:border-2 cursor-pointer"
                onClick={() => setApply(true)}
              >
                Apply for this job
              </button>
              <button
                className="col-span-2 border-[#2f66f6] border-2 rounded-[8px] text-[#2f66f6] py-1 hover:bg-[#2f66f6] hover:text-white cursor-pointer"
                onClick={onClose}
              >
                Cancel Application
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-2">
            <img
              src={close}
              alt=""
              className="w-5 h-5 row-span-1 cursor-pointer justify-self-end"
              onClick={jobModalHandler}
            />
            <img
              src={frame}
              alt=""
              className="w-[12rem] h-[12rem] justify-self-center"
            />
            <p className="grid justify-self-center font-bold">
              Application Sent
            </p>
            <p className="text-gray-400 text-center">
              Nice, Your Application has been sent for {state.name}'s Review.
              Stay active for offer, if chosen to respond promptly
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobModal;
