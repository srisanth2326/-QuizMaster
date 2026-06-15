import React, { createContext, useContext, useState, useEffect } from 'react';
import { questions as questionBank } from '../data/questions';

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const QuizProvider = ({ children }) => {
  // Config state
  const [selectedCategory, setSelectedCategory] = useState('');
  const [difficulty, setDifficulty] = useState('Medium'); // 'Easy' | 'Medium' | 'Hard'
  const [questionCount, setQuestionCount] = useState(10); // 5 | 10 | 15
  const [timerDuration, setTimerDuration] = useState(30); // 15 | 30 | 60
  const [playerName, setPlayerName] = useState('');

  // Game state
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]); // [{ questionId, selected, correct, isCorrect, timeSpent }]
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  // Leaderboard state
  const [leaderboard, setLeaderboard] = useState([]);

  // Load leaderboard on mount
  useEffect(() => {
    const stored = localStorage.getItem('quizmaster_leaderboard');
    if (stored) {
      try {
        setLeaderboard(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse leaderboard from localStorage', e);
        setLeaderboard([]);
      }
    }
  }, []);

  // Sync leaderboard to localStorage
  const saveLeaderboard = (newLeaderboard) => {
    setLeaderboard(newLeaderboard);
    localStorage.setItem('quizmaster_leaderboard', JSON.stringify(newLeaderboard));
  };

  // Start the quiz
  const startQuiz = () => {
    // Filter questions by selected category
    const categoryQuestions = questionBank.filter(
      (q) => q.category.toLowerCase() === selectedCategory.toLowerCase()
    );

    // Group by selected difficulty and other difficulties
    const preferred = categoryQuestions.filter(
      (q) => q.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
    const others = categoryQuestions.filter(
      (q) => q.difficulty.toLowerCase() !== difficulty.toLowerCase()
    );

    // Shuffle both parts
    const shuffledPreferred = shuffleArray(preferred);
    const shuffledOthers = shuffleArray(others);

    // Combine them prioritizing selected difficulty
    const combined = [...shuffledPreferred, ...shuffledOthers];

    // Slice to the requested question count
    const selectedQuestions = combined.slice(0, questionCount);

    // Map questions to shuffle their options
    const processedQuestions = selectedQuestions.map((q) => ({
      ...q,
      shuffledOptions: shuffleArray(q.options),
    }));

    setCurrentQuestions(processedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setIsQuizActive(true);
    setIsQuizComplete(false);
  };

  // Answer current question
  const answerQuestion = (selectedOption, timeSpent) => {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    // If selectedOption is null, it means time ran out
    const isCorrect = selectedOption === currentQuestion.correct;

    const newAnswer = {
      questionId: currentQuestion.id,
      questionText: currentQuestion.question,
      selected: selectedOption, // null if skipped/timed out
      correct: currentQuestion.correct,
      isCorrect,
      timeSpent,
    };

    setAnswers((prev) => [...prev, newAnswer]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  // Move to the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizActive(false);
      setIsQuizComplete(true);
    }
  };

  // Reset/Restart game config
  const resetQuiz = () => {
    setIsQuizActive(false);
    setIsQuizComplete(false);
    setCurrentQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
  };

  // Save current score to leaderboard
  const saveScoreToLeaderboard = (nameOverride) => {
    const nameToSave = nameOverride || playerName || 'Anonymous';
    
    // Calculate performance stats
    const percentage = Math.round((score / currentQuestions.length) * 100);

    const newEntry = {
      id: Date.now().toString(),
      playerName: nameToSave,
      category: selectedCategory,
      score: score,
      totalQuestions: currentQuestions.length,
      percentage: percentage,
      difficulty: difficulty,
      date: new Date().toISOString(),
    };

    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => {
        // Sort by score descending first
        if (b.percentage !== a.percentage) {
          return b.percentage - a.percentage;
        }
        // Then by absolute score
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // Then by date descending (most recent first)
        return new Date(b.date) - new Date(a.date);
      });

    saveLeaderboard(updatedLeaderboard);
  };

  // Clear leaderboard
  const clearLeaderboard = () => {
    saveLeaderboard([]);
  };

  return (
    <QuizContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        difficulty,
        setDifficulty,
        questionCount,
        setQuestionCount,
        timerDuration,
        setTimerDuration,
        playerName,
        setPlayerName,
        currentQuestions,
        currentQuestionIndex,
        score,
        answers,
        isQuizActive,
        isQuizComplete,
        leaderboard,
        startQuiz,
        answerQuestion,
        nextQuestion,
        resetQuiz,
        saveScoreToLeaderboard,
        clearLeaderboard,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
