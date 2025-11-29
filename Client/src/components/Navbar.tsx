// <== IMPORTS ==>
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import LOGO from "../assets/images/LOGO.png";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Menu, X as XIcon, ShoppingCart, User } from "lucide-react";

// <== NAVBAR COMPONENT ==>
const Navbar = () => {
  // SHEET OPEN STATE
  const [isSheetOpen, setIsSheetOpen] = useState(false);
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
        className="fixed top-0 left-0 right-0 w-full h-[80px] bg-white shadow-md flex items-center justify-between px-4 md:px-8 z-50"
      >
        {/* LEFT SECTION - BRANDING */}
        <div className="flex items-center gap-4">
          {/* NAVBAR BRANDING SECTION */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-start gap-2"
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
        </div>

        {/* RIGHT SECTION - CART, AVATAR & HAMBURGER */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          {/* CART BUTTON - HIDDEN ON SMALL DEVICES (FOOTER VISIBLE) */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex relative p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-8 w-8 text-purple" />
            {/* CART BADGE - OPTIONAL */}
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">
              0
            </span>
          </motion.button>
          {/* AVATAR - HIDDEN ON SMALL DEVICES (FOOTER VISIBLE) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block cursor-pointer"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src="" alt="User avatar" />
              <AvatarFallback className="bg-purple text-white">
                <User className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
          </motion.div>
          {/* HAMBURGER MENU BUTTON - MOBILE ONLY, ON RIGHT SIDE */}
          <motion.button
            variants={itemVariants}
            onClick={() => setIsSheetOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="h-8 w-8 text-purple" strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* MOBILE SHEET SIDEBAR */}
      <SheetPrimitive.Root open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        {/* SHEET OVERLAY */}
        <SheetPrimitive.Portal>
          <SheetPrimitive.Overlay
            className={cn(
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-[60] bg-black/50"
            )}
          />
          {/* SHEET CONTENT */}
          <SheetPrimitive.Content
            className={cn(
              "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-[60] flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 max-w-sm border-l"
            )}
          >
            {/* SHEET HEADER */}
            <div className="flex items-center justify-between p-4 border-b">
              {/* BRANDING IN SHEET */}
              <div className="flex items-center gap-2">
                <img src={LOGO} alt="Foodies Logo" className="h-10 w-10" />
                <h2 className="font-semibold text-lg text-purple">Foodies</h2>
              </div>
              {/* CLOSE BUTTON */}
              <SheetPrimitive.Close className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </SheetPrimitive.Close>
            </div>

            {/* SHEET FOOTER - USER SECTION */}
            <div className="mt-auto p-4 border-t flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="" alt="User avatar" />
                <AvatarFallback className="bg-purple text-white">
                  <User className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-gray-900">User</p>
                <p className="text-sm text-gray-500">user@example.com</p>
              </div>
            </div>
          </SheetPrimitive.Content>
        </SheetPrimitive.Portal>
      </SheetPrimitive.Root>
    </>
  );
};

export default Navbar;
