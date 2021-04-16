import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import withTranslation from './components/Translation/Translation';

const AppWithTranslation = withTranslation(App)

ReactDOM.render(
  <React.StrictMode>
    <AppWithTranslation />
  </React.StrictMode>,
  document.getElementById('root')
);