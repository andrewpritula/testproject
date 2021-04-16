import React, { Component } from 'react'

import './Css/image.css'

export default class ImageWithStatusText extends Component {
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
        return (
            <div className='img-onload-onerror'>
            <img className='img-test' alt = 'pokemon' draggable='false'
                src= {this.state.src}
                onLoad={() => this.handleImageLoaded()}
                onError={() => this.handleImageErrored()}
            />
            </div>
        );
    }
}