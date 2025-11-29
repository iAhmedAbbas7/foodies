// <== IMPORTS ==>
import { motion } from "framer-motion";
import useTitle from "@/hooks/useTitle";

// <== HOME PAGE COMPONENT ==>
const HomePage = () => {
  // USE TITLE HOOK
  useTitle("Foodies - Home");
  // CONTAINER ANIMATION VARIANTS
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  } as const;
  return (
    // HOME PAGE MAIN WRAPPER
    <>
      {/* HOME PAGE CONTENT WRAPPER */}
      <section>
        {/* MAIN CONTENT WRAPPER */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-[80px]"
        ></motion.section>
      </section>
    </>
  );
};

export default HomePage;
