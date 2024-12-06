import React from 'react';
import { Brain } from 'lucide-react';
import ChatBot from '../components/Chat/ChatBot';

const ChatDPTPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ChatDPT</h1>
        <p className="text-gray-600">Your AI-powered Physical Therapy Assistant</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Bot */}
        <div className="lg:col-span-2">
          <ChatBot />
        </div>

        {/* Info Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-6">
              <Brain className="h-8 w-8 text-indigo-600" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">AI-Powered Assistant</h2>
                <p className="text-gray-600">Powered by Claude Haiku and ChatGPT</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Clinical reasoning assistance</li>
                <li>Treatment planning suggestions</li>
                <li>Evidence-based practice updates</li>
                <li>Documentation assistance</li>
                <li>Patient education materials</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> ChatDPT is currently in development. While it can engage in basic conversations,
              advanced features will be added soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDPTPage;
