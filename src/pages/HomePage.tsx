import React, { useState } from 'react';
import CPRCard from '../components/CPR/CPRCard';
import { Search } from 'lucide-react';
import { cprData } from '../data/cprData';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCPRs = cprData.filter(cpr =>
    cpr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cpr.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Clinical Prediction Rules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based criteria to help guide clinical decision-making in physical therapy
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search clinical prediction rules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                     text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:border-transparent shadow-sm
                     transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCPRs.map((cpr, index) => (
            <div 
              key={index}
              className="transform hover:scale-[1.02] transition-all duration-200"
            >
              <CPRCard {...cpr} />
            </div>
          ))}
        </div>

        {filteredCPRs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No clinical prediction rules found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;