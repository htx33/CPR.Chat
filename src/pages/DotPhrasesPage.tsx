import React from 'react';

const DotPhrasesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">EPIC Dot Phrases</h1>
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Physical Therapy Documentation Templates</h2>
          <div className="space-y-4">
            {/* Add your dot phrases content here */}
            <p className="text-gray-600">Coming soon: A comprehensive collection of EPIC dot phrases for physical therapy documentation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotPhrasesPage;
