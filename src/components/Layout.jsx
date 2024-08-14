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
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header toggleNavbar={toggleNavbar} />
      <div className="flex flex-1 overflow-hidden">
        <Navbar isVisible={isNavbarVisible} toggleNavbar={toggleNavbar} />
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
