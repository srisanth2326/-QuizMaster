import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

export default function Header() {
  const location = useLocation();
  const { resetQuiz } = useQuiz();

  const handleLogoClick = () => {
    resetQuiz();
  };

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 bg-neo-bg">
      <div className="max-w-6xl mx-auto flex items-center justify-between rounded-2xl p-4 neo-raised">
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <span className="text-2xl font-bold text-neo-textDark tracking-tight flex items-center">
            🧠 <span className="ml-2 bg-gradient-to-r from-neo-accent to-purple-600 bg-clip-text text-transparent">QuizMaster</span>
          </span>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link
            to="/leaderboard"
            className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              location.pathname === '/leaderboard'
                ? 'neo-inset text-neo-accent'
                : 'neo-raised text-neo-text hover:text-neo-textDark'
            }`}
          >
            🏆 Leaderboard
          </Link>
        </nav>
      </div>
    </header>
  );
}
