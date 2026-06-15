import React from 'react';

export default function ProgressBar({ current, total }) {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex justify-between items-center px-1">
        <span className="text-xs font-semibold text-neo-text uppercase tracking-wider">
          Progress
        </span>
        <span className="text-sm font-bold text-neo-textDark">
          Question {current} of {total}
        </span>
      </div>
      <div className="h-6 w-full rounded-full p-1 neo-inset flex items-center">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out flex justify-end items-center pr-2 bg-gradient-to-r from-neo-accent to-purple-500 shadow-sm"
          style={{ width: `${percentage}%`, minWidth: '1.5rem' }}
        >
          <span className="text-[10px] font-bold text-white">
            {Math.round(percentage)}%
          </span>
        </div>
      </div>
    </div>
  );
}
