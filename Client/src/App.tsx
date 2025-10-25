// <== IMPORTS ==>
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import VerifyEmail from "./auth/VerifyEmail";
import LandingPage from "./pages/LandingPage";
import ResetPassword from "./auth/ResetPassword";
import GlobalLayout from "./layouts/GlobalLayout";
import ForgotPassword from "./auth/ForgotPassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

// <== APP ROUTER ==>
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      // LANDING PAGE ROUTE
      {
        index: true,
        element: <LandingPage />,
      },
      // LOGIN PAGE ROUTE
      {
        path: "login",
        element: <Login />,
      },
      // SIGNUP PAGE ROUTE
      {
        path: "signup",
        element: <SignUp />,
      },
      // FORGOT PASSWORD PAGE ROUTE
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      // RESET PASSWORD PAGE ROUTE
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      // VERIFY EMAIL PAGE ROUTE
      {
        path: "verify-Email",
        element: <VerifyEmail />,
      },
      // HOME PAGE ROUTE
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default App;
