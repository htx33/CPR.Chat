import React, { useState } from 'react';
import { DotPhrase } from '../../data/dotPhrasesData';

interface Props {
  phrase: DotPhrase;
}

const DotPhraseComponent: React.FC<Props> = ({ phrase }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phrase.phrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{phrase.title}</h3>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mt-2">
            {phrase.category}
          </span>
          {phrase.description && (
            <p className="text-gray-600 mt-2">{phrase.description}</p>
          )}
        </div>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-lg transition-colors ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mt-4">
        <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700">
          {phrase.phrase}
        </pre>
      </div>
    </div>
  );
};

export default DotPhraseComponent;
