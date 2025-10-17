// <== IMPORTS ==>
import { useState } from "react";
import { motion } from "framer-motion";
import useTitle from "@/hooks/useTitle";
import LOGO from "../assets/images/LOGO.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Info, Link, Loader2, Lock, LogIn, Mail, X } from "lucide-react";

// <== FORGOT PASSWORD COMPONENT ==>
const ForgotPassword = () => {
  // USE TITLE HOOK
  useTitle("Foodies - Forgot Password");
  // NAVIGATION
  const navigate = useNavigate();
  // TEMPORARY FORGOT PASSWORD LOADER VARIABLE
  const loading: boolean = false;
  // EMAIL STATE MANAGEMENT
  const [email, setEmail] = useState<string>("");
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
    // FORGOT PASSWORD MAIN WRAPPER
    <>
      {/* FORGOT PASSWORD CONTENT WRAPPER */}
      <section className="w-screen h-screen flex items-center justify-center overflow-hidden">
        {/* MAIN CONTENT WRAPPER */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center flex-col bg-white md:max-w-[50%] lg:max-w-[40%] w-[90%] rounded-xl px-8 py-4 min-h-[70vh] shadow-2xl overflow-hidden"
        >
          {/* BRANDING SECTION */}
          <motion.div
            title="Foodies"
            variants={itemVariants}
            className="w-full flex items-center justify-center"
          >
            <img
              src={LOGO}
              className="h-[80px] w-[80px]"
              alt="Foodies Logo"
              loading="lazy"
            />
          </motion.div>
          {/* HEADING SECTION */}
          <motion.div
            variants={itemVariants}
            className="w-full flex items-center justify-center gap-2 pt-2"
          >
            <Lock className="text-purple" size={30} />
            <h2 className="text-purple font-semibold text-[1.25rem]">
              Forgot Password
            </h2>
          </motion.div>
          {/* TEXT LINE */}
          <motion.div
            variants={itemVariants}
            className="w-full flex items-center justify-center gap-2"
          >
            <p className="text-center text-xs text-gray-500 pt-2">
              Enter your E-Mail Address to Reset your Password
            </p>
          </motion.div>
          {/* FORM SECTION */}
          <motion.form
            variants={itemVariants}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none border-2 border-gray-200 p-[0.75rem] w-full rounded-md pl-8 text-gray-500 text-xs placeholder:text-xs placeholder:text-gray-500"
              />
              {/* MAIL ICON */}
              <Mail className="absolute text-lightPurple ml-2" size={18} />
              {/* CLEAR BUTTON */}
              {email && email.trim() && (
                <div
                  title="Clear"
                  onClick={() => setEmail("")}
                  className="absolute right-2 p-[0.1rem] rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                >
                  <X size={18} className="text-purple" />
                </div>
              )}
            </motion.div>
            {/* EMAIL INFO */}
            <motion.div
              variants={itemVariants}
              className="w-full flex items-center gap-1"
            >
              <Info size={18} className="text-lightPurple" />
              <p className="text-xs text-gray-500">
                Enter the Email of your Foodies Account !
              </p>
            </motion.div>
            {/* SUBMIT BUTTON */}
            <motion.div variants={itemVariants} className="w-full">
              <Button
                disabled={loading}
                type="submit"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Link />}
                {loading ? "Please Wait" : "Send Reset Link"}
              </Button>
            </motion.div>
            {/* SEPARATOR */}
            <motion.div variants={itemVariants} className="w-full">
              <Separator />
            </motion.div>
            {/* LOGIN BUTTON */}
            <motion.div variants={itemVariants} className="w-full">
              <Button
                onClick={() => navigate("/login")}
                type="button"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                <LogIn />
                Login
              </Button>
            </motion.div>
          </motion.form>
        </motion.section>
      </section>
    </>
  );
};

export default ForgotPassword;
