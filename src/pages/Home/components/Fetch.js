import React, { Component } from 'react'

import {ThemeContext} from './theme-context';
import './Styles/fetch.css'

const translations = {
  "ru": {
      'event' : 'Событие',
      'Published At' : 'Опубликовано',
      'Updated At' : 'Обновлено',
      'Summary' : 'Итог',
      'Link' : 'Cсылка',
  },
  "en": {
    'event' : 'Event',
    'Published At' : 'Published',
    'Updated At' : 'Updated',
    'Summary' : 'Summary',
    'Link' : 'Link',
  }
}
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
    const { lang } = this.props;
    let theme = this.context;
    if (this.state.data === null) {
      // Render loading state ...
      return (<h2>{this.state.errorMessage}</h2>)
    } else {
      // Render real UI ...
      const articles = this.state.data;
      return (
        <div className = "fetch-table container" style={{backgroundColor : theme.backgroundColor, color : theme.color}}>
          <table className="table">
            <thead>
                <tr>
                  <th>{translations[lang]["event"]}</th>
                  <th>{translations[lang]['Published At']}</th>
                  <th>{translations[lang]['Updated At'] }</th>
                  <th>{translations[lang]['Summary']}</th>
                  <th>{translations[lang]['Link']}</th>
                </tr>
            </thead>
            <tbody key ='tbody'>
              {articles.map((item, index) => 
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.publishedAt}</td>
                <td>{item.updatedAt}</td>
                <td>{item.summary}</td>
                <td><a className='table-link' href={item.url} style={{color : theme.color}}>{translations[lang]['Link']}</a></td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    }
  }
}


Fetch.contextType = ThemeContext;
export default Fetch;