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
      const items = this.props.item;
      return (
        <tr 
        style={{ backgroundColor: this.state.color, cursor: 'pointer' }}
        onClick={() => this.changeColor()}>
          <td>{items.title}</td>
          <td>{items.publishedAt}</td>
          <td>{items.updatedAt}</td>
          <td>{items.summary}</td>
          <td><a className='table-link' href={this.props.item.url}>Link</a></td>
        </tr>
      );
    }
  }
  