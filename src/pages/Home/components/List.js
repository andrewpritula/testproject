import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './Styles/todoList.css';

function List({
  list, deleteItem, handleDragStart, handleDragEnter 
}) {
  return (
    <ul className="list">
      {list.map((item, index) => (
        <Item 
          key={item.id} 
          index={index} 
          item={item} 
          deleteItem={deleteItem} 
          handleDragStart={handleDragStart} 
          handleDragEnter={handleDragEnter}
        />
      ))}
    </ul>
  );
}

List.propTypes = {
  list: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  handleDragEnter: PropTypes.func.isRequired
};

export default List;
