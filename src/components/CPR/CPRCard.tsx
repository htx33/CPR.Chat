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
    <div className="relative w-full h-full">
      <div 
        className={`w-full h-full transition-all duration-300 ${
          isFlipped ? 'hidden' : 'block'
        }`}
      >
        <div className="bg-white rounded-xl shadow-md h-full flex flex-col">
          <div className="p-3 sm:p-6 flex-grow">
            <div className="flex flex-col gap-2 mb-3">
              <h3 className="text-base sm:text-xl font-semibold text-gray-900">{title}</h3>
              <div className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-sm font-medium self-start whitespace-nowrap">
                {accuracy}
              </div>
            </div>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">{description}</p>
            <p className="text-xs sm:text-sm text-blue-600 mb-3">{attribution}</p>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-800 text-sm sm:text-base">Clinical Criteria:</h4>
              <ul className="space-y-2">
                {criteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-600">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="p-3 sm:px-6 sm:py-4 bg-gray-50 border-t border-gray-100">
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
        className={`w-full h-full transition-all duration-300 ${
          !isFlipped ? 'hidden' : 'block'
        }`}
      >
        <div className="bg-white rounded-xl shadow-md h-full flex flex-col">
          <div className="p-3 sm:p-6 flex-grow">
            <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-4">Citation Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 text-sm sm:text-base">Full Citation:</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">{citation}</p>
              </div>
              {url && (
                <div>
                  <h4 className="font-medium text-gray-800 text-sm sm:text-base">Source URL:</h4>
                  <a 
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 hover:underline mt-1 block break-all"
                  >
                    {url}
                  </a>
                </div>
              )}
            </div>
          </div>
          
          <div className="p-3 sm:px-6 sm:py-4 bg-gray-50 border-t border-gray-100">
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