import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import App from './app';
import ThemeProvider from './pages/Home/components/ThemeProvider';
import i18next from './i18n/index';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
