import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ThemeContext from '../../../context/ThemeContext';
import './Styles/article.css';

const classNames = require('classnames');

function Article(props) {
  const { dark } = React.useContext(ThemeContext);
  const [isShowed, setIsShowed] = useState(false);
  const {
    title, 
    info, 
    infoMore, 
    image 
  } = props;

  const containerClass = classNames({
    'container-dark': dark,
    container: !dark
  });

  const handleLoginClick = () => {
    setIsShowed(true);
  };
    
  const handleLogoutClick = () => {
    setIsShowed(false);
  };

  let button;
  if (isShowed) {
    button = <LogoutButton onClick={() => handleLogoutClick()} />;
  } else {
    button = <LoginButton onClick={() => handleLoginClick()} />;
  }
  return (
    <div className={containerClass}>
      <div className="left-part">
        <h3>{title}</h3>
        <div>{info}</div>
        {button}
        <Show isShowed={isShowed} infoMore={infoMore} />
      </div>
      <div className="rigth-part">
        <img src={image} alt="objImg" className="overview-img" />
      </div>
    </div>
  );
}

function More(props) {
  const { infoMore } = props;
  return <p>{infoMore}</p>;
}
  
function Less() {
  return null;
}
  
function Show(props) {
  const { isShowed } = props;
  const { infoMore } = props;
  if (isShowed) {
    return <More infoMore={infoMore} />;
  }
  return <Less />;
}
  
function LoginButton(props) {
  const { t } = useTranslation('common');
  const { onClick } = props;
  return (
    <button 
      type="button"
      className="article-button" 
      onClick={onClick}
    >
      {t('showMore')}
    </button>
  );
}
  
function LogoutButton(props) {
  const { t } = useTranslation('common');
  const { onClick } = props;
  return (
    <button 
      type="button"
      className="article-button" 
      onClick={onClick}
    >
      {t('showLess')}
    </button>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  infoMore: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

More.propTypes = {
  infoMore: PropTypes.string.isRequired,
};
  
Show.propTypes = {
  isShowed: PropTypes.bool.isRequired,
  infoMore: PropTypes.string.isRequired,
};

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

LogoutButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Article;
