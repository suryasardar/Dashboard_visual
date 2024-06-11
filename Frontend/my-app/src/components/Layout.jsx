import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className=" flex flex-row w-screen h-screen overflow-hidden ">
      <div className="sm:hidden block">
        <FaBars className="text-2xl" onClick={toggleSidebar} />
      </div>
      <div
        className={`bg-slate-200 w-60 sm:flex ${
          isSidebarVisible ? "block" : "hidden"
        } sm:flex sm:block`}
      >
        <Sidebar />
      </div>

      <div className="m-1">
        <div className="bg-sky-200">
          <Navbar />
        </div>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
