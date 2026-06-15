import React from 'react';

export default function StarRating({ percentage }) {
  // Determine number of stars:
  // >= 80% -> 3 stars
  // >= 45% -> 2 stars
  // < 45% -> 1 star
  let starCount = 1;
  if (percentage >= 80) {
    starCount = 3;
  } else if (percentage >= 45) {
    starCount = 2;
  }

  const renderStar = (index) => {
    const isActive = index < starCount;
    return (
      <div
        key={index}
        className={`w-16 h-16 rounded-full flex items-center justify-center m-2 transition-all duration-500 ${
          isActive
            ? 'neo-raised scale-110 text-yellow-500 text-3xl'
            : 'neo-inset text-gray-300 text-2xl opacity-60'
        }`}
        style={isActive ? { boxShadow: '4px 4px 8px #b8bec7, -4px -4px 8px #ffffff' } : {}}
      >
        ⭐
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center py-4">
      {[0, 1, 2].map((i) => renderStar(i))}
    </div>
  );
}
