import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import { initialState } from './reducers';

const mockStore = configureStore([thunk]);

it('renders without crashing', () => {
  const store = mockStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.createElement('div')
  );
});
