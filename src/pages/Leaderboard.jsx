import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import LeaderboardRow from '../components/LeaderboardRow';

const TABS = [
  'All',
  'General Knowledge',
  'Science',
  'History',
  'Geography',
  'Sports',
  'Movies & TV',
  'Technology',
  'Music',
];

export default function Leaderboard() {
  const { leaderboard, clearLeaderboard } = useQuiz();
  const [activeTab, setActiveTab] = useState('All');

  const handleClear = () => {
    if (
      window.confirm(
        'Are you sure you want to clear all high scores from the leaderboard? This action cannot be undone.'
      )
    ) {
      clearLeaderboard();
    }
  };

  // Filter and limit to top 20
  const filteredLeaderboard = leaderboard
    .filter((entry) => {
      if (activeTab === 'All') return true;
      return entry.category?.toLowerCase() === activeTab.toLowerCase();
    })
    .slice(0, 20);

  return (
    <div className="flex-1 max-w-4xl w-full mx-auto px-6 py-8 flex flex-col space-y-8">
      {/* Header Panel */}
      <div className="p-6 md:p-8 rounded-3xl neo-raised flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold text-neo-accent uppercase tracking-widest">
            Hall of Fame
          </span>
          <h1 className="text-3xl font-extrabold text-neo-textDark mt-1">
            Top Players
          </h1>
          <p className="text-xs font-semibold text-neo-text mt-1">
            Browse overall achievements or filter by category
          </p>
        </div>

        {leaderboard.length > 0 && (
          <button
            onClick={handleClear}
            className="px-5 py-3 text-sm font-bold text-white rounded-xl neo-btn-danger self-start md:self-auto"
          >
            Clear Leaderboard 🗑️
          </button>
        )}
      </div>

      {/* Tabs Filter (Horizontally scrollable on mobile) */}
      <div className="w-full overflow-x-auto pb-2 -mx-6 px-6 md:mx-0 md:px-0">
        <div className="flex space-x-3 min-w-max">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeTab === tab
                  ? 'neo-inset text-neo-accent font-extrabold'
                  : 'neo-raised text-neo-text hover:text-neo-textDark'
              }`}
            >
              {tab === 'All' ? '🌐 All' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* List of Entries */}
      <div className="space-y-4">
        {filteredLeaderboard.length > 0 ? (
          filteredLeaderboard.map((entry, index) => (
            <LeaderboardRow
              key={entry.id}
              entry={entry}
              rank={index + 1}
            />
          ))
        ) : (
          <div className="p-12 rounded-3xl neo-inset flex flex-col items-center justify-center text-center">
            <span className="text-5xl mb-4">👽</span>
            <h3 className="text-lg font-bold text-neo-textDark">
              No Scores in this Category
            </h3>
            <p className="text-sm text-neo-text mt-1 max-w-sm">
              {activeTab === 'All'
                ? 'Nobody has saved a score yet! Play a quiz to add your name to the wall.'
                : `No one has completed the ${activeTab} quiz yet. Be the pioneer and set the first record!`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
