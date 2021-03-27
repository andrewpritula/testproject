import React, { Component } from 'react'
import {render} from 'react-dom'

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    try {  
      const response = await fetch(`https://spaceflightnewsapi.net/api/v2/articles`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  }
  
  changeColor = () => {
    this.state.selected === false 
      ? this.setState({ selected: true , color : 'green'}) 
      : this.setState({ selected: false , color : '#ff837b'});
  };

  render() {
    const articles = this.state.data;
    return (
      <div className = "tables">
        <table className="table">
          <thead>
              <tr>
                <th>Event</th>
                <th>Published At</th>
                <th>Updated At</th>
                <th>Sumary</th>
                <th>Link</th>
              </tr>
          </thead>
          <tbody key ='tbody'>
            {articles.map((item, index) => 
            <Item
            key={index}
            item={item}
            />
            )};
          </tbody>
        </table>
      </div>
    );
  }
}


class Item extends Component {
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

export default Task6;
  
render(<Task6 />, document.getElementById("task6"));