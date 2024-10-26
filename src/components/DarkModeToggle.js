// components/DarkModeToggle.js
export default function DarkModeToggle({ toggleDarkMode, darkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 md:p-4 bg-blue-600 text-white font-bold rounded-md transition-transform hover:scale-105 hover:bg-blue-700 dark:bg-yellow-400 dark:text-black z-50"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}