import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Goniometer from '../Icons/Goniometer';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/20 transition-all">
              <Goniometer className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight">Clinical Practice Resource</span>
              <span className="text-xs sm:text-sm text-blue-100">Evidence-Based Resources</span>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-white/10"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden sm:flex space-x-1">
            <NavLink to="/" isActive={isActive('/')} label="CPRs" />
            <NavLink to="/protocols" isActive={isActive('/protocols')} label="Protocols" />
            <NavLink to="/dot-phrases" isActive={isActive('/dot-phrases')} label="Dot Phrases" />
            <NavLink to="/decision-trees" isActive={isActive('/decision-trees')} label="Decision Trees" />
            <NavLink to="/chatdpt" isActive={isActive('/chatdpt')} label="ChatDPT" />
            <NavLink to="/ai-prompts" isActive={isActive('/ai-prompts')} label="AI Prompts" />
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="sm:hidden pb-4 space-y-2">
            <MobileNavLink to="/" isActive={isActive('/')} label="CPRs" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/protocols" isActive={isActive('/protocols')} label="Protocols" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/dot-phrases" isActive={isActive('/dot-phrases')} label="Dot Phrases" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/decision-trees" isActive={isActive('/decision-trees')} label="Decision Trees" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/chatdpt" isActive={isActive('/chatdpt')} label="ChatDPT" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/ai-prompts" isActive={isActive('/ai-prompts')} label="AI Prompts" onClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, isActive, label }: { to: string; isActive: boolean; label: string }) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      isActive
        ? 'bg-white text-blue-600 shadow-md'
        : 'hover:bg-white/10 hover:shadow-md'
    }`}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, isActive, label, onClick }: { to: string; isActive: boolean; label: string; onClick: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      isActive
        ? 'bg-white text-blue-600 shadow-md'
        : 'hover:bg-white/10 hover:shadow-md'
    }`}
  >
    {label}
  </Link>
);

export default Navbar;