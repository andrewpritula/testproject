import React from 'react'
import ThemeContext from '../../../context/ThemeContext'

const ThemeProvider = ({children}) => {
    const [dark, setDark] = React.useState(false);
    
    const toggleDark = (e, value) => {
        let dark = !value;
        localStorage.setItem("dark", JSON.stringify(dark));
        setDark(dark);
    }
    
    React.useEffect(() => {
      const localStorageDark = JSON.parse(localStorage.getItem("dark"));
      if(localStorageDark){
        setDark(localStorageDark);
      }
    },[])
    
    return (
      <ThemeContext.Provider value={{dark, toggleDark}}>
          {children}
      </ThemeContext.Provider>
    )
}

export default ThemeProvider;