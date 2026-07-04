import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: "How are my quiz scores calculated?",
    answer: "Your score represents the number of questions answered correctly out of the total questions selected. Each correct answer awards 1 point. There are no penalty deductions for incorrect selections or skipped questions."
  },
  {
    question: "How does the question timer work?",
    answer: "Each category is configured with a global timer duration per question (15, 30, or 60 seconds). When you initiate a question, the timer immediately counts down. If it reaches zero before you make a selection, the question is marked as skipped (incorrect) and the game moves forward."
  },
  {
    question: "How do I save my score to the leaderboard?",
    answer: "Upon completing a quiz session, you will see a 'Results' screen. Simply click the 'Save to Leaderboard' button. Your playerName, score, category, difficulty setting, and current date will be compiled and cached locally."
  },
  {
    question: "Where is my leaderboard history saved?",
    answer: "All score statistics are saved directly inside your web browser's local cache storage ('localStorage'). We do not store or transmit your scores to external database servers, giving you complete custody of your local browser data."
  },
  {
    question: "Why is the website styled with soft lights and shadows?",
    answer: "QuizMaster is styled using Neomorphism (Soft UI). This aesthetic uses precise box-shadow formulas to emulate physical lighting, making containers appear extruded out of, or indented into, the flat grey background. This minimizes visual clutter and reduces eye strain."
  },
  {
    question: "Are all trivia questions factually correct?",
    answer: "Yes! Every single question in our bank of 120 trivia entries has been factually researched, cross-referenced, and double-checked across authoritative educational directories and global reference archives."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-10 flex flex-col space-y-8">
      
      {/* Header Panel */}
      <div className="p-8 rounded-3xl neo-raised text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold text-neo-accent uppercase tracking-widest">Platform Help</span>
          <h1 className="text-3xl font-extrabold text-neo-textDark mt-1">Frequently Asked Questions</h1>
          <p className="text-xs font-semibold text-neo-text mt-2">
            Find immediate answers regarding scoring rules, timer controls, and neomorphic UI design.
          </p>
        </div>
        <div className="text-4xl p-4 rounded-2xl neo-inset bg-neo-bg inline-block self-center md:self-auto">
          ❓
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-6">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`rounded-2xl transition-all duration-300 ${
                isOpen ? 'neo-inset p-5' : 'neo-raised p-5'
              }`}
            >
              {/* Question Trigger */}
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-sm md:text-base font-bold text-neo-textDark hover:text-neo-accent transition-colors duration-200">
                  {item.question}
                </span>
                <span className={`text-sm transform transition-transform duration-300 font-bold ${
                  isOpen ? 'rotate-180 text-neo-accent' : 'text-neo-text'
                }`}>
                  ▼
                </span>
              </button>

              {/* Answer Content */}
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-40 mt-4 border-t border-gray-200/20 pt-4' : 'max-h-0'
                }`}
              >
                <p className="text-xs md:text-sm text-neo-text leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
