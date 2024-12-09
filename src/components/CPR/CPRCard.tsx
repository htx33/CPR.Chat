import React, { useState } from 'react';
import { ChevronRight, RotateCw } from 'lucide-react';

interface CPRCardProps {
  title: string;
  description: string;
  criteria: string[];
  accuracy: string;
  attribution: string;
  citation: string;
  url: string;
}

const CPRCard: React.FC<CPRCardProps> = ({ 
  title, 
  description, 
  criteria, 
  accuracy,
  attribution,
  citation,
  url 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <div 
        className={`absolute w-full h-full transition-all duration-500 ${
          isFlipped ? 'rotate-y-180 invisible' : ''
        }`}
      >
        <div className="bg-white rounded-xl shadow-md h-full">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-grow">{title}</h3>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium self-start">
                {accuracy}
              </div>
            </div>
            <p className="text-gray-600 my-3 text-sm sm:text-base line-clamp-2">{description}</p>
            <p className="text-sm text-blue-600 mb-3">{attribution}</p>
            
            <div className="space-y-2 sm:space-y-3">
              <h4 className="font-medium text-gray-800 text-sm sm:text-base">Clinical Criteria:</h4>
              <ul className="space-y-2">
                {criteria.map((criterion, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm sm:text-base text-gray-600">
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="flex-grow">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-100 mt-auto">
            <button 
              onClick={() => setIsFlipped(true)}
              className="w-full flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base gap-2"
            >
              <RotateCw className="h-4 w-4" />
              View Citation
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`absolute w-full h-full transition-all duration-500 ${
          !isFlipped ? 'rotate-y-180 invisible' : ''
        }`}
      >
        <div className="bg-white rounded-xl shadow-md h-full">
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Citation Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Full Citation:</h4>
                <p className="text-sm text-gray-600 mt-1">{citation}</p>
              </div>
              {url && (
                <div>
                  <h4 className="font-medium text-gray-800">Source URL:</h4>
                  <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline mt-1 block"
                  >
                    {url}
                  </a>
                </div>
              )}
            </div>
          </div>
          
          <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-100 mt-auto">
            <button 
              onClick={() => setIsFlipped(false)}
              className="w-full flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base gap-2"
            >
              <RotateCw className="h-4 w-4" />
              Back to CPR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPRCard;