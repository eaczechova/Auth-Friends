import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialState = {
	name: '',
	age: '',
	email: '',
};

function Friends() {
	const [friends, setFriends] = useState([]);
	const [friend, setFriend] = useState(initialState);

	const getData = () => {
		axiosWithAuth()
			.get('http://localhost:5000/api/friends')
			.then((res) => {
				setFriends(res.data);
			})
			.catch((err) => console.log('return from axiosWithAuth', err));
	};

	const handleInputChange = (e) => {
		setFriend({
			...friend,
			[e.target.name]: e.target.value,
		});
	};

	const addFriend = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('http://localhost:5000/api/friends', friend)
			.then((res) => {
				const newFriendsList = [...friends, friend];
				setFriends(newFriendsList);
				clearState();
			})
			.catch((err) => console.log(err));
	};

	const clearState = () => {
		setFriend({ ...initialState });
	};

	const deleteFriend = (id) => {
		axiosWithAuth()
			.delete(`http://localhost:5000/api/friends/${id}`, friend)
			.then((res) => {
				setFriends(res.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="wrapper">
			<form onSubmit={addFriend}>
				<input
					type="text"
					name="name"
					value={friend.name}
					onChange={handleInputChange}
					placeholder="Name"
				/>
				<input
					type="number"
					name="age"
					value={friend.age}
					onChange={handleInputChange}
					placeholder="Age"
				/>
				<input
					type="text"
					name="email"
					value={friend.email}
					onChange={handleInputChange}
					placeholder="E-mail"
				/>
				<button>Add</button>
			</form>
			<div className="friends-list">
				<ul>
					{friends.length > 0
						? friends.map((friend) => {
								return (
									<li key={friend.id}>
										<h2>{friend.name}</h2>
										<span>Age: {friend.age}</span>
										<br />
										<span>Email: {friend.email}</span>
										<button onClick={() => deleteFriend(friend.id)}>Delete</button>
									</li>
								);
						  })
						: null}
				</ul>
			</div>
		</div>
	);
}

export default Friends;
