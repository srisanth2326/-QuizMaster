import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import CategoryCard from '../components/CategoryCard';
import LeaderboardRow from '../components/LeaderboardRow';

const CATEGORIES = [
  { name: 'General Knowledge', emoji: '🧠', count: 15 },
  { name: 'Science', emoji: '🔬', count: 15 },
  { name: 'History', emoji: '📜', count: 15 },
  { name: 'Geography', emoji: '🗺️', count: 15 },
  { name: 'Sports', emoji: '⚽', count: 15 },
  { name: 'Movies & TV', emoji: '🎬', count: 15 },
  { name: 'Technology', emoji: '💻', count: 15 },
  { name: 'Music', emoji: '🎵', count: 15 },
];

export default function Home() {
  const navigate = useNavigate();
  const { setSelectedCategory, leaderboard } = useQuiz();

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
    navigate(`/quiz/config/${encodeURIComponent(categoryName)}`);
  };

  const topScores = leaderboard.slice(0, 5);

  return (
    <div className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 flex flex-col space-y-12">
      {/* Hero Banner */}
      <section className="text-center py-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neo-textDark tracking-tight flex items-center justify-center">
          ⚡ <span className="bg-gradient-to-r from-neo-accent to-purple-600 bg-clip-text text-transparent">QuizMaster</span>
        </h1>
        <p className="text-sm md:text-base text-neo-text mt-3 font-medium max-w-md">
          Challenge your intellect with premium trivia questions and climb the global leaderboard!
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Categories Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl neo-raised">
            <h2 className="text-xl font-bold text-neo-textDark mb-1">
              Choose a Category
            </h2>
            <p className="text-xs font-semibold text-neo-text">
              Select a topic to configure your trivia challenge
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.name}
                name={cat.name}
                emoji={cat.emoji}
                count={cat.count}
                onClick={() => handleCategorySelect(cat.name)}
              />
            ))}
          </div>
        </div>

        {/* Leaderboard Preview Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl neo-raised flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-neo-textDark mb-1">
                  Top Players
                </h2>
                <p className="text-xs font-semibold text-neo-text">
                  Hall of Fame Leaders
                </p>
              </div>
              <span className="text-2xl">🏆</span>
            </div>

            <div className="space-y-4 flex-1">
              {topScores.length > 0 ? (
                topScores.map((entry, index) => (
                  <LeaderboardRow
                    key={entry.id}
                    entry={entry}
                    rank={index + 1}
                  />
                ))
              ) : (
                <div className="h-48 rounded-2xl neo-inset flex flex-col items-center justify-center text-center p-4">
                  <span className="text-4xl mb-2">⭐</span>
                  <p className="text-sm font-semibold text-neo-textDark">
                    No High Scores Yet
                  </p>
                  <p className="text-xs text-neo-text mt-1">
                    Be the first to complete a quiz and claim your spot!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
