// <== IMPORTS ==>
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AdminLogin from "./admin/AdminLogin";
import StoresPage from "./pages/StoresPage";
import VerifyEmail from "./auth/VerifyEmail";
import AccountPage from "./pages/AccountPage";
import ResetPassword from "./auth/ResetPassword";
import GlobalLayout from "./layouts/GlobalLayout";
import ForgotPassword from "./auth/ForgotPassword";
import TrackOrderPage from "./pages/TrackOrderPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// <== APP ROUTER ==>
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      // HOME PAGE ROUTE (ROOT)
      {
        index: true,
        element: <HomePage />,
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
      // ADMIN LOGIN PAGE ROUTE
      {
        path: "admin-login",
        element: <AdminLogin />,
      },
      // ACCOUNT PAGE ROUTE
      {
        path: "account",
        element: <AccountPage />,
      },
      // STORES PAGE ROUTE
      {
        path: "stores",
        element: <StoresPage />,
      },
      // MENU PAGE ROUTE
      {
        path: "menu",
        element: <MenuPage />,
      },
      // TRACK ORDER PAGE ROUTE
      {
        path: "track-order",
        element: <TrackOrderPage />,
      },
      // CART PAGE ROUTE
      {
        path: "cart",
        element: <CartPage />,
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
