
import React, { useState } from "react";
 

import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Feedbacks,
Hero, Navbar, Tech, Works} from './components'
import Exhibits from './components/Exhibits';
import Footer from "./components/Footer";
import Youngster from "./components/Youngster";




const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className='absolute bg-amber-700'>
        <div className='relative overflow z-999 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
      
        <Exhibits />


        <div className="relative z-0">
          <About />
          
        </div>
        <Youngster />
        <Contact />
        <Footer />
     
      </div>
    </BrowserRouter>
  );
}

export default App;