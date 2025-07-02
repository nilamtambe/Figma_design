
import P1 from "../../assets/p1.jpg";
import P2 from "../../assets/p2.jpg";
import P3 from "../../assets/p3.jpg";
import P4 from "../../assets/p4.jpg";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

const products = [
  {
    title: "Interior Emulsion",
    variant: "Platinum",
    image: P1,
  },
  {
    title: "Exterior Emulsion",
    variant: "Platinum",
    image: P2,
  },
  {
    title: "Ultra Premium",
    variant: "Gold",
    image: P3,
  },
  {
    title: "Interior Primer",
    variant: "Silver",
    image: P4,
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

export default function Services() {
  return (
     <motion.section
      className="py-16 px-4 bg-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      

      {/* Section Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="text-sm text-pink-700 font-semibold">All Categories</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Exclusive Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, idx) => (
           
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}














// import React from "react";
// import {FaPlus} from "react-icons/fa";
// import { motion } from "framer-motion";
// import { ServicesData } from "../../Data";


// const SlideLeft = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       x: 50,
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };
// const Services = () => {
//   return (
//     <section className="bg-white">
//       <div className="container pb-14 pt-16">
//         <h1 className="text-4xl font-bold text-center pb-10">
//           Our Services 
//         </h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
//           {ServicesData.map((service) => (
//             <motion.div
//               variants={SlideLeft(service.delay) }
//               initial="initial"
//               whileInView={"animate"}
//               viewport={{ once: true }}
//               className="bg-[#ebebf1] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#7d96eb] hover:scale-110 duration-300 hover:shadow-2xl"
//             >
//               <div className="text-4xl mb-4" key={service.id}> {service.icon}</div>
//               <h1 className="text-lg font-semibold text-center px-3">
//                 {service.title}
//               </h1>
//               <button className="bg-gradient-to-r from-[#4548f3] to-[#7bc8f5] hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
//                 <FaPlus/>
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;