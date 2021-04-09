import React, { Component } from 'react'

import './fetch.css'
import Item from './Item'

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      errorMessage : null,
    };
  }

  async componentDidMount() {
    try {  
      const response = await fetch(`https://spaceflightnewsapi.net/api/v2/articles`);
      if (!response.ok) {
        this.setState({errorMessage : response.statusText});
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
      return (<h2>{this.state.errorMessage}</h2>)
    } else {
      // Render real UI ...
      const articles = this.state.data;
      return (
        <div className = "fetch-table onclick-event">
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
              <Item key={index} item={item}/>
              )}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Fetch;