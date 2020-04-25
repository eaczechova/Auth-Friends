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
		<div>
			<form onSubmit={login}>
				<input
					type="text"
					name="username"
					value={credentials.username}
					onChange={handleInputChange}
				/>
				<input
					type="password"
					name="password"
					value={credentials.password}
					onChange={handleInputChange}
				/>
				<button>Log In</button>
			</form>
		</div>
	);
}

export default Login;
