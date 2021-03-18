import React, { Component } from 'react'

import imgGit from '../img/git.png'

const gitTitle = <h2 className='article-title'>Git</h2>;
const articleIntro = 
    <div>
        {gitTitle}
        <p>Git (произносится «гит») — распределённая система управления версиями. 
            Проект был создан Линусом Торвальдсом для управления разработкой ядра Linux, 
            первая версия выпущена 7 апреля 2005 года. На сегодняшний день его 
            поддерживает Джунио Хамано.</p>
        <p>Среди проектов, использующих Git — ядро Linux, Swift, Android, Drupal, Cairo, 
            GNU Core Utilities, Mesa, Wine, Chromium, Compiz Fusion, FlightGear, jQuery, 
            PHP, NASM, MediaWiki, DokuWiki, Qt, ряд дистрибутивов Linux.</p>
        <p>Программа является свободной и выпущена под лицензией GNU GPL версии 2. 
            По умолчанию используется TCP порт 9418.
            </p>
    </div>

const checkout = <h3 className='article-subtitle'>Checkout</h3>
const commit = <h3 className='article-subtitle'>Commit</h3>
const pull = <h3 className='article-subtitle'>Pull</h3>
const push = <h3 className='article-subtitle'>Push</h3>

const articleFull = <div>
    {checkout}
    <code>git checkout [-q] [-f] [-m] [&lt;branch&gt;]<br/>
        git checkout [-q] [-f] [-m] --detach [&lt;branch&gt;]<br/>
        git checkout [-q] [-f] [-m] [--detach] &lt;commit&gt;<br/>
        git checkout [-q] [-f] [-m] [[-b|-B|--orphan] &lt;new_branch&gt;] [&lt;start_point&gt;]<br/>
        git checkout [-f|--ours|--theirs|-m|--conflict=&lt;style&gt;] [&lt;tree-ish&gt;] [--] &lt;pathspec&gt;…​<br/>
        git checkout [-f|--ours|--theirs|-m|--conflict=&lt;style&gt;] [&lt;tree-ish&gt;] --pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]<br/>
        git checkout (-p|--patch) [&lt;tree-ish&gt;] [--] [&lt;pathspec&gt;…​]
    </code>
    {commit}
    <code>
        git commit [-a | --interactive | --patch] [-s] [-v] [-u&lt;mode&gt;] [--amend]<br/>
        [--dry-run] [(-c | -C | --fixup | --squash) &lt;ommit&gt;]<br/>
        [-F &lt;file&gt; | -m &lt;msg&gt;] [--reset-author] [--allow-empty]<br/>
        [--allow-empty-message] [--no-verify] [-e] [--author=&lt;author&gt;]<br/>
        [--date=&lt;date&gt;] [--cleanup=&lt;mode&gt;] [--[no-]status]<br/>
        [-i | -o] [--pathspec-from-file=&lt;file&gt; [--pathspec-file-nul]]<br/>
        [-S[&lt;keyid&gt;]] [--] [&lt;pathspec&gt;…​] 
    </code>
    {pull}
    <p>git-pull - извлечь и интегрировать с другим репозиторием или локальной веткой</p>
    <code>
        git pull [&lt;параметры&gt;] [&lt;репозиторий&gt; [&lt;refspec&gt;…]]
    </code>
    {push}
    <code>
        git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=&lt;git-receive-pack&gt;]<br/>
        [--repo=&lt;repository&gt;] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]<br/>
        [-u | --set-upstream] [-o &lt;string&gt; | --push-option=&lt;string&gt;]<br/>
        [--[no-]signed|--signed=(true|false|if-asked)]<br/>
        [--force-with-lease[=&lt;refname&gt;[:&lt;expect&gt;]] [--force-if-includes]]<br/>
        [--no-verify] [&lt;repository&gt; [&lt;refspec&gt;…​]]<br/>
    </code>
</div>

export default class Git extends Component {
    constructor(props) {
        super(props);
        this.handleMoreClick = this.handleMoreClick.bind(this);
        this.handleLessClick = this.handleLessClick.bind(this);
        this.state = {isShowed: false};
      }
    
      handleMoreClick() {
        this.setState({isShowed: true});
      }
    
      handleLessClick() {
        this.setState({isShowed: false});
      }

    render() {
        const isShowed = this.state.isShowed;
        let button;
        if (isShowed) {
            button = <ShowLess onClick={this.handleLessClick} />;
        } else {
            button = <ShowMore onClick={this.handleMoreClick} />;
        }

        return(
            <div className="container">
                <div className="left-part">  
                    {articleIntro}
                    {button}
                    <ShowInfo isLoggedIn={isShowed} />
                </div>
                <div className="rigth-part">
                    <img src={imgGit} alt="git" id="git-img" className="overview-img"></img>
                </div>
            </div>
        )
    }
}

function BeforeClick(props) {
    return articleFull
}
  
function AfterClick(props) {
    return null
}
  
function ShowInfo(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <BeforeClick />;
    }
    return <AfterClick />;
}
  
function ShowMore(props) {
    return (
      <button className='article-button' onClick={props.onClick}>
        Show more
      </button>
    );
}
  
function ShowLess(props) {
    return (
      <button className='article-button' onClick={props.onClick}>
        Show less
      </button>
    );
} 