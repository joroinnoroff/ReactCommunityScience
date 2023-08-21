import React, { useState } from 'react';
import { HiPlusSm, HiOutlineMinusSm, HiOutlineMail } from 'react-icons/hi';
 

import { Toaster, toast } from 'react-hot-toast';
import Lottie from 'lottie-react';
import checkedLottie from '../assets/checkedLottie.json';

const ticketTypes = [
  { id: 'student', label: 'Student', price: 50 },
  { id: 'adult', label: 'Adult', price: 80 },
  { id: 'under25', label: 'Under 25', price: 60 },
  { id: 'children', label: 'under 12', price: 0 },
  { id: 'schools', label: 'Schools', price: 0 },
];

function TicketForm() {
  const [totalSum, setTotalSum] = useState(0);
  const [ticketCounts, setTicketCounts] = useState(
    ticketTypes.reduce((acc, type) => ({ ...acc, [type.id]: 0 }), {})
  );

  const handleUpdateCount = (type, action) => {
    setTicketCounts((prevCounts) => {
      const updatedCounts = { ...prevCounts };
      if (action === 'add') {
        updatedCounts[type]++;
      } else if (action === 'remove' && updatedCounts[type] > 0) {
        updatedCounts[type]--;
      }
      updateTotalSum(updatedCounts);
      return updatedCounts;
    });
  };

  const updateTotalSum = (counts) => {
    const newTotal = Object.keys(counts).reduce((sum, type) => {
      return sum + counts[type] * ticketTypes.find(ticket => ticket.id === type).price;
    }, 0);
    setTotalSum(newTotal);
  };

  const [selectedDate, setSelectedDate] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handlePurchase = () => {
    // ... (any purchase logic you have)
  
    // Perform email validation with regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(enteredEmail)) {
      setIsEmailValid(false);
      return; // Prevent purchase if email is invalid
    }
  
    setIsEmailValid(true);
  
    // Trigger the Lottie animation
    setIsAnimationPlayed(true);
  
    // Display the success toast
    const successMessage = `Thank you for reserving tickets on ${selectedDate}. An email has been sent to ${enteredEmail}.`;
    toast.success(successMessage, {
      duration: 5000, // Duration in milliseconds
    });
  
    // Reset other form-related states
    setTotalSum(0);
    setTicketCounts(ticketTypes.reduce((acc, type) => ({ ...acc, [type.id]: 0 }), {}));
    setSelectedDate('');
    setEnteredEmail('');
  
    // Reset the animation after a delay
    setTimeout(() => {
      setIsAnimationPlayed(false);
    }, 5000); // Adjust the delay to match the toast duration
  };
  

  const [isAnimationPlayed, setIsAnimationPlayed] = useState(false);

  return (
    <div className='mt-3 flex items-center flex-col gap-5 border px-4 py-4 rounded-xl shadow-xl'>
      
      {ticketTypes.map((ticket) => (
        <div key={ticket.id} className='flex mx-auto mt-0 gap-3 '>
          <label className='border px-6 rounded-md w-[250px] font-semibold flex justify-around text-xl'>
            {ticket.label} 
            <div className='border-l  flex px-1'>
            {ticket.price}$
            </div>
          </label>
          <div className='flex'>
            <button className="text-xl font-semibold" onClick={() => handleUpdateCount(ticket.id, 'add')}>
              <HiPlusSm />
            </button>
            <div className="amount font-semibold text-xl">{ticketCounts[ticket.id]}</div>
            <button className="text-xl font-bold" onClick={() => handleUpdateCount(ticket.id, 'remove')}>
              <HiOutlineMinusSm />
            </button>
          </div>
        </div>
      ))}

<input
  type='date'
  value={selectedDate}
  required
  onChange={(e) => setSelectedDate(e.target.value)}
  className={`mt-2 text-white px-10 py-4 bg-primary rounded-xl`}
/>

      <div className='bg-black border shadow-lg w-full'/>
      <div className="total">
        <h3>Total amount: <span id='total'>{totalSum}$</span></h3>
      </div>
      <div className='bg-black border shadow-lg w-full'/>




      <div className='flex flex-col'>
  <label htmlFor='Email'>Enter your email to get Tickets</label>
  <input
    type='email'
    
    placeholder='Email..'
    className={` mt-2 text-white px-6 py-3 bg-primary rounded-xl ${
      isEmailValid ? '' : 'border-red-500'
    }`}
    value={enteredEmail}
    onChange={(e) => {
      setEnteredEmail(e.target.value);
      setIsEmailValid(true); // Reset validation status when user interacts with the input
    }}
  />
  {!isEmailValid && <p className='text-red-500'>Please enter a valid email address.</p>}
</div>

<p>For Schools that wish to book guided tours, Please Email us</p>
<button className='px-5 border rounded-md'><a href="#contact" className='flex items-center gap-2'>Here <HiOutlineMail /></a></button>




      <div className='z-11 mt-10'>
        <Toaster position='bottom-center' /> {/* Add this line to render the toast container */}
      </div>
      <button className='px-10 py-3 border text-2xl rounded-md bg-amber-700 text-white' onClick={handlePurchase} id='Add'>
  Purchase
  {isAnimationPlayed && (
    <Lottie
      options={{
        animationData: checkedLottie,
        loop: false,
        autoplay: true,
      }}
      height={100}
      width={100}
      isStopped={false}
      isPaused={false}
      onComplete={() => setIsAnimationPlayed(false)} // Reset animation state when complete
    />
  )}
</button>




    </div>
  );
}

export default TicketForm;
