import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CPRCardProps {
  title: string;
  description: string;
  criteria: string[];
  accuracy: string;
}

const CPRCard: React.FC<CPRCardProps> = ({ title, description, criteria, accuracy }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 flex-grow">{title}</h3>
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-4">
            {accuracy}
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-3">
          <h4 className="font-medium text-gray-800">Clinical Criteria:</h4>
          <ul className="space-y-2">
            {criteria.map((criterion, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-600">
                <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="flex-grow">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CPRCard;