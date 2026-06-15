import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import ProgressBar from '../components/ProgressBar';
import Timer from '../components/Timer';
import AnswerOption from '../components/AnswerOption';

export default function QuizPlay() {
  const navigate = useNavigate();
  const {
    currentQuestions,
    currentQuestionIndex,
    score,
    timerDuration,
    isQuizActive,
    isQuizComplete,
    answerQuestion,
    nextQuestion,
  } = useQuiz();

  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Safeguard: Redirect to home if there is no active game session
  useEffect(() => {
    if (!isQuizActive && !isQuizComplete) {
      navigate('/');
    }
  }, [isQuizActive, isQuizComplete, navigate]);

  // Safeguard: Redirect to results if the quiz is finished
  useEffect(() => {
    if (isQuizComplete) {
      navigate('/quiz/results');
    }
  }, [isQuizComplete, navigate]);

  // Timer loop
  useEffect(() => {
    if (hasAnswered || !currentQuestion) return;

    setTimeLeft(timerDuration);
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuestionIndex, hasAnswered, currentQuestion]);

  const handleTimeout = () => {
    setSelectedOption(null);
    setHasAnswered(true);
    // Submit answer as null (time spent is the full duration)
    answerQuestion(null, timerDuration);
  };

  const handleOptionClick = (optionText) => {
    if (hasAnswered) return;
    setSelectedOption(optionText);
    setHasAnswered(true);
    const timeSpent = timerDuration - timeLeft;
    answerQuestion(optionText, timeSpent);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    nextQuestion();
  };

  if (!currentQuestion) return null;

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="flex-1 max-w-4xl w-full mx-auto px-6 py-6 flex flex-col justify-between space-y-8">
      {/* Top Bar with Progress & Score */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl neo-raised">
        <div className="flex-1">
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={currentQuestions.length}
          />
        </div>
        <div className="flex items-center justify-between md:justify-end gap-6 md:pl-6">
          <div className="text-right">
            <span className="text-xs font-semibold text-neo-text uppercase tracking-wider block">
              Score
            </span>
            <span className="text-xl font-extrabold text-neo-accent">
              {score} points
            </span>
          </div>
        </div>
      </div>

      {/* Timer and Question Area */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Circle Timer */}
        <div className="flex-shrink-0">
          <Timer timeLeft={timeLeft} duration={timerDuration} />
        </div>
        
        {/* Question Text */}
        <div className="flex-1 w-full p-6 md:p-8 rounded-3xl neo-raised min-h-[140px] flex items-center justify-center text-center">
          <h2 className="text-lg md:text-xl font-bold text-neo-textDark leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {currentQuestion.shuffledOptions.map((option, idx) => (
          <AnswerOption
            key={idx}
            text={option}
            letter={optionLetters[idx]}
            isSelected={selectedOption === option}
            isCorrectOption={option === currentQuestion.correct}
            showResult={hasAnswered}
            onClick={() => handleOptionClick(option)}
            isDisabled={hasAnswered}
          />
        ))}
      </div>

      {/* Action / Next Question Area */}
      <div className="w-full min-h-[72px] flex justify-center items-center">
        {hasAnswered && (
          <button
            onClick={handleNext}
            className="px-8 py-3.5 text-base font-bold text-white bg-neo-accent rounded-2xl neo-btn-primary hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300 w-full sm:w-auto"
          >
            {currentQuestionIndex === currentQuestions.length - 1
              ? 'Finish Quiz 🏁'
              : 'Next Question ➡️'}
          </button>
        )}
      </div>
    </div>
  );
}
