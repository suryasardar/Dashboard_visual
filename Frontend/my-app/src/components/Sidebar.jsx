import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col mx-3 ">
          <label for="cars" className="ml-8">DASHBOARD</label>
          <ul className=" m-3 p-3 hover:bg-light-white rounded-md mt-2">
              <li className="p-9">SECTOR</li>
              <li className="p-9">TOPICS</li>
              <li className="p-9">REGION</li> 
              <li className="p-9">PESTc</li>
              <li className="p-9">SOUsdsdRCE</li>
              <li className="p-9">SWOT</li>
              <li className="p-9">COUNTRY</li>
              <li className="p-9">CITY</li>

          </ul>
    </div>
  );
}

export default Sidebar;
