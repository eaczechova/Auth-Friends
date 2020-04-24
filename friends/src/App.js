import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Friends from './components/Friends';
import Login from './components/Login';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/friends">Friends</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path="/friends" component={Friends} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
