import React from 'react'
import ThemeContext from './ThemeContext'

const Content = () => {
    const {dark} = React.useContext(ThemeContext);
     return(
       <div className={dark ? "content-dark" : "content"}>
         <h1>Content</h1>
         <h4>Will Consume React Context</h4>
         <p>Once the toggle theme button is pressed, the theme value in the React Context object will change, and accordingly this content will change its theme</p>
       </div>
     )
}

export default Content;