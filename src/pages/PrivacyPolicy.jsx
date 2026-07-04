import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="flex-1 max-w-4xl w-full mx-auto px-6 py-10 flex flex-col space-y-8">
      
      {/* Header Card */}
      <div className="p-8 rounded-3xl neo-raised text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold text-neo-accent uppercase tracking-widest">Legal Docs</span>
          <h1 className="text-3xl font-extrabold text-neo-textDark mt-1">Privacy Policy</h1>
          <p className="text-xs font-semibold text-neo-text mt-2">
            Last Updated: {new Date().toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <div className="text-4xl p-4 rounded-2xl neo-inset bg-neo-bg inline-block self-center md:self-auto">
          🛡️
        </div>
      </div>

      {/* Policy Details */}
      <div className="p-8 rounded-3xl neo-raised flex flex-col space-y-6">
        
        {/* Intro */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">1. Overview</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            At QuizMaster, we respect your personal privacy. This Privacy Policy details the types of information we gather, 
            how we use it, and your choices regarding third-party vendors and advertising networks such as Google AdSense.
          </p>
        </section>

        {/* AdSense Mandatory Disclosure */}
        <section className="space-y-3 bg-neo-bg p-4 rounded-2xl neo-inset border-l-4 border-neo-accent">
          <h2 className="text-sm font-bold text-neo-textDark uppercase tracking-wider">⚠️ Important Google AdSense Disclosure</h2>
          <p className="text-xs text-neo-text leading-relaxed">
            * We use Google AdSense to serve advertisements on our website.
            <br />
            * Google, as a third-party vendor, uses cookies to serve ads on our site.
            <br />
            * Google's use of advertising cookies (such as the DART cookie) enables it and its partners to serve ads to our users 
              based on their visit to our site and/or other sites on the Internet.
            <br />
            * Users may opt out of personalized advertising by visiting Google's Ad Settings: 
            <a 
              href="https://www.google.com/settings/ads" 
              target="_blank" 
              rel="noreferrer" 
              className="text-neo-accent hover:underline font-semibold ml-1"
            >
              Google Ads Settings
            </a>.
          </p>
        </section>

        {/* Data Collection */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">2. Information We Collect</h2>
          <p className="text-sm text-neo-text leading-relaxed font-semibold">
            a. User-Provided Information:
          </p>
          <p className="text-sm text-neo-text leading-relaxed pl-4">
            We collect the player name you enter when initiating a quiz game. This name is used to compute, display, 
            and register rankings on the localized leaderboard page.
          </p>
          <p className="text-sm text-neo-text leading-relaxed font-semibold">
            b. Local Browser Storage:
          </p>
          <p className="text-sm text-neo-text leading-relaxed pl-4">
            QuizMaster stores your game score history and leaderboard entries inside your local browser's cache storage (`localStorage` key: `quizmaster_leaderboard`). 
            We do not host or store your personal data on external databases. All session data resides entirely on your device.
          </p>
        </section>

        {/* Cookies */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">3. Web Browser Cookies</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            Our site utilizes basic cookies and device identifiers to optimize layout components, remember config choices (like category, timer length), 
            and support Google AdSense analytics. You can choose to set your web browser to refuse cookies, or to alert you when cookies 
            are being sent. If you do so, note that some parts of the site may not function properly.
          </p>
        </section>

        {/* Third Party Links */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">4. Third-Party Websites</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            Users may find advertising or other content on our site that links to the sites of partners, suppliers, advertisers, 
            sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are 
            not responsible for the practices employed by websites linked to or from our Site.
          </p>
        </section>

        {/* Policy Changes */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">5. Agreement & Policy Updates</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. 
            We reserve the right to modify this policy at any time. Your continued use of the Site following the posting of changes 
            to this policy will be deemed your acceptance of those changes.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-neo-textDark border-b border-gray-200/20 pb-2">6. Contact Information</h2>
          <p className="text-sm text-neo-text leading-relaxed">
            If you have questions about this Privacy Policy, please contact our web administration team at 
            <span className="text-neo-accent font-semibold ml-1">support@quizmaster-trivia.app</span>.
          </p>
        </section>

      </div>
    </div>
  );
}
