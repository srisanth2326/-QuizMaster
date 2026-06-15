import React from 'react';

export default function AnswerOption({
  text,
  letter,
  isSelected,
  isCorrectOption,
  showResult,
  onClick,
  isDisabled
}) {
  let shadowStyle = {};
  let borderStyle = 'border-2 border-transparent';
  let textStyle = 'text-neo-textDark';

  if (showResult) {
    if (isCorrectOption) {
      // Correct answer gets a green glow
      shadowStyle = {
        boxShadow: '0 0 15px rgba(67, 233, 123, 0.6), inset 0 0 10px rgba(67, 233, 123, 0.4)',
        backgroundColor: '#e3fcf0',
      };
      borderStyle = 'border-2 border-neo-success';
      textStyle = 'text-green-800 font-bold';
    } else if (isSelected && !isCorrectOption) {
      // Wrong selection gets a red glow
      shadowStyle = {
        boxShadow: '0 0 15px rgba(255, 101, 132, 0.6), inset 0 0 10px rgba(255, 101, 132, 0.4)',
        backgroundColor: '#fdebee',
      };
      borderStyle = 'border-2 border-neo-danger';
      textStyle = 'text-red-800 font-bold';
    } else {
      // Unselected and incorrect answers become sunken/flat
      shadowStyle = {
        boxShadow: 'inset 2px 2px 5px #b8bec7, inset -2px -2px 5px #ffffff',
        opacity: 0.5,
      };
    }
  } else {
    // Normal state
    if (isSelected) {
      shadowStyle = {
        boxShadow: 'inset 6px 6px 12px #b8bec7, inset -6px -6px 12px #ffffff',
      };
      textStyle = 'text-neo-accent font-semibold';
    } else {
      shadowStyle = {
        boxShadow: '6px 6px 12px #b8bec7, -6px -6px 12px #ffffff',
      };
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={shadowStyle}
      className={`w-full p-5 rounded-2xl transition-all duration-300 flex items-center space-x-4 focus:outline-none text-left ${borderStyle} ${
        !showResult ? 'hover:scale-[1.01] active:scale-[0.99]' : ''
      }`}
    >
      {/* Option Letter Indicator */}
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${
          showResult
            ? isCorrectOption
              ? 'bg-neo-success text-white'
              : isSelected
              ? 'bg-neo-danger text-white'
              : 'bg-gray-300 text-gray-500'
            : isSelected
            ? 'bg-neo-accent text-white'
            : 'bg-neo-bg text-neo-text neo-inset-sm'
        }`}
      >
        {letter}
      </span>
      
      {/* Option Text */}
      <span className={`text-sm md:text-base font-medium flex-1 ${textStyle}`}>
        {text}
      </span>
    </button>
  );
}
