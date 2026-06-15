import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

export default function QuizConfig() {
  const { category } = useParams();
  const navigate = useNavigate();
  const {
    setSelectedCategory,
    difficulty,
    setDifficulty,
    questionCount,
    setQuestionCount,
    timerDuration,
    setTimerDuration,
    playerName,
    setPlayerName,
    startQuiz,
  } = useQuiz();

  // Sync category parameter with context
  useEffect(() => {
    if (category) {
      setSelectedCategory(decodeURIComponent(category));
    }
  }, [category, setSelectedCategory]);

  const handleStart = (e) => {
    e.preventDefault();
    if (!playerName.trim()) {
      alert('Please enter your name to start the quiz!');
      return;
    }
    startQuiz();
    navigate('/quiz/play');
  };

  return (
    <div className="flex-1 max-w-2xl w-full mx-auto px-6 py-10 flex flex-col justify-center">
      <div className="p-8 rounded-3xl neo-raised flex flex-col space-y-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-bold text-neo-accent uppercase tracking-widest">
            Configuration
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-neo-textDark mt-1">
            {category ? decodeURIComponent(category) : 'Trivia Quiz'}
          </h1>
          <p className="text-xs font-semibold text-neo-text mt-2">
            Configure your gameplay settings below
          </p>
        </div>

        <form onSubmit={handleStart} className="space-y-6">
          {/* Player Name */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="playerName" className="text-sm font-bold text-neo-textDark">
              Player Name
            </label>
            <input
              type="text"
              id="playerName"
              placeholder="Enter your name..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              maxLength={20}
              className="neo-input w-full text-base"
              required
            />
          </div>

          {/* Difficulty Selection */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-bold text-neo-textDark">
              Select Difficulty
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['Easy', 'Medium', 'Hard'].map((diff) => (
                <button
                  key={diff}
                  type="button"
                  onClick={() => setDifficulty(diff)}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    difficulty === diff
                      ? 'neo-inset text-neo-accent font-bold'
                      : 'neo-raised text-neo-text hover:text-neo-textDark'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Number of Questions */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-bold text-neo-textDark">
              Number of Questions
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[5, 10, 15].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setQuestionCount(count)}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    questionCount === count
                      ? 'neo-inset text-neo-accent font-bold'
                      : 'neo-raised text-neo-text hover:text-neo-textDark'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* Timer per Question */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-bold text-neo-textDark">
              Timer per Question
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[15, 30, 60].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setTimerDuration(time)}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    timerDuration === time
                      ? 'neo-inset text-neo-accent font-bold'
                      : 'neo-raised text-neo-text hover:text-neo-textDark'
                  }`}
                >
                  {time}s
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-4 text-base font-bold uppercase tracking-wider text-white bg-neo-accent rounded-2xl transition-all duration-300 neo-btn-primary"
            >
              Start Quiz 🚀
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
