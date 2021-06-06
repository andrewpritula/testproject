import React, { useState, useRef } from 'react';
import './Styles/todoList.css';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import ThemeContext from '../../../context/ThemeContext';
import List from './List';

const initialState = [
  {
    text: 'Eat',
    id: uuidv4(),
    date: new Date().toLocaleString()
  },
  {
    
    text: 'Work',
    id: uuidv4(),
    date: new Date().toLocaleString()
  },
  {
    text: 'Sleep',
    id: uuidv4(),
    date: new Date().toLocaleString()
  },
];

function TodoList() {
  const { dark } = React.useContext(ThemeContext);
  const { t } = useTranslation('common');
  const [input, setInput] = useState('');
  const [list, setList] = useState(initialState);
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, { text: input, id: uuidv4(), date: new Date().toLocaleString() }]);
    setInput('');
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    const listCopy = [...list];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setList(listCopy);
  };

  return (
    <div className={dark ? 'container-dark' : 'container'}>
      <h2 id="todo-title">{t('todoTitle')}</h2>
      <div className="form-wrapper">
        <form class-name="todo-form" onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange} />
          <button className="form-button" type="submit">
            {t('add')}
          </button>
        </form>
      </div>
      <List list={list} deleteItem={deleteItem} handleDragStart={handleDragStart} handleDragEnter={handleDragEnter} />
    </div>
  );
}

export default TodoList;
