import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import App from './components/App';
import sagas from './sagas/index';
import reducers from './reducers/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>,
	document.getElementById('root')
);