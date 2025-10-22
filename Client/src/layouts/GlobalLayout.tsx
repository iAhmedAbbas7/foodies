// <== IMPORTS ==>
import { Outlet } from "react-router-dom";
import { type ReactElement } from "react";
import NetworkStatusWatcher from "../global/NetworkStatusWatcher";

// <== GLOBAL LAYOUT COMPONENT ==>
const GlobalLayout = (): ReactElement => {
  return (
    // MAIN GLOBAL LAYOUT WRAPPER
    <>
      {/* ROUTE OUTLET - RENDERS CURRENT ROUTE COMPONENT */}
      <Outlet />
      {/* GLOBAL NETWORK STATUS WATCHER - WORKS ON ALL ROUTES AND IS ALWAYS PRESENT */}
      <NetworkStatusWatcher />
    </>
  );
};

export default GlobalLayout;
