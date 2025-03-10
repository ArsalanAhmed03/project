import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
    <div className="text-4xl font-bold mb-2 text-white animate-pulse">
      {value.toString().padStart(2, '0')}
    </div>
    <div className="text-sm uppercase tracking-wider text-white/80">{label}</div>
  </div>
);

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ months, days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 rounded-2xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#981A31] to-[#035B98] opacity-90"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-8">
          <Timer className="w-8 h-8 text-white mr-3" />
          <h2 className="text-3xl font-bold text-white">Get ready for the 18th Edition of IEEE Week!</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <TimeUnit value={timeLeft.months} label="Months" />
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
