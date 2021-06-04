import React, { useState } from 'react';
import './Css/header.css';
import { useTranslation } from 'react-i18next';
import Clock from '../../components/Clock/Clock';
import ThemeContext from '../../context/ThemeContext';

const hList = [
  { title: 'VCS', path: '/' },
  { title: 'Git', path: '/git' },
  { title: 'Node JS', path: '/node' },
  { title: 'Npm', path: '/npm' },
  { title: 'Html', path: '/html' },
  { title: 'Css', path: '/css' },
];

const classNames = require('classnames');

function Header() {
  const { dark } = React.useContext(ThemeContext);
  const { t } = useTranslation('common');
  const [navList] = useState(hList);
  const headerClass = classNames({
    'header-dark': dark,
    header: !dark
  });
  
  const navLinkClass = classNames({
    'nav-link-dark': dark,
    'nav-link': !dark
  });
  return (
    <header className={headerClass}>
      <h1 className="header-title">
        {t('title')}
        <Clock />
      </h1>
      <ul className="nav-header">
        {navList.map((value) => (
          <li key={value.title} className="nav-item">
            <a href={value.path} className={navLinkClass}>{value.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
