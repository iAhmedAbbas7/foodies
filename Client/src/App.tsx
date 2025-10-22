// <== IMPORTS ==>
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import VerifyEmail from "./auth/VerifyEmail";
import LandingPage from "./pages/LandingPage";
import ResetPassword from "./auth/ResetPassword";
import GlobalLayout from "./layouts/GlobalLayout";
import ForgotPassword from "./auth/ForgotPassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// <== APP ROUTER ==>
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "verify-Email",
        element: <VerifyEmail />,
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
