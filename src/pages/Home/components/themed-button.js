import React from 'react'
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button className='themeButton'
        {...props}
        style={{backgroundColor : theme.backgroundColor, color : theme.color}}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton;