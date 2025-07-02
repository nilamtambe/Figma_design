import React, { useEffect, useState } from "react";
import {
  CircleUserRound,
  Heart,
  LockKeyhole,
  Menu,
  Search,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Story", href: "#" },
  { label: "Products", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileDrawerOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 bg-white  h-[80px] ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        >
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-800">
              abc paints
            </div>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex space-x-10 text-sm font-medium text-gray-700">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`relative inline-block px-3 py-1 transition-all duration-300 group
                      ${item.label === "Home" ? "bg-black text-white rounded-md" : "hover:text-pink-600"}`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-300 group-hover:w-full ${
                        item.label === "Home" ? "hidden" : ""
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop icons */}
            <div className="hidden lg:flex space-x-4 text-gray-700">
              <Search />
              <CircleUserRound />
              <Heart />
              <LockKeyhole />
            </div>

            {/* Mobile toggle */}
            <div className="lg:hidden">
              <button onClick={toggleNavbar} aria-label="Toggle Menu">
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-neutral-900 text-white z-40 p-6 transition-all">
            <ul className="space-y-4 text-lg font-medium">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className={`block px-4 py-2 rounded-md ${
                      item.label === "Home" ? "bg-black text-white" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-around mt-6">
              <Search />
              <CircleUserRound />
              <Heart />
              <LockKeyhole />
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-[80px] lg:h-[72px]" />
    </>
  );
};

export default Navbar;





