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
  const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    if (window.innerWidth >= 1024) {
      setIsNavbarExpanded(!isNavbarExpanded);
    } else {
      setIsMobileNavbarVisible(!isMobileNavbarVisible);
    }
  };

  return (
    <div className="flex h-screen">
      <Navbar 
        isExpanded={isNavbarExpanded} 
        isMobileVisible={isMobileNavbarVisible} 
        toggleNavbar={toggleNavbar}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleNavbar={toggleNavbar} />
        <main className="flex-1 overflow-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deskstaff" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/plantilla-position" element={<PlantillaPosition />} />
            <Route path="/designations" element={<Designations />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;