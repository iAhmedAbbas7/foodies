// <== IMPORTS ==>
import { motion } from "framer-motion";
import useTitle from "../hooks/useTitle";
import LOGO from "../assets/images/LOGO.png";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import { CheckCircle, Loader2, Mail, Trash2 } from "lucide-react";

// <== VERIFY EMAIL COMPONENT ==>
const VerifyEmail = () => {
  // USE TITLE HOOK
  useTitle("Foodies - Email Verification");
  // TEMPORARY VERIFY EMAIL LOADER VARIABLE
  const loading: boolean = false;
  // OTP INPUT REF
  const otpInputRef = useRef<(HTMLInputElement | null)[]>([]);
  // OTP STATE MANAGEMENT
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  // CHECK IF ALL OTP DIGITS ARE COMPLETED
  const isOtpComplete = otp.every((digit) => digit !== "");
  // CHECK IF ANY OTP DIGIT IS ENTERED
  const hasAnyOtpDigit = otp.some((digit) => digit !== "");
  // HANDLE FORM SUBMISSION
  const handleSubmit = (e: React.FormEvent) => {
    // PREVENTING THE DEFAULT
    e.preventDefault();
    // COMBINE ALL OTP DIGITS INTO ONE NUMBER
    const finalOtp = otp.join("");
    // LOG THE FINAL OTP
    console.log("Final OTP:", finalOtp);
  };
  // HANDLE CLEAR OTP
  const handleClearOtp = () => {
    // CLEAR ALL OTP DIGITS
    setOtp(["", "", "", "", "", ""]);
    // FOCUS FIRST INPUT
    otpInputRef.current[0]?.focus();
  };
  // AUTO-FOCUS FIRST INPUT ON COMPONENT MOUNT
  useEffect(() => {
    otpInputRef.current[0]?.focus();
  }, []);
  // HANDLE OTP INPUT CHANGE
  const handleOtpChange = (value: string, index: number) => {
    // ONLY ALLOWING NUMBERS TO BE ADDED
    if (value && !/^[0-9]$/.test(value)) {
      return;
    }
    // GETTING NEW OTP
    const newOtp = [...otp];
    // ASSIGNING THE VALUE
    newOtp[index] = value;
    // SETTING THE NEW OTP
    setOtp(newOtp);
    // AUTO-FOCUSING THE NEXT INPUT
    if (value && index < 5) {
      otpInputRef.current[index + 1]?.focus();
    }
  };
  // HANDLE KEY DOWN (NON-NUMERIC INPUT AND BACKSPACE HANDLING)
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    // BACKSPACE INPUT REMOVAL HANDLING
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRef.current[index - 1]?.focus();
    }
    // PREVENTING THE NON-NUMERIC ENTRY IN THE OTP INPUT
    if (
      !/^[0-9]$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowRight"
    ) {
      e.preventDefault();
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
    // VERIFY EMAIL MAIN WRAPPER
    <>
      {/* VERIFY EMAIL CONTENT WRAPPER */}
      <section className="w-screen h-screen flex items-center justify-center overflow-hidden">
        {/* MAIN CONTENT WRAPPER */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center flex-col bg-white md:max-w-[50%] lg:max-w-[40%] w-[90%] rounded-xl px-8 py-4 min-h-[65vh] shadow-2xl overflow-hidden"
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
            <Mail className="text-purple" size={30} />
            <h2 className="text-purple font-semibold text-[1.25rem]">
              Verify Email
            </h2>
          </motion.div>
          {/* TEXT LINE */}
          <motion.div
            variants={itemVariants}
            className="w-full flex items-center justify-center gap-2"
          >
            <p className="text-center text-xs text-gray-500 pt-2">
              Enter the 6-Digit Code to Verify your Email Address
            </p>
          </motion.div>
          {/* FORM SECTION */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full pt-4 flex flex-col gap-4"
          >
            {/* OTP INPUT */}
            <motion.div className="flex items-center justify-center gap-3 w-full">
              {otp.map((letter: string, idx: number) => (
                <input
                  key={idx}
                  value={letter}
                  type="text"
                  ref={(element) => {
                    otpInputRef.current[idx] = element;
                  }}
                  maxLength={1}
                  onChange={(e) => handleOtpChange(e.target.value, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-12 h-12 rounded-md border-2 outline-none text-center text-[1.25rem] text-purple ${
                    letter ? "border-purple" : "border-gray-200"
                  }`}
                />
              ))}
            </motion.div>
            {/* CLEAR OTP BUTTON */}
            <motion.div variants={itemVariants} className="w-full">
              <Button
                onClick={handleClearOtp}
                disabled={!hasAnyOtpDigit}
                type="button"
                variant="outline"
                className="w-full border-gray-200 text-blackShade bg-gray-200 hover:bg-purple hover:text-white focus-visible:ring-0 outline-0 cursor-pointer"
              >
                <Trash2 size={18} />
                Clear OTP
              </Button>
            </motion.div>
            {/* SUBMIT BUTTON */}
            <motion.div variants={itemVariants} className="w-full">
              <Button
                disabled={loading || !isOtpComplete}
                type="submit"
                className="w-full bg-lightPurple hover:bg-purple focus-visible:ring-0 outline-0 border-0 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <CheckCircle />
                )}
                {loading ? "Please Wait" : "Start Email Verification"}
              </Button>
            </motion.div>
          </motion.form>
        </motion.section>
      </section>
    </>
  );
};

export default VerifyEmail;
