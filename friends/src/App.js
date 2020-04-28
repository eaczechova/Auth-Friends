import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {
	HeaderElement,
	Navigation,
	NavigationList,
	StyledLink,
	HeaderTitle,
} from './components/styles';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<HeaderElement>
					<HeaderTitle>Friends App</HeaderTitle>
					<Navigation>
						<NavigationList>
							<li>
								<StyledLink to="/login">Login</StyledLink>
							</li>
							<li>
								<StyledLink to="/friends">Friends</StyledLink>
							</li>
						</NavigationList>
					</Navigation>
				</HeaderElement>

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
