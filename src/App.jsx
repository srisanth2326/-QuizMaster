import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuizConfig from './pages/QuizConfig';
import QuizPlay from './pages/QuizPlay';
import Results from './pages/Results';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';
import TriviaGuides from './pages/TriviaGuides';
import GuideDetail from './pages/GuideDetail';

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
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/guides" element={<TriviaGuides />} />
              <Route path="/guides/:category" element={<GuideDetail />} />
            </Routes>
          </main>

          {/* Modular Footer */}
          <Footer />
        </div>
      </Router>
    </QuizProvider>
  );
}

