import React from 'react';

const openingHours = {
  Monday: "Closed",
  Tuesday: "09:00 - 16:00",
  Wednesday: "09:00 - 16:00",
  Thursday: "11:00 - 21:00",
  Friday: "11:00 - 21:00",
  Saturday: "11:00 - 21:00",
  Sunday: "11:00 - 21:00",
};

const OpenHoursList = () => {
  return (
    <div className='flex flex-col flex-wrap w-full mt-5'>
      <h5 className='font-semibold'>We're Open from</h5>
      <ul className='flex flex-wrap flex-col-reverse justify-around gap-3 text-center'>
        {Object.entries(openingHours).map(([day, hours]) => (
          <li className='border px-2' key={day}>
            {day}: {hours}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenHoursList;