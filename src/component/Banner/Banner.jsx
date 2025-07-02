
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



