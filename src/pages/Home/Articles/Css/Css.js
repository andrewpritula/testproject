import React from 'react'
import '../articles.css'
import imgCss from '../../../../accets/images/css.png'
import ThemeContext from '../../components/ThemeContext'
import {useTranslation} from "react-i18next";

function Css() {
    const {t} = useTranslation('common');
    const {dark} = React.useContext(ThemeContext);
    return(
        <div className={dark ? "container-dark" : "container"}>
            <div className="left-part">
                <h3>{t('cssTitle')}</h3>
                <div>{t('cssInfo')}</div>
            </div>
            <div className="rigth-part">
                <img src={imgCss} alt="css" id="css-img" className="overview-img"></img>
            </div>
        </div>
    )
}

export default Css;