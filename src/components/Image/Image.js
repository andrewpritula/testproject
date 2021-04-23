import React, { Component } from 'react'

import './Css/image.css'
import {ThemeContext} from '../../pages/Home/components/theme-context';

class ImageWithStatusText extends Component {
    constructor(props) {
      super(props);
      this.state = { imageStatus: "loading" , src : 'https://avatanplus.com/files/resources/original/578a3ffb9cb68155f409eefa.png'};
    }
  
    handleImageLoaded() {
        console.log('Image Load');
        this.setState({ imageStatus: "loaded" });
    }
  
    handleImageErrored() {
        console.log("Image Error");
        this.setState({ imageStatus: "failed to load" });
    }
  
    render() {
        let theme = this.context;
        return (
            <div className='img-onload-onerror container' style={{backgroundColor : theme.backgroundColor, color : theme.color}}>
            <img className='img-test' alt = 'pokemon' draggable='false'
                src= {this.state.src}
                onLoad={() => this.handleImageLoaded()}
                onError={() => this.handleImageErrored()}
            />
            </div>
        );
    }
}

ImageWithStatusText.contextType = ThemeContext;
export default ImageWithStatusText;