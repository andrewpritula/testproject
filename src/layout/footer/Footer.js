import React, { useState } from 'react'
import './Css/footer.css'
import {useTranslation} from "react-i18next";

function Footer(props) {
    const [userUrl] = useState('/');
    const [gitHubUrl] = useState('https://github.com/andrewpritula');
    const [designUrl] = useState('https://dribbble.com/shots/14867346-Harman');
    const {t} = useTranslation('common');
    return (
        <footer className='footer'>
            <ul className="footer-nav">
                <li className="footer-nav-item">
                    <a href={userUrl} className="footer-link">{t('name')}</a>
                </li>
                <li className="footer-nav-item">
                    <a href={gitHubUrl} className="footer-link">{t('git')}</a>
                </li>
                <li className="footer-nav-item">
                    <a href={designUrl} className="footer-link">{t('design')}</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;