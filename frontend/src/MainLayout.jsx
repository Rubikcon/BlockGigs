// import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

function MainLayout() {
  return (
    <div className="grid grid-flow-row md:flex">
      <Sidebar />
      <div className="grid grid-flow-row md:flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
