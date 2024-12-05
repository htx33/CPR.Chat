import React from 'react';
import { Brain } from 'lucide-react';

const QuizzesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Interactive PT Quizzes</h1>
        <p className="text-gray-600">Test your knowledge with AI-powered clinical reasoning quizzes</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Brain className="h-8 w-8 text-indigo-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">AI-Powered Learning</h2>
            <p className="text-gray-600">Powered by Claude Haiku and ChatGPT</p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-gray-700">
            Our interactive quizzes adapt to your knowledge level and provide detailed explanations
            for each answer, helping you improve your clinical reasoning skills.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
            <p className="text-sm text-indigo-700">
              Coming soon! We're currently developing our quiz platform to provide you with the best
              possible learning experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;