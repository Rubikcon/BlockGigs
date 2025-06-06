import bell2 from "../../assets/bell.png";
import dp from "../../assets/Ellipse.png";
import down from "../../assets/down.png";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Discover from "./discover";

function ProfileCard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  // retrives the data from the localStorage to the frontend
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData") || "{}");
    console.log(
      "Data logged immediately after retrieved",
      JSON.parse(localStorage.getItem("userData"))
    );
    setUser(storedUser);
  }, []);

  const openProfile = () => {
    navigate("/profile");
  };
  return (
    <div>
      <div className="col-span-1 grid justify-center">
        <div className="flex gap-2">
          <div className="h-6 w-6 rounded-[50%] bg-white md:grid items-center justify-center cursor-pointer hidden">
            <img src={bell2} alt="" className="h-4 w-4" />
          </div>
          <div className="flex gap-4">
            <div>
              <img src={dp} alt="" className="h-6 w-6 hidden md:block" />
            </div>
            <div className="">
              <p className="-m-2 text-[12px] md:text-[15px]">
                {user.fullname || "Username"}
              </p>
              <span className="text-[6px] md:text-[10px] top-1 m-0">
                {user.profession || "Profession"}
              </span>
            </div>
            <img
              src={down}
              alt=""
              className=" md:block w-[14px] h-[14px] md:w-8 md:h-8 cursor-pointer"
              onClick={openProfile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
