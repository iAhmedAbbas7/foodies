// <== IMPORTS ==>
import useTitle from "@/hooks/useTitle";
import LOGO from "../assets/images/LOGO.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { userSignUpSchema, type SignUpInputState } from "@/schema/userSchema";
import {
  Loader2,
  Lock,
  LogIn,
  Mail,
  Phone,
  User,
  User2,
  X,
} from "lucide-react";

const SignUp = () => {
  // USE TITLE HOOK
  useTitle("Foodies - SignUp");
  // NAVIGATION
  const navigate = useNavigate();
  // TEMPORARY SIGN-UP LOADER VARIABLE
  const loading: boolean = false;
  // FORM VALIDATION ERROR STATE
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignUpInputState, string>>
  >({});
  // SIGN-UP INPUT STATE
  const [input, setInput] = useState<SignUpInputState>({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });
  // CHANGE EVENT HANDLER
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // GETTING NAME & VALUE FROM EVENT TARGET
    const { name, value } = e.target;
    // SETTING INOUT VALUE FOR THE FIELDS
    setInput({ ...input, [name]: value });
    // CLEAR FIELD-SPECIFIC ERROR ON CHANGE
    const fieldName = name as keyof SignUpInputState;
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };
  // LOGIN HANDLER
  const signUpHandler = async (e: FormEvent) => {
    // PREVENTING DEFAULT
    e.preventDefault();
    // FORM VALIDATION HANDLING
    const result = userSignUpSchema.safeParse(input);
    // IF VALIDATION NOT SUCCESSFUL
    if (!result.success) {
      // FLATTENING ERRORS
      const flattened = result.error.flatten((issue) => issue.message);
      // GETTING FIELD ERRORS
      const fieldErrors: Partial<Record<keyof SignUpInputState, string>> = {
        fullName: flattened.fieldErrors.fullName?.[0],
        email: flattened.fieldErrors.email?.[0],
        contact: flattened.fieldErrors.contact?.[0],
        password: flattened.fieldErrors.password?.[0],
      };
      // SETTING FIELD ERRORS
      setErrors(fieldErrors);
      return;
    }
    console.log(input);
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
              Register yourself to enjoy Foodies!
            </p>
          </div>
          {/* FORM SECTION */}
          <form
            onSubmit={signUpHandler}
            className="w-full pt-6 pb-0 flex items-center justify-center flex-col gap-4"
          >
            {/* FULLNAME */}
            <div className="relative flex items-center w-full">
              <input
                id="fullName"
                name="fullName"
                type="text"
                spellCheck={false}
                placeholder="FullName"
                value={input.fullName}
                onChange={changeEventHandler}
                className="outline-none border-2 border-gray-200 py-[0.75rem] pr-8 w-full rounded-md pl-8 text-gray-500 text-xs placeholder:text-xs placeholder:text-gray-500"
              />
              {/* MAIL ICON */}
              <User className="absolute text-lightPurple ml-2" size={18} />
              {/* CLEAR BUTTON */}
              {input.fullName && input.fullName.trim() && (
                <div
                  title="Clear"
                  onClick={() => setInput({ ...input, fullName: "" })}
                  className="absolute right-2 p-[0.1rem] rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                >
                  <X size={18} className="text-purple" />
                </div>
              )}
            </div>
            {/* FULLNAME RELATED ERRORS */}
            {errors.fullName && (
              <p className="text-purple text-xs mt-1 font-semibold w-full">
                *{errors.fullName}
              </p>
            )}
            {/* EMAIL */}
            <div className="relative flex items-center w-full">
              <input
                id="email"
                name="email"
                type="email"
                spellCheck={false}
                placeholder="Email"
                value={input.email}
                onChange={changeEventHandler}
                className="outline-none border-2 border-gray-200 p-[0.75rem] w-full rounded-md pl-8 text-gray-500 text-xs placeholder:text-xs placeholder:text-gray-500"
              />
              {/* MAIL ICON */}
              <Mail className="absolute text-lightPurple ml-2" size={18} />
              {/* CLEAR BUTTON */}
              {input.email && input.email.trim() && (
                <div
                  title="Clear"
                  onClick={() => setInput({ ...input, email: "" })}
                  className="absolute right-2 p-[0.1rem] rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                >
                  <X size={18} className="text-purple" />
                </div>
              )}
            </div>
            {/* EMAIL RELATED ERRORS */}
            {errors.email && (
              <p className="text-purple text-xs mt-1">{errors.email}</p>
            )}
            {/* CONTACT */}
            <div className="relative flex items-center w-full">
              <input
                id="contact"
                name="contact"
                type="tel"
                placeholder="Contact"
                value={input.contact}
                onChange={changeEventHandler}
                className="outline-none border-2 border-gray-200 p-[0.75rem] w-full rounded-md pl-8 text-gray-500 text-xs placeholder:text-xs placeholder:text-gray-500"
              />
              {/* MAIL ICON */}
              <Phone className="absolute text-lightPurple ml-2" size={18} />
              {/* CLEAR BUTTON */}
              {input.contact && input.contact.trim() && (
                <div
                  title="Clear"
                  onClick={() => setInput({ ...input, contact: "" })}
                  className="absolute right-2 p-[0.1rem] rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                >
                  <X size={18} className="text-purple" />
                </div>
              )}
            </div>
            {/* CONTACT RELATED ERRORS */}
            {errors.contact && (
              <p className="text-purple text-xs mt-1">{errors.contact}</p>
            )}
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
              {/* CLEAR BUTTON */}
              {input.password && input.password.trim() && (
                <div
                  title="Clear"
                  onClick={() => setInput({ ...input, password: "" })}
                  className="absolute right-2 p-[0.1rem] rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                >
                  <X size={18} className="text-purple" />
                </div>
              )}
            </div>
            {/* PASSWORD RELATED ERRORS */}
            {errors.password && (
              <p className="text-purple text-xs mt-1">{errors.password}</p>
            )}
            {/* SIGN-UP BUTTON */}
            <div className="w-full">
              <Button
                disabled={loading}
                type="submit"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" /> : <User2 />}
                {loading ? "Please Wait" : "SignUp"}
              </Button>
            </div>
            {/* SEPARATOR */}
            <Separator />
            {/* LOGIN OPTION */}
            <div className="w-full flex items-center justify-center">
              <h5 className="w-full text-xs text-gray-500 text-center">
                Already have an Account ?
              </h5>
            </div>
            {/* LOGIN BUTTON */}
            <div className="w-full">
              <Button
                onClick={() => navigate("/login")}
                type="button"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                <LogIn />
                Login
              </Button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default SignUp;
