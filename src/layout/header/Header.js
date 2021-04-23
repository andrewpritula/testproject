import React, { Component } from 'react'

import {ThemeContext} from '../../pages/Home/components/theme-context';
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

class Header extends Component {
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
        let theme = this.context;
        return (
            <header className='header' style={{backgroundColor : theme.backgroundColor, color : theme.color}}>
                <h1 className="header-title">{translations[lang]["title"]} <Clock/></h1>
                    <ul className="nav-header">
                        {navList.map((value) => 
                            <li key={value.title} className="nav-item">
                                <a href={value.path} className="nav-link" style={{color : theme.color}}>{value.title}</a>
                            </li>)}
                    </ul>
            </header>
        )
    }
}

Header.contextType = ThemeContext;
export default Header;