import React from 'react'
import '../articles.css'
import imgVCS from '../../../../accets/images/vcs.png'
import ThemeContext from '../../../../context/ThemeContext'
import {useTranslation} from "react-i18next";


function VCS() {
    const {dark} = React.useContext(ThemeContext);
    const {t} = useTranslation('common');
    return(
        <div className={dark ? "container-dark" : "container"}>
            <div className="left-part">
                <h3>{t('gitTitle')}</h3>
                <div>{t('gitInfo')}</div>
            </div>
            <div className="rigth-part">
                <img src={imgVCS} alt="vcs" id="vcs-img" className="overview-img"></img>
            </div>
        </div>
    )
}

export default VCS;