
import React from "react";
import PaintCan1 from "../../assets/paint-bucket.png";
import PaintCan2 from "../../assets/paint-bucket.png";
import { motion } from "framer-motion";
import backgroundPattern from "../../assets/Vector.png"


const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};




const Footer = () => {
  return (
    <section className="relative py-16 px-5 bg-[#791953] text-white pt-35 pb-35 overflow-visible z-20  md:px-10">
       <img
        src={backgroundPattern}
        alt="Background Pattern"
        className="absolute  right-[1%] top-1/2 transform -translate-y-1/2 w-[380px] opacity-20 z-0 pointer-events-none"
      />
        <motion.p
        className="text-sm mb-2"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Nature, Technology and Human
      </motion.p>

      <motion.h1
        className="text-3xl md:text-4xl font-bold leading-tight"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        From Earth To Wall Nature.
        <br />
        Inspired By Nature.
      </motion.h1>

      <motion.p
        className="mt-4 text-lg font-semibold"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        abc paints
      </motion.p>

      {/* Top Bucket - Overlapping Top */}
       <motion.img
        src={PaintCan1}
        alt="Top Paint Bucket"
      className="absolute top-[-50px] right-[40%] w-36 rotate-[35deg] z-30"
    initial={{ opacity: 0, x: 100, y: 100 }}
    animate={{ opacity: 1, x: 0, y: 0, rotate:30}}
    transition={{ duration: 1 }}
      />

      {/* Bottom Left Paint Bucket - inside corner */}
      <motion.img
        src={PaintCan2}
        alt="Bottom Paint Bucket"
   className="absolute bottom-[-30px] right-[35%] w-40 rotate-[15deg] z-30"
    initial={{ opacity: 0, x: -100, y: 100, }}
    animate={{ opacity: 1, x: 0, y: 0,rotate:-40 }}
    transition={{ duration: 1, delay: 0.5 }}
      />
      </section>
  );
};

export default Footer;









