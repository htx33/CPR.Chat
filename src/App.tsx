import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import HomePage from './pages/HomePage';
import ProtocolsPage from './pages/ProtocolsPage';
import AIPromptsPage from './pages/AIPromptsPage';
import ChatDPTPage from './pages/ChatDPTPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/protocols/*" element={<ProtocolsPage />} />
          <Route path="/chatdpt" element={<ChatDPTPage />} />
          <Route path="/ai-prompts" element={<AIPromptsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;