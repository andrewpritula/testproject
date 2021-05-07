import React from 'react'

export const defaultState = {
    dark: false,
    toggleDark: () => {},
}
  
const ThemeContext = React.createContext(defaultState);
export default ThemeContext;