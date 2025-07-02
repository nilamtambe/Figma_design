
import React from 'react';
import Vector from "../../assets/hero.png";
import {Link} from "react-router-dom";


const bgImg = {
    backgroundImage :`url(${Vector})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize: "cover",
    height: "100vh",
    width:"100%",
}

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {    
  return (
     <div className='bg-gradient-to-tr from-[#7f7fe6] to bg-[#030311] opacity-90  '>
    <div style={bgImg} className='min-h-[650px] flex items-center mix-blend-overlay'>
        <div className='w-full md:w[550px] mx-auto'>
        <div className='text-center text-white space-y-4'>
            <h1 className='text-white font-bold md:text-5xl sm:text-5xl text-5xl'>Redefining Corporate Learning Experience</h1>
            <p className="text-white">Transforming complex learning processes into easy-to understand e-learning experiences</p>
           <Link to="/services">
            <button className='bg-[#212121] text-[#fff] p-4 rounded-lg duration-200 hover:bg-slate-600 '>CTA(Call-to-Action) </button>
            </Link>
        </div>
       
        </div>
        </div>
     </div>
   
  )
}

export default Hero







