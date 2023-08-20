import {motion } from 'framer-motion'

import { styles } from '../style'
import { StarsCanvas } from './canvas'

import Lottie from 'lottie-react';
import animationData from './canvas/rexanimation.json';


const Hero = () => {
  const goToExhibitsSection = () => {
    const exhibitsSection = document.getElementById('exhibitsSection');
    exhibitsSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className='w-screen h-screen
    mx-auto'>
     <div className={`${styles.paddingX} absolute
     inset-0 top-[275px] max-w-7xl mx-auto flex
     flex-col items-start gap-5 lg:flex-row my-6`}>
    
 
     <div className='flex items-center flex-col'>
     <h1 className={`${styles.heroHeadText} text-white`}>
     Welcome!</h1>
     <h1 className={`${styles.heroSubText} text-white`}>
      Book Your Tickets</h1>
     <button className={`${styles.heroHeadText} border p-2 rounded-xl hover:bg-orange-500`} id="exhibitsButton"
     onClick={goToExhibitsSection}>
      Here
     </button>
 
     </div>
    
     <Lottie animationData={animationData} width={20} height={20} />
     <br />
    
     </div>
    
 

    </section>
  )
}

export default Hero