import React, { Component } from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './style.css'

import VCS from '../src/pages/VCS'
import Git from '../src/pages/Git'
import NodeJS from '../src/pages/NodeJS'
import Npm from '../src/pages/Npm'
import Html from '../src/pages/Html'
import Css from '../src/pages/Css'
import Task4Table from './Task4Table'
import Task6 from './Task6'

class ListItem {
 constructor(title, path) {
     this.title = title;
     this.path = path;
 }
}

const headerTitle = 'Testproject';

const navList = [
    new ListItem('VCS', '/'),
    new ListItem('Git', '/git'),
    new ListItem('Node JS', '/node'),
    new ListItem('Npm', '/npm'),
    new ListItem('Html', '/html'),
    new ListItem('CSS', '/css')
];

const footerList = [
    new ListItem('Andrew Pritula', '/'),
    new ListItem('GitHub Profile', 'https://github.com/andrewpritula'),
    new ListItem('Original Design', 'https://dribbble.com/shots/14867346-Harman')
];

class Page extends Component {
    render() {
        return (
            <div id='page'>
                <header className="header">
                    <h1 className="header-title">{headerTitle}</h1>
                        <ul className="nav-header">
                            {navList.map((value) => 
                                <li key={value.title} className="nav-item">
                                    <a href={value.path} className="nav-link">{value.title}</a>
                                </li>)}
                        </ul>
                </header>
                <section className ="task4">
                    <Task4Table/>
                    <Task6/>
                </section>
                <section className="overview">
                        <Router>
                            <Switch>
                                <Route exact path = "/" component={VCS}/>
                                <Route exact path = "/git" component={Git}/>
                                <Route exact path = "/node" component={NodeJS}/>
                                <Route exact path = "/npm" component={Npm}/>
                                <Route exact path = "/html" component={Html}/>
                                <Route exact path = "/css" component={Css}/>
                            </Switch>
                        </Router>
                </section>
                <footer className='footer'>
                    <ul className="footer-nav">
                        {footerList.map((value) =>
                            <li key={value.title} className="footer-nav-item">
                                <a href={value.path} className="footer-link">{value.title}</a>
                            </li>)}
                    </ul>
                </footer>
            </div>
        )
    }
}

render(<Page/>, document.getElementById('root'));