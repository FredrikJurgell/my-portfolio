// components/Recommendation.js
import Image from 'next/image';

export default function Recommendation() {
  return (
    <section className="w-full max-w-4xl my-10 md:my-20 p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-extrabold mb-6 dark:text-yellow-400">Recommendations</h2>
      <div className="flex justify-center">
        <Image src="/images/linkedin-recommendation.png" alt="LinkedIn Recommendation Screenshot" width={800} height={600} className="rounded-lg" loading="lazy" />
      </div>
    </section>
  );
}