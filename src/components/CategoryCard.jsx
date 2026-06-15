import React from 'react';

export default function CategoryCard({ emoji, name, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-6 rounded-2xl neo-raised hover:neo-inset active:neo-inset transition-all duration-300 group focus:outline-none flex flex-col justify-between h-40"
    >
      <div className="text-4xl p-3 rounded-2xl neo-inset bg-neo-bg inline-block self-start transition-transform duration-300 group-hover:scale-110">
        {emoji}
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-bold text-neo-textDark group-hover:text-neo-accent transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs font-semibold text-neo-text mt-1">
          {count} Questions
        </p>
      </div>
    </button>
  );
}
