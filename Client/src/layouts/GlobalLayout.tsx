// <== IMPORTS ==>
import { type ReactElement } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NetworkStatusWatcher from "../global/NetworkStatusWatcher";

// <== GLOBAL LAYOUT COMPONENT ==>
const GlobalLayout = (): ReactElement => {
  return (
    // MAIN GLOBAL LAYOUT WRAPPER
    <>
      {/* NAVBAR - AVAILABLE ON ALL ROUTES */}
      <Navbar />
      {/* ROUTE OUTLET - RENDERS CURRENT ROUTE COMPONENT */}
      <div className="min-h-screen pb-20 md:pb-16">
        <Outlet />
      </div>
      {/* FOOTER - AVAILABLE ON ALL ROUTES, VISIBLE ON SMALL DEVICES */}
      <Footer />
      {/* GLOBAL NETWORK STATUS WATCHER - WORKS ON ALL ROUTES AND IS ALWAYS PRESENT */}
      <NetworkStatusWatcher />
    </>
  );
};

export default GlobalLayout;
