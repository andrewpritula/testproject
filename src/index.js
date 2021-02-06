import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './style.css'

import VCS from '../src/pages/VCS'
import Git from '../src/pages/Git'
import NodeJS from '../src/pages/NodeJS'
import Npm from '../src/pages/Npm'
import Html from '../src/pages/Html'
import Css from '../src/pages/Css'

function Page() {
    return (
        <div id='page'>
            <header className="header">
                <h1 className="header-title">Testproject</h1>
                <div className="header-right">
                    <a href="/" className="nav-link">VCS</a>
                    <a href="/git" className="nav-link">Git</a>
                    <a href="/node" className="nav-link">NodeJS</a>
                    <a href="/npm" className="nav-link">Npm</a>
                    <a href="/html" className="nav-link">Html</a>
                    <a href="/css" className="nav-link">CSS</a>
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
                    <li className="footer-nav-item">Andrew Pritula</li>
                    <li className="footer-nav-item"><a href="https://github.com/andrewpritula" className="footer-link">GitHub profile</a></li>
                    <li className="footer-nav-item"><a href="https://dribbble.com/shots/14867346-Harman" className="footer-link">Original design</a></li>
                </ul>
            </footer>
        </div>
    )
}

render(<Page/>, document.getElementById('root'));