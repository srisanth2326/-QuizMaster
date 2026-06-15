import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import StarRating from '../components/StarRating';
import confetti from 'canvas-confetti';

export default function Results() {
  const navigate = useNavigate();
  const {
    currentQuestions,
    score,
    answers,
    playerName,
    selectedCategory,
    difficulty,
    saveScoreToLeaderboard,
    resetQuiz,
  } = useQuiz();

  const [hasSaved, setHasSaved] = useState(false);

  const total = currentQuestions.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const skipped = answers.filter((a) => a.selected === null).length;
  const wrong = total - correct - skipped;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Calculate Average Time
  const totalTime = answers.reduce((sum, a) => sum + (a.timeSpent || 0), 0);
  const avgTime = answers.length > 0 ? (totalTime / answers.length).toFixed(1) : 0;

  // Safeguard: Redirect if no active game data is present
  useEffect(() => {
    if (total === 0) {
      navigate('/');
    }
  }, [total, navigate]);

  // Trigger Confetti Celebration if score is > 70%
  useEffect(() => {
    if (total > 0 && percentage >= 70) {
      // Fire confetti from left and right
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [percentage, total]);

  const handleSaveScore = () => {
    if (hasSaved) return;
    saveScoreToLeaderboard();
    setHasSaved(true);
  };

  const handlePlayAgain = () => {
    resetQuiz();
    navigate(`/quiz/config/${encodeURIComponent(selectedCategory)}`);
  };

  const handleGoHome = () => {
    resetQuiz();
    navigate('/');
  };

  if (total === 0) return null;

  return (
    <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-8 flex flex-col justify-center">
      <div className="p-8 rounded-3xl neo-raised flex flex-col space-y-8 items-center text-center">
        {/* Header */}
        <div>
          <span className="text-sm font-bold text-neo-accent uppercase tracking-widest">
            Quiz Complete!
          </span>
          <h1 className="text-3xl font-extrabold text-neo-textDark mt-1">
            How did you do, {playerName}?
          </h1>
          <p className="text-xs font-semibold text-neo-text mt-1">
            Category: {selectedCategory} • {difficulty}
          </p>
        </div>

        {/* Rating Stars */}
        <StarRating percentage={percentage} />

        {/* Score Ring Display */}
        <div className="w-44 h-44 rounded-full neo-raised flex items-center justify-center p-4">
          <div className="w-full h-full rounded-full neo-inset flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-neo-accent">{percentage}%</span>
            <span className="text-xs font-bold text-neo-text mt-1">
              {correct} / {total} Correct
            </span>
          </div>
        </div>

        {/* Performance Breakdown Cards */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl neo-inset flex flex-col items-center">
            <span className="text-2xl mb-1">✅</span>
            <span className="text-xs font-semibold text-neo-text">Correct</span>
            <span className="text-lg font-bold text-green-600 mt-1">{correct}</span>
          </div>
          
          <div className="p-4 rounded-2xl neo-inset flex flex-col items-center">
            <span className="text-2xl mb-1">❌</span>
            <span className="text-xs font-semibold text-neo-text">Wrong</span>
            <span className="text-lg font-bold text-neo-danger mt-1">{wrong}</span>
          </div>

          <div className="p-4 rounded-2xl neo-inset flex flex-col items-center">
            <span className="text-2xl mb-1">⏳</span>
            <span className="text-xs font-semibold text-neo-text">Skipped</span>
            <span className="text-lg font-bold text-yellow-600 mt-1">{skipped}</span>
          </div>

          <div className="p-4 rounded-2xl neo-inset flex flex-col items-center">
            <span className="text-2xl mb-1">⚡</span>
            <span className="text-xs font-semibold text-neo-text">Avg Time</span>
            <span className="text-lg font-bold text-neo-accent mt-1">{avgTime}s</span>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={handleSaveScore}
            disabled={hasSaved}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 ${
              hasSaved
                ? 'neo-inset text-green-600 font-extrabold cursor-default'
                : 'neo-btn-primary hover:scale-[1.02] active:scale-[0.98]'
            }`}
          >
            {hasSaved ? 'Saved to Leaderboard! ✓' : 'Save to Leaderboard 🏆'}
          </button>

          <button
            onClick={handlePlayAgain}
            className="flex-1 py-4 text-sm font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 neo-btn text-neo-textDark hover:scale-[1.02] active:scale-[0.98]"
          >
            Play Again 🔄
          </button>

          <button
            onClick={handleGoHome}
            className="flex-1 py-4 text-sm font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 neo-btn text-neo-textDark hover:scale-[1.02] active:scale-[0.98]"
          >
            Go Home 🏠
          </button>
        </div>
      </div>
    </div>
  );
}
