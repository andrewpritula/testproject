import React, { Component } from 'react'
import {render} from 'react-dom'

import Item from './items'

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
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

  componentWillUnmount() {
    if (this.response) {
      this.response.cancel();
    }
  }

  render() {
    if (this.state.data === null) {
      // Render loading state ...
      return (<h2>Loading...</h2>)
    } else {
      // Render real UI ...
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
              )}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Task6;
  
render(<Task6 />, document.getElementById("task6"));