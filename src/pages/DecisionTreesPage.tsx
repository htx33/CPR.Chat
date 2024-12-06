import React, { useState } from 'react';
import { decisionTrees } from '../data/decisionTreeData';
import DecisionTreeComponent from '../components/DecisionTree/DecisionTreeComponent';

const DecisionTreesPage: React.FC = () => {
  const [selectedTreeId, setSelectedTreeId] = useState<string | null>(null);

  const selectedTree = decisionTrees.find(tree => tree.id === selectedTreeId);

  const handleTreeSelect = (treeId: string) => {
    if (treeId !== selectedTreeId) {
      setSelectedTreeId(treeId);
    }
  };

  const handleReset = () => {
    // Optional: Add any additional reset logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Clinical Decision Trees</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Select a Decision Tree:</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {decisionTrees.map(tree => (
            <button
              key={tree.id}
              onClick={() => handleTreeSelect(tree.id)}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                selectedTreeId === tree.id
                  ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              <h3 className="font-medium text-lg mb-2">{tree.title}</h3>
              <p className="text-gray-600 text-sm">{tree.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto transition-all duration-300">
        {selectedTree ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">{selectedTree.title}</h2>
            <DecisionTreeComponent 
              tree={selectedTree} 
              onReset={handleReset}
            />
          </div>
        ) : (
          <div className="text-center py-12 text-gray-600">
            Please select a decision tree from the options above to begin.
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionTreesPage;
