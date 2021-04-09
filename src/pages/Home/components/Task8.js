import React, { Component } from 'react'

import './task8.css'
import ScrollList from './ScrollList'

export default class Task8 extends Component {
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
      return (
        <div className='dnd-list'>
            <button className = 'button' onClick={() => this.handleAddClick(this.state.testPerson)}>+</button>
            <button className = 'button' onClick={() => this.handleDeleteClick(this.state.items)}>-</button>
            <button className = 'button' onClick={() => this.handleSortClick(this.state.items, 'age')}>Sort</button>
            <button className = 'button' onClick={this.handleReset}>Reset</button>
            <ScrollList items={this.state.items} />
        </div>
      );
    }
}