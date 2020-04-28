import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {
	FormElement,
	InputElement,
	FormButton,
	ComponentWrapper,
	FriendsWrapper,
	FriendsList,
	FriendsCard,
	FriendsCardHeading,
	FriendsCardText,
	FriendDeleteButton,
} from './styles';

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
			.catch((err) => {
				console.log(err);
			});
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
		<ComponentWrapper>
			<FormElement onSubmit={addFriend}>
				<InputElement
					type="text"
					name="name"
					value={friend.name}
					onChange={handleInputChange}
					placeholder="Name"
				/>
				<InputElement
					type="number"
					name="age"
					value={friend.age}
					onChange={handleInputChange}
					placeholder="Age"
				/>
				<InputElement
					type="text"
					name="email"
					value={friend.email}
					onChange={handleInputChange}
					placeholder="E-mail"
				/>
				<FormButton>Add</FormButton>
			</FormElement>
			<FriendsWrapper>
				<FriendsList>
					{friends.length > 0
						? friends.map((friend) => {
								return (
									<FriendsCard key={friend.id}>
										<FriendsCardHeading>{friend.name}</FriendsCardHeading>
										<FriendsCardText>Age: {friend.age}</FriendsCardText>
										<br />
										<FriendsCardText>Email: {friend.email}</FriendsCardText>
										<FriendDeleteButton onClick={() => deleteFriend(friend.id)}>
											Delete
										</FriendDeleteButton>
									</FriendsCard>
								);
						  })
						: null}
				</FriendsList>
			</FriendsWrapper>
		</ComponentWrapper>
	);
}

export default Friends;
