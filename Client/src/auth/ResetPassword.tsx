// <== IMPORTS ==>
import { motion } from "framer-motion";
import useTitle from "@/hooks/useTitle";
import { useEffect, useState } from "react";
import LOGO from "../assets/images/LOGO.png";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Eye, EyeOff, Loader2, Lock, X } from "lucide-react";

// <== RESET PASSWORD COMPONENT ==>
const ResetPassword = () => {
  // USE TITLE HOOK
  useTitle("Foodies - Reset Password");
  // TEMPORARY RESET PASSWORD LOADER VARIABLE
  const loading: boolean = false;
  // MATCH PASSWORD STATE
  const [match, setMatch] = useState(false);
  // HAS LOWERCASE LETTER STATE
  const [hasLower, setHasLower] = useState<boolean>(false);
  // HAS UPPERCASE LETTER STATE
  const [hasUpper, setHasUpper] = useState<boolean>(false);
  // HAS DIGIT STATE
  const [hasDigit, setHasDigit] = useState<boolean>(false);
  // HAS SPECIAL CHARACTER STATE
  const [hasSpecial, setHasSpecial] = useState<boolean>(false);
  // HAS MINIMUM LENGTH STATE
  const [hasMinLength, setHasMinLength] = useState<boolean>(false);
  // PASSWORD STATE MANAGEMENT
  const [newPassword, setNewPassword] = useState<string>("");
  // VIEW & HIDE PASSWORD STATE
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // CONFIRM PASSWORD STATE MANAGEMENT
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  // CHECKING FOR PASSWORD MATCH ON EACH CHANGE
  useEffect(() => {
    setMatch(newPassword !== "" && newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);
  // CHECKING FOR EACH PASSWORD CONDITION WHEN NEW PASSWORD CHANGES
  useEffect(() => {
    // CHECKING FOR MINIMUM LENGTH
    setHasMinLength(newPassword.length >= 8);
    // CHECKING FOR LOWERCASE LETTER
    setHasLower(/[a-z]/.test(newPassword));
    // CHECKING FOR UPPERCASE LETTER
    setHasUpper(/[A-Z]/.test(newPassword));
    // CHECKING FOR DIGIT
    setHasDigit(/[0-9]/.test(newPassword));
    // CHECKING FOR SPECIAL CHARACTER
    setHasSpecial(/[^A-Za-z0-9]/.test(newPassword));
  }, [
    newPassword,
    setHasMinLength,
    setHasLower,
    setHasUpper,
    setHasDigit,
    setHasSpecial,
  ]);
  // VALIDATION CHECK
  const allValid =
    hasMinLength && hasLower && hasUpper && hasDigit && hasSpecial && match;
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
  // CONDITION ITEMS
  const ConditionItem = ({
    label,
    passed,
  }: {
    label: string;
    passed: boolean;
  }) => (
    <motion.div
      className={`w-full flex items-center gap-[0.5rem] p-1 rounded ${
        passed ? "bg-purple-100 text-purple" : "bg-gray-100 text-gray-500"
      }`}
    >
      {passed ? <CheckCircle2 size={16} /> : <Lock size={16} />}
      <span className="text-xs">{label}</span>
    </motion.div>
  );
  return (
    // RESET PASSWORD MAIN WRAPPER
    <>
      {/* RESET PASSWORD CONTENT WRAPPER */}
      <section className="w-screen h-screen flex items-center justify-center overflow-hidden">
        {/* MAIN CONTENT WRAPPER */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center flex-col md:max-w-[50%] lg:max-w-[40%] w-[90%]  min-h-[70vh] shadow-2xl overflow-hidden bg-white rounded-xl px-8 py-4"
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
              Reset Password
            </h2>
          </motion.div>
          {/* FORM SECTION */}
          <motion.form
            variants={itemVariants}
            className="w-full pt-6 pb-0 flex items-center justify-center flex-col gap-4"
          >
            {/* NEW PASSWORD */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center w-full"
            >
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="outline-none border-2 border-gray-200 p-[0.75rem] w-full rounded-md pl-8 text-gray-500 text-xs placeholder:text-xs placeholder:text-gray-500"
              />
              {/* LOCK ICON */}
              <Lock className="absolute text-lightPurple ml-2" size={18} />
              {/* CLEAR BUTTON */}
              {newPassword && newPassword.trim() && (
                <div
                  title="Clear"
                  onClick={() => setNewPassword("")}
                  className="absolute right-2 p-[0.1rem] rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                >
                  <X size={18} className="text-purple" />
                </div>
              )}
              {/* SHOW PASSWORD */}
              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
                title={showPassword ? "Hide" : "Show"}
                className={`flex items-center absolute inset-y-0 ${
                  newPassword !== "" ? "right-7" : "right-0"
                } pr-[0.5rem] text-blackShade cursor-pointer`}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </motion.div>
            {/* CONFIRM PASSWORD */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center w-full"
            >
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="outline-none border-2 border-gray-200 p-[0.75rem] w-full rounded-md pl-8 text-gray-500 text-xs placeholder:text-xs placeholder:text-gray-500"
              />
              {/* LOCK ICON */}
              <Lock className="absolute text-lightPurple ml-2" size={18} />
              {/* CLEAR BUTTON */}
              {confirmPassword && confirmPassword.trim() && (
                <div
                  title="Clear"
                  onClick={() => setConfirmPassword("")}
                  className="absolute right-2 p-[0.1rem] rounded-full flex items-center justify-center bg-gray-200 cursor-pointer"
                >
                  <X size={18} className="text-purple" />
                </div>
              )}
              {/* SHOW PASSWORD */}
              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
                title={showPassword ? "Hide" : "Show"}
                className={`flex items-center absolute inset-y-0 ${
                  confirmPassword !== "" ? "right-7" : "right-0"
                } pr-[0.5rem] text-blackShade cursor-pointer`}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </motion.div>
            <ConditionItem label="Minimum 8 Characters" passed={hasMinLength} />
            <ConditionItem
              label="At Least One Lowercase Letter"
              passed={hasLower}
            />
            <ConditionItem
              label="At Least One Uppercase Letter"
              passed={hasUpper}
            />
            <ConditionItem label="At Least One Digit" passed={hasDigit} />
            <ConditionItem
              label="At Least One Special Character"
              passed={hasSpecial}
            />
            {/* SUBMIT BUTTON */}
            <motion.div variants={itemVariants} className="w-full">
              <Button
                disabled={loading || !allValid}
                type="submit"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Lock />}
                {loading ? "Please Wait" : "Reset Password"}
              </Button>
            </motion.div>
          </motion.form>
        </motion.section>
      </section>
    </>
  );
};

export default ResetPassword;
