import React, {useState, useRef} from 'react'
import './Styles/todoList.css'
import ThemeContext from '../../../context/ThemeContext'
import {useTranslation} from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import './Styles/todoList.css'

function TodoList() {
    const {dark} = React.useContext(ThemeContext);
    const {t} = useTranslation('common');
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const draggingItem = useRef();
    const dragOverItem = useRef();

    const getTodo = e => {
        setInput(e.target.value);
    }

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
  
    const addTodo = e => {
        e.preventDefault();
        if(input === ''){
        alert('enter value');
        } else {
        setList([...list, {text: input, id : uuidv4(), date : new Date().toLocaleString()}]);
        setInput('');
        }
    }

    const deleteTodo = (id) => {
        setList(list.filter((item) => item.id !== id));
    }

    return (
        <div className={dark ? "container-dark" : "container"}>
            <h2 id='todo-title'>{t('todoTitle')}</h2>
            <form class-name='todo-form' onSubmit={addTodo}>
                <input type='text' value={input} onChange={getTodo}/>
                <button className = 'form-button' type='submit'>{t('add')}</button>
            </form>
            <ul className='list'>
                {list.map((item, index) => (
                <li key={item.id}
                    className="list-item"
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDragEnter={(e) => handleDragEnter(e, index)}
                    draggable>
                    {t('whatToDo')} {item.text} {t('creationDate')} {item.date}
                    <button className = 'button' onClick={() => deleteTodo(item.id)}>{t('delete')}</button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
