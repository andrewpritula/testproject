import React, { Component } from 'react'

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

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
      const items = this.state.items;
      const newEll = value;
      this.setState({ items: [...items, newEll] });
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
        <div>
            <button className = 'tButton' onClick={() => this.handleAddClick(this.state.testPerson)}>+</button>
            <button className = 'tButton' onClick={() => this.handleDeleteClick(this.state.items)}>-</button>
            <button className = 'tButton' onClick={() => this.handleSortClick(this.state.items, 'age')}>Sort</button>
            <button className = 'tButton' onClick={this.handleReset}>Reset</button>
            <ScrollList items={this.state.items} />
        </div>
      );
    }
}

class ScrollList extends Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      // If new items got added, return scroll position
      if (prevProps.items.length < this.props.items.length) {
        const list = this.listRef.current;
        return list.scrollHeight - list.scrollTop;
      }
  
      return null;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      // if snapshot is available, use it to adjust scroll position
      if (snapshot !== null) {
        const list = this.listRef.current;
        list.scrollTop = list.scrollHeight - snapshot;
      }
    }
    
    //Dragg items
    dragStart(e) {
      this.dragged = e.currentTarget;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.dragged);
    }
  
    dragEnd(e) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(placeholder);
      
      // update state
      var data = this.props.items;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if(from < to) to--;
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({items: data});
    }
  
    dragOver(e) {
      e.preventDefault();
      if(e.target.className === 'placeholder') return;
      this.over = e.target;
      e.target.parentNode.insertBefore(placeholder, e.target);
    }

    render() {
      return (
        <div>
            <ul ref={this.listRef} className="messages">
                {this.props.items.map((item, index) => (
                <li key={index}
                data-id={index}
                style={{cursor: 'pointer' }}
                draggable='true'
                onDragEnd={this.dragEnd.bind(this)}
                onDragStart={this.dragStart.bind(this)}
                onDragOver={this.dragOver.bind(this)}>
                    {'Person: ' + item.fullname.name + ' ' + item.fullname.sername + 
                    ' Age: ' + item.age + ' BP: ' + item.placeOfBirth + ' BD: ' + item.yearOfBirth}</li>
                ))}
            </ul>
        </div>
      );
    }
}