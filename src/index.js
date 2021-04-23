import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import withTranslation from './components/Translation/Translation';

const AppWithTranslation = withTranslation(App);

ReactDOM.render(<AppWithTranslation/>, document.getElementById('root'));