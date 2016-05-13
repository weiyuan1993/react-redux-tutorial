import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/app';

const store = configureStore();
const render = () =>{
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>	
		,document.getElementById('content')
	)
}

render();
store.subscribe(render);
