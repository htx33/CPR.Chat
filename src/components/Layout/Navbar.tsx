import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Goniometer from '../Icons/Goniometer';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
              <Goniometer className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight">Clinical Practice Resource</span>
              <span className="text-sm text-blue-100">Evidence-Based Resources</span>
            </div>
          </Link>
          
          <div className="flex space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'hover:bg-white/10 hover:shadow-md'
              }`}
            >
              CPRs
            </Link>
            <Link
              to="/protocols"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/protocols')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'hover:bg-white/10 hover:shadow-md'
              }`}
            >
              Protocols
            </Link>
            <Link
              to="/quizzes"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/quizzes')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'hover:bg-white/10 hover:shadow-md'
              }`}
            >
              Quizzes
            </Link>
            <Link
              to="/ai-prompts"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/ai-prompts')
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'hover:bg-white/10 hover:shadow-md'
              }`}
            >
              AI Prompts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;