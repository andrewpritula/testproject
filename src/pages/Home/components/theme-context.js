import React from 'react'

export const themes = {
    light: {
        backgroundColor : '#ff8080',
        color : '#ffffff'
    },
    dark: {
        backgroundColor : '#666666',
        color : '#000000'
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.light // значение по умолчанию
  );