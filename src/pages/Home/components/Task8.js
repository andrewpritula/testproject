import React, { Component } from 'react'

import './Styles/task8.css'
import ScrollList from './ScrollList'
import {ThemeContext} from '../../Home/components/theme-context';

const translations = {
    "ru": {
      'sort' : 'Сортировать',
      'reset' : 'Cброс',
      
    },
    "en": {
      'sort' : 'Sort',
      'reset' : 'Reset',
    }
}

class Task8 extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            items: [
                {
                    //2-nd lvl of nesting
                    fullname : {
                        name : 'Tim',
                        sername : 'Berners-Lee',
                    },
                    yearOfBirth : 1955,
                    placeOfBirth : 'London',
                    age : 65,
                },

                {
                    //2-nd lvl of nesting
                    fullname : {
                        name : 'Bill',
                        sername : 'Gates',
                    },
                    yearOfBirth : 1935,
                    placeOfBirth : 'Seattle',
                    age : 65,
                },

                {
                    //2-nd lvl of nesting
                    fullname : {
                        name : 'James ',
                        sername : 'Gosling',
                    },
                    yearOfBirth : 1925,
                    placeOfBirth : 'Calgary',
                    age : 65,
                },

                {
                    //2-nd lvl of nesting
                    fullname : {
                        name : 'Andrew ',
                        sername : 'Pritula',
                    },
                    yearOfBirth : 1996,
                    placeOfBirth : 'Krop',
                    age : 24,
                },

                {
                    //2-nd lvl of nesting
                    fullname : {
                        name : 'Sergey ',
                        sername : 'Pritula',
                    },
                    yearOfBirth : 1996,
                    placeOfBirth : 'Kirov',
                    age : 25,
                },

                {
                    //2-nd lvl of nesting
                    fullname : {
                        name : 'Anthony',
                        sername : 'Linked',
                    },
                    yearOfBirth : 1995,
                    placeOfBirth : 'Boston',
                    age : 26,
                },

                {
                    //2-nd lvl of nesting
                    fullname : {
                        name : 'Tommy',
                        sername : 'Versetty',
                    },
                    yearOfBirth : 1975,
                    placeOfBirth : 'NY',
                    age : 45,
                },

                {
                    //2-nd lvl of nesting
                    fullname : {
                        name : 'Joe',
                        sername : 'Biden',
                    },
                    yearOfBirth : 1900,
                    placeOfBirth : 'London',
                    age : 120,
                }
            ],

            testPerson : {
                //2-nd lvl of nesting
                fullname : {
                    name : 'testName',
                    sername : 'testSername',
                },
                yearOfBirth : 2021,
                placeOfBirth : 'testPlace',
                age : 100,
            }
        };
    }
  
    handleAddClick(value) {
      const {items} = this.state;
      this.setState({ items: [...items, value] });
    };

    handleDeleteClick(value){
        const items = value;
        items.pop();
        this.setState({ items: items });
    };

    handleSortClick(arr, param){
      const items = arr;
      items.sort(((a, b) => a[param] > b[param] ? 1 : -1));
      this.setState({ items: items });
    };

    handleReset = () => {
        this.setState({
            items: [
            {
                //2-nd lvl of nesting
                fullname : {
                    name : 'Tim',
                    sername : 'Berners-Lee',
                },
                yearOfBirth : 1955,
                placeOfBirth : 'London',
                age : 65,
            },

            {
                //2-nd lvl of nesting
                fullname : {
                    name : 'Bill',
                    sername : 'Gates',
                },
                yearOfBirth : 1935,
                placeOfBirth : 'Seattle',
                age : 65,
            },

            {
                //2-nd lvl of nesting
                fullname : {
                    name : 'James ',
                    sername : 'Gosling',
                },
                yearOfBirth : 1925,
                placeOfBirth : 'Calgary',
                age : 65,
            },

            {
                //2-nd lvl of nesting
                fullname : {
                    name : 'Andrew ',
                    sername : 'Pritula',
                },
                yearOfBirth : 1996,
                placeOfBirth : 'Krop',
                age : 24,
            },

            {
                //2-nd lvl of nesting
                fullname : {
                    name : 'Sergey ',
                    sername : 'Pritula',
                },
                yearOfBirth : 1996,
                placeOfBirth : 'Kirov',
                age : 25,
            },
            
            {
                //2-nd lvl of nesting
                fullname : {
                    name : 'Anthony',
                    sername : 'Linked',
                },
                yearOfBirth : 1995,
                placeOfBirth : 'Boston',
                age : 26,
            },

            {
                //2-nd lvl of nesting
                fullname : {
                    name : 'Tommy',
                    sername : 'Versetty',
                },
                yearOfBirth : 1975,
                placeOfBirth : 'NY',
                age : 45,
            },

            {
                //2-nd lvl of nesting
                fullname : {
                    name : 'Joe',
                    sername : 'Biden',
                },
                yearOfBirth : 1900,
                placeOfBirth : 'London',
                age : 120,
            }
        ]});
    }

    render() {
        let theme = this.context;
        const { lang } = this.props;
        return (
            <div className='dnd-list card container' style={{backgroundColor : theme.backgroundColor, color : theme.color}}>
                <button className = 'button' onClick={() => this.handleAddClick(this.state.testPerson)}>+</button>
                <button className = 'button' onClick={() => this.handleDeleteClick(this.state.items)}>-</button>
                <button className = 'button' onClick={() => this.handleSortClick(this.state.items, 'age')}>{translations[lang]["sort"]}</button>
                <button className = 'button' onClick={this.handleReset}>{translations[lang]["reset"]}</button>
                <ScrollList lang = {lang} items={this.state.items} />
            </div>
        );
    }
}

Task8.contextType = ThemeContext;
export default Task8;