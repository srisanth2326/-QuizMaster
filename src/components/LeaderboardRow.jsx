import React from 'react';

const CATEGORY_EMOJIS = {
  'general knowledge': '🧠',
  'science': '🔬',
  'history': '📜',
  'geography': '🗺️',
  'sports': '⚽',
  'movies & tv': '🎬',
  'technology': '💻',
  'music': '🎵',
};

export default function LeaderboardRow({ entry, rank }) {
  const { playerName, category, score, totalQuestions, percentage, difficulty, date } = entry;
  
  // Format Date
  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch (e) {
      return dateStr;
    }
  };

  const getRankBadge = (rankNum) => {
    if (rankNum === 1) return '🥇';
    if (rankNum === 2) return '🥈';
    if (rankNum === 3) return '🥉';
    return `#${rankNum}`;
  };

  const emoji = CATEGORY_EMOJIS[category?.toLowerCase()] || '❓';

  return (
    <div className="w-full p-4 md:p-5 rounded-2xl neo-raised flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-transform hover:scale-[1.01] duration-300">
      <div className="flex items-center space-x-4 w-full md:w-auto">
        {/* Rank Badge */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
          rank <= 3 ? 'text-2xl neo-inset bg-white/20' : 'text-neo-text neo-inset-sm'
        }`}>
          {getRankBadge(rank)}
        </div>
        
        {/* Player Name and Date */}
        <div>
          <h4 className="text-base font-bold text-neo-textDark">{playerName}</h4>
          <span className="text-[11px] font-medium text-neo-text">
            {formatDate(date)}
          </span>
        </div>
      </div>

      {/* Category, Difficulty & Score */}
      <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t md:border-t-0 pt-2 md:pt-0 border-gray-200/50">
        <div className="text-left md:text-right">
          <div className="flex items-center md:justify-end space-x-1.5">
            <span className="text-sm">{emoji}</span>
            <span className="text-sm font-semibold text-neo-textDark">{category}</span>
          </div>
          <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full neo-inset-sm text-neo-accent uppercase tracking-wider mt-1">
            {difficulty}
          </span>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-lg font-extrabold text-neo-accent">
            {score}/{totalQuestions}
          </span>
          <span className="text-xs font-semibold text-neo-text font-mono">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
}
