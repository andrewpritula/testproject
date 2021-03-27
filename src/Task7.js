import React, { Component } from 'react'
import {render} from 'react-dom'

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

function displayFullname() {
    return this.fullname.name + " " + this.fullname.sername;
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      cursor : 'pointer',
      color : '#ff837b',
      
      persons: [
        {
          //2-nd lvl of nesting
          fullname : {
              name : 'Tim',
              sername : 'Berners-Lee',
          },
          yearOfBirth : 1955,
          placeOfBirth : 'London',
          age : 65,
          displayFullname,
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
          displayFullname,
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
          displayFullname,
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
          displayFullname,
        },

        {
          //2-nd lvl of nesting
          fullname : {
              name : 'Sergey ',
              sername : 'Pritula',
          },
          yearOfBirth : 1996,
          placeOfBirth : 'Kirov',
          age : 'to old to be young',
          displayFullname, 
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
          displayFullname,
        },
      ]
    };
  }

  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.dragged);
  }

  dragEnd(e) {
    this.dragged.style.display = 'block';
    this.dragged.parentNode.removeChild(placeholder);
    
    // update state
    var data = this.state.persons;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({persons: data});
  }

  dragOver(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className === 'placeholder') return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  }

	render() {
		return (
			<ul className='task-7-list'>
        {this.state.persons.map((item, i) => 
          <li className="list-item"
            style={{ cursor: this.state.cursor, backgroundColor : this.state.color}}
            data-id={i}
            key={i}
            draggable='true'
            onDragEnd={this.dragEnd.bind(this)}
            onDragStart={this.dragStart.bind(this)}
            onDragOver={this.dragOver.bind(this)}>
              Person: {item.displayFullname()} Age: {item.age} BP: {item.placeOfBirth} BD: {item.yearOfBirth}
          </li>
        )}
      </ul>
		)
	}
}

class ImageWithStatusText extends React.Component {
    constructor(props) {
      super(props);
      this.state = { imageStatus: "loading" };
    }
  
    handleImageLoaded() {
        alert("Loaded");
        this.setState({ imageStatus: "loaded" });
    }
  
    handleImageErrored() {
        alert("Error");
        this.setState({ imageStatus: "failed to load" });
    }
  
    render() {
        return (
            <div>
            <img className='img-test' alt = 'pokemon' 
                src= 'https://avatanplus.com/files/resources/original/578a3ffb9cb68155f409eefa.png'
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
            />
            </div>
        );
    }
}


export default class Task7 extends Component {
	render() {
		return (
		<div>
      <h2 className='task7-header'>Task7</h2>
        <List/>
      <ImageWithStatusText/>	
		</div>
		)
	}
}

render(<Task7/>, document.getElementById('task7'));