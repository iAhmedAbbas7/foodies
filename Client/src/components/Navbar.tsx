// <== IMPORTS ==>
import { motion } from "framer-motion";
import LOGO from "../assets/images/LOGO.png";

// <== NAVBAR COMPONENT ==>
const Navbar = () => {
  // CONTAINER ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
    },
  } as const;
  // CONTAINER ITEM ANIMATION VARIANTS
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
    },
  } as const;
  return (
    // NAVBAR MAIN WRAPPER
    <>
      {/* NAVBAR CONTENT WRAPPER */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-[80px] bg-white shadow-md flex items-center justify-between px-8"
      >
        {/* NAVBAR BRANDING SECTION */}
        <motion.div
          variants={itemVariants}
          className="w-full flex items-center justify-start gap-2"
        >
          {/* LOGO */}
          <motion.img
            variants={itemVariants}
            src={LOGO}
            alt="Foodies Logo"
            className="h-[60px] w-[60px]"
          />
          {/* BRAND NAME */}
          <motion.h1
            variants={itemVariants}
            className="font-semibold text-[1.25rem] text-purple"
          >
            Foodies
          </motion.h1>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
