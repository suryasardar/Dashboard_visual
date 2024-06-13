import React from "react";
import { Link } from "react-router-dom";
 import Coutry from "./visual/Coutry";
function Dashboard() {
  return (
    <>
      <div className="text-2xl">
        {/* <Coutry/> */}
        surya
      </div>
      <Link to="/login" className="m-2">
        Login
      </Link>
      <Link to="/signup">signup</Link>
    </>
  );
}

export default Dashboard;
