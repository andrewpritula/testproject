import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        color: "#ff837b",
        selected: false
      };
    }
  
    changeColor = () => {
      this.state.selected === false 
        ? this.setState({ selected: true , color : 'green'}) 
        : this.setState({ selected: false , color : '#ff837b'});
    };
  
    render() {
      return (
        <tr 
        style={{ backgroundColor: this.state.color, cursor: 'pointer' }}
        onClick={() => this.changeColor()}>
          <td>{this.props.item.title}</td>
          <td>{this.props.item.publishedAt}</td>
          <td>{this.props.item.updatedAt}</td>
          <td>{this.props.item.summary}</td>
          <td><a className='table-link' href={this.props.item.url}>Link</a></td>
        </tr>
      );
    }
  }
  