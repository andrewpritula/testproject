import React, { Component, Fragment } from 'react'

import {ThemeContext} from '../../components/theme-context';
import '../articles.css'
import imgNPM from '../../../../accets/images/npm.png'


const translations = {
    "ru": {
        "title": "NPM",
        "introInf": 
        <Fragment>
          <p>npm (англ. Node Package Manager) — менеджер пакетов, 
            входящий в состав Node.js..
          </p>
          <p>npm – инструмент командной строки, который помогает 
            взаимодействовать с онлайн-платформами, такими как браузеры и серверы. 
            Эта утилита помогает в установке и удалении пакетов, управлении версиями и 
            зависимостями, необходимыми для запуска проекта.
          </p>
          <p>Установка пакета производится при помощи команды:<br/>
            npm install "packagename"<br/>
            Все доступные для установки пакеты и их краткое описание:<br/>
            npm search<br/>
            Этой же командой можно производить выборочный поиск пакетов.<br/>
          </p>
        </Fragment>,
    },
    "en": {
      "title": "NPM",
      "introInf": <Fragment>
        <p>
        npm (originally short for Node Package Manager) is a package manager 
        for the JavaScript programming language.
        </p>
        <p>
        npm, Inc. is a subsidiary of GitHub (a subsidiary of Microsoft), 
        that provides hosting for software development and version control 
        with the usage of Git.
        </p>
        <p>
        npm is the default package manager for the JavaScript runtime environment 
        Node.js. It consists of a command line client, also called npm, 
        and an online database of public and paid-for private packages, 
        called the npm registry. The registry is accessed via the client, 
        and the available packages can be browsed and searched via the npm website. 
        The package manager and the registry are managed by npm, Inc.
        </p>
      </Fragment>,
    }
}

class NPM extends Component {
    render() {
        let theme = this.context;
        const { lang } = this.props;
        return(
            <div>
                <div className="container" style={{backgroundColor : theme.backgroundColor, color : theme.color}}>
                    <div className="left-part">
                        <h3>{translations[lang]["title"]}</h3>
                        <div>{translations[lang]["introInf"]}</div>
                    </div>
                    <div className="rigth-part">
                        <img src={imgNPM} alt="npm" id="npm-img" className="overview-img"></img>
                    </div>
                </div>
            </div>
        )
    }
}


NPM.contextType = ThemeContext;
export default NPM;