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

const headerTitle = 'Testproject';
const navList = ['VCS', 'Git', 'Node JS', 'Npm', 'Html', 'CSS'];
const footerList = ['Andrew Pritula', 'GitHub Profile', 'Original Design'];

class Page extends Component {
    render() {
        return (
            <div id='page'>
                <header className="header">
                    <h1 className="header-title">{headerTitle}</h1>
                    <div className="header-right">
                        <ul className="nav-header">
                            <li className="nav-item"><a href="/" className="nav-link">{navList[0]}</a></li>
                            <li className="nav-item"><a href="/git" className="nav-link">{navList[1]}</a></li>
                            <li className="nav-item"><a href="/node" className="nav-link">{navList[2]}</a></li>
                            <li className="nav-item"><a href="/npm" className="nav-link">{navList[3]}</a></li>
                            <li className="nav-item"><a href="/html" className="nav-link">{navList[4]}</a></li>
                            <li className="nav-item"><a href="/css" className="nav-link">{navList[5]}</a></li>
                        </ul>
                    </div>
                </header>

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

                <footer className="footer">
                    <ul className="footer-nav">
                        <li className="footer-nav-item">{footerList[0]}</li>
                        <li className="footer-nav-item"><a href="https://github.com/andrewpritula" className="footer-link">{footerList[1]}</a></li>
                        <li className="footer-nav-item"><a href="https://dribbble.com/shots/14867346-Harman" className="footer-link">{footerList[2]}</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}

render(<Page/>, document.getElementById('root'));