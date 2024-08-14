import React from 'react';
import { FaBell } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ toggleNavbar }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <button onClick={toggleNavbar}>
        <GiHamburgerMenu size={24}/>
      </button>
      <div className="relative hover:cursor-pointer">
        <FaBell size={24} />
        <div className="absolute top-0 right-0 h-4 w-4 bg-red-600 rounded-full text-xs flex items-center justify-center">1</div>
      </div>
    </div>
  ); 
};

export default Header;