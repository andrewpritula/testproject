import React from 'react'
import '../articles.css'
import imgGit from '../../../../accets/images/git.png'
import ThemeContext from '../../components/ThemeContext'
import {useTranslation} from "react-i18next";

function Git(){
    const {t} = useTranslation('common');
    const {dark} = React.useContext(ThemeContext);
    return(
        <div className={dark ? "container-dark" : "container"}>
            <div className="left-part">
                <h3>{t('gitTitle')}</h3>
                <div>{t('gitInfo')}</div>
            </div>
            <div className="rigth-part">
                <img src={imgGit} alt="git" id="git-img" className="overview-img"></img>
            </div>
        </div>
    )

}

export default Git;