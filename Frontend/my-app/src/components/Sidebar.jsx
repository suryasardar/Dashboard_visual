import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link className="p-3 hover:bg-gray-200" to={'/sector'}>SECTOR</Link>
          <Link className="p-3 hover:bg-gray-200" to={'/topic'}>TOPICS</Link>
          <Link className="p-3 hover:bg-gray-200" to={'/region'}>REGION</Link>
          <Link className="p-3 hover:bg-gray-200" to={'/pest'}>PEST</Link>
          <Link className="p-3 hover:bg-gray-200" to={'/source'}>SOURCE</Link>
          <Link className="p-3 hover:bg-gray-200" to={'/swot'}>SWOT</Link>
          <Link className="p-3 hover:bg-gray-200" to={'/country'} >COUNTRY</Link>
          <Link className="p-3 hover:bg-gray-200" to={'/city'}>CITY</Link>
        </ul>
      )}
    </div>
    </div>
  );
}

export default Sidebar;
