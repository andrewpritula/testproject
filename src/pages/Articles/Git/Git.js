import React, { Component, Fragment } from 'react'

import '../articles.css'
import imgGit from './git.png'

const translations = {
    "ru": {
        "title": "Git",
        "overview": <Fragment>
            <p>Git (произносится «гит») — распределённая система управления версиями. 
                Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux, 
                первая версия выпущена 7 апреля 2005 года. На сегодняшний день его поддерживает 
                Джунио Хамано.</p>
        </Fragment>,
        "introInf": <Fragment>
            <h3 className='article-subtitle'>Checkout</h3>
            <code>git checkout [-q] [-f] [-m] [&lt;branch&gt;]<br/>
                git checkout [-q] [-f] [-m] --detach [&lt;branch&gt;]<br/>
                git checkout [-q] [-f] [-m] [--detach] &lt;commit&gt;<br/>
                git checkout [-q] [-f] [-m] [[-b|-B|--orphan] &lt;new_branch&gt;] [&lt;start_point&gt;]<br/>
                git checkout [-f|--ours|--theirs|-m|--conflict=&lt;style&gt;] [&lt;tree-ish&gt;] [--] &lt;pathspec&gt;…​<br/>
                git checkout [-f|--ours|--theirs|-m|--conflict=&lt;style&gt;] [&lt;tree-ish&gt;] --pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]<br/>
                git checkout (-p|--patch) [&lt;tree-ish&gt;] [--] [&lt;pathspec&gt;…​]
            </code>
            <h3 className='article-subtitle'>Commit</h3>
            <code>
                git commit [-a | --interactive | --patch] [-s] [-v] [-u&lt;mode&gt;] [--amend]<br/>
                [--dry-run] [(-c | -C | --fixup | --squash) &lt;ommit&gt;]<br/>
                [-F &lt;file&gt; | -m &lt;msg&gt;] [--reset-author] [--allow-empty]<br/>
                [--allow-empty-message] [--no-verify] [-e] [--author=&lt;author&gt;]<br/>
                [--date=&lt;date&gt;] [--cleanup=&lt;mode&gt;] [--[no-]status]<br/>
                [-i | -o] [--pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]]<br/>
                [-S[&lt;keyid&gt;]] [--] [&lt;pathspec&gt;…​] 
            </code>
            <h3 className='article-subtitle'>Pull</h3>
            <p>git-pull - извлечь и интегрировать с другим репозиторием или локальной веткой</p>
            <code>
                git pull [&lt;параметры&gt;] [&lt;репозиторий&gt; [&lt;refspec&gt;…]]
            </code>
            <h3 className='article-subtitle'>Push</h3>
            <code>
                git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=&lt;git-receive-pack&gt;]<br/>
                [--repo=&lt;repository&gt;] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]<br/>
                [-u | --set-upstream] [-o &lt;string&gt; | --push-option=&lt;string&gt;]<br/>
                [--[no-]signed|--signed=(true|false|if-asked)]<br/>
                [--force-with-lease[=&lt;refname&gt;[:&lt;expect&gt;]] [--force-if-includes]]<br/>
                [--no-verify] [&lt;repository&gt; [&lt;refspec&gt;…​]]<br/>
            </code>
      </Fragment>,
    },
    "en": {
      "title": "Git",
      "overview": <Fragment>
            <p>Git (/ɡɪt/) is software for tracking changes in any set of files, 
                usually used for coordinating work among programmers collaboratively 
                developing source code during software development. Its goals include speed, 
                data integrity, and support for distributed, non-linear workflows 
                (thousands of parallel branches running on different systems).</p>
        </Fragment>,
      "introInf": <Fragment>
        <h3 className='article-subtitle'>Checkout</h3>
        <code>git checkout [-q] [-f] [-m] [&lt;branch&gt;]<br/>
            git checkout [-q] [-f] [-m] --detach [&lt;branch&gt;]<br/>
            git checkout [-q] [-f] [-m] [--detach] &lt;commit&gt;<br/>
            git checkout [-q] [-f] [-m] [[-b|-B|--orphan] &lt;new_branch&gt;] [&lt;start_point&gt;]<br/>
            git checkout [-f|--ours|--theirs|-m|--conflict=&lt;style&gt;] [&lt;tree-ish&gt;] [--] &lt;pathspec&gt;…​<br/>
            git checkout [-f|--ours|--theirs|-m|--conflict=&lt;style&gt;] [&lt;tree-ish&gt;] --pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]<br/>
            git checkout (-p|--patch) [&lt;tree-ish&gt;] [--] [&lt;pathspec&gt;…​]
        </code>
        <h3 className='article-subtitle'>Commit</h3>
        <code>
            git commit [-a | --interactive | --patch] [-s] [-v] [-u&lt;mode&gt;] [--amend]<br/>
            [--dry-run] [(-c | -C | --fixup | --squash) &lt;ommit&gt;]<br/>
            [-F &lt;file&gt; | -m &lt;msg&gt;] [--reset-author] [--allow-empty]<br/>
            [--allow-empty-message] [--no-verify] [-e] [--author=&lt;author&gt;]<br/>
            [--date=&lt;date&gt;] [--cleanup=&lt;mode&gt;] [--[no-]status]<br/>
            [-i | -o] [--pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]]<br/>
            [-S[&lt;keyid&gt;]] [--] [&lt;pathspec&gt;…​] 
        </code>
        <h3 className='article-subtitle'>Pull</h3>
        <p>git-pull - извлечь и интегрировать с другим репозиторием или локальной веткой</p>
        <code>
            git pull [&lt;параметры&gt;] [&lt;репозиторий&gt; [&lt;refspec&gt;…]]
        </code>
        <h3 className='article-subtitle'>Push</h3>
        <code>
            git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=&lt;git-receive-pack&gt;]<br/>
            [--repo=&lt;repository&gt;] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]<br/>
            [-u | --set-upstream] [-o &lt;string&gt; | --push-option=&lt;string&gt;]<br/>
            [--[no-]signed|--signed=(true|false|if-asked)]<br/>
            [--force-with-lease[=&lt;refname&gt;[:&lt;expect&gt;]] [--force-if-includes]]<br/>
            [--no-verify] [&lt;repository&gt; [&lt;refspec&gt;…​]]<br/>
        </code>
      </Fragment>,
    }
}

class Html extends Component {
    render() {
        const { lang } = this.props;
        console.log(lang)

        return(
            <div>
                <div className="container">
                    <div className="left-part">
                        <h3>{translations[lang]["title"]}</h3>
                        <div>{translations[lang]["overview"]}</div>
                        <div>{translations[lang]["introInf"]}</div>
                    </div>
                    <div className="rigth-part">
                        <img src={imgGit} alt="git" id="git-img" className="overview-img"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Html;