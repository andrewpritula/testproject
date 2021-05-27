import React, { Fragment } from 'react'
import ThemeContext from '../../../context/ThemeContext'
import './Styles/Button.css'

const ThemeToggle = () => {
  const { dark, toggleDark } = React.useContext(ThemeContext);

  return(
    <Fragment>
      <label className="switch">
      <input type="checkbox" checked={dark} onChange={e => toggleDark(e, dark)}/>
      <span className="slider round"></span>
      </label>
    </Fragment>
  )
}

export default ThemeToggle;