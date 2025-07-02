import React from 'react';
import Routes  from './component/Routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero';
import About from './component/About/About';
import Services from './component/Services/Services';
import Testimonial from './component/Testimonial/Testimonial';
import Footer from './component/Footer/Footer';
import Banner from './component/Banner/Banner';




const App = () => {
  return (
     
    // <div className='overflow-x-hidden'>
    //   <Router >
    //     <Routes />
    //   <Navbar />
    //   <Hero />
    //   <About />
    //   <Footer />
    //   <Services/>
    //   <Banner />
    //   <Testimonial />
      
    //     </Router>
        
    // </div>
    <>
<Navbar />         
<div className="overflow-x-hidden" />  
<About /> 
<Footer />
 <Services/>
  <Banner />
</>
    
   
  )
}

export default App



















// import React from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import About from './components/About/About';
// import Services from './components/Services/Services';


// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//     </div>
//   )
// }

// export default App

