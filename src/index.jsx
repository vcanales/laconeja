import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import App from './components/App';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

ReactDOM.render(
	<Router history={createHistory({ queryKey: false })} onUpdate={() => window.scrollTo(0, 0)}>
		<Route path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="signup" component={ Signup } />
			<Route path="login" component={ Login } />
		</Route>
	</Router>,
	document.getElementById("app")
);