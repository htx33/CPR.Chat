import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { trackCPRInteraction } from '../../utils/analytics';

interface CPRCardProps {
  title: string;
  description: string;
  criteria: string[];
  accuracy: string;
  references: string[];
}

const CPRCard: React.FC<CPRCardProps> = ({ title, description, criteria, accuracy, references }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewDetails = () => {
    setIsExpanded(!isExpanded);
    trackCPRInteraction(title, isExpanded ? 'collapse_details' : 'view_details');
  };

  const handleReferenceClick = (reference: string) => {
    trackCPRInteraction(title, 'click_reference');
    // Extract DOI if present
    const doiMatch = reference.match(/DOI: (.*?)$/);
    if (doiMatch && doiMatch[1]) {
      window.open(`https://doi.org/${doiMatch[1]}`, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden h-full">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex-grow">{title}</h3>
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium self-start">
            {accuracy}
          </div>
        </div>
        <p className="text-gray-600 my-3 text-sm sm:text-base line-clamp-2">{description}</p>
        
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

        <div className="mt-4 space-y-2 sm:space-y-3 border-t border-gray-100 pt-4">
          <h4 className="font-medium text-gray-800 text-sm sm:text-base">References:</h4>
          <ul className="space-y-2">
            {references.map((reference, index) => (
              <li 
                key={index} 
                className="text-sm sm:text-base text-gray-600 hover:text-blue-600 cursor-pointer"
                onClick={() => handleReferenceClick(reference)}
              >
                {index + 1}. {reference}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-100 mt-auto">
        <button 
          className="w-full text-center text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base"
          onClick={handleViewDetails}
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
        </button>
      </div>
    </div>
  );
};

export default CPRCard;