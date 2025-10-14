// <== IMPORTS ==>
import useTitle from "@/hooks/useTitle";
import LOGO from "../assets/images/LOGO.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import type { LoginInputState } from "@/schema/userSchema";
import { Loader2, Lock, LogIn, Mail, User2 } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

const Login = () => {
  // USE TITLE HOOK
  useTitle("Foodies - Login");
  // NAVIGATION
  const navigate = useNavigate();
  // TEMPORARY LOGIN LOADER VARIABLE
  const loading: boolean = false;
  // LOGIN INPUT STATE
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  // CHANGE EVENT HANDLER
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // GETTING NAME & VALUE FROM EVENT TARGET
    const { name, value } = e.target;
    // SETTING INOUT VALUE FOR THE FIELDS
    setInput({ ...input, [name]: value });
  };
  // LOGIN HANDLER
  const loginHandler = async (e: FormEvent) => {
    // PREVENTING DEFAULT
    e.preventDefault();
  };
  return (
    // LOGIN MAIN WRAPPER
    <>
      {/* LOGIN CONTENT WRAPPER */}
      <section className="w-screen h-screen flex items-center justify-center">
        {/* MAIN CONTENT WRAPPER */}
        <section className="flex items-center justify-center flex-col bg-white md:max-w-[50%] lg:max-w-[40%] w-[90%] rounded-xl px-8 py-4 min-h-[80vh] shadow-2xl">
          {/* BRANDING SECTION */}
          <div className="w-full flex items-center justify-center flex-col">
            <img
              src={LOGO}
              className="h-[80px] w-[80px]"
              alt="Foodies Logo"
              loading="lazy"
            />
            <h1 className="font-semibold text-[1.5rem] text-purple">Foodies</h1>
            <p className="text-gray-500 text-xs">
              Enter your details to continue to Foodies!
            </p>
          </div>
          {/* FORM SECTION */}
          <form className="w-full pt-6 pb-0 flex items-center justify-center flex-col gap-4">
            {/* EMAIL */}
            <div className="relative flex items-center w-full">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={input.email}
                onChange={changeEventHandler}
                className="outline-none border-2 border-gray-200 p-[0.75rem] w-full rounded-md pl-8 text-gray-500 text-xs placeholder:text-xs placeholder:text-gray-500"
              />
              {/* MAIL ICON */}
              <Mail className="absolute text-lightPurple ml-2" size={18} />
            </div>
            {/* PASSWORD */}
            <div className="relative flex items-center w-full">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={input.password}
                onChange={changeEventHandler}
                className="outline-none border-2 border-gray-200 p-[0.75rem] w-full rounded-md pl-8 text-gray-500 text-xs placeholder:text-xs placeholder:text-gray-500"
              />
              {/* LOCK ICON */}
              <Lock className="absolute text-lightPurple ml-2" size={18} />
            </div>
            {/* LOGIN BUTTON */}
            <div className="w-full">
              <Button
                disabled={loading}
                onClick={loginHandler}
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" /> : <LogIn />}
                {loading ? "Please Wait" : "Login"}
              </Button>
            </div>
            {/* SEPARATOR */}
            <Separator />
            {/* SIGN-UP OPTION */}
            <div className="w-full flex items-center justify-center">
              <h5 className="w-full text-xs text-gray-500 text-center">
                Don't have an Account yet ?
              </h5>
            </div>
            {/* SIGN-UP BUTTON */}
            <div className="w-full">
              <Button
                onClick={() => navigate("/signup")}
                type="button"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                <User2 />
                SignUp
              </Button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
