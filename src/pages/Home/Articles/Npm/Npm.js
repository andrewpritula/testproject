import React from 'react'
import '../articles.css'
import imgNPM from '../../../../accets/images/npm.png'

import ThemeContext from '../../../../context/ThemeContext'
import {useTranslation} from "react-i18next";

function NPM(){
    const {dark} = React.useContext(ThemeContext);
    const {t} = useTranslation('common');
    return(
        <div className={dark ? "container-dark" : "container"}>
            <div className="left-part">
                <h3>{t('npmTitle')}</h3>
                <div>{t('npmInfo')}</div>
            </div>
            <div className="rigth-part">
                <img src={imgNPM} alt="npm" id="npm-img" className="overview-img"></img>
            </div>
        </div>
    )
}

export default NPM;