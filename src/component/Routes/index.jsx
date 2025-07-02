import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero  from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import {Routes,Route} from "react-router-dom";





const index = ()=>{
    return (
        <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='/hero' element={<Hero/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/banner' element={<Banner/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/footer' element={<Footer/>} />
       
     </Routes>
    )
}
export default index;
