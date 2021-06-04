import React, { useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import './Css/image.css';

const classNames = require('classnames');

function ImageWithStatusText() {
  const { dark } = React.useContext(ThemeContext);
  const [src] = useState('https://avatanplus.com/files/resources/original/578a3ffb9cb68155f409eefa.png');
  const containerClass = classNames({
    'container-dark': dark,
    container: !dark
  });
  function handleImageLoaded() {
    console.log('load');
  }
  
  function handleImageErrored() {
    console.log('error');
  }
   
  return (
    <div className={containerClass}>
      <img
        className="img-test"
        alt="pokemon"
        draggable="false"
        src={src}
        onLoad={() => handleImageLoaded()}
        onError={() => handleImageErrored()}
      />
    </div>
  );
}

export default ImageWithStatusText;
