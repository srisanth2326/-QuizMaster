import React from 'react';

export default function Timer({ timeLeft, duration }) {
  const radius = 45;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / duration) * circumference;

  const isLowTime = timeLeft <= 5;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-28 h-28 rounded-full flex items-center justify-center neo-raised p-2">
        {/* Inset background circle for depth */}
        <div className="absolute inset-2 rounded-full neo-inset"></div>
        
        <svg className="w-full h-full transform -rotate-90 z-10">
          {/* Track Circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-[#d1d8e6] fill-none"
            strokeWidth={strokeWidth}
          />
          {/* Progress Circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            className={`fill-none transition-all duration-1000 ease-linear ${
              isLowTime ? 'stroke-neo-danger' : 'stroke-neo-accent'
            }`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Numeric Display */}
        <div className="absolute flex flex-col items-center justify-center z-20">
          <span
            className={`text-2xl font-bold transition-colors duration-300 ${
              isLowTime ? 'text-neo-danger animate-pulse' : 'text-neo-textDark'
            }`}
          >
            {timeLeft}
          </span>
          <span className="text-[9px] text-neo-text font-semibold uppercase tracking-wider">
            Sec
          </span>
        </div>
      </div>
    </div>
  );
}
