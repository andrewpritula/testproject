import React from 'react'
import ThemeContext from './ThemeContext'
import './Styles/Button.css'
import {useTranslation} from "react-i18next";

const Button = () => {
  const {t} = useTranslation('common');
  const { dark, toggleDark} = React.useContext(ThemeContext);
  
  return(
    <button className={dark ? "theme-button-dark" : "theme-button"} onClick={e => toggleDark(e,dark)}>
      {t('themeButton')}
    </button>
  )
  
}

export default Button;