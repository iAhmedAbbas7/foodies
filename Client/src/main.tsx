// <== IMPORTS ==>
import "./index.css";
import React from "react";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";

// <== TYPE DECLARATION FOR WINDOW OBJECT ==>
declare global {
  interface Window {
    __APP__HIDE__SPLASH?: () => void;
  }
}

// <== SELECTING THE ROOT ELEMENT ==>
const rootElement = document.getElementById("root") as HTMLDivElement;

// <== CREATING THE ROOT ELEMENT ==>
const root = createRoot(rootElement);

// <== HIDING SCREEN SPLASH ==>
const hideSplashScreen = () => {
  try {
    // SELECTING THE SPLASH ELEMENT
    const splash = document.getElementById("splash");
    // IF NO SPLASH ELEMENT EXISTS, THEN RETURNING
    if (!splash) return;
    // ADDING THE HIDDEN CLASS
    splash.classList.add("splash-hidden");
    // REMOVING THE ELEMENT AFTER TRANSITION
    setTimeout(() => {
      // IF THE PARENT NODE EXISTS, THEN REMOVING THE CHILD ELEMENT
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }, 450);
  } catch (error) {
    // LOGGING THE ERROR MESSAGE
    console.log("Error Hiding the Splash Screen", error);
  }
};

// <== MAKING THE FUNCTION AVAILABLE GLOBALLY ==>
window.__APP__HIDE__SPLASH = hideSplashScreen;

// <== RENDERING THE APP ==>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// <== HIDE SPLASH SCREEN WHEN REACT MOUNTS ==>
hideSplashScreen();
