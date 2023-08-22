"use client"
import React from 'react';
import { styles } from '../style';
import Lottie from 'lottie-react';
import animationData from './canvas/rexanimation.json';

 
import OpenHoursList from './OpenHoursList';

const Hero = () => {
 
  

  
  const openingHours = {
    Monday: "Closed",
    Tuesday: "09:00 - 16:00",
    Wednesday: "09:00 - 16:00",
    Thursday: "11:00 - 21:00",
    Friday: "11:00 - 21:00",
    Saturday: "11:00 - 21:00",
    Sunday: "11:00 - 21:00",
  };
 
 

  return (
    <section className='w-screen h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[275px] max-w-7xl mx-auto flex flex-col items-start gap-5 lg:flex-row my-6`}>
        <div className='flex items-center flex-col'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome!
          </h1>
          <h1 className={`${styles.heroSubText} text-white`}>
            Book Your Tickets
          </h1>
          <button className={`${styles.heroHeadText} border p-2 rounded-xl hover:bg-orange-500`} id="exhibitsButton">
            <a href="#about">Here</a>
          </button>
        

          <div>
     
          <OpenHoursList />
    
    
        </div>
        </div>
        
        <Lottie animationData={animationData} width={20} height={20} />
        

   
      </div>
    </section>
  )
}

export default Hero;
