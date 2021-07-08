import React, { useState } from 'react';
import axios from 'axios';
import {
	FormElement,
	InputElement,
	FormButton,
	ComponentWrapper,
	ComponentHeading,
	Text,
} from './styles';

function Login(props) {
	const [credentials, setCredentials] = useState({});

	const handleInputChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const login = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/api/login', credentials)
			.then((res) => {
				localStorage.setItem('token', res.payload);
			})
			.catch((err) => console.log(err));
	};

	return (
		<ComponentWrapper>
			<div>
				<ComponentHeading>Welcome to Friends App!</ComponentHeading>
				<Text>
					You can view list of Friends, add new friends and delete them. Please login
					first.
				</Text>
			</div>
			<div>
				<FormElement onSubmit={login}>
					<InputElement
						type="text"
						name="username"
						value={credentials.username}
						onChange={handleInputChange}
						placeholder="Username"
					/>
					<InputElement
						type="password"
						name="password"
						value={credentials.password}
						onChange={handleInputChange}
						placeholder="Password"
					/>
					<FormButton>Log In</FormButton>
				</FormElement>
			</div>
		</ComponentWrapper>
	);
}

export default Login;
