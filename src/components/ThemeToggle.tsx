import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex items-center h-10 w-20 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDark 
          ? 'bg-gray-700 focus:ring-gray-500' 
          : 'bg-gray-200 focus:ring-blue-500'
      }`}
      aria-label="Toggle theme"
    >
      <span
        className={`inline-block w-8 h-8 transform transition-transform duration-300 bg-white rounded-full shadow-lg ${
          isDark ? 'translate-x-10' : 'translate-x-1'
        }`}
      >
        <div className="flex items-center justify-center w-full h-full">
          {isDark ? (
            <Moon className="w-4 h-4 text-gray-700" />
          ) : (
            <Sun className="w-4 h-4 text-yellow-500" />
          )}
        </div>
      </span>
    </button>
  );
};

export default ThemeToggle;