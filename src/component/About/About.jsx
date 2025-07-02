import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="pt-0 mt-0">
     <div className="container px-4 md:px-8 py-0 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Safe for you, kind to Earth
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-600 text-md tracking-wide leading-5"
            >
              At abc paints, we source all our materials to be eco-conscious and
              kind to the environment.
            </motion.p>
          </div>
        </motion.div>

        {/* Banner Image */}
        <div className="flex justify-center items-center  ">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={BannerPng}
            alt="banner"
            className=" md:max-w-[400px] object-cover w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

// import React from 'react';
// import about_img from "../../assets/about.png";

// const About = () => {
//   return (

//     <div className='min-h-[550px] py-10'>
//     <div className='min-h-[550px] flex justify-center items-center '>
//         <div className='container'>
//             <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
//                 <div>
//             <img src={about_img} alt=""  className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]' />
//             </div>

//             <div className='flex flex-col justify-center gap-6 sm:pt-0'>
//             <h2 className='text-3xl sm:text-4xl font-bold'>About eLrnstudio</h2>
//        <p className='text-gray-600 text-sm tracking-wide leading-5'> We are team of new age eLearning experts, who use latest technology to transform our clients existing complex and lengthy process to easy and fun loving Learning experiences.</p>
//        <p className='text-gray-600 text-sm tracking-wide leading-5'> eLrnstudio leads the industry in delivering bespoke digital learning solutions that drive measurable business outcomes. Our mission is to revolutionize traditional learning paradigms with cutting-edge digital technology.</p>

//            <button className='mr-auto p-2 outline-none bg-[#000F38] text-white rounded-lg'>Explore More..</button>
//             </div>

//         </div>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default About
