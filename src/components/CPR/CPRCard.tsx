import React, { useState } from 'react';

interface CPRCardProps {
  title: string;
  subtitle: string;
  description: string;
  clinicalCriteria: string[];
  evidence: {
    source: string;
    sourceLink?: string;
    successRate: string;
    likelihoodRatio?: string;
    cpgReferences: {
      title: string;
      section: string;
      recommendation: string;
      grade?: string;
      link: string;
      year: string;
    }[];
  };
}

export const CPRCard: React.FC<CPRCardProps> = ({
  title,
  subtitle,
  description,
  clinicalCriteria,
  evidence,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="relative w-full h-[600px] cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full duration-1000 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block mb-4">
              {subtitle}
            </div>
            <p className="text-gray-600 mb-4">{description}</p>
            
            <h3 className="font-semibold text-gray-700 mb-2">Clinical Criteria:</h3>
            <ul className="list-disc pl-5 mb-4">
              {clinicalCriteria.map((criterion, index) => (
                <li key={index} className="text-gray-600 mb-1">
                  {criterion}
                </li>
              ))}
            </ul>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">Source:</span>{' '}
                {evidence.sourceLink ? (
                  <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, evidence.sourceLink!)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {evidence.source}
                  </a>
                ) : (
                  evidence.source
                )}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-medium">Success Rate:</span> {evidence.successRate}
              </p>
              {evidence.likelihoodRatio && (
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Likelihood Ratio:</span> {evidence.likelihoodRatio}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-white rounded-lg shadow-md p-6 overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Clinical Practice Guidelines</h2>
            
            {evidence.cpgReferences.map((ref, index) => (
              <div key={index} className="mb-6 last:mb-0 border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-700">{ref.title}</h3>
                  <span className="text-sm text-gray-500">{ref.year}</span>
                </div>
                <div className="pl-4">
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Section:</span> {ref.section}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Recommendation:</span> {ref.recommendation}
                  </p>
                  {ref.grade && (
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Evidence Grade:</span> {ref.grade}
                    </p>
                  )}
                  <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, ref.link)}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    View Full Guideline →
                  </a>
                </div>
              </div>
            ))}
            
            <p className="text-sm text-gray-400 mt-4 text-center">
              Click to see clinical criteria
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPRCard;
