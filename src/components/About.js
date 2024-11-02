// components/About.js
export default function About({ isVisible }) {
  return (
    <section
      id="about"
      className={`w-full max-w-4xl my-10 p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} snap-start snap-always dark:bg-gray-900 dark:text-gray-200`}
    >
      <h2 className="text-4xl font-extrabold mb-6 dark:text-yellow-400">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
        Hello, my name is Fredrik Jurgell, and I am 27 years old. I recently graduated as a web programmer from Linnaeus University. I have extensive knowledge in technologies such as:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-6 dark:text-gray-300">
        <li>Java, JavaScript, Next.js, CSS, .NET, Node.js, React, and Express.js</li>
        <li>Database development, GitLab/GitHub, and Kubernetes</li>
      </ul>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-gray-300">
        During my studies, I collaborated with a classmate to create a bot project using Chat-GPT to analyze news articles, for which we received the highest grade.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-gray-300">
        During my internship at <a href="https://www.sourceful-labs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Srcful</a>, I worked on integrating payment systems into the &quot;Energy Warden&quot; project, ensuring that transactions ran smoothly and securely. I enjoy working with new and current technologies and am eager to contribute to solving technical challenges.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
        Teamwork is something I highly value. I enjoy both sharing my knowledge and learning from others. I look forward to working in a team that offers customized technical solutions and maximizes value for customers.
      </p>

    </section>
  );
}