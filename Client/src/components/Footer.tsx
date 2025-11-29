// <== IMPORTS ==>
import { motion } from "framer-motion";
import LOGO from "../assets/images/LOGO.png";
import { Link, useLocation } from "react-router-dom";
import { User, Store, Bike, ShoppingCart } from "lucide-react";

// <== FOOTER COMPONENT ==>
const Footer = () => {
  // CURRENT LOCATION
  const location = useLocation();
  // FOOTER NAVIGATION ITEMS
  const footerItems = [
    {
      icon: User,
      label: "My Account",
      path: "/account",
    },
    {
      icon: Store,
      label: "Stores",
      path: "/stores",
    },
    {
      icon: null,
      label: "Menu",
      path: "/menu",
      isLogo: true,
    },
    {
      icon: Bike,
      label: "Track Order",
      path: "/track-order",
    },
    {
      icon: ShoppingCart,
      label: "My Cart",
      path: "/cart",
      hasBadge: true,
      badgeCount: 0,
    },
  ];
  // ITEM ANIMATION VARIANTS
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
    },
  } as const;
  return (
    // FOOTER MAIN WRAPPER
    <motion.footer
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 shadow-lg z-40 flex md:hidden"
    >
      {/* FOOTER CONTENT WRAPPER */}
      <nav className="w-full max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-around w-full">
          {footerItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <motion.div
                key={item.path}
                variants={itemVariants}
                custom={index}
                className="flex-1 flex items-center justify-center"
              >
                <Link
                  to={item.path}
                  className={`
                    flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-lg transition-colors cursor-pointer
                    ${
                      isActive
                        ? "text-purple"
                        : "text-gray-600 hover:text-purple"
                    }
                  `}
                >
                  {/* ICON OR LOGO */}
                  {item.isLogo ? (
                    <div className="relative">
                      <img src={LOGO} alt="Foodies Menu" className="h-7 w-7" />
                    </div>
                  ) : Icon ? (
                    <div className="relative">
                      <Icon className="h-7 w-7" strokeWidth={2.5} />
                      {/* CART BADGE */}
                      {item.hasBadge && (
                        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">
                          {item.badgeCount}
                        </span>
                      )}
                    </div>
                  ) : null}
                  {/* LABEL */}
                  <span className="text-[10px] md:text-xs font-medium">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </nav>
    </motion.footer>
  );
};

export default Footer;
