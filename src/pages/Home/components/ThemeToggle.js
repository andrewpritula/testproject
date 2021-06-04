import React from 'react';
import ThemeContext from '../../../context/ThemeContext';
import './Styles/Button.css';

const ThemeToggle = () => {
  const { dark, toggleDark } = React.useContext(ThemeContext);

  return (
    <label className="switch" htmlFor="toggler-dark">
      <input type="checkbox" id="toggler-dark" checked={dark} onChange={(e) => toggleDark(e, dark)} />
      <span className="slider round" />
    </label>
  );
};

export default ThemeToggle;
