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
  render() {
    const articles = this.state.data;
    return (
        <div className = "container tables">
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
                    <tbody>
                        {articles.map((item) => 
                            <tr key={item}>
                                <td key>{item.title}</td>
                                <td>{item.publishedAt}</td>
                                <td>{item.updatedAt}</td>
                                <td>{item.summary}</td>
                                <td><a className='table-link' href={item.url}>Link</a></td>
                            </tr>
                        )}
                    </tbody>
                </table>
        </div>
      );
    }
}

export default Task6;
  
render(<Task6 />, document.getElementById("task6"));