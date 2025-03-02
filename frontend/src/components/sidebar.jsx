// import React, {useState} from "react";
import chart from "../assets/chart.svg";
import cube from "../assets/3dcube.svg";
import logo from "../assets/3dcube.png";
import element from "../assets/element-3.svg";
import folder from "../assets/folder-open.png";
import message from "../assets/message-text.png";
import wallet from "../assets/wallet.png";
import setting from "../assets/setting-2.png";
import logout from "../assets/logout.png";
import { NavLink } from "react-router-dom";

function Sidebar() {
  // const navigate = useNavigate();
  return (
    <div className="bg-[#0A0f29] h-[100vh] w-[15vw] grid grid-row-12 text-white justify-center">
      <div className="row-span-2 grid items-center">
        <NavLink to="/">
          <div className="flex space-x-4 items-center">
            <img src={logo} alt="" />
            <span
              style={{ fontFamily: "'Oleo Script Swash Caps', cursive" }}
              className="text-[20px] text-white"
            >
              Blockgigs
            </span>
          </div>
        </NavLink>
      </div>
      <div className="row-span-9 space-y-4 w-[12vw]">
        <NavLink to="/TalentDashboard">
          {({ isActive }) => (
            <div
              className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
                isActive
                  ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
              }`}
            >
              <img src={element} alt="" className="h-4 w-4" />
              <span>Dashboard</span>
            </div>
          )}
        </NavLink>
        <NavLink to={"discover"} className="cursor-pointer">
          {({ isActive }) => (
            <div
              className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
                isActive
                  ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
              }`}
            >
              <img src={chart} alt="" className="h-4 w-4" />
              <span>Discover</span>
            </div>
          )}
        </NavLink>
        <NavLink to={"gigs"} className="cursor-pointer">
          {({ isActive }) => (
            <div
              className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
                isActive
                  ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
              }`}
            >
              <img src={cube} alt="" className="h-4 w-4" />
              <span>My gigs</span>
            </div>
          )}
        </NavLink>
        <NavLink to={"offer"} className="cursor-pointer">
          {({ isActive }) => (
            <div
              className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
                isActive
                  ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
              }`}
            >
              <img src={folder} alt="" className="h-4 w-4" />
              <span>Offer & Application</span>
            </div>
          )}
        </NavLink>
        <NavLink to={"chat"} className="cursor-pointer">
          {({ isActive }) => (
            <div
              className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
                isActive
                  ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
              }`}
            >
              <img src={message} alt="" className="h-4 w-4" />
              <span>Chat</span>
            </div>
          )}
        </NavLink>
        <NavLink to={"wallet"} className="cursor-pointer">
          {({ isActive }) => (
            <div
              className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
                isActive
                  ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
              }`}
            >
              <img src={wallet} alt="" className="h-4 w-4" />
              <span>Wallet</span>
            </div>
          )}
        </NavLink>
        <NavLink to={"setting"} className="cursor-pointer">
          {({ isActive }) => (
            <div
              className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
                isActive
                  ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
                  : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
              }`}
            >
              <img src={setting} alt="" className="h-4 w-4" />
              <span>Setting</span>
            </div>
          )}
        </NavLink>
      </div>
      <NavLink to={""} className="cursor-pointer">
        <div className="flex space-x-2 items-center">
          <img
            src={logout}
            alt=""
            className="h-6 w-6 text-white hover:text-[#242d44]"
          />
          <span className=" text-[12px] text-red-400">logout</span>
        </div>
      </NavLink>
    </div>
  );
}

export default Sidebar;
