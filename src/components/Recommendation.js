import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Recommendation() {
  const { darkMode } = useContext(DarkModeContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the component is only rendered on the client side
  }, []);

  if (!isClient) {
    return null; // Avoid rendering until after hydration
  }

  return (
    <section className="w-full max-w-4xl my-10 p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 dark:bg-gray-900 dark:text-gray-200">
      <h2 className="text-4xl font-extrabold mb-6 dark:text-yellow-400">Recommendations</h2>
      <div className="flex justify-center">
        <Image
          src={darkMode ? "/images/linkedin-recommendation-dark.png" : "/images/linkedin-recommendation-light.png"}
          alt="LinkedIn Recommendation Screenshot"
          width={800}
          height={600}
          className="rounded-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
}
