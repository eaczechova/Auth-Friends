import React, { useState } from 'react';
import axios from 'axios';

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
		<div className="wrapper">
			<div>
				<h1>Welcome to Friends App!</h1>
				<p>
					You can view list of Friends, add new friends and delete them. Please login
					first.
				</p>
			</div>
			<div>
				<form onSubmit={login}>
					<input
						type="text"
						name="username"
						value={credentials.username}
						onChange={handleInputChange}
						placeholder="Username"
					/>

					<input
						type="password"
						name="password"
						value={credentials.password}
						onChange={handleInputChange}
						placeholder="Password"
					/>

					<button>Log In</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
