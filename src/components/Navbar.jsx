import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserCircle,
  FaChartBar,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const navItems = [
  { icon: MdDashboard, label: "DASHBOARD", path: "/desktaff" },
  { icon: FaUserCircle, label: "EMPLOYEES", path: "/employees" },
  { icon: FaChartBar, label: "PLANTILLA POSITION", path: "/plantilla-position" },
  { icon: FaUsers, label: "DESIGNATION", path: "/designations" },
  { icon: FaTrophy, label: "NOTIFICATIONS", path: "/notifications" },
];

const Navbar = ({ isExpanded }) => {
  const [selectedMenu, setSelectedMenu] = useState("DASHBOARD");

  return (
    <div
      className={`h-screen bg-blue-800 text-white flex flex-col py-4 space-y-2 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <div className="profile-icon flex items-center justify-center mb-8">
        <FaUserCircle size={40} />
      </div>
      {navItems.map(({ icon: Icon, label, path }, index) => (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) =>
            `flex items-center px-4 py-4 hover:bg-blue-700 cursor-pointer ${
              isActive ? "bg-blue-700" : ""
            }`
          }
          onClick={() => setSelectedMenu(label)}
        >
          <Icon size={24} />
          {isExpanded && (
            <span className="ml-4 whitespace-nowrap">{label}</span>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
