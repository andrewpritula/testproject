import React, { Component, Fragment } from 'react'

import {ThemeContext} from '../../components/theme-context';
import '../articles.css'
import imgVCS from './vcs.png'


const translations = {
    "ru": {
        "title": "Система управления версиями",
        "introInf": 
        <Fragment>
            <p>Система управления версиями (от англ. Version Control System, VCS или Revision Control System) 
            — программное обеспечение для облегчения работы с изменяющейся информацией. 
            Система управления версиями позволяет хранить несколько версий одного и того же документа, 
            при необходимости возвращаться к более ранним версиям, определять, кто и когда сделал то 
            или иное изменение, и многое другое. Такие системы наиболее широко используются при разработке 
            программного обеспечения для хранения исходных кодов разрабатываемой программы. Однако они могут с успехом 
            применяться и в других областях, в которых ведётся работа с большим количеством непрерывно
            изменяющихся электронных документов. В частности, системы управления версиями применяются 
            в САПР, обычно в составе систем управления данными об изделии (PDM).
            Управление версиями используется в инструментах конфигурационного управления 
            (Software Configuration Management Tools).</p>
        </Fragment>,    
    },
    "en": {
      "title": "Version control system",
      "introInf": <Fragment>
        <p>
        In software engineering, version control (also known as revision control, 
        source control, or source code management) is a class of systems responsible 
        for managing changes to computer programs, documents, large web sites, or other 
        collections of information. Version control is a component of software configuration management.
        Changes are usually identified by a number or letter code, termed the "revision number", 
        "revision level", or simply "revision". For example, an initial set of files is "revision 1". 
        When the first change is made, the resulting set is "revision 2", and so on. 
        Each revision is associated with a timestamp and the person making the change. 
        Revisions can be compared, restored, and with some types of files, merged.
        The need for a logical way to organize and control revisions has existed for 
        almost as long as writing has existed, but revision control became much more important, 
        and complicated, when the era of computing began. The numbering of book editions and of 
        specification revisions are examples that date back to the print-only era. Today, the most capable 
        (as well as complex) revision control systems are those used in software development, where a 
        team of people may concurrently make changes to the same files.
        Version control systems (VCS) are most commonly run as stand-alone applications, 
        but revision control is also embedded in various types of software such 
        as word processors and spreadsheets, collaborative web docs[2] and in various 
        content management systems, e.g., Wikipedia's page history. Revision control allows 
        for the ability to revert a document to a previous revision, which is critical for 
        allowing editors to track each other's edits, correct mistakes, and defend against 
        vandalism and spamming in wikis.
        </p>
      </Fragment>,
    }
}

class VCS extends Component {
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
                        <img src={imgVCS} alt="vcs" id="vcs-img" className="overview-img"></img>
                    </div>
                </div>
            </div>
        )
    }
}


VCS.contextType = ThemeContext;
export default VCS;