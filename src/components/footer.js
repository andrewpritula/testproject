import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerList : [
                {title : 'Andrew Pritula', path : '/'},
                {title : 'GitHub', path : 'https://github.com/andrewpritula'},
                {title : 'Design', path : 'https://dribbble.com/shots/14867346-Harman'},
            ]
        };
    }
    render() {
        return (
            <footer className='footer'>
                <ul className="footer-nav">
                    {this.state.footerList.map((value) =>
                        <li key={value.title} className="footer-nav-item">
                            <a href={value.path} className="footer-link">{value.title}</a>
                        </li>)}
                </ul>
            </footer>
        )
    }
}