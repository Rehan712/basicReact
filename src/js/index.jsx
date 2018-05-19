import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import App from './components/App';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	process.env.NODE_ENV !== 'production' &&
		window.devToolsExtension &&
		window.devToolsExtension(),
	process.env.NODE_ENV !== 'production'
		? applyMiddleware(sagaMiddleware, logger)
		: applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
);
