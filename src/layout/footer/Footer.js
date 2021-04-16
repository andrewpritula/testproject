import React, { Component } from 'react'

import './Css/footer.css'

const translations = {
    "ru": {
        "Andrew Pritula": "Андрей Притула",
        "GitHub": "Git репозиторий",
        "Design": "Реф дизайна",
       
    },
    "en": {
        "Andrew Pritula": "Andrew Pritula",
        "GitHub": "Git repository",
        "Design": "Design referense",
    }
}
export default class Footer extends Component {
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
        const {lang} = this.props;
        return (
            <footer className='footer'>
                <ul className="footer-nav">
                    {this.state.footerList.map((value) =>
                        <li key={value.title} className="footer-nav-item">
                            <a href={value.path} className="footer-link">{translations[lang][value.title]}</a>
                        </li>)}
                </ul>
            </footer>
        )
    }
}