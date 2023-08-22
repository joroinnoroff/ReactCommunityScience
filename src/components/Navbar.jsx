"use client"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../style';
import { navLinks } from '../constants';
import {  menu, close } from '../assets';
import Lottie from 'lottie-react';
import animationData from './canvas/animation_llgkb50m.json'

const Navbar = () => {
 
  const [active, setActive] = useState('');

  const [toggle, setToggle] = useState(false)
  return (
   <nav className={`
   ${styles.paddingX} w-full flex items-center py-5 fixed
   top-0 bg-primary z-10` }>
    <div className='w-full flex justify-between items-center max-w-7xl
    mx-auto
   overflow-auto'>
      <Link 
      to="/"
      className='flex items-center'
      onClick={() => {
        setActive("");
        window.scrollTo(0,0);
      }}>

<div style={{ width: '90px', height: '60px' }}>
  <Lottie
    animationData={animationData}
/>
</div>
              <p className='text-white text-[18px] font-bold md:text-[23px]
              cursor-pointer flex'>
                COMMUNITY SCIENCE MUSEUM
              </p>
        
      </Link>

      <ul className='list-none hidden sm:flex 
      flex-row gap-10'>
        {navLinks.map((nav) => (
          <li
          key={nav.id}
          className={`${
            active === nav.title ? "text-white" : "text-zinc-400 transition-all"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))} 

      </ul>

      <div className='sm:hidden flex flex-1
        justify-end items-center'>
          <img src={toggle ? close : menu}
          alt='menu'
          className='w-[32px] h-[32px]
          object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden'
           : 'flex'} p-10 bg-amber-900 absolute 
           top-20 right-0 mx-4 my-2 min-w-[170px]
           z-10 rounded-xl flex items-center`}>

          <ul className='list-none flex  
          justify-end items-start flex-col gap-4'>
           {navLinks.map((nav) => (
          <li
          key={nav.id}
          className={`${
            active === nav.title ? "text-white" : "text-white transition-all"
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => setActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))} 

      </ul>
          </div>
      </div>
    </div>
   </nav>
  )
}

export default Navbar