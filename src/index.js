import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './store';

const rootEl = document.getElementById('root');

const wrapApp = (AppComponent, store) => (
  <Provider store={store}>
    <div>
      <AppComponent />
    </div>
  </Provider>
);

ReactDOM.render(wrapApp(App, store), rootEl);
