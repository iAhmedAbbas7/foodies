// <== IMPORTS ==>
import { motion } from "framer-motion";
import useTitle from "@/hooks/useTitle";
import { LogIn, User2 } from "lucide-react";
import LOGO from "../assets/images/LOGO.png";
import { useNavigate } from "react-router-dom";

// <== LANDING PAGE COMPONENT ==>
const LandingPage = () => {
  // USE TITTLE HOOK
  useTitle("Foodies - Welcome");
  // NAVIGATION HOOK
  const navigate = useNavigate();
  // CONTAINER ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  } as const;
  return (
    // LANDING PAGE MAIN WRAPPER
    <>
      {/* LANDING PAGE CONTENT WRAPPER */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-screen h-screen flex items-center justify-center bg-purple-gradient-fun relative overflow-hidden"
      >
        {/* CONTENT WRAPPER */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-[90%] min-h-[90%] flex items-center justify-center max-[1100px]:gap-6 max-[1100px]:flex-col bg-black/30 rounded-xl shadow-2xl p-8"
        >
          {/* LEFT SECTION - WELCOME CONTENT */}
          <motion.div
            variants={containerVariants}
            className="w-full min-[1100px]:w-[50%] flex flex-col items-center justify-center"
          >
            {/* LOGO */}
            <motion.img
              src={LOGO}
              alt="Foodies Logo"
              className="w-34 h-34 pb-4"
            />
            {/* WELCOME HEADLINE */}
            <motion.h1
              variants={containerVariants}
              className="text-[2.5rem] text-center max-[600px]:text-[2rem] font-bold text-white leading-tight"
            >
              Welcome to Foodies
            </motion.h1>
            {/* TAGLINE */}
            <motion.p
              variants={containerVariants}
              className="text-[1rem] text-center max-[600px]:text-[0.975rem] text-white/90 leading-relaxed"
            >
              Discover thousands of restaurants from around the globe. Browse
              authentic menus, explore & enjoy cuisines.
            </motion.p>
          </motion.div>
          {/* RIGHT SECTION - LOGIN/SIGNUP BUTTONS */}
          <motion.div
            variants={containerVariants}
            className="w-full min-[1100px]:w-[50%] flex flex-col items-center justify-center gap-4"
          >
            {/* LOGIN BUTTON */}
            <motion.button
              variants={containerVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="w-full max-w-xs px-8 py-4 bg-white text-purple font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogIn size={20} />
              Login
            </motion.button>
            {/* SIGNUP BUTTON */}
            <motion.button
              variants={containerVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/signup")}
              className="w-full max-w-xs px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <User2 size={20} />
              Sign Up
            </motion.button>
          </motion.div>
        </motion.section>
      </motion.section>
    </>
  );
};

export default LandingPage;
