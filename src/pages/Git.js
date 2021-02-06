import React, { Component } from 'react'

export default class Git extends Component {
    render() {
        return(
            <div className="container">
                <div className="left-part">
                    <p className="term">GIT</p>
                    <p>Git (произносится «гит») — распределённая система управления версиями. 
                    Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux, 
                    первая версия выпущена 7 апреля 2005 года. На сегодняшний день его 
                    поддерживает Джунио Хамано.</p>
                    <p>Среди проектов, использующих Git — ядро Linux, Swift, Android, Drupal, Cairo, 
                        GNU Core Utilities, Mesa, Wine, Chromium, Compiz Fusion, FlightGear, jQuery, 
                        PHP, NASM, MediaWiki, DokuWiki, Qt, ряд дистрибутивов Linux.</p>
                    <p>Программа является свободной и выпущена под лицензией GNU GPL версии 2. 
                        По умолчанию используется TCP порт 9418.</p>
                    <h3>Checkout</h3>
                    <p>git-checkout - переключение ветвей или восстановление файлов рабочего дерева</p>
                    <code>git checkout [-q] [-f] [-m] [&lt;branch&gt;]<br/>
                        git checkout [-q] [-f] [-m] --detach [&lt;branch&gt;]<br/>
                        git checkout [-q] [-f] [-m] [--detach] &lt;commit&gt;<br/>
                        git checkout [-q] [-f] [-m] [[-b|-B|--orphan] &lt;new_branch&gt;] [&lt;start_point&gt;]<br/>
                        git checkout [-f|--ours|--theirs|-m|--conflict=&lt;style&gt;] [&lt;tree-ish&gt;] [--] &lt;pathspec&gt;…​<br/>
                        git checkout [-f|--ours|--theirs|-m|--conflict=&lt;style&gt;] [&lt;tree-ish&gt;] --pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]<br/>
                        git checkout (-p|--patch) [&lt;tree-ish&gt;] [--] [&lt;pathspec&gt;…​]</code>
                    <h3>Commit</h3>
                    <p>git-commit - Записывает изменения в репозиторий</p>
                    <code>
                        git commit [-a | --interactive | --patch] [-s] [-v] [-u&lt;mode&gt;] [--amend]<br/>
                            [--dry-run] [(-c | -C | --fixup | --squash) &lt;ommit&gt;]<br/>
                            [-F &lt;file&gt; | -m &lt;msg&gt;] [--reset-author] [--allow-empty]<br/>
                            [--allow-empty-message] [--no-verify] [-e] [--author=&lt;author&gt;]<br/>
                            [--date=&lt;date&gt;] [--cleanup=&lt;mode&gt;] [--[no-]status]<br/>
                            [-i | -o] [--pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]]<br/>
                            [-S[&lt;keyid&gt;]] [--] [&lt;pathspec&gt;…​] 
                    </code>
                    <h3>Pull</h3>
                    <p>git-pull - извлечь и интегрировать с другим репозиторием или локальной веткой</p>
                    <code>
                        git pull [&lt;параметры&gt;] [&lt;репозиторий&gt; [&lt;refspec&gt;…]]
                    </code>
                    <h3>Push</h3>
                    <p>git-push - обновляет удаленные ссылки вместе со связанными объектами</p>
                    <code>
                        git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=&lt;git-receive-pack&gt;]<br/>
                        [--repo=&lt;repository&gt;] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]<br/>
                        [-u | --set-upstream] [-o &lt;string&gt; | --push-option=&lt;string&gt;]<br/>
                        [--[no-]signed|--signed=(true|false|if-asked)]<br/>
                        [--force-with-lease[=&lt;refname&gt;[:&lt;expect&gt;]] [--force-if-includes]]<br/>
                        [--no-verify] [&lt;repository&gt; [&lt;refspec&gt;…​]]<br/>
                    </code>
                </div>
            </div>
        )
    }
}