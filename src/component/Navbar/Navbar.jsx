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



// import React, { useState } from "react";
// import { IoMdMenu } from "react-icons/io";
// import { motion } from "framer-motion";
// import Logo from "../../assets/eLrnstudio-Logo-v1.png";

// const NavbarMenu = [
//   {
//     id: 1,
//     title: "Home",
//     path: "/",
//   },
//   {
//     id: 2,
//     title: "About Us",
//     link: "/about",
//   },
//   {
//     id: 3,
//     title: "Key Services Overview",
//     link: "/services",
//   },
//   {
//     id: 4,
//     title: "Client Success Stories",
//     link: "/testimonial",
//   },
//   {
//     id: 5,
//     title: "Contact Us",
//     link: "/footer",
//   },
// ];
// const Navbar = () => {

//   const[open, setOpen] = useState(false);

//   const handleOpen =() =>{
//     setOpen(!open);
//   }
//   return (
//     <nav className="container py-5 px-2 sm:py-0 fixed z-10 mx-5">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex justify-between items-center"
//       >
//         {/* Logo section */}
//         <div>
//         <a href='/#'>
//           <img src={Logo} alt="" className='w-16 sm:w-24 m-2'/>
//           </a>
//         </div>
//         {/* Menu section */}
//         <div className="hidden lg:block">
//           <ul className="flex items-center gap-3 text-white">
//             {NavbarMenu.map((menu) => (
//               <li key={menu.id}>
//                 <a
//                   href={menu.path}
//                   className="inline-block py-2 px-3 hover:text-secondary relative group"
//                 >
//                   <div className="text-white text-2xl w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
//                   {menu.title}
//                 </a>
//               </li>
//             ))}

//           </ul>
//         </div>
//         {/* Mobile Hamburger menu section */}
//         <div className="lg:hidden">
//           <button onClick={handleOpen}>
//           <IoMdMenu className="text-4xl text-white" />
//           </button>
//           {
//             open && (
//               <div>
//               <ul className="bg-white space-y-3 p-4 rounded-md shadow-md absolute right-10 top-24 z-50">
//                 {NavbarMenu.map((menu) => (
//                   <li key={menu.id}>
//                     <a
//                       href={menu.path}
//                       className="inline-block text-xl p-4 hover:bg-blue-500 hover:text-white w-full rounded-md"
//                     >
//                       <div className="text-white text-2xl w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
//                       {menu.title}
//                     </a>
//                   </li>
//                 ))}

//               </ul>
//               </div>
//             )
//           }

//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;
