import React from 'react';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailsjs from '@emailjs/browser';

import { styles } from "../style";
import { EarthCanvas, StarsCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// template_o7aj5xn
// service_xlsg13g
// qRuwutF5U7zVU9bOy

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

 const handleChange = (e) =>{
  const { name, value } = e.target;

  setForm({ ...form, [name]: value})
 };
 
 
 const handleSubmit = (e) =>{
  e.preventDefault();
  setLoading(true);
// template_o7aj5xn
// service_xlsg13g
// qRuwutF5U7zVU9bOy
  emailsjs.send(
    'service_xlsg13g',
    'template_o7aj5xn', 
  { form_name: form.name,
    to_name: 'Jørgen',
    to_email: 'oinojorgen@gmail.com',
    message: form.message,
  },
  'qRuwutF5U7zVU9bOy'
  )
  .then(() => {
    setLoading(false)
    alert('Thank you for Contacting, We will respond as soon as possible.');

    setForm({
      name: '',
      email: '',
      message: '',
    })
  }, (error) => {
    setLoading(false)

    console.log(error);

    alert('something went wrong.')
  })
 };
 
 
  return (
    <section id='contact'>
      <div className='xl:mt-8 mt-0 xl:flex-row flex-col-reverse
      flex gap-10 overflow-hidden'>
        <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8
        rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form action=""
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      
        >
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input type="text"
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder="what's Your name?"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary text-white
          rounded-lg outline-none
          border-none font-medium'
          />
      
      
          </label>
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Email</span>
          <input type="email"
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder="what's Your Email?"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary text-white
          rounded-lg outline-none
          border-none font-medium'
          />
      
      
          </label>
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
          rows='7'
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder="what Do you want to Say?"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary text-white
          rounded-lg outline-none
          border-none font-medium'
          />
      
      
          </label>
          <button
          type='submit'
          className='bg-teritary p-3 px-8 outline-none
          w-fit text-white font-bold shadow-md shadow-primary
          rounded-xl hover:bg-amber-600'
          >
            {loading ? 'sending...' : 'send'}
          </button>
        </form>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionWrapper(Contact, "Contact")