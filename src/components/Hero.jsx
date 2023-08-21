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

  const now = new Date();
  const currentDay = now.toLocaleString('en-us', { weekday: 'long' });
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const goToExhibitsSection = () => {
    const exhibitsSection = document.getElementById('exhibitsSection');
    exhibitsSection.scrollIntoView({ behavior: 'smooth' });
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
          <button className={`${styles.heroHeadText} border p-2 rounded-xl hover:bg-orange-500`} id="exhibitsButton" onClick={goToExhibitsSection}>
            Here
          </button>
          <div>
            {/* Display real-time opening hours */}
            We are:
            {openingHours[currentDay]} {/* Display the opening hours for the current day */}
          </div>

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
