import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './style.css'

import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'

import VCS from './pages/Home/Articles/VCS/VCS'
import Git from './pages/Home/Articles/Git/Git'
import NodeJS from './pages/Home/Articles/Node/NodeJS'
import NPM from './pages/Home/Articles/Npm/Npm'
import Html from './pages/Home/Articles/Html/Html'
import Css from './pages/Home/Articles/Css/Css'

import Image from '../src/components/Image/Image'
import Fetch from './pages/Home/components/Fetch'
import Task8 from './pages/Home/components/Task8'
import {ThemeContext, themes} from './pages/Home/components/theme-context';
import ThemedButton from './pages/Home/components/themed-button';

function Toolbar(props) {
    return (
      <ThemedButton onClick={props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          theme: themes.light,
        };
    
        this.toggleTheme = () => {
          this.setState(state => ({
            theme:
              state.theme === themes.dark
                ? themes.light
                : themes.dark,
          }));
        };
    }

    render() {
        const { lang } = this.props;
        return (
            <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
            <div id="page">
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
                <section>
                    <Fetch lang = {lang}/>
                    <Task8 lang = {lang}/>
				    <Image/>	
                </section>
                <Footer lang = {lang}/>
            </div>
            </ThemeContext.Provider>
        )
    }
}

export default App;