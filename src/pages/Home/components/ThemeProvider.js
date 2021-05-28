import React from 'react';

import PropTypes from 'prop-types';
import ThemeContext from '../../../context/ThemeContext';

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(false);
    
  const toggleDark = (e, value) => {
    const darkCopy = !value;
    localStorage.setItem('dark', JSON.stringify(darkCopy));
    setDark(darkCopy);
  };
    
  React.useEffect(() => {
    const localStorageDark = JSON.parse(localStorage.getItem('dark'));
    if (localStorageDark) {
      setDark(localStorageDark);
    }
  }, []);
    
  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element,
};

ThemeProvider.defaultProps = {
  children: React.createElement('div')
};
export default ThemeProvider;
