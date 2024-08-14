import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserCircle,
  FaChartBar,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { icon: MdDashboard, label: "DASHBOARD", path: "/deskstaff" },
  { icon: FaUserCircle, label: "EMPLOYEES", path: "/employees" },
  { icon: FaChartBar, label: "PLANTILLA POSITION", path: "/plantilla-position" },
  { icon: FaUsers, label: "DESIGNATION", path: "/designations" },
  { icon: FaTrophy, label: "NOTIFICATIONS", path: "/notifications" },
];

const Navbar = ({ isVisible, toggleNavbar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-blue-800 text-white transform ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
      <div className="flex justify-between items-center p-4 lg:hidden">
        <FaUserCircle size={40} />
        <button onClick={toggleNavbar} className="text-white">
          <IoMdClose size={24} />
        </button>
      </div>
      <div className="hidden lg:flex justify-center items-center p-4">
        <FaUserCircle size={40} />
      </div>
      <nav className="mt-8">
        {navItems.map(({ icon: Icon, label, path }, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `flex items-center px-4 py-4 hover:bg-blue-700 cursor-pointer ${
                isActive ? "bg-blue-700" : ""
              }`
            }
            onClick={() => {
              if (window.innerWidth < 1024) {
                toggleNavbar();
              }
            }}
          >
            <Icon size={24} />
            <span className="ml-4 whitespace-nowrap">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
