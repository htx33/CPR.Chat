import React from 'react';
import { FileText } from 'lucide-react';

interface ProtocolCardProps {
  title: string;
  description: string;
  phases: {
    name: string;
    duration: string;
    keyPoints: string[];
  }[];
}

const ProtocolCard: React.FC<ProtocolCardProps> = ({ title, description, phases }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-3 mb-4">
        <FileText className="h-6 w-6 text-indigo-600" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="border-l-4 border-indigo-500 pl-4">
            <h4 className="font-medium text-gray-800 mb-2">
              {phase.name} <span className="text-gray-500 text-sm">({phase.duration})</span>
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {phase.keyPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="text-gray-600 text-sm">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtocolCard;