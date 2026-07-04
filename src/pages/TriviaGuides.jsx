import React from 'react';
import { useNavigate } from 'react-router-dom';

const GUIDES = [
  { name: 'General Knowledge', emoji: '🧠', summary: 'Explore broad global themes, currency types, volcanic statistics, and world trivia.' },
  { name: 'Science', emoji: '🔬', summary: 'Dive deep into biochemistry, atomic structures, the speeds of light, and human osteology.' },
  { name: 'History', emoji: '📜', summary: 'Study historic industrial periods, the fall of empire capitals, and ancient trade routes.' },
  { name: 'Geography', emoji: '🗺️', summary: 'Understand trench depths, federal capital structures, islands, and continental borders.' },
  { name: 'Sports', emoji: '⚽', summary: 'Review Olympic histories, tennis championship totals, home run counts, and soccer rules.' },
  { name: 'Movies & TV', emoji: '🎬', summary: 'Analyze Academy Awards statistics, box office rankings, script histories, and directors.' },
  { name: 'Technology', emoji: '💻', summary: 'Learn about internet history, networking, OS originators, and cryptography.' },
  { name: 'Music', emoji: '🎵', summary: 'Study classical composers, instrumental ranges, and historic pop music sales.' },
];

export default function TriviaGuides() {
  const navigate = useNavigate();

  const handleGuideSelect = (categoryName) => {
    navigate(`/guides/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="flex-1 max-w-5xl w-full mx-auto px-6 py-10 flex flex-col space-y-8">
      
      {/* Title Header */}
      <div className="p-8 rounded-3xl neo-raised text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold text-neo-accent uppercase tracking-widest">Study Center</span>
          <h1 className="text-3xl font-extrabold text-neo-textDark mt-1">Trivia Study Guides</h1>
          <p className="text-xs font-semibold text-neo-text mt-2">
            Read comprehensive overviews for each of our 8 core quiz categories to prepare for your next challenge.
          </p>
        </div>
        <div className="text-4xl p-4 rounded-2xl neo-inset bg-neo-bg inline-block self-center md:self-auto">
          📚
        </div>
      </div>

      {/* Grid of Study Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GUIDES.map((guide) => (
          <button
            key={guide.name}
            onClick={() => handleGuideSelect(guide.name)}
            className="p-6 rounded-2xl neo-raised hover:neo-inset active:neo-inset transition-all duration-300 text-left flex flex-col justify-between h-56 focus:outline-none group"
          >
            <div className="text-3xl p-2.5 rounded-xl neo-inset bg-neo-bg inline-block self-start group-hover:scale-105 transition-transform duration-300">
              {guide.emoji}
            </div>
            
            <div className="mt-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-neo-textDark group-hover:text-neo-accent transition-colors duration-200">
                  {guide.name}
                </h3>
                <p className="text-[11px] text-neo-text leading-relaxed mt-1 font-medium">
                  {guide.summary}
                </p>
              </div>
              <span className="text-[10px] font-bold text-neo-accent uppercase mt-2 inline-block">
                Read Guide →
              </span>
            </div>
          </button>
        ))}
      </div>

    </div>
  );
}
