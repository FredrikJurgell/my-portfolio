// components/Cv.js
export default function Resume({ isVisible }) {
  return (
    <section
      id="cv"
      className={`w-full max-w-4xl my-10 md:my-20 p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} snap-start snap-always dark:bg-gray-800 dark:text-gray-200`}
    >
      <h2 className="text-4xl font-extrabold mb-6 dark:text-yellow-400">My Résumé</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-gray-300">Here you can view or download my full résumé, which includes details about my professional experience, education, and skills.</p>
      <a href="/resume.pdf" target="_blank" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-transform hover:scale-105 hover:bg-blue-700 dark:bg-yellow-400 dark:text-black">
        Download résumé
      </a>
    </section>
  );
}