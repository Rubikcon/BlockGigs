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

function ClientSidebar() {
  return (
    // <div className="bg-[#0A0f29] min-h-screen h-auto w-[15vw] grid grid-row-12 text-white justify-center">
    //   <div className="row-span-2 grid items-center">
    //     <NavLink to={"/client"}>
    //       <div className="flex space-x-4 items-center">
    //         <img src={logo} alt="" />
    //         <span
    //           style={{ fontFamily: "'Oleo Script Swash Caps', cursive" }}
    //           className="text-[20px] text-white"
    //         >
    //           Blockgigs
    //         </span>
    //       </div>
    //     </NavLink>
    //   </div>
    //   <div className="row-span-9 space-y-4 w-[12vw]">
    //     <NavLink to="/client">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
    //             isActive
    //               ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={element} alt="" className="h-4 w-4" />
    //           <span>Dashboard</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"discover"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
    //             isActive
    //               ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={chart} alt="" className="h-4 w-4" />
    //           <span>Discover</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"clientGigs"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
    //             isActive
    //               ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={cube} alt="" className="h-4 w-4" />
    //           <span>My gigs</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"offer"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
    //             isActive
    //               ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={folder} alt="" className="h-4 w-4" />
    //           <span>Offer & Application</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"chat"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
    //             isActive
    //               ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={message} alt="" className="h-4 w-4" />
    //           <span>Chat</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"wallet"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
    //             isActive
    //               ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={wallet} alt="" className="h-4 w-4" />
    //           <span>Wallet</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"setting"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 pl-2 items-center h-12 w-full cursor-pointer ${
    //             isActive
    //               ? "text-[#242d44] font-bold bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={setting} alt="" className="h-4 w-4" />
    //           <span>Setting</span>
    //         </div>
    //       )}
    //     </NavLink>
    //   </div>
    //   <NavLink to={"/signin"} className="cursor-pointer">
    //     <div className="flex space-x-2 items-center">
    //       <img
    //         src={logout}
    //         alt=""
    //         className="h-6 w-6 text-white hover:text-[#242d44]"
    //       />
    //       <span className=" text-[12px] text-red-400">logout</span>
    //     </div>
    //   </NavLink>
    // </div>
    /////////////////////////////////////////////////////////////////////////
    // <div className="grid md:grid-rows-12 md:grid-cols-1 grid-cols-8 bg-[#0A0f29] h-[20vh] md:min-h-screen md:h-auto min-w-screen md:min-w-[15vw] text-white items-center md:justify-center px-4">
    //   <div className="md:row-span-2 col-span-2 md:items-center">
    //     <NavLink to={"/"}>
    //       <div className="flex space-x-4 items-center">
    //         <img src={logo} alt="" />
    //         <span
    //           style={{ fontFamily: "'Oleo Script Swash Caps', cursive" }}
    //           className="text-[20px] text-white"
    //         >
    //           Blockgigs
    //         </span>
    //       </div>
    //     </NavLink>
    //   </div>
    //   <div className="row-span-9 space-y-4 w-[12vw]">
    //     <NavLink to="/talent/dashboard">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 px-2 items-center h-12 w-full text-[8px] sm:text-[12px] md:text-[15px] cursor-pointer ${
    //             isActive
    //               ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec]  md:bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={element} alt="" className="h-4 w-4 hidden md:block" />
    //           <span>Dashboard</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"/talent/discover"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 px-2 items-center h-12 w-full  text-[8px] sm:text-[12px] md:text-[15px] cursor-pointer ${
    //             isActive
    //               ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={chart} alt="" className="h-4 w-4 hidden md:block" />
    //           <span>Discover</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"/talent/gigs"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 px-2 items-center h-12 w-full text-[8px] sm:text-[12px] md:text-[15px] cursor-pointer ${
    //             isActive
    //               ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={cube} alt="" className="h-4 w-4 hidden md:block" />
    //           <span>My gigs</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"/talent/offer"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 px-2 items-center h-12 w-full text-[8px] sm:text-[12px] md:text-[15px] cursor-pointer ${
    //             isActive
    //               ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={folder} alt="" className="h-4 w-4 hidden md:block" />
    //           <span>Offer & Application</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"/talent/chat"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 px-2 items-center h-12 w-full text-[8px] sm:text-[12px] md:text-[15px] cursor-pointer ${
    //             isActive
    //               ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={message} alt="" className="h-4 w-4 hidden md:block" />
    //           <span>Chat</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"/talent/wallet"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 px-2 items-center h-12 w-full text-[8px] sm:text-[12px] md:text-[15px] cursor-pointer ${
    //             isActive
    //               ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={wallet} alt="" className="h-4 w-4 hidden md:block" />
    //           <span>Wallet</span>
    //         </div>
    //       )}
    //     </NavLink>
    //     <NavLink to={"/talent/setting"} className="cursor-pointer">
    //       {({ isActive }) => (
    //         <div
    //           className={`flex space-x-2 my-2 px-2 items-center h-12 w-full text-[8px] sm:text-[12px] md:text-[15px] cursor-pointer ${
    //             isActive
    //               ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
    //               : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
    //           }`}
    //         >
    //           <img src={setting} alt="" className="h-4 w-4 hidden md:block" />
    //           <span>Setting</span>
    //         </div>
    //       )}
    //     </NavLink>
    //   </div>
    //   <div className="md:row-span-1 md:md:col-span-2 col-span-1 ml-4 -mt-2">
    //     <NavLink to={""}>
    //       <img
    //         src={logout}
    //         alt=""
    //         className="h-6 w-6 text-white  hidden md:block hover:text-[#242d44]"
    //       />
    //       <span className="text-red-400  text-[8px] sm:text-[12px] md:text-[15px]">
    //         Logout
    //       </span>
    //     </NavLink>
    //   </div>
    // </div>
    //////////////////////////////////////////////
    <div className="flex-1 grid grid-cols-8 md:grid-cols-1 md:grid-row-9 bg-[#0A0f29] h-[20vh] md:min-h-screen md:h-auto min-w-screen md:min-w-[15vw] text-white items-center md:justify-center px-4">
      <div className="col-span-8 md:grid md:row-span-1 md:justify-center">
        <NavLink to={"/"}>
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
      <div className="flex col-span-7 md:row-span-7 justify-between md:grid md:justify-center gap-40">
        <div className="grid gap-2">
          <div>
            {" "}
            <NavLink to="/client/dashboard">
              {({ isActive }) => (
                <div
                  className={`flex space-x-4 my-2 px-3 py-2 items-center h-12 w-full text-[10px] sm:text-[12px] md:text-[15px] cursor-pointer ${
                    isActive
                      ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec]  md:bg-[#a7d3ec] rounded-2xl"
                      : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
                  }`}
                >
                  <img
                    src={element}
                    alt=""
                    className="h-4 w-4 hidden md:block"
                  />
                  <span>Dashboard</span>
                </div>
              )}
            </NavLink>
          </div>
          <div>
            <NavLink to={"/client/discover"} className="cursor-pointer">
              {({ isActive }) => (
                <div
                  className={`flex space-x-4 my-2 px-3 py-2 items-center h-12 w-full  text-[10px] sm:text-[12px] md:text-[15px] cursor-pointer ${
                    isActive
                      ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
                      : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
                  }`}
                >
                  <img src={chart} alt="" className="h-4 w-4 hidden md:block" />
                  <span>Discover</span>
                </div>
              )}
            </NavLink>
          </div>
          <div>
            <NavLink to={"/client/gig"} className="cursor-pointer">
              {({ isActive }) => (
                <div
                  className={`flex space-x-4 my-2 px-3 py-2 items-center h-12 w-full text-[10px] sm:text-[12px] md:text-[15px] cursor-pointer ${
                    isActive
                      ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
                      : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
                  }`}
                >
                  <img src={cube} alt="" className="h-4 w-4 hidden md:block" />
                  <span>My gigs</span>
                </div>
              )}
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink to={"/client/offer"} className="cursor-pointer">
              {({ isActive }) => (
                <div
                  className={`flex space-x-4 my-2 px-3 py-2 items-center h-12 w-full text-[10px] sm:text-[12px] md:text-[15px] cursor-pointer ${
                    isActive
                      ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
                      : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
                  }`}
                >
                  <img
                    src={folder}
                    alt=""
                    className="h-4 w-4 hidden md:block"
                  />
                  <span>Offer & Application</span>
                </div>
              )}
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink to={"/client/chat"} className="cursor-pointer">
              {({ isActive }) => (
                <div
                  className={`flex space-x-4 my-2 px-3 py-2 items-center h-12 w-full text-[10px] sm:text-[12px] md:text-[15px] cursor-pointer ${
                    isActive
                      ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
                      : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
                  }`}
                >
                  <img
                    src={message}
                    alt=""
                    className="h-4 w-4 hidden md:block"
                  />
                  <span>Chat</span>
                </div>
              )}
            </NavLink>
          </div>
          <div>
            <NavLink to={"/client/wallet"} className="cursor-pointer">
              {({ isActive }) => (
                <div
                  className={`flex space-x-4 my-2 px-3 py-2 items-center h-12 w-full text-[10px] sm:text-[12px] md:text-[15px] cursor-pointer ${
                    isActive
                      ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
                      : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
                  }`}
                >
                  <img
                    src={wallet}
                    alt=""
                    className="h-4 w-4 hidden md:block"
                  />
                  <span>Wallet</span>
                </div>
              )}
            </NavLink>
          </div>
          <div>
            {" "}
            <NavLink to={"/client/setting"} className="cursor-pointer">
              {({ isActive }) => (
                <div
                  className={`flex space-x-4 my-2 px-3 py-2 items-center h-12 w-full text-[10px] sm:text-[12px] md:text-[15px] cursor-pointer ${
                    isActive
                      ? "md:text-[#242d44] font-bold border-b border-[#a7d3ec] md:bg-[#a7d3ec] rounded-2xl"
                      : "text-white hover:bg-[#a7d3ec] hover:text-[#242d44] hover:rounded-2xl"
                  }`}
                >
                  <img
                    src={setting}
                    alt=""
                    className="h-4 w-4 hidden md:grid"
                  />
                  <span>Setting</span>
                </div>
              )}
            </NavLink>
          </div>
        </div>
        <div className="">
          <NavLink to={""}>
            <img
              src={logout}
              alt=""
              className="h-6 w-6 text-white  hidden md:grid hover:text-[#242d44]"
            />
            <span className="text-red-400  text-[10px] sm:text-[12px] md:text-[15px]">
              Logout
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ClientSidebar;
