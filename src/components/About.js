// components/About.js
export default function About({ isVisible }) {
  return (
    <section
      id="about"
      className={`w-full max-w-4xl my-10 p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} snap-start snap-always dark:bg-gray-900 dark:text-gray-200`}
    >
      <h2 className="text-4xl font-extrabold mb-6 dark:text-yellow-400">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
        Hello, my name is Fredrik Jurgell, and I am 27 years old. I recently graduated as a web programmer from Linnaeus University. I have extensive experience with technologies including:
      </p>
      <div className="text-lg text-gray-700 mb-6 dark:text-gray-300">
        <p className="font-semibold">Technical Skills:</p>
        <p className="ml-4">Java, JavaScript, Next.js, CSS, .NET, Node.js, React, Express.js</p>
        <p className="font-semibold mt-4">Development Tools:</p>
        <p className="ml-4">Database Development, GitLab/GitHub, Kubernetes</p>
      </div>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-gray-300">
        <span className="font-semibold dark:text-yellow-400">Notable Achievement:</span> During my studies, I collaborated with a classmate to develop a bot project utilizing Chat-GPT to analyze news articles, for which we received the highest grade (A).
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 dark:text-gray-300">
        <span className="font-semibold dark:text-yellow-400">Internship Experience:</span> During my internship at <a href="https://www.sourceful-labs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Srcful</a>, I worked on integrating payment systems into the &quot;Energy Warden&quot; project, ensuring seamless and secure transaction processes. I enjoy working with modern technologies and am eager to contribute to solving complex technical challenges.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed dark:text-gray-300">
        I highly value teamwork and thrive in collaborative environments where I can both share my knowledge and learn from others. I look forward to contributing to a team that delivers customized technical solutions and maximizes value for clients.
      </p>
    </section>
  );
}
