import React from 'react';
import { Clock, Target, AlertTriangle } from 'lucide-react';
import { Protocol } from '../../data/protocolData';

interface ProtocolDetailProps {
  protocol: Protocol;
}

const ProtocolDetail: React.FC<ProtocolDetailProps> = ({ protocol }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{protocol.title}</h2>
      <p className="text-gray-600 mb-8">{protocol.description}</p>

      <div className="space-y-8">
        {protocol.phases.map((phase, index) => (
          <div key={index} className="border-l-4 border-indigo-500 pl-6">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-indigo-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                {phase.name} <span className="text-gray-500 text-base ml-2">({phase.duration})</span>
              </h3>
            </div>

            {phase.goals && (
              <div className="mb-4">
                <h4 className="flex items-center text-gray-700 font-medium mb-2">
                  <Target className="h-4 w-4 mr-2" /> Goals
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6">
                  {phase.goals.map((goal, idx) => (
                    <li key={idx}>{goal}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-4">
              <h4 className="text-gray-700 font-medium mb-2">Key Points</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6">
                {phase.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            {phase.precautions && (
              <div className="mb-4">
                <h4 className="flex items-center text-gray-700 font-medium mb-2">
                  <AlertTriangle className="h-4 w-4 mr-2" /> Precautions
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-6">
                  {phase.precautions.map((precaution, idx) => (
                    <li key={idx}>{precaution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtocolDetail;