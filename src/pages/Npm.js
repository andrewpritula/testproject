import React, { Component } from 'react'

import imgNpm from '../img/npm.png'

export default class Npm extends Component {
    render() {
        return(
            <div className="container">
              <div className="left-part">
                <p className="term">NPM</p>
                <p>npm (англ. Node Package Manager) — менеджер пакетов, входящий в состав Node.js.</p>
                <p>Установка пакета производится при помощи команды:</p>
                <code>npm install &lt;packagename&gt;</code>
                <p>Все доступные для установки пакеты и их краткое описание:</p>
                <code>npm search</code>
                <p>Этой же командой можно производить выборочный поиск пакетов.</p>
                <h2>Пакеты Node</h2>
                <p>С помощью npm можно устанавливать пакеты локально или глобально. 
                  В локальном режиме пакеты устанавливаются в каталог node_modules родительского каталога.
                  Владельцем каталога является текущий пользователь. Глобальные пакеты устанавливаются 
                  в каталог {"prefix"}/lib/node_modules/, владельцем которого является root 
                  (префиксом в данном случае обычно является каталог /usr/ или /usr/local).
                  Это значит, что вам надо использовать sudo для глобальной установки пакетов, 
                  что может повлечь ошибки с полномочиями при разрешении сторонних зависимостей, 
                  а также создает проблему для безопасности.
                </p>
                <h3>Изменение места установки глобальных пакетов</h3>
                <p>Посмотрим, что скажет нам команда npm config.</p>
                <code>$ npm config list<br/>
                    ; cli configs<br/>
                    user-agent = "npm/3.6.0 node/v5.7.0 linux x64"<br/>
                    
                    ; node bin location = /usr/local/bin/node<br/>
                    ; cwd = /home/sitepoint<br/>
                    ; HOME = /home/sitepoint<br/>
                    ; 'npm config ls -l' to show all defaults.</code>
                <p>Мы получили основную информацию об установке. 
                  Теперь важно узнать место установки глобальных пакетов:
                </p>
                <code>$ npm config get prefix<br/>
                    /usr/local
                </code>
                <p>Этот префикс мы хотим изменить так, чтобы устанавливать пакеты в свой домашний каталог. 
                  Для этого создайте в домашнем каталоге папку .node_modules_global и укажите ее в 
                  качестве места установки пакетов в конфигурации:</p>
                  <code>$ cd &amp;&amp; mkdir .node_modules_global<br/>
                    $ npm config set prefix=$HOME/.node_modules_global</code>
                <p>Внеся такую небольшую правку в конфигурацию, мы изменили место для глобальной установки пакетов.
                  Также в нашем домашнем каталоге появился файл .npmrc.</p>
                <code>$ npm config get prefix<br/>
                  /home/sitepoint/.node_modules_global<br/>
                  $ cat .npmrc<br/>
                  prefix=/home/sitepoint/.node_modules_global</code>
                <p>Сам npm по-прежнему установлен в каталог, владельцем которого является root. 
                  Но так как мы поменяли место установки глобальных пакетов, мы можем использовать
                  полученное преимущество. Мы установим npm еще раз, но теперь в место, указанное нами. 
                  Заодно мы получим последнюю версию npm.</p>
                <code>$ npm install npm --global<br/>
                  /home/sitepoint/.node_modules_global/bin/npm -&gt; /home/sitepoint/.node_modules_global/lib/node_modules/npm/bin/npm-cli.js<br/>
                  /home/sitepoint/.node_modules_global/lib<br/>
                  └── npm@3.7.5</code>
                <p>Наконец, нам надо добавить .node_modules_global/bin в нашу переменную окружения $PATH, 
                чтобы мы могли запускать глобальные пакеты из командной строки.
                Сделаем это, добавив следующую строку в файл .profile или .bash_profile 
                и перезапустив терминал.</p>
                <code>export PATH="$HOME/.node_modules_global/bin:$PATH"</code>
                <p>Теперь командная оболочка будет сразу находить пакеты, установленные 
                в .node_modules_global/bin и использовать корректную версию npm.</p>
                <code>$ which npm<br/>
                /home/sitepoint/.node_modules_global/bin/npm<br/>
                $ npm --version<br/>
                3.7.5</code>
              </div>
              
              <div className="rigth-part">
                    <img src={imgNpm} alt="npm" id="npm-img" className="overview-img"></img>
                </div>
            </div>
        )
    }
}