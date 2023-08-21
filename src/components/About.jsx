/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client"
import React, {useState} from 'react'

import { motion } from "framer-motion";
import { Tilt } from 'react-tilt'
import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Modal from './Modal';



import Lottie from 'lottie-react';
import animationData from './canvas/animation_llgkb50m.json'

import museum from '../assets/museum.jpg'

import TicketForm from './TicketForm';
import { HiPlusSm, HiOutlineMinusSm, HiOutlineTicket } from 'react-icons/hi'


const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
 

  

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Booking</p>
        <h2 className={styles.sectionHeadText}>Get Your Tickets here.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-white text-[17px] max-w-3xl leading-[30px]'
      >
      For teachers and schooltrips:
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-white text-[17px] max-w-3xl leading-[30px] font-semibold uppercase'
      >
      Free $
      </motion.p>
      <motion.p 
           variants={fadeIn("", "", 0.1, 1)}
           className='mt-5 text-white text-[17px] max-w-3xl leading-[30px]'
           >
      As a community-driven museum, we want to work with schools to create places of learning and exploring. Our team are on hand to give your students guided tours of the museum, teach them in our learning laboratory, and provide great video presentations that will excite and inspire them.
      </motion.p>

     
      <div className='mt-3 flex flex-col gap-5'>
      <button className="font-bold border py-2 w-44 text-lg sm:text-sm hover:bg-white hover:text-black transition-all"><a href="#contact">Book Schooltrip</a></button>

      <button onClick={openModal} className="font-bold border py-2 w-44 text-lg sm:text-sm hover:bg-white hover:text-black transition-all">Get Your Tickets Here</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} >
       <div className='flex flex-col flex-wrap items-center z-50 justify-center mt-0'>
       <div className='flex items-center justify-center mt-0'>
        <div style={{ width: '70px', height: '60px sm:110px' }}>
          <Lottie
            animationData={animationData}
            width={100}  // You can also set width and height here
            height={100} // if it doesn't conflict with internal dimensions
          />
        </div>
                <div>
                  <p className='text-black text-[13px] font-semibold
                  cursor-pointer flex w-[250px] md:w-[400px] text-center items-center sm:text-[22px] md:text-[25px]'>
                    COMMUNITY SCIENCE MUSEUM
                  </p>
                </div>
      </div>
        <h2 className='font-semibold text-xl flex items-center'>Purchase Your Tickets here <HiOutlineTicket/></h2>
        <div>
         <TicketForm />
        </div>
       </div>
      </Modal>
      

      <div className='flex items-center mx-0 ]'>
        <img src={museum} alt="museum" className='h-[500px] rounded-3xl md:h-[800px]' fill />
      </div>
    </div>

    
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");