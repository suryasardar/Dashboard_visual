import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className=" flex flex-row w-screen h-screen overflow-hidden ">
      <div className="bg-slate-200 w-60">
        <Sidebar />
      </div>
      <div className="m-1">
        <div className="bg-sky-200" >
          <Navbar />
        </div>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
