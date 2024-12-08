import React from 'react';
import CPRCard from '../components/CPR/CPRCard';
import { cprData } from '../data/cprData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Clinical Prediction Rules (CPRs)
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cprData.map((cpr) => (
            <CPRCard
              key={cpr.id}
              title={cpr.title}
              subtitle={cpr.subtitle}
              description={cpr.description}
              clinicalCriteria={cpr.clinicalCriteria}
              evidence={cpr.evidence}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
