// components/Projects.js
import Link from 'next/link';

export default function Projects({ isVisible }) {
  return (
    <section
      id="projects"
      className={`w-full max-w-4xl my-10 p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} snap-start snap-always dark:bg-gray-900 dark:text-gray-200`}
    >
      <h2 className="text-4xl font-extrabold mb-6 dark:text-yellow-400">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Sample Project */}
        <div className="p-8 border border-gray-300 rounded-lg bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-transform transform hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900 dark:border-gray-800 hover:scale-105">
          <h3 className="text-3xl font-bold mb-4 dark:text-yellow-400">Thesis project</h3>
          <p className="text-gray-800 mb-4 dark:text-gray-300">My Thesis Project in Collaboration with a Course Mate, where we received the highest grade (A).</p>
          <Link href="https://github.com/BunnyCode/truth-llm-bot" target="_blank" className="inline-block bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white font-semibold px-4 py-2 mb-2 rounded-md hover:bg-blue-700 dark:bg-gradient-to-r dark:from-yellow-500 dark:to-yellow-600 dark:text-black">View on GitHub</Link>
          <Link href="https://www.diva-portal.org/smash/get/diva2:1870150/FULLTEXT01.pdf" target="_blank" className="inline-block bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 ml-4 dark:bg-gradient-to-r dark:from-yellow-500 dark:to-yellow-600 dark:text-black">View PDF</Link>
        </div>
        <div className="p-8 border border-gray-300 rounded-lg bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-transform transform hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900 dark:border-gray-800 hover:scale-105">
          <h3 className="text-3xl font-bold mb-4 dark:text-yellow-400">Project 1: Machine-Learning</h3>
          <p className="text-gray-800 mb-4 dark:text-gray-300">Naïve Bayes machine learning algorithm.</p>
          <Link href="https://github.com/FredrikJurgell/A4-Machine-Learning" target="_blank" className="inline-block bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-gradient-to-r dark:from-yellow-500 dark:to-yellow-600 dark:text-black">View on GitHub</Link>
        </div>
        <div className="p-8 border border-gray-300 rounded-lg bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-transform transform hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900 dark:border-gray-800 hover:scale-105">
          <h3 className="text-3xl font-bold mb-4 dark:text-yellow-400">Project 2: Search-Engine</h3>
          <p className="text-gray-800 mb-4 dark:text-gray-300">Search engine for Wikipedia articles.</p>
          <Link href="https://github.com/FredrikJurgell/a3-search-engine" target="_blank" className="inline-block bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-gradient-to-r dark:from-yellow-500 dark:to-yellow-600 dark:text-black">View on GitHub</Link>
        </div>
        <div className="p-8 border border-gray-300 rounded-lg bg-gradient-to-r from-white via-gray-100 to-gray-200 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-transform transform hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900 dark:border-gray-800 hover:scale-105">
          <h3 className="text-3xl font-bold mb-4 dark:text-yellow-400">Project 3: Api-Design</h3>
          <p className="text-gray-800 mb-4 dark:text-gray-300">REST API.</p>
          <Link href="https://github.com/FredrikJurgell/assignment-api-design" target="_blank" className="inline-block bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-gradient-to-r dark:from-yellow-500 dark:to-yellow-600 dark:text-black">View on GitHub</Link>
        </div>
      </div>
    </section>
  );
}
