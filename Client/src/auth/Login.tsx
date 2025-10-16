// <== IMPORTS ==>
import { motion } from "framer-motion";
import useTitle from "../hooks/useTitle";
import LOGO from "../assets/images/LOGO.png";
import ErrorModal from "../shared/ErrorModal";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Info, Loader2, Lock, LogIn, Mail, User2, X } from "lucide-react";
import { userLoginSchema, type LoginInputState } from "../schema/userSchema";

// <== LOGIN COMPONENT ==>
const Login = () => {
  // USE TITLE HOOK
  useTitle("Foodies - Login");
  // NAVIGATION
  const navigate = useNavigate();
  // TEMPORARY LOGIN LOADER VARIABLE
  const loading: boolean = false;
  // FORM VALIDATION ERROR STATE
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginInputState, string>>
  >({});
  // ERROR MODAL STATE
  const [isErrorModalOpen, setIsErrorModalOpen] = useState<boolean>(false);
  const [modalErrors, setModalErrors] = useState<
    { key: string; message: string }[]
  >([]);
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
    // GETTING FIELD SPECIFIC ERROR NAME
    const fieldName = name as keyof LoginInputState;
    // CLEAR FIELD-SPECIFIC ERROR ON CHANGE
    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };
  // LOGIN HANDLER
  const loginHandler = async (e: FormEvent) => {
    // PREVENTING DEFAULT
    e.preventDefault();
    // FORM VALIDATION HANDLING
    const result = userLoginSchema.safeParse(input);
    // IF VALIDATION NOT SUCCESSFUL
    if (!result.success) {
      // FLATTENING ERRORS
      const flattened = result.error.flatten((issue) => issue.message);
      // GETTING FIELD ERRORS
      const fieldErrors: Partial<Record<keyof LoginInputState, string>> = {
        email: flattened.fieldErrors.email?.[0],
        password: flattened.fieldErrors.password?.[0],
      };
      // SETTING FIELD ERRORS
      setErrors(fieldErrors);
      // AGGREGATING ERRORS FOR MODAL DISPLAY (WITH FIELD KEYS)
      const aggregated = Object.entries(fieldErrors)
        .filter(([, msg]) => Boolean(msg && msg.trim()))
        .map(([key, message]) => ({ key, message: message as string }));
      // SENDING ERRORS TO THE MODAL
      setModalErrors(aggregated);
      // OPENING THE MODAL
      setIsErrorModalOpen(true);
      return;
    }
  };
  // CONTAINER ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  } as const;
  // CONTAINER ITEM ANIMATION VARIANTS
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as const;
  return (
    // LOGIN MAIN WRAPPER
    <>
      {/* LOGIN CONTENT WRAPPER */}
      <section className="w-screen h-screen flex items-center justify-center overflow-hidden">
        {/* MAIN CONTENT WRAPPER */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center flex-col bg-white md:max-w-[50%] lg:max-w-[40%] w-[90%] rounded-xl px-8 py-4 min-h-[80vh] shadow-2xl overflow-hidden"
        >
          {/* BRANDING SECTION */}
          <motion.div
            variants={itemVariants}
            className="w-full flex items-center justify-center flex-col"
          >
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
          </motion.div>
          {/* FORM SECTION */}
          <motion.form
            variants={itemVariants}
            onSubmit={loginHandler}
            className="w-full pt-6 pb-0 flex items-center justify-center flex-col gap-4"
          >
            {/* EMAIL */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center w-full"
            >
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
            </motion.div>
            {/* PASSWORD */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center w-full"
            >
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
            </motion.div>
            {/* FORGOT PASSWORD */}
            <motion.div
              variants={itemVariants}
              className="w-full flex items-center justify-start gap-1"
              onClick={() => navigate("/forgot-password")}
            >
              <Info className="text-lightPurple" size={18} />
              <h5 className="w-full text-gray-500 text-xs hover:underline underline-offset-2 cursor-pointer">
                Forgot Password ?
              </h5>
            </motion.div>
            {/* LOGIN BUTTON */}
            <motion.div variants={itemVariants} className="w-full">
              <Button
                disabled={loading}
                type="submit"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" /> : <LogIn />}
                {loading ? "Please Wait" : "Login"}
              </Button>
            </motion.div>
            {/* SEPARATOR */}
            <motion.div variants={itemVariants} className="w-full">
              <Separator />
            </motion.div>
            {/* SIGNUP OPTION */}
            <motion.div
              variants={itemVariants}
              className="w-full flex items-center justify-center"
            >
              <h5 className="w-full text-xs text-gray-500 text-center">
                Don't have an Account yet ?
              </h5>
            </motion.div>
            {/* SIGNUP BUTTON */}
            <motion.div variants={itemVariants} className="w-full">
              <Button
                onClick={() => navigate("/signup")}
                type="button"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                <User2 />
                SignUp
              </Button>
            </motion.div>
          </motion.form>
          {/* ERROR MODAL */}
          <ErrorModal
            open={isErrorModalOpen}
            onOpenChange={setIsErrorModalOpen}
            errors={modalErrors}
            title="Login Validation Failed!"
            description="Please review your credentials carefully!"
          />
        </motion.section>
      </section>
    </>
  );
};

export default Login;
