import React, { useState } from 'react'
import ThemeContext from '../../pages/Home/components/ThemeContext'
import './Css/image.css'

function ImageWithStatusText() {
    const {dark} = React.useContext(ThemeContext);
    const [src] = useState('https://avatanplus.com/files/resources/original/578a3ffb9cb68155f409eefa.png');
  
    function handleImageLoaded() {
        console.log('load');
    }
  
    function handleImageErrored() {
        console.log('error');
    }
   
    return (
        <div className={dark ? "container-dark" : "container"}>
        <img className='img-test' alt = 'pokemon' draggable='false'
            src= {src}
            onLoad={() => handleImageLoaded()}
            onError={() => handleImageErrored()}
        />
        </div>
    )
}

export default ImageWithStatusText;