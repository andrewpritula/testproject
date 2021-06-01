import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import { useTranslation } from 'react-i18next';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import Article from './pages/Home/components/Article';
import vcsImg from './accets/images/vcs.png';
import gitImg from './accets/images/git.png';
import nodeImg from './accets/images/node.png';
import npmImg from './accets/images/npm.png';
import htmlImg from './accets/images/html.png';
import cssImg from './accets/images/css.png';
import Image from './components/Image/Image';
import Fetch from './pages/Home/components/Fetch';
import TodoList from './pages/Home/components/TodoList';
import ThemeContext from './context/ThemeContext';
import ThemeToggle from './pages/Home/components/ThemeToggle';

function App() {
  const { dark } = React.useContext(ThemeContext);
  const { i18n, t } = useTranslation('common');
  return (
    <Suspense fallback="loading">
      <div id={dark ? 'page-dark' : 'page'}>
        <ThemeToggle />
        <button
          type="button" 
          className={dark ? 'theme-button-dark' : 'theme-button'} 
          onClick={() => i18n.changeLanguage('ru')}
        >
          RU
        </button>
        <button
          type="button"
          className={dark ? 'theme-button-dark' : 'theme-button'}
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </button>
        <Header />
        <section className="overview">
          <Router>
            <Switch>
              <Route exact path="/">
                <Article title={t('vcsTitle')} info={t('vcsInfo')} infoMore={t('vcsMoreInfo')} image={vcsImg} />
              </Route>
              <Route exact path="/git">
                <Article title={t('gitTitle')} info={t('gitInfo')} infoMore={t('gitMoreInfo')} image={gitImg} />
              </Route>
              <Route exact path="/node">
                <Article title={t('nodeTitle')} info={t('nodeInfo')} infoMore={t('nodeMoreInfo')} image={nodeImg} />
              </Route>
              <Route exact path="/npm">
                <Article title={t('npmTitle')} info={t('npmInfo')} infoMore={t('npmMoreInfo')} image={npmImg} />
              </Route>
              <Route exact path="/html">
                <Article title={t('htmlTitle')} info={t('htmlInfo')} infoMore={t('htmlMoreInfo')} image={htmlImg} />
              </Route>
              <Route exact path="/css">
                <Article title={t('cssTitle')} info={t('cssInfo')} infoMore={t('cssMoreInfo')} image={cssImg} />
              </Route>
            </Switch>
          </Router>
        </section>
        <section>
          <Fetch />
          <TodoList />
          <Image />
        </section>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
