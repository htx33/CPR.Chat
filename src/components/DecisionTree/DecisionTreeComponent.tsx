import React, { useState, useEffect } from 'react';
import { DecisionTree, DecisionNode } from '../../data/decisionTreeData';

interface Props {
  tree: DecisionTree;
  onReset?: () => void;
}

const DecisionTreeComponent: React.FC<Props> = ({ tree, onReset }) => {
  const [currentNodeId, setCurrentNodeId] = useState(tree.initialNodeId);
  const [history, setHistory] = useState<string[]>([]);
  const [showOutcome, setShowOutcome] = useState(false);
  const [outcome, setOutcome] = useState<{ text: string; recommendation: string } | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset state when tree changes
  useEffect(() => {
    const resetState = () => {
      setCurrentNodeId(tree.initialNodeId);
      setHistory([]);
      setShowOutcome(false);
      setOutcome(null);
      setIsTransitioning(true);
    };

    resetState();
    
    // Add a small delay for smooth transition
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [tree.id]); // Only reset when tree.id changes

  const currentNode = tree.nodes.find(node => node.id === currentNodeId);

  const handleOptionClick = (option: { text: string; nextId?: string; outcome?: string; recommendation?: string }) => {
    if (option.outcome) {
      setOutcome({ text: option.outcome, recommendation: option.recommendation || '' });
      setShowOutcome(true);
    } else if (option.nextId) {
      setHistory([...history, currentNodeId]);
      setCurrentNodeId(option.nextId);
    }
  };

  const handleBack = () => {
    if (showOutcome) {
      setShowOutcome(false);
      setOutcome(null);
    } else if (history.length > 0) {
      const newHistory = [...history];
      const previousNodeId = newHistory.pop();
      setHistory(newHistory);
      setCurrentNodeId(previousNodeId!);
    }
  };

  const handleRestart = () => {
    setCurrentNodeId(tree.initialNodeId);
    setHistory([]);
    setShowOutcome(false);
    setOutcome(null);
    if (onReset) {
      onReset();
    }
  };

  if (!currentNode) return null;

  return (
    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <div className="bg-white rounded-lg shadow-md p-6">
        {showOutcome ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600">{outcome?.text}</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">Recommendations:</h4>
              <pre className="whitespace-pre-wrap text-gray-600 font-sans">{outcome?.recommendation}</pre>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleRestart}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Over
              </button>
              <div className="w-full mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  You can select another decision tree above to continue exploring different conditions.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{currentNode.question}</h3>
            {currentNode.description && (
              <p className="text-gray-600 mb-4 italic">{currentNode.description}</p>
            )}
            <div className="space-y-3">
              {currentNode.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {option.text}
                </button>
              ))}
            </div>
            {history.length > 0 && (
              <button
                onClick={handleBack}
                className="mt-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Back
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DecisionTreeComponent;
