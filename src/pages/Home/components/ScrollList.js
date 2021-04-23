import React, { Component } from 'react'

import './Styles/scrollList.css'

const translations = {
  "ru": {
    'person' : 'Персона: ',
    'age' : ' Возраст: ',
    'bp' : ' Место рождения: ',
    'bd' : ' Дата рождения: ',
  },
  "en": {
    'person' : 'Person: ',
    'age' : ' Age: ',
    'bp' : ' Birthplace: ',
    'bd' : ' Birthdate: ',
  }
}
export default class ScrollList extends Component {
    constructor(props) {
      super(props);
      this.listRef = React.createRef();
    }
  
    getSnapshotBeforeUpdate(prevProps) {
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
      // update state
      let data = this.props.items;
      let from = Number(this.dragged.dataset.id);
      let to = Number(this.over.dataset.id);
      data.splice(to, 0, data.splice(from, 1)[0]);
      this.setState({items: data});
    }
  
    dragOver(e) {
      e.preventDefault();
      this.over = e.target;
    }

    render() {
      const { lang } = this.props;
      const {items} = this.props;
      return (
          <ul ref={this.listRef} className="item-list">
                {items.map((item, index) => (
                <li key={index}
                data-id={index}
                draggable='true'
                onDragEnd={this.dragEnd.bind(this)}
                onDragStart={this.dragStart.bind(this)}
                onDragOver={this.dragOver.bind(this)}>
                    {translations[lang]["person"] + item.fullname.name + ' ' + item.fullname.sername + 
                    translations[lang]["age"] + item.age + translations[lang]["bp"] + item.placeOfBirth + translations[lang]["bd"] + item.yearOfBirth}</li>
                ))}
          </ul>
      );
    }
}