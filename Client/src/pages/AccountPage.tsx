// <== IMPORTS ==>
import { motion } from "framer-motion";
import useTitle from "@/hooks/useTitle";

// <== ACCOUNT PAGE COMPONENT ==>
const AccountPage = () => {
  // USE TITLE HOOK
  useTitle("Foodies - My Account");
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
    // ACCOUNT PAGE MAIN WRAPPER
    <>
      {/* ACCOUNT PAGE CONTENT WRAPPER */}
      <section>
        {/* MAIN CONTENT WRAPPER */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="pt-[80px] min-h-screen"
        >
          {/* PAGE CONTENT */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <h1 className="text-3xl md:text-4xl font-bold text-purple mb-6">
              My Account
            </h1>
            <p className="text-gray-600">Account page content coming soon...</p>
          </div>
        </motion.section>
      </section>
    </>
  );
};

export default AccountPage;
