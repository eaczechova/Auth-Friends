import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Friends() {
	const [friends, setFriends] = useState([]);
	const [friend, setFriend] = useState([]);

	const getData = () => {
		axiosWithAuth()
			.get('http://localhost:5000/api/friends')
			.then((res) => {
				console.log(res.data);
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
		// console.log('log friend', friend);
		// const newFriendsList = [...friends, friend];
		// setFriends(newFriendsList);
		// console.log('log friends', friends);

		axiosWithAuth()
			.post('http://localhost:5000/api/friends', friend)
			.then((res) => {
				console.log(res);
				const newFriendsList = [...friends, friend];
				setFriends(newFriendsList);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<form onSubmit={addFriend}>
				<input
					type="text"
					name="name"
					value={friend.name}
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="age"
					value={friend.age}
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="email"
					value={friend.email}
					onChange={handleInputChange}
				/>
				<button>Add</button>
			</form>
			<ul>
				{friends.length > 0
					? friends.map((friend) => {
							return <li key={friend.id}>{friend.name}</li>;
					  })
					: null}
			</ul>
		</div>
	);
}

export default Friends;
