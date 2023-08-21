import React from 'react'
import animationData from '../assets/minidino.json'
import animation from '../assets/newton.json'
import Lottie from 'lottie-react';
import { SectionWrapper } from '../hoc/'

import { HiOutlineStar } from "react-icons/hi";

import { FaChild } from "react-icons/fa";
const Youngster = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
      <Lottie animationData={animation} style={{ height: '250px', width: '250px' }} />
        <Lottie animationData={animationData} style={{ height: '250px', width: '250px' }}/>

      </div>
      <div className='flex flex-col items-center'>
        <h2 className="text-center text-5xl font-semibold flex flex-col items-center">
          Young explorers<FaChild />
        </h2> 

         <div className=''>
          <h5 className="text-center space-y-5 w-full">
          Are you a young person looking to learn more about science? Come on down to our museum, there’s plenty to see and do. You can learn about Newtonian physics from our bumper swing, or why not travel back in time and meet our resident Woolly Mammoth? Our exhibits are designed to be accessible for interested minds, so make sure you come ready to learn and explore.
          </h5>
         </div>
        
      </div>

      <div className='flex flex-col items-center mt-5'>
        <h2 className="text-center text-5xl font-semibold flex flex-col items-center">
        YOUNG STARS CLUB<HiOutlineStar />
        </h2> 

         <div className=''>
          <h5 className="text-center space-y-5 w-full">
          We also have the Young Stars club which meets once a week on a Saturday between 10:00 and 13:00 where you’ll get to explore and experiment with our team of experts. During the school holidays we run special holiday clubs where you can join other children your age to go on a journey of discovery. Each holiday we pick a new theme to explore. To find out more about the holiday club and how you can join, send us a message.
          </h5>
         </div>
        
      </div>



      
    </div>
  )
}

export default SectionWrapper(Youngster, "youngster");