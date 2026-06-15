import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import Header from './components/Header';
import Home from './pages/Home';
import QuizConfig from './pages/QuizConfig';
import QuizPlay from './pages/QuizPlay';
import Results from './pages/Results';
import Leaderboard from './pages/Leaderboard';

export default function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-neo-bg text-neo-text font-poppins selection:bg-neo-accent selection:text-white">
          {/* Sticky Header */}
          <Header />

          {/* Core Content Area */}
          <main className="flex-1 flex flex-col justify-start pb-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz/config/:category" element={<QuizConfig />} />
              <Route path="/quiz/play" element={<QuizPlay />} />
              <Route path="/quiz/results" element={<Results />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="py-6 text-center text-xs font-semibold text-neo-text border-t border-gray-200/20">
            © {new Date().getFullYear()} QuizMaster • Designed in Neomorphism UI System
          </footer>
        </div>
      </Router>
    </QuizProvider>
  );
}
