import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './Styles/todoList.css';

function Item({
  item, index, deleteItem, handleDragStart, handleDragEnter 
}) {
  const [selected, setSelected] = useState(false);
  const { t } = useTranslation('common');
  
  const updateReview = () => {
    setSelected(!selected);
  };
  
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className="list-item"
      draggable 
      onClick={() => updateReview()}
      onKeyDown={console.log()} 
      style={{ backgroundColor: selected ? 'red' : '#44d449' }}
      onDragStart={(e) => handleDragStart(e, index)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => handleDragEnter(e, index)}
    >
      {t('whatToDo')} 
      {' '}
      {item.text} 
      {' '}
      {t('creationDate')} 
      {' '}
      {item.date}
      <button className="button" type="button" onClick={() => deleteItem(item.id)}>
        {t('delete')}
      </button>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  index: PropTypes.number.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  handleDragEnter: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default Item;
