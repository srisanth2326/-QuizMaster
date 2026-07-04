import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex-1 max-w-4xl w-full mx-auto px-6 py-10 flex flex-col space-y-8">
      
      {/* Title Card */}
      <div className="p-8 rounded-3xl neo-raised text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold text-neo-accent uppercase tracking-widest">About Us</span>
          <h1 className="text-3xl font-extrabold text-neo-textDark mt-1">QuizMaster Platform</h1>
          <p className="text-xs font-semibold text-neo-text mt-2">
            The intersection of cognitive science, game design, and modern interface aesthetics.
          </p>
        </div>
        <div className="text-4xl p-4 rounded-2xl neo-inset bg-neo-bg inline-block self-center md:self-auto">
          🧠
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Statement */}
        <div className="p-6 md:p-8 rounded-3xl neo-raised flex flex-col space-y-4">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">Our Mission</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            QuizMaster was founded with a simple goal: to make active learning and memory recall a beautiful, seamless experience. 
            Unlike traditional platforms that feature cluttered interfaces and aggressive advertisements, QuizMaster offers a 
            calm, focused workspace powered by neomorphism to help you concentrate on what truly matters—learning.
          </p>
          <p className="text-sm text-neo-text leading-relaxed">
            By engaging in spaced learning and active testing, our users can improve their retention span, enhance neural connectivity, 
            and expand their general awareness across key global disciplines.
          </p>
        </div>

        {/* Cognitive Science */}
        <div className="p-6 md:p-8 rounded-3xl neo-raised flex flex-col space-y-4">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">Trivia and Cognition</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            Scientific research demonstrates that retrieving facts from memory—known as the **testing effect**—strengthens memory 
            pathways far more effectively than passive studying or reading. Trivia triggers semantic memory networks, prompting 
            the brain to build stronger associations between diverse fields.
          </p>
          <p className="text-sm text-neo-text leading-relaxed">
            Whether you are recalling the molecular properties of water, evaluating the historical details of the Industrial Revolution, 
            or naming tech founders, you are practicing active brain training that supports long-term neuroplasticity.
          </p>
        </div>

        {/* Neomorphism Philosophy */}
        <div className="p-6 md:p-8 rounded-3xl neo-raised flex flex-col space-y-4 md:col-span-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">The Neomorphic Design System</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            QuizMaster utilizes **Neomorphism** (soft UI) to deliver a modern, tactile design. By merging flat design grids 
            with realistic, physical-looking drop shadows, neomorphic surfaces appear extruded from the background. 
            This mimics real-world physics, offering soft shadows and borderless cards that create a unified visual hierarchy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl neo-inset text-center">
              <span className="block text-xl font-bold text-neo-accent">#e0e5ec</span>
              <span className="text-[10px] text-neo-text font-bold uppercase tracking-wider mt-1 block">Root Color</span>
            </div>
            <div className="p-4 rounded-2xl neo-inset text-center">
              <span className="block text-xl font-bold text-neo-accent">Raised Shadow</span>
              <span className="text-[10px] text-neo-text font-bold uppercase tracking-wider mt-1 block">6px Soft Blending</span>
            </div>
            <div className="p-4 rounded-2xl neo-inset text-center">
              <span className="block text-xl font-bold text-neo-accent">Zero Borders</span>
              <span className="text-[10px] text-neo-text font-bold uppercase tracking-wider mt-1 block">Extrusion Effects</span>
            </div>
          </div>
        </div>

      </div>

      {/* CTA Box */}
      <div className="p-6 rounded-3xl neo-inset text-center flex flex-col items-center space-y-4">
        <h3 className="text-base font-bold text-neo-textDark">Ready to test your cognitive limits?</h3>
        <Link 
          to="/" 
          className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-neo-accent rounded-xl neo-btn-primary"
        >
          Explore Categories 🚀
        </Link>
      </div>

    </div>
  );
}
