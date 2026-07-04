import React from 'react';

export default function TermsOfService() {
  return (
    <div className="flex-1 max-w-4xl w-full mx-auto px-6 py-10 flex flex-col space-y-8">
      
      {/* Header Card */}
      <div className="p-8 rounded-3xl neo-raised text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold text-neo-accent uppercase tracking-widest">Legal Docs</span>
          <h1 className="text-3xl font-extrabold text-neo-textDark mt-1">Terms of Service</h1>
          <p className="text-xs font-semibold text-neo-text mt-2">
            Last Updated: {new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <div className="text-4xl p-4 rounded-2xl neo-inset bg-neo-bg inline-block self-center md:self-auto">
          ⚖️
        </div>
      </div>

      {/* Terms Content */}
      <div className="p-8 rounded-3xl neo-raised flex flex-col space-y-6">
        
        {/* Accept */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">1. Acceptance of Terms</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            By accessing and using QuizMaster, you agree to comply with and be bound by the following Terms of Service. 
            If you do not agree to these terms, please do not use this application.
          </p>
        </section>

        {/* Use License */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">2. Use License & Intellectual Property</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            All code, UI designs, questions bank data, graphics, and script modules inside QuizMaster are the intellectual property 
            of the platform developers. We grant you a limited, non-transferable, revocable license to access the quiz material 
            for personal, non-commercial educational purposes.
          </p>
          <p className="text-sm text-neo-text leading-relaxed font-semibold">
            You must not:
          </p>
          <ul className="list-disc list-inside text-sm text-neo-text pl-4 space-y-1">
            <li>Copy, modify, or scrape our database of questions for other platforms.</li>
            <li>Decompile or reverse-engineer any component of this website.</li>
            <li>Use the trademarked term "QuizMaster" without prior authorization.</li>
          </ul>
        </section>

        {/* Leaderboard Policy */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">3. Fair Play & Leaderboard Integrity</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            The local leaderboard exists to foster a fun, competitive environment for all users. You agree to utilize only your 
            actual scores. The site administrators reserve the right to erase, modify, or block usernames and ranking records 
            deemed offensive, abusive, or generated via automated API manipulation.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">4. Disclaimer of Warranties</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            QuizMaster is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, 
            regarding the accuracy, completeness, or reliability of the questions, answers, timers, or results presented on this site. 
            Any factual errors are purely accidental.
          </p>
        </section>

        {/* Liability */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">5. Limitations of Liability</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            In no event shall QuizMaster or its creators be liable for any damages (including, without limitation, damages for loss of 
            data or profit, or due to business interruption) arising out of the use or inability to use the materials on this site.
          </p>
        </section>

        {/* Governing Law */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">6. Governing Law</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            Any claim relating to QuizMaster shall be governed by the laws of the jurisdiction in which the site owners operate, 
            without regard to its conflict of law provisions.
          </p>
        </section>

      </div>
    </div>
  );
}
