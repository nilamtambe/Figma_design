import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";



const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProductCard({ title, variant, image }) {
  return (

    <motion.div
      className="flex flex-col items-center bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.03, y: -5 }}
    >
         
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="flex items-center justify-between px-4 py-4">
        <div>
          <h3 className="text-md font-semibold text-left">{title}</h3>
          <p className="text-sm text-gray-500 text-left">{variant}</p>
        </div>
        <ArrowUpRight className="w-6 h-8 text-black text-right hover:text-pink-700 transition-colors duration-300" />
      </div>
      
    </motion.div>
  );
}