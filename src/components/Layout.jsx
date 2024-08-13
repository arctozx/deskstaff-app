import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import PlantillaPosition from "../pages/PlantillaPosition";
import Designations from "../pages/Designations";
import Notifications from "../pages/Notifications";

const Layout = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <div>
      <div className="flex h-screen">
        <div className={`transition-all duration-300 ${isNavbarExpanded ? "w-64" : "w-16"}`}>
          <Navbar isExpanded={isNavbarExpanded} />
        </div>

        <div className="flex-1 overflow-auto">
          <Header toggleNavbar={toggleNavbar} />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/plantilla-position" element={<PlantillaPosition />} />
              <Route path="/designations" element={<Designations />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
