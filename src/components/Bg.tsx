// import React, { useState, useEffect } from "react";

// const DigitalClock = () => {
//   const [time, setTime] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const date = new Date();
//       let hours = date.getHours();
//       let minutes = date.getMinutes();
//       let seconds = date.getSeconds();
//       let dayNight = "AM";
//       if (hours > 12) {
//         dayNight = "PM";
//         hours -= 12;
//       }
//       if (seconds < 10) {
//         seconds = "0" + seconds;
//       }
//       if (minutes < 10) {
//         minutes = "0" + minutes;
//       }
//       if (hours < 10) {
//         hours = "0" + hours;
//       }
//       setTime(`${hours}:${minutes}:${seconds} ${dayNight}`);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="grid place-items-center h-screen bg-black">
//       <div className="relative w-80 h-40 bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-500 rounded-lg cursor-default animate-pulse">
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full text-white text-center text-5xl font-semibold animate-pulse">
//           {time}
//         </div>
//         <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-500 blur-sm"></span>
//         <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-yellow-400 to-pink-500 blur-lg"></span>
//       </div>
//     </div>
//   );
// };

// export default DigitalClock;


import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    const getCurrentHour = () => {
      const date = new Date();
      const hour = date.getHours();
      return hour;
    };

    const determineBgColor = (hour) => {
      if (hour >= 6 && hour < 12) {
        return 'bg-yellow-300';
      } else if (hour >= 12 && hour < 18) {
        return 'bg-blue-300';
      } else {
        return 'bg-gray-800';
      }
    };

    const hour = 7
    const color = determineBgColor(hour);
    setBgColor(color);
  }, []);

  return (
    <div className={`h-screen flex justify-center items-center  ${bgColor}`}>
      <h1 className="text-white text-4xl font-bold">Hello, Tailwind!</h1>
    </div>
  );
};

export default DigitalClock;
