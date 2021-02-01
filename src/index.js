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
            <header>
                <h1>Testproject</h1>
            </header>
            <section class="overview">
	            <h2>Testproject for onix internship</h2>
            </section>
            <nav>
                <ul>
                    <li><a href="/">VCS</a></li>
                    <li><a href="/git">Git</a></li>
	                <li><a href="/node">NodeJS</a></li>
                    <li><a href="/npm">Npm</a></li>
	                <li><a href="/html">Html</a></li>
                    <li><a href="/css">CSS</a></li>
                </ul>
            </nav>
  
            <article id='article'>
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
            </article>

            <footer>
                <ul>
                    <li>Andrew Pritula</li>
                    <li><a href="https://github.com/andrewpritula">GitHub profile</a></li>
                    <li><a href="https://dribbble.com/shots/14867346-Harman">Original design</a></li>
                </ul>
            </footer>
        </div>
    )
}

render(<Page/>, document.getElementById('root'));