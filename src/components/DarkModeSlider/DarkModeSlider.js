import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './DarkModeSlider.scss';
import { useTheme } from '../../ThemeContext';

const DarkModeSlider = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
      <span className="slider">
        <FaMoon className={`icon moon ${isDarkMode ? '' : 'hidden'}`} />
        <FaSun className={`icon sun ${isDarkMode ? 'hidden' : ''}`} />
      </span>
    </label>
  );
};

export default DarkModeSlider;
