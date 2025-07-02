
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bannerImage from "../../assets/Banner2.png";

const categories = [
  { number: "01", label: "Interior Paint" },
  { number: "02", label: "Exterior Paint" },
  { number: "03", label: "Metal Paint" },
];

const Banner = () => {
  return (
    <section className="py-15 px-4 bg-white relative md:py-20 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-pink-700 font-medium">Nature, Technology and Human</p>
        <h2 className="text-3xl md:text-4xl font-bold">Category</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Banner Image with tilt */}
        <div className="flex justify-center md:justify-start">
          <motion.img
            initial={{ opacity: 0, rotate: -10, x: -50 }}
            whileInView={{ opacity: 1, rotate: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={bannerImage}
            alt="Category Banner"
            className="w-[300px] h-auto md:w-[400px] object-cover drop-shadow-2xl"
          />
        </div>

        {/* Right: Category List */}
        <div className="space-y-5">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between border-b pb-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <span className="text-pink-700 font-bold text-xl">{cat.number}</span>
                <span className="text-md font-semibold">{cat.label}</span>
              </div>
              <ArrowRight className="w-6 h-5 text-black text-right hover:text-pink-700 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;



// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import C1 from "../../assets/c1.jpg";
// import C3 from "../../assets/c3.jpg";
// import C2 from "../../assets/c2.png";

// const categories = [
//   { number: "01", label: "Interior Paint" },
//   { number: "02", label: "Exterior Paint" },
//   { number: "03", label: "Metal Paint" },
// ];

// export default function Banner() {
//   return (
//     <section className="py-16 px-4 bg-white relative md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">

       
//         {/* Banner Image */}
//          <div className="flex justify-center items-center mt-[150px]">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}             viewport={{ once: true }}
//            transition={{ duration: 0.5, ease: "easeInOut" }}
//             src={BannerPng}            alt=""
//              className="w-[500px] h-[500px] md:max-w-[450px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] "           />
//          </div>
//       {/* < className="max-w-6xl mx-auto">
//         {/* Headings */}
//         <div className="text-center mb-12">
//           <p className="text-pink-700 font-medium">Nature, Technology and Human</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Category</h2>
//         </div>

//         {/* Content Grid */}
//         <div className="grid md:grid-cols-2 gap-10 items-start">
//           {/* Left Column - Images */}
//           <div className="space-y-6">
//             {/* Top image with quick view button */}
//             <motion.div
//               className="relative overflow-hidden rounded-lg shadow-md"
//               whileHover={{ scale: 1.03 }}
//             >
//               <img
//                 src={C2}
//                 alt="Category 1"
//                 className="w-full h-[265px] object-cover"
//               />
//               <button className="absolute bottom-3 left-3 bg-white text-black text-sm px-3 py-1 rounded-full shadow hover:bg-gray-100 transition">
//                 Quick View
//               </button>
//             </motion.div>

//             {/* Second image */}
//             <motion.div
//               className="overflow-hidden rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >
//               <img
//                 src={C1}
//                 alt="Category 2"
//                 className="w-full h-[265px] object-cover"
//               />
//             </motion.div>
//           </div>

//           {/* Right Column - Text + Tilted image */}
//           <div className="space-y-6">
//             {/* Tilted image */}
//             <motion.div
//               className="w-fit mx-auto md:mx-0"
//               initial={{ rotate: -15, opacity: 0 }}
//               whileInView={{ rotate: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <img
//                 src={C3}
//                 alt="Paint Example"
//                 className="w-48 h-auto rounded-lg shadow-md"
//               />
//             </motion.div>

//             {/* List of categories */}
//             <div className="space-y-6">
//               {categories.map((cat, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-center justify-between border-b pb-2"
//                   initial={{ opacity: 0, x: 40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="flex items-center gap-4">
//                     <span className="text-pink-700 font-bold text-xl">{cat.number}</span>
//                     <span className="text-md font-semibold">{cat.label}</span>
//                   </div>
//                   <ArrowRight className="w-5 h-5 text-black" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
    
//     </section>
//   );
// }




// import React from "react";
// import BannerPng from "../../assets/program-2.png";
// import { SiMaterialdesignicons } from "react-icons/si";
// import { MdOutlineDeveloperBoard } from "react-icons/md";
// import { VscGitStashApply} from "react-icons/vsc";
// import { FaBookReader } from "react-icons/fa";
// import { GiMedievalPavilion } from "react-icons/gi";
// import { FadeUp } from "../Hero/Hero";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <section>
//       <div className="py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
//         {/* Banner Image */}
//         <div className="flex justify-center items-center mt-[150px]">
//           <motion.img
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             src={BannerPng}
//             alt=""
//             className="w-[500px] h-[500px] md:max-w-[450px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] "
//           />
//         </div>
//         {/* Banner Text */}
//         <div className="flex flex-col justify-center ">
//           <div className="text-center md:text-left space-y-12">
//             <motion.h3
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-2xl md:text-4xl font-bold !leading-snug text-[#131344]"
//             >
//               	Our Approach / Methodology:
//             </motion.h3>
//             <motion.p
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-2xl md:text-4xl font-bold !leading-snug text-[#2b5483]"
//             >
//               ADDIE approach
//             </motion.p>
//             <div className="flex flex-col gap-4">
//               <motion.div
//                 variants={FadeUp(0.2)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#cad5f7] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <FaBookReader className="text-2xl" />
//                 <p className="text-md">Analysis: We begin by understanding the learner's needs and goals, analyzing the content requirements, and identifying any existing gaps.</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.4)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#cad5f7] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <SiMaterialdesignicons className="text-2xl" />
//                 <p className="text-md">Design: We create a detailed plan for the e-learning course, including learning objectives, content structure, and interactive elements, ensuring alignment with the analysis phase.</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.6)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#cad5f7] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <MdOutlineDeveloperBoard className="text-2xl" />
//                 <p className="text-md">Development: We build the e-learning modules, incorporating multimedia elements, interactive activities, and assessments as outlined in the design plan.</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.6)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#cad5f7] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <VscGitStashApply className="text-2xl" />
//                 <p className="text-md">Implementation: We deploy the e-learning content on the chosen platform, ensuring smooth access and providing support to users as needed.</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.6)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#cad5f7] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 < GiMedievalPavilion className="text-2xl" />
//                 <p className="text-md">Evaluation: We gather feedback and analyze performance data to assess the effectiveness of the e-learning course, making necessary adjustments to enhance learning outcomes.</p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;