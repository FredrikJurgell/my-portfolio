// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 mt-auto snap-start snap-always dark:bg-gray-800 dark:text-gray-200">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <a href="https://linkedin.com/in/fredrik-jurgell/" target="_blank" className="text-blue-300 font-bold hover:text-white dark:hover:text-yellow-300">LinkedIn</a>
        <a href="https://github.com/FredrikJurgell" target="_blank" className="text-blue-300 font-bold hover:text-white dark:hover:text-yellow-300">GitHub</a>
      </div>
      <p className="text-center mt-4">&copy; 2024 Fredrik Jurgell. All rights reserved.</p>
      <p className="text-center mt-2">Email: <a href="mailto:fredrik.jurgell@hotmail.com" className="text-blue-300 font-bold hover:text-white dark:hover:text-yellow-300">Fredrik.jurgell@hotmail.com</a></p>
    </footer>
  );
}
