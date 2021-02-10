import React, { Component } from 'react'

import imgNode from '../img/node.png'

export default class NodeJS extends Component {
    render() {
        return(
            <div className="container">
                <div className="left-part">
                    <p className="term">Node JS</p>
                    <p>Node или Node.js — программная платформа, основанная на движке V8 
                        (транслирующем JavaScript в машинный код), превращающая JavaScript
                        из узкоспециализированного языка в язык общего назначения. Node.js 
                        добавляет возможность JavaScript взаимодействовать с устройствами 
                        ввода-вывода через свой API, написанный на C++, подключать другие 
                        внешние библиотеки, написанные на разных языках, обеспечивая вызовы
                        к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, 
                        выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js 
                        и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, 
                        Windows и macOS) и даже программировать микроконтроллеры (например, tessel, 
                        low.js и espruino). В основе Node.js лежит событийно-ориентированное и асинхронное
                        (или реактивное) программирование с неблокирующим вводом/выводом.</p>
                    <h3>История</h3>
                    <p>В 1996 году в компании Netscape были попытки создания серверного JavaScript 
                        (Server-side JavaScript — SSJS), однако технология не получила распространения.</p>
                    <p>Node.js разработал Райан Даль в 2009 году после двух лет экспериментирования 
                        над созданием серверных веб-компонентов. В ходе своих исследований он пришёл к выводу, 
                        что вместо традиционной модели параллелизма на основе потоков следует обратиться
                        к событийно-ориентированным системам. Эта модель была выбрана из-за простоты, 
                        низких накладных расходов (по сравнению с идеологией «один поток на каждое соединение») 
                        и быстродействия. Целью Node является предложить «простой способ построения 
                        масштабируемых сетевых серверов»</p>
                    <h3>Установка Node.js</h3>
                    <p>Перейдите на страницу загрузок Node.js и скачайте нужную вам версию. Есть установщики 
                    для Windows и Mac, а также скомпилированные бинарники и исходный код для Linux. 
                    Кроме того, в Linux вы можете установить Node.js с помощью пакетного менеджера,
                    все это описано в документации.</p>
                    <p>В этой статье мы будем использовать стабильную версию 5.7.0.</p>
                    <p>Посмотреть, где установлен Node и проверить версию можно следующими командами:</p>
                    <code>$ which node<br/>
                    /usr/local/bin/node<br/>
                    $ node --version<br/>
                    v5.7.0
                    </code>
                    <p>Чтобы удостовериться, что установка прошла успешно, 
                    выполним несколько команд в простой интерактивной среде Node (REPL).</p>
                    <code>$ node
                    &gt; console.log('Node is running');<br/>
                    Node is running<br/>
                    &gt; .help<br/>
                    .break Sometimes you get stuck, this gets you out<br/>
                    .clear Alias for .break<br/>
                    .exit  Exit the repl<br/>
                    .help  Show repl options<br/>
                    .load  Load JS from a file into the REPL session<br/>
                    .save  Save all evaluated commands in this REPL session to a file<br/>
                    &gt; .exit</code>
                </div>
                <div className="rigth-part">
                    <img src={imgNode} alt="node" id="node-img" className="overview-img"></img>
                </div>
            </div>
        )
    }
}