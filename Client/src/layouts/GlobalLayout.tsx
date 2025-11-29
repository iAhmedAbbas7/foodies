// <== IMPORTS ==>
import { type ReactElement } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import NetworkStatusWatcher from "../global/NetworkStatusWatcher";

// <== GLOBAL LAYOUT COMPONENT ==>
const GlobalLayout = (): ReactElement => {
  // CURRENT LOCATION
  const location = useLocation();
  // PAGES ROUTES (FROM PAGES FOLDER)
  const pagesRoutes = [
    "/",
    "/account",
    "/stores",
    "/menu",
    "/track-order",
    "/cart",
  ];
  // CHECK IF CURRENT ROUTE IS A PAGE ROUTE
  const isPageRoute = pagesRoutes.includes(location.pathname);

  return (
    // MAIN GLOBAL LAYOUT WRAPPER
    <>
      {/* NAVBAR - AVAILABLE ONLY ON PAGES ROUTES */}
      {isPageRoute && <Navbar />}
      {/* ROUTE OUTLET - RENDERS CURRENT ROUTE COMPONENT */}
      <div className={isPageRoute ? "min-h-screen pb-20 md:pb-16" : ""}>
        <Outlet />
      </div>
      {/* FOOTER - AVAILABLE ONLY ON PAGES ROUTES, VISIBLE ON SMALL DEVICES */}
      {isPageRoute && <Footer />}
      {/* GLOBAL NETWORK STATUS WATCHER - WORKS ON ALL ROUTES AND IS ALWAYS PRESENT */}
      <NetworkStatusWatcher />
    </>
  );
};

export default GlobalLayout;
