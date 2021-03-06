import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import 'normalize-css';

import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';
import Groups from './components/Groups';
import Blueprint from './components/Blueprints';
import EditBlueprint from './components/EditBlueprint';

document.addEventListener( `DOMContentLoaded`, () => {
	const reactNode = document.getElementById( `react-node` );

	if ( reactNode ) {
		ReactDOM.render(
			<Provider store={ store }>
				<Router history={ browserHistory }>
					<Route path="/" component={ App }>
						<Route path="login" component={ Login } />
						<Route path="signup" component={ Signup } />
						<Route path="groups" component={ Groups } />
						<Route path="blueprints" component={ Blueprint } />
						<Route path="blueprint/:blueprintId" component={ EditBlueprint } />
					</Route>
				</Router>
			</Provider>
		, reactNode );
	}
} );