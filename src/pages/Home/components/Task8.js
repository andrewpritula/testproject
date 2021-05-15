import React, { useState } from 'react'
import './Styles/task8.css'
import ThemeContext from '../../../context/ThemeContext'
import {useTranslation} from "react-i18next";

const items = [
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
];

const testPerson = {
    //2-nd lvl of nesting
    fullname : {
        name : 'testName',
        sername : 'testSername',
    },
    yearOfBirth : 2021,
    placeOfBirth : 'testPlace',
    age : 100,
}

function Task8() {
    const {dark} = React.useContext(ThemeContext);
    const {t} = useTranslation('common');
    let [persons, setPersons] = useState(items);
    const [newPerson] = useState(testPerson);
    const [personsInFly, setPersonInFly] = useState("")

    const handleDragStart = (event, person) => {
        setPersonInFly(person)
    }

    const handleDragOver = event => {
        event.preventDefault();
        event.stopPropagation();
    }

    const handleDrop = (event, person) => {
        const temp = [...persons];
        const fromIndex = temp.findIndex((elem) => elem === personsInFly);
        const toIndex = temp.findIndex((elem) => elem === person);
        temp.splice(fromIndex, 1);
        temp.splice(toIndex, 0, personsInFly);
        setPersons(temp);
    }
    
    function handleAddClick(value) {
        setPersons(persons = [...persons, value]);
    };
  
    function handleDeleteClick(value){
        const items = value;
        items.pop();
        setPersons(persons = [...items]);
    };

    function handleSortClick(arr, param){
        const items = arr;
        items.sort(((a, b) => a[param] > b[param] ? 1 : -1));
        setPersons( persons = [...items] );
    };

    return (
        <div className={dark ? "container-dark" : "container"}>
            <button className = 'button' onClick={() => handleAddClick(newPerson)}>+</button>
            <button className = 'button' onClick={() => handleDeleteClick(persons)}>-</button>
            <button className = 'button' onClick={() => handleSortClick(persons, 'age')}>{t('buttonSort')}</button>
            <ul className="item-list">
                {persons.map((item, index) => (
                    <li key={index} 
                    className="tasks__item"
                    draggable="true"
                    onDrop={event => handleDrop(event, item)}
                    onDragOver={event => handleDragOver(event)}
                    onDragStart={event => handleDragStart(event, item)}
                    >
                    {t('person') + item.fullname.name + ' ' + item.fullname.sername + 
                     t('age')  + item.age + 
                     t('bp') + item.placeOfBirth + 
                     t('bd')  + item.yearOfBirth}</li>
                ))}
            </ul>
        </div>
    )
}

export default Task8;