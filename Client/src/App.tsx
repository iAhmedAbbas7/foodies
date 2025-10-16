// <== IMPORTS ==>
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import MainLayout from "./layout/MainLayout";
import ForgotPassword from "./auth/ForgotPassword";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// <== APP ROUTER ==>
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
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
