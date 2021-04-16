import React, { Component } from 'react'

import './Css/header.css'
import Clock from '../../components/Clock/Clock'

const translations = {
    "ru": {
        "title": "Тестовый проект",  
    },
    "en": {
        "title": "Test project",
    }
}

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

            navList : [
              { title :'VCS', path : '/'},
              { title :'Git', path : '/git'},
              { title :'Node JS', path : '/node'},
              { title :'Npm', path : '/npm'},
              { title :'Html', path : '/html'},
              { title :'Css', path : '/css'},
            ],
        };
    }
    render() {
        const {navList} = this.state;
        const { lang } = this.props;
        return (
            <header className="header">
                <h1 className="header-title">{translations[lang]["title"]} <Clock/></h1>
                    <ul className="nav-header">
                        {navList.map((value) => 
                            <li key={value.title} className="nav-item">
                                <a href={value.path} className="nav-link">{value.title}</a>
                            </li>)}
                    </ul>
            </header>
        )
    }
}