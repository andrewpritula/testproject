import React, {Suspense} from 'react'
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
import ThemeContext from './pages/Home/components/ThemeContext'
import Button from './pages/Home/components/Button.js'
import {useTranslation} from "react-i18next";

function App() {
  const {dark} = React.useContext(ThemeContext);
  const {i18n} = useTranslation('common');
    return (
      
      <Suspense fallback="loading">
        <div id={dark ? "page-dark" : "page"}>
          <Button/>
          <button className={dark ? "theme-button-dark" : "theme-button"} onClick={() => i18n.changeLanguage('ru')}>ru</button>
          <button className={dark ? "theme-button-dark" : "theme-button"} onClick={() => i18n.changeLanguage('en')}>en</button>
          <Header/>
          <section className="overview">
            <Router>
              <Switch>
                <Route exact path = "/">
                  <VCS/>
                </Route>
                <Route exact path = "/git">
                  <Git/>
                </Route>
                <Route exact path = "/node">
                  <NodeJS/>
                </Route>
                <Route exact path = "/npm">
                  <NPM/>
                </Route>
                <Route exact path = "/html">
                  <Html/>
                </Route>
                <Route exact path = "/css">
                  <Css/>
                </Route>
              </Switch>
            </Router>
          </section>
          <section>
            <Fetch/>
            <Task8/>
            <Image/>	
          </section>
          <Footer/>
        </div>
      </Suspense>
    )
}

export default App;