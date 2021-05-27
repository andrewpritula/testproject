import React, { useState } from 'react'
import ThemeContext from '../../../context/ThemeContext'
import {useTranslation} from "react-i18next";
import './article.css'

function Article(props) {
    console.log(props);
    const {dark} = React.useContext(ThemeContext);
    const [isShowed, setIsShowed] = useState(false);
    const handleLoginClick = () => {
        setIsShowed(true);
    }
    
    const handleLogoutClick = () =>{
        setIsShowed(false);
    }

    let button;
    if (isShowed) {
        button = <LogoutButton onClick={() => handleLogoutClick()} />;
    } else {
        button = <LoginButton onClick={() =>handleLoginClick()} />;
    }
    return(
        <div className={dark ? "container-dark" : "container"}>
            <div className="left-part">
                <h3>{props.title}</h3>
                <div>{props.info}</div>
                {button}
                <Show isShowed={isShowed} infoMore={props.infoMore}/>
            </div>
            <div className="rigth-part">
                <img src={props.image} alt='objImg' className="overview-img"></img>
            </div>
        </div>
    )
}


function More(props) {
    return <p>{props.infoMore}</p>;
}
  
function Less() {
    return null
}
  
function Show(props) {
    const isShowed = props.isShowed;
    if (isShowed) {
        return <More infoMore={props.infoMore}/>;
    }
    return <Less/>;
}
  
function LoginButton(props) {
    const {t} = useTranslation('common');
    return (
        <button className='article-button' onClick={props.onClick}>
            {t('showMore')}
        </button>
    );
}
  
function LogoutButton(props) {
    const {t} = useTranslation('common');
    return (
        <button className='article-button' onClick={props.onClick}>
            {t('showLess')}
        </button>
    );
}

export default Article;