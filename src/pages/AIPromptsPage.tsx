import React from 'react';
import { MessageSquare } from 'lucide-react';

const AIPromptsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            AI Prompts for Physical Therapy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Optimize your clinical practice with AI-assisted prompts
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Protocol Customization</h2>
            <div className="bg-gray-50 p-4 rounded-xl font-mono text-sm text-gray-700">
              "As a physical therapist, help me modify the standard [procedure] protocol for a patient with [specific condition]. Consider [relevant factors]."
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Rehabilitation Goals</h2>
            <div className="bg-gray-50 p-4 rounded-xl font-mono text-sm text-gray-700">
              "Generate SMART goals for a patient with [condition] in [setting]. The patient's primary functional limitations are [limitations]."
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Tips for Effective AI Prompts</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
              <li>Be specific about the patient's condition and circumstances</li>
              <li>Include relevant medical history and contraindications</li>
              <li>Specify the timeline or phase of rehabilitation</li>
              <li>Ask for evidence-based recommendations when applicable</li>
              <li>Request explanations for the AI's suggestions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPromptsPage;