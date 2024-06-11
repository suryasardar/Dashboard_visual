import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";

function Sidebar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className="flex flex-col relative ">
          <div className=" flex justify-between border-solid border-yellow-400 px-5 py-2 rounded cursor-pointer font-bold w-[200px]"
          onClick={toggleDropdown} >
              DASHBOARD
              <FaArrowDown />
          </div>
          <div>
              
           {isDropdownVisible && (
               <ul className="m-3 pr-8 rounded-md mt-2 cursor-pointer absolute bg-white shadow-lg">
          <li className="p-3 hover:bg-gray-200">SECTOR</li>
          <li className="p-3 hover:bg-gray-200">TOPICS</li>
          <li className="p-3 hover:bg-gray-200">REGION</li>
          <li className="p-3 hover:bg-gray-200">PESTc</li>
          <li className="p-3 hover:bg-gray-200">SOURCE</li>
          <li className="p-3 hover:bg-gray-200">SWOT</li>
          <li className="p-3 hover:bg-gray-200">COUNTRY</li>
          <li className="p-3 hover:bg-gray-200">CITY</li>
        </ul>
      )}
    </div>
    </div>
  );
}

export default Sidebar;
