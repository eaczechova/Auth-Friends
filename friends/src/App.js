import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header>
					<p>Friends App</p>

					<nav>
						<ul>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/friends">Friends</Link>
							</li>
						</ul>
					</nav>
				</header>

				<div></div>
				<Switch>
					<PrivateRoute exact path="/friends" component={Friends} />
					<Route exact path="/login" component={Login} />
					<Redirect to="/login" />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
