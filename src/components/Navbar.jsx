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
  { icon: MdDashboard, label: "DASHBOARD", path: "/deskstaff-app" },
  { icon: FaUserCircle, label: "EMPLOYEES", path: "/employees" },
  { icon: FaChartBar, label: "PLANTILLA POSITION", path: "/plantilla-position" },
  { icon: FaUsers, label: "DESIGNATION", path: "/designations" },
  { icon: FaTrophy, label: "NOTIFICATIONS", path: "/notifications" },
];

const Navbar = ({ isExpanded, isMobileVisible, toggleNavbar }) => {
  return (
    <>
      {/* Mobile Navbar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-30 w-64 bg-blue-800 text-white transform ${
          isMobileVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <FaUserCircle size={40} />
          <button onClick={toggleNavbar} className="text-white">
            <IoMdClose size={24} />
          </button>
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
              onClick={toggleNavbar}
            >
              <Icon size={24} />
              <span className="ml-4 whitespace-nowrap">{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Desktop Navbar */}
      <div
        className={`hidden lg:block bg-blue-800 text-white h-screen transition-all duration-300 ${
          isExpanded ? "w-64" : "w-16"
        }`}
      >
        <div className="flex justify-center items-center p-4">
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
            >
              <Icon size={24} />
              {isExpanded && (
                <span className="ml-4 whitespace-nowrap">{label}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;