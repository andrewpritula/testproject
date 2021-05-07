import React from 'react'
import '../articles.css'
import imgHtml from '../../../../accets/images/html.png'
import ThemeContext from '../../components/ThemeContext'
import {useTranslation} from "react-i18next";

function Html(){ 
    const {t} = useTranslation('common');
    const {dark} = React.useContext(ThemeContext);
    return(
        <div className={dark ? "container-dark" : "container"}>
            <div className="left-part">
            <h3>{t('htmlTitle')}</h3>
            <div>{t('htmlInfo')}</div>
            </div>
            <div className="rigth-part">
                <img src={imgHtml} alt="html" id="html-img" className="overview-img"></img>
            </div>
        </div>
    )
}

export default Html;