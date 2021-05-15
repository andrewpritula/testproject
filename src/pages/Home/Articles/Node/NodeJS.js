import React from 'react'
import '../articles.css'
import imgNode from '../../../../accets/images/node.png'
import ThemeContext from '../../../../context/ThemeContext'
import {useTranslation} from "react-i18next";

function NodeJS(){
    const {t} = useTranslation('common'); 
    const {dark} = React.useContext(ThemeContext);
    return(
        <div className={dark ? "container-dark" : "container"}>
            <div className="left-part">
                <h3>{t('nodeTitle')}</h3>
                <div>{t('nodeInfo')}</div>
            </div>
            <div className="rigth-part">
                <img src={imgNode} alt="node" id="node-img" className="overview-img"></img>
            </div>
        </div>
    )
}

export default NodeJS;