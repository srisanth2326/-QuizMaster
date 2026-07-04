import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 mt-12 bg-neo-bg">
      <div className="max-w-6xl mx-auto rounded-3xl p-8 neo-raised flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col space-y-2">
          <span className="text-xl font-bold text-neo-textDark flex items-center">
            🧠 <span className="ml-2 bg-gradient-to-r from-neo-accent to-purple-600 bg-clip-text text-transparent">QuizMaster</span>
          </span>
          <p className="text-xs text-neo-text font-medium max-w-xs leading-relaxed">
            A premium neomorphic platform to challenge your intelligence and master trivia across diverse topics.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-auto">
          {/* Platform Links */}
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold text-neo-textDark uppercase tracking-wider">Platform</span>
            <Link to="/" className="text-xs text-neo-text hover:text-neo-accent font-semibold transition-colors">Home</Link>
            <Link to="/leaderboard" className="text-xs text-neo-text hover:text-neo-accent font-semibold transition-colors">Leaderboard</Link>
            <Link to="/faq" className="text-xs text-neo-text hover:text-neo-accent font-semibold transition-colors">FAQs</Link>
          </div>

          {/* Learn Links */}
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold text-neo-textDark uppercase tracking-wider">Learn</span>
            <Link to="/guides" className="text-xs text-neo-text hover:text-neo-accent font-semibold transition-colors">Study Guides</Link>
            <Link to="/about" className="text-xs text-neo-text hover:text-neo-accent font-semibold transition-colors">About Us</Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col space-y-2 col-span-2 sm:col-span-1">
            <span className="text-xs font-bold text-neo-textDark uppercase tracking-wider">Legal</span>
            <Link to="/privacy" className="text-xs text-neo-text hover:text-neo-accent font-semibold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-neo-text hover:text-neo-accent font-semibold transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
      
      {/* copyright */}
      <div className="max-w-6xl mx-auto text-center mt-6 text-[10px] font-semibold text-neo-text tracking-wider uppercase">
        © {new Date().getFullYear()} QuizMaster • All Rights Reserved.
      </div>
    </footer>
  );
}
