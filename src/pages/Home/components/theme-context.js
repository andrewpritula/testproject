import React from 'react'

export const themes = {
    light: {
        backgroundColor : '#ff3333',
        color : 'white'
    },
    dark: {
        backgroundColor : '#595959',
        color : '#1a1a1a'
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.light // значение по умолчанию
  );