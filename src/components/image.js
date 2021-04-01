import React, { Component } from 'react'

export default class ImageWithStatusText extends Component {
    constructor(props) {
      super(props);
      this.state = { imageStatus: "loading" , src : 'https://avatanplus.com/files/resources/original/578a3ffb9cb68155f409eefa.png'};
    }
  
    handleImageLoaded() {
        alert("Loaded");
        this.setState({ imageStatus: "loaded" });
    }
  
    handleImageErrored() {
        alert("Error");
        this.setState({ imageStatus: "failed to load" });
    }
  
    render() {
        return (
            <div>
            <img className='img-test' alt = 'pokemon' draggable='false'
                src= {this.state.src}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
            />
            </div>
        );
    }
}