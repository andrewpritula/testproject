import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './style.css'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import VCS from './pages/Articles/VCS/VCS'
import Git from './pages/Articles/Git/Git'
import NodeJS from './pages/Articles/Node/NodeJS'
import NPM from './pages/Articles/Npm/Npm'
import Html from './pages/Articles/Html/Html'
import Css from './pages/Articles/Css/Css'
import Image from '../src/components/Image/Image'
import Fetch from './pages/Home/components/Fetch'
import Task8 from './pages/Home/components/Task8'

class App extends Component {
    render() {
        const { lang } = this.props;
        return (
            <div id='page'>
                <Header lang = {lang}/>
                <section className="overview">
                        <Router>
                            <Switch>
                                <Route exact path = "/"><VCS lang = {lang}/></Route>
                                <Route exact path = "/git"><Git lang = {lang}/></Route>
                                <Route exact path = "/node"><NodeJS lang = {lang}/></Route>
                                <Route exact path = "/npm"><NPM lang = {lang}/></Route>
                                <Route exact path = "/html"><Html lang = {lang}/></Route>
                                <Route exact path = "/css"><Css lang = {lang}/></Route>
                            </Switch>
                        </Router>
                </section>
                <section className ="container">
                    <Fetch lang = {lang}/>
                    <Task8 lang = {lang}/>
				    <Image/>	
                </section>
                <Footer lang = {lang}/>
            </div>
        )
    }
}

export default App;