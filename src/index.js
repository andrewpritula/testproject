import React, { Component } from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './style.css'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import VCS from './pages/Articles/VCS/VCS'
import Git from './pages/Articles/Git/Git'
import NodeJS from './pages/Articles/Node/NodeJS'
import Npm from './pages/Articles/Npm/Npm'
import Html from './pages/Articles/Html/Html'
import Css from './pages/Articles/Css/Css'
import Tasks from './pages/Home/Tasks'

class Index extends Component {
    render() {
        return (
            <div id='page'>
                <Header/>
                
                <section className ="container">
                    <Tasks/>
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

render(<Index/>, document.getElementById('root'));