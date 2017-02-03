import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chartMakerApp from './reducers'
// reducers
import App from './containers/App';
import routes from '../config/routes';

let store = createStore(chartMakerApp)

// render(<App name='World'/>, document.getElementById('root'));
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
	);
