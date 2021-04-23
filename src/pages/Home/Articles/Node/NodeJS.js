import React, { Component, Fragment } from 'react'

import '../articles.css'
import imgNode from '../../../../accets/images/node.png'
import {ThemeContext} from '../../components/theme-context';


const translations = {
    "ru": {
        "title": "Node JS",
        "introInf": 
        <Fragment>
          <p>Node или Node.js — программная платформа, основанная на движке V8 
              (транслирующем JavaScript в машинный код), превращающая JavaScript 
              из узкоспециализированного языка в язык общего назначения. Node.js 
              добавляет возможность JavaScript взаимодействовать с устройствами 
              ввода-вывода через свой API, написанный на C++, подключать другие 
              внешние библиотеки, написанные на разных языках, обеспечивая вызовы 
              к ним из JavaScript-кода. Node.js применяется преимущественно на сервере,
              выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js 
              и десктопные оконные приложения (при помощи NW.js, AppJS или 
              Electron для Linux, Windows и macOS) и даже программировать 
              микроконтроллеры (например, tessel, low.js и espruino).
              В основе Node.js лежит событийно-ориентированное и 
              асинхронное (или реактивное) программирование с 
              неблокирующим вводом/выводом.
          </p>
        </Fragment>,
    },
    "en": {
      "title": "Node JS",
      "introInf": <Fragment>
        <p>
        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment 
        that runs on the V8 engine and executes JavaScript code outside a web browser. 
        Node.js lets developers use JavaScript to write command line tools and for 
        server-side scripting—running scripts server-side to produce dynamic web page 
        content before the page is sent to the user's web browser. Consequently, 
        Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application 
        development around a single programming language, rather than different languages 
        for server-side and client-side scripts.<br/>
        Though .js is the standard filename extension for JavaScript code, 
        the name "Node.js" doesn't refer to a particular file in this context 
        and is merely the name of the product. Node.js has an event-driven 
        architecture capable of asynchronous I/O. These design choices 
        aim to optimize throughput and scalability in web applications 
        with many input/output operations, as well as for real-time Web 
        applications (e.g., real-time communication programs and browser games).<br/>
        The Node.js distributed development project was previously governed 
        by the Node.js Foundation,[8] and has now merged with the JS 
        Foundation to form the OpenJS Foundation, which is facilitated by 
        the Linux Foundation's Collaborative Projects program.
        Corporate users of Node.js software include GoDaddy, Groupon, IBM,
        LinkedIn, Microsoft, Netflix, PayPal, Rakuten, SAP, Voxer, 
        Walmart, Yahoo!, and Amazon Web Services.
        </p>
      </Fragment>,
    }
}

class NodeJS extends Component {
    render() {
        let theme = this.context;
        const { lang } = this.props;
        return(
            <div>
                <div className="container"  style={{backgroundColor : theme.backgroundColor, color : theme.color}}>
                    <div className="left-part">
                        <h3>{translations[lang]["title"]}</h3>
                        <div>{translations[lang]["introInf"]}</div>
                    </div>
                    <div className="rigth-part">
                        <img src={imgNode} alt="node" id="node-img" className="overview-img"></img>
                    </div>
                </div>
            </div>
        )
    }
}


NodeJS.contextType = ThemeContext;
export default NodeJS;