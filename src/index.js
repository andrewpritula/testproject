import React, { Component } from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './style.css'

import Header from './components/header'
import Footer from './components/footer'
import Task6 from './components/Task6'
import Task7 from './components/Task7'

import VCS from '../src/pages/VCS'
import Git from '../src/pages/Git'
import NodeJS from '../src/pages/NodeJS'
import Npm from '../src/pages/Npm'
import Html from '../src/pages/Html'
import Css from '../src/pages/Css'

class Page extends Component {
    render() {
        return (
            <div id='page'>
                <Header/>
                
                <section className ="container">
                    <Task7/>
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

                <Footer/>
            </div>
        )
    }
}

render(<Page/>, document.getElementById('root'));