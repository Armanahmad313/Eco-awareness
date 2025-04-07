import React, { useState, useEffect } from 'react';

interface TimeLeft {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ClimateClock: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the target date to 2030 (this is an example - you can adjust based on your needs)
    const targetDate = new Date('2030-01-01T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          years,
          days,
          hours,
          minutes,
          seconds
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Climate Action Countdown</h2>
      <div className="grid grid-cols-5 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">{timeLeft.years}</div>
          <div className="text-sm text-gray-600">Years</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">{timeLeft.days}</div>
          <div className="text-sm text-gray-600">Days</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">{timeLeft.hours}</div>
          <div className="text-sm text-gray-600">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-600">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-600">Seconds</div>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-600">
        Time remaining to achieve climate goals
      </p>
    </div>
  );
};

export default ClimateClock; 