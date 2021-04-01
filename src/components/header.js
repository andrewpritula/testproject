import React, { Component } from 'react'

import Clock from './clock'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTitle : 'Testproject',

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
        return (
            <header className="header">
                <h1 className="header-title">{this.state.headerTitle} <Clock/></h1>
                    <ul className="nav-header">
                        {this.state.navList.map((value) => 
                            <li key={value.title} className="nav-item">
                                <a href={value.path} className="nav-link">{value.title}</a>
                            </li>)}
                    </ul>
            </header>
        )
    }
}