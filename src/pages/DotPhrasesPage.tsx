import React, { useState, useMemo } from 'react';
import { dotPhrases } from '../data/dotPhrasesData';
import DotPhraseComponent from '../components/DotPhrases/DotPhraseComponent';

const DotPhrasesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(dotPhrases.map(phrase => phrase.category));
    return Array.from(uniqueCategories);
  }, []);

  const filteredPhrases = useMemo(() => {
    return dotPhrases.filter(phrase => {
      const matchesSearch = phrase.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        phrase.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || phrase.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">EPIC Dot Phrases</h1>
      
      <div className="mb-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              type="text"
              placeholder="Search dot phrases..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPhrases.map(phrase => (
          <DotPhraseComponent key={phrase.id} phrase={phrase} />
        ))}
      </div>

      {filteredPhrases.length === 0 && (
        <div className="text-center py-12 text-gray-600">
          No dot phrases found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default DotPhrasesPage;
