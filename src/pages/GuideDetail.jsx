import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ARTICLES = {
  'general knowledge': {
    title: 'General Knowledge & Global Awareness Guide',
    emoji: '🧠',
    content: (
      <>
        <p className="text-sm text-neo-text leading-relaxed">
          General Knowledge forms the cornerstone of cognitive agility. It represents an individual's accumulated semantic memory, 
          extending beyond singular topics to include global cultures, currencies, geography, history, and literature. By expanding 
          general knowledge, you sharpen critical thinking and analytical capabilities.
        </p>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Key Study Areas</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neo-text space-y-2 pl-4">
          <li><strong>Geopolitical Capitals:</strong> Understanding global administration hubs (such as Ottawa for Canada, Bern for Switzerland, and Canberra for Australia) is essential for international context.</li>
          <li><strong>Currencies & Exchange:</strong> Navigating global transactions requires familiarity with national monetary systems, such as Japan's Yen, European Union's Euro, and Brazil's Real.</li>
          <li><strong>Volcanic and Natural Wonders:</strong> Learning about geological wonders like Mount Vesuvius (Italy) helps us comprehend history and natural systems.</li>
          <li><strong>Pioneers of Achievement:</strong> Celebrating historical milestones, such as Marie Curie becoming the first woman to receive a Nobel Prize in 1903.</li>
        </ul>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Takeaway</h3>
        <p className="text-sm text-neo-text leading-relaxed italic">
          Building a broad range of general knowledge establishes mental frameworks that make learning new topics faster and more intuitive.
        </p>
      </>
    )
  },
  'science': {
    title: 'The Principles of Natural & Physical Science',
    emoji: '🔬',
    content: (
      <>
        <p className="text-sm text-neo-text leading-relaxed">
          Science is the systematic study of the physical and natural world through observation, experimentation, and analysis. 
          By understanding the underlying mechanisms of biology, chemistry, and physics, we gain clarity on the universe's behavior.
        </p>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Fundamental Core Topics</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neo-text space-y-2 pl-4">
          <li><strong>Atomic Elements & Symbols:</strong> Carbon, Gold (Atomic Number 79, Symbol Au), Hydrogen, and Oxygen are the building blocks of matter. Water is represented chemically as H₂O.</li>
          <li><strong>Atmospheric Sciences:</strong> The Earth's atmosphere is primarily composed of Nitrogen (approx 78%) and Oxygen (approx 21%), which support biosphere respiration.</li>
          <li><strong>Human Anatomy:</strong> The adult human skeleton consists of exactly 206 bones, providing structure, movement, and vital organ protection.</li>
          <li><strong>Relativity & Astrophysics:</strong> Albert Einstein's General Relativity (1915) redefined gravity as the curvature of space-time by mass and energy, changing our understanding of orbits.</li>
        </ul>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Takeaway</h3>
        <p className="text-sm text-neo-text leading-relaxed italic">
          Scientific literacy empowers you to assess hypotheses objectively and understand how technology, biology, and chemistry interface in daily life.
        </p>
      </>
    )
  },
  'history': {
    title: 'World History, Empires, & Historical Epochs',
    emoji: '📜',
    content: (
      <>
        <p className="text-sm text-neo-text leading-relaxed">
          History is the study of human history through written records, archeological discoveries, and oral traditions. 
          Analyzing past conflicts, treaties, and socio-economic shifts helps us comprehend modern geopolitical dynamics.
        </p>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Critical Epochs to Study</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neo-text space-y-2 pl-4">
          <li><strong>The Roman Empire:</strong> From Augustus becoming the first Roman Emperor to construction projects like the Colosseum, Rome shaped Western governance, law, and roads.</li>
          <li><strong>The Industrial Revolution:</strong> Beginning in Great Britain in the mid-1700s, it shifted manual labor economies into steam-powered manufacturing hubs.</li>
          <li><strong>The Fall of Constantinople (1453):</strong> The capture of the Byzantine Empire's capital by the Ottoman Turks marked the end of the Middle Ages and paved the way for the European Renaissance.</li>
          <li><strong>Global Treaties:</strong> The Treaty of Versailles (1919) officially concluded World War I, redesigning European boundaries and establishing the League of Nations.</li>
        </ul>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Takeaway</h3>
        <p className="text-sm text-neo-text leading-relaxed italic">
          Studying history teaches us about the patterns of human behavior, showing how decisions made centuries ago continue to impact modern civilizations.
        </p>
      </>
    )
  },
  'geography': {
    title: 'Earth Geography, Boundaries, & Climate Zones',
    emoji: '🗺️',
    content: (
      <>
        <p className="text-sm text-neo-text leading-relaxed">
          Geography is the science of the Earth's lands, features, inhabitants, and natural phenomena. It provides a spatial 
          framework to analyze global populations, climate changes, and physical terrain variations.
        </p>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Essential Geographic Facts</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neo-text space-y-2 pl-4">
          <li><strong>Global Rivers and Peaks:</strong> The Nile River (Africa) is historically recorded as the longest river, while Mount Everest (Himalayas) is the tallest peak above sea level.</li>
          <li><strong>Oceanic Depths:</strong> The Mariana Trench in the Pacific Ocean is the deepest known location on Earth, descending nearly 11,000 meters.</li>
          <li><strong>Coastlines & Borders:</strong> Canada holds the record for the longest coastline of any nation. Some countries, like Turkey, are transcontinental, spanning both Europe and Asia.</li>
          <li><strong>Arid Ecosystems:</strong> The Sahara is the largest hot desert, covering much of North Africa, while Antarctica is classified as the largest cold desert.</li>
        </ul>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Takeaway</h3>
        <p className="text-sm text-neo-text leading-relaxed italic">
          Understanding geography helps you appreciate the environmental diversity of our planet and how geography shapes human societies and resources.
        </p>
      </>
    )
  },
  'sports': {
    title: 'The History and Rules of Global Athletics',
    emoji: '⚽',
    content: (
      <>
        <p className="text-sm text-neo-text leading-relaxed">
          Sports represent the pursuit of physical excellence, coordination, and team dynamics. Athletics have played an essential 
          role in cultural unity, dating back to the ancient civilizations of Greece and Mesoamerica.
        </p>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Athletic History & Rules</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neo-text space-y-2 pl-4">
          <li><strong>Modern Olympics:</strong> Re-established in Athens in 1896, the games showcase global sportsmanship. The Olympic flag's 5 rings represent the five inhabited continents.</li>
          <li><strong>Formula One Legends:</strong> Drivers like Michael Schumacher and Lewis Hamilton redefined motorsport limits, each securing seven World Championships.</li>
          <li><strong>Football / Soccer:</strong> Regulated globally by FIFA, soccer teams deploy exactly 11 players on the field. Brazil holds the record for the most FIFA World Cup titles (5).</li>
          <li><strong>Grand Slam Tennis:</strong> Champions like Novak Djokovic, Rafael Nadal, and Roger Federer have pushed tennis records, competing in the four annual Grand Slam tournaments.</li>
        </ul>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Takeaway</h3>
        <p className="text-sm text-neo-text leading-relaxed italic">
          Engaging in sports trivia reveals the dedication of athletes and the evolution of rules, gear, and strategies over time.
        </p>
      </>
    )
  },
  'movies & tv': {
    title: 'The Evolution of Cinema and Television Arts',
    emoji: '🎬',
    content: (
      <>
        <p className="text-sm text-neo-text leading-relaxed">
          Cinema and television represent a powerful medium for storytelling, reflecting cultural shifts and showcasing technological 
          innovations. From black-and-white silent movies to CGI blockbusters, visual storytelling continues to captivate audiences worldwide.
        </p>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Cinematic History Highlights</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neo-text space-y-2 pl-4">
          <li><strong>First Animated Features:</strong> Disney's *Snow White and the Seven Dwarfs* (1937) was the first full-length cel-animated movie, pioneering audio-visual production.</li>
          <li><strong>Box Office Milestones:</strong> James Cameron's *Avatar* (2009) remains the highest-grossing film of all time, redefining 3D visual effects and CGI technology.</li>
          <li><strong>Academy Award Records:</strong> Director John Ford holds the record for the most Best Director Oscars (4), shaping the classic Western genre.</li>
          <li><strong>Modern TV Phenomenons:</strong> Shows like *Game of Thrones* (set in Westeros) and *Breaking Bad* (featuring Walter White's alias Heisenberg) redefined episodic storytelling.</li>
        </ul>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Takeaway</h3>
        <p className="text-sm text-neo-text leading-relaxed italic">
          Cinematic history shows how technology and creative writing work together to capture the human experience on screen.
        </p>
      </>
    )
  },
  'technology': {
    title: 'Computing, Operating Systems, & Network Protocols',
    emoji: '💻',
    content: (
      <>
        <p className="text-sm text-neo-text leading-relaxed">
          Technology has transformed human communication and efficiency. From the early mechanical computers of the 19th century 
          to modern neural networks, computing defines the modern digital age.
        </p>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Key Technological Milestones</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neo-text space-y-2 pl-4">
          <li><strong>Pioneers of Computation:</strong> Alan Turing is regarded as the father of computer science, proposing the Turing Machine concept, while Tim Berners-Lee invented the World Wide Web in 1989.</li>
          <li><strong>Operating Systems:</strong> Apple's iOS and Google's Android (initially Android Inc. before acquisition) dominate mobile devices, while Windows operates on PCs.</li>
          <li><strong>Memory Architectures:</strong> RAM (Random Access Memory) provides high-speed, volatile storage for active processes, whereas CPUs serve as central processing units.</li>
          <li><strong>Asymmetric Cryptography:</strong> AES (Advanced Encryption Standard) is a symmetric block cipher chosen by the US government to protect sensitive digital information.</li>
        </ul>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Takeaway</h3>
        <p className="text-sm text-neo-text leading-relaxed italic">
          Understanding technology history helps you navigate software systems, programming languages, and networking infrastructure.
        </p>
      </>
    )
  },
  'music': {
    title: 'The Fundamentals of Music Theory and Genres',
    emoji: '🎵',
    content: (
      <>
        <p className="text-sm text-neo-text leading-relaxed">
          Music is an art form using sound organized through elements of rhythm, melody, harmony, and tempo. 
          From classical symphonies to modern hip-hop, music communicates emotion and cultural identity across boundaries.
        </p>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Musical Facts and Principles</h3>
        <ul className="list-disc list-inside text-xs md:text-sm text-neo-text space-y-2 pl-4">
          <li><strong>Instrument Mechanics:</strong> A standard piano features exactly 88 keys (52 white, 36 black), spanning more than seven octaves.</li>
          <li><strong>Classical Legends:</strong> Composers like Ludwig van Beethoven (*Moonlight Sonata*) and Wolfgang Amadeus Mozart (*The Magic Flute*) pioneered Western classical formats.</li>
          <li><strong>Record-Breaking Albums:</strong> Michael Jackson's *Thriller* (1982) remains the best-selling album of all time, merging pop, rock, and R&B styles.</li>
          <li><strong>Symphonic Ranges:</strong> Voice types are categorized by range, with Soprano being the highest female singing voice type, followed by Alto, Tenor, and Bass.</li>
        </ul>
        <h3 className="text-base font-bold text-neo-textDark mt-4">Takeaway</h3>
        <p className="text-sm text-neo-text leading-relaxed italic">
          Studying music theory and history highlights the math and creativity behind the melodies, rhythms, and songs that define our cultures.
        </p>
      </>
    )
  }
};

export default function GuideDetail() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category || '').toLowerCase();
  const article = ARTICLES[decodedCategory];

  if (!article) {
    return (
      <div className="flex-1 max-w-2xl w-full mx-auto px-6 py-12 text-center">
        <div className="p-8 rounded-3xl neo-raised flex flex-col items-center space-y-4">
          <span className="text-5xl">🔍</span>
          <h2 className="text-xl font-bold text-neo-textDark">Guide Not Found</h2>
          <p className="text-sm text-neo-text">
            We couldn't locate a trivia study guide for "{category}".
          </p>
          <Link to="/guides" className="px-5 py-2.5 text-xs font-bold text-white bg-neo-accent rounded-xl neo-btn-primary">
            Back to Study Guides
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-3xl w-full mx-auto px-6 py-10 flex flex-col space-y-8">
      
      {/* Back link */}
      <div>
        <Link 
          to="/guides" 
          className="px-4 py-2 text-xs font-bold rounded-xl neo-raised text-neo-text hover:text-neo-textDark inline-block"
        >
          ← Back to Guides
        </Link>
      </div>

      {/* Article Card */}
      <article className="p-8 rounded-3xl neo-raised flex flex-col space-y-6">
        
        {/* Title */}
        <div className="flex items-center space-x-4 border-b border-gray-200/20 pb-4">
          <span className="text-4xl p-2.5 rounded-2xl neo-inset bg-neo-bg">
            {article.emoji}
          </span>
          <div>
            <span className="text-xs font-bold text-neo-accent uppercase tracking-wider block">
              QuizMaster Study Manual
            </span>
            <h1 className="text-xl md:text-2xl font-extrabold text-neo-textDark">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-4 font-poppins">
          {article.content}
        </div>

      </article>

      {/* CTA Play Box */}
      <div className="p-6 rounded-3xl neo-inset flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-neo-textDark">Ready to test what you just read?</h3>
          <p className="text-[11px] text-neo-text">Play a quiz in this category and save your high score.</p>
        </div>
        <Link
          to={`/quiz/config/${encodeURIComponent(category || '')}`}
          className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-neo-accent rounded-xl neo-btn-primary whitespace-nowrap"
        >
          Play Category 🎮
        </Link>
      </div>

    </div>
  );
}
