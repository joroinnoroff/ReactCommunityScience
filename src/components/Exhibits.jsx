"use client"
/* eslint-disable no-unused-vars */
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from 'framer-motion'
import Lottie from 'lottie-react';
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../style'
import { experiences, projects } from '../constants'
import { SectionWrapper } from '../hoc/'
import { textVariant } from '../utils/motion'
import { fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { StarsCanvas } from './canvas';



const ProjectCard = ({index, name, description, 
tags, animation }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", 
    index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary p-8 rounded-2xl 
      sm:w-[470px] w-full'
      >
        <div className='relative h-[230px] mt-0 flex items-center justify-center'>
        <Lottie lottieRef={animation} animationData={animation} style={{ height: '250px', width: '250px' }}/>

   
        </div>

              <div className='mt-5'>
              <h3 className='text-white font-bold 
              text-[24px]'>{name}</h3>
              <p className='mt-2 text-secondary 
              text-[14px]'>{description}</p>
              </div>

              <div className='mt-4 flex flex-wrap gap-2'>
                {tags.map((tag) =>(
                  <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                    {tag.name}
                  </p>
                ))}
              </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <section id="exhibitsSection" className='mt-96 sm:mt-20'>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
        Explore together
        </p>
        <h2 className={styles.sectionHeadText}>
         Exhibits
        </h2>
            </motion.div>
        
            <div className='w-full flex'>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-white text-[17px] max-w-3xl leading-[30px]'>
          The aim of our museum is to create a space where everyone can experience the wonders of our discoveries and perhaps even ignite a lifelong passion to continue the exploration of the world around us.
        </motion.p>
        </div>
        <div className='w-full flex items-center'>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Learn more and join our Youngster Program, Click <a href="#Youngsterclub" className='hover:text-white transition-all'>Here</a>
        </motion.p>
        </div>
        <div className='mt-20 flex flex-wrap gap-7 items-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        
      </section>
    </>
  )
}

export default SectionWrapper(Works, "");