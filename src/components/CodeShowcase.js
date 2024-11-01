// components/CodeShowcase.js
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useState } from 'react';

export default function CodeShowcase({ isVisible, initialCodeOption = 'javascript', codeSamples, expandDirection }) {
  const [codeOption] = useState(initialCodeOption);

  return (
    <section
      className={`w-full p-4 sm:p-6 md:p-10 bg-white rounded-lg shadow-xl transform transition-all duration-1000 ease-in-out dark:bg-gray-900 dark:text-gray-200 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${expandDirection === 'left' ? 'origin-left' : 'origin-right'}`}
    >
      <div className="overflow-auto rounded-md" style={{ maxHeight: '600px' }}>
        <SyntaxHighlighter language={codeOption} style={materialDark} className="rounded-lg text-sm sm:text-base">
          {codeSamples[codeOption]}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
