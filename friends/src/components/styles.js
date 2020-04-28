import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderElement = styled.header`
	margin-top: 0;
	display: flex;
`;

export const HeaderTitle = styled.p`
	padding: 15px;
	color: #ffffff;
	font-size: 30px;
	font-weight: 700;
	line-height: 1.1;
`;

export const Navigation = styled.nav`
	flex-grow: 2;
	display: flex;
	justify-items: center;
`;

export const NavigationList = styled.ul`
	display: flex;
	justify-content: flex-end;
	list-style: none;
	width: 100%;
	align-items: center;
	margin: 0;
	padding: 0;
`;

export const StyledLink = styled(Link)`
	padding: 10px 30px;
	text-decoration: none;
	color: #ffffff;

	&:hover {
		text-decoration: underline;
	}
`;

export const FormElement = styled.form`
	display: flex;
	flex-direction: column;
	width: 440px;
	height: 400px;
	margin: 20px auto;
	border-radius: 10px;
	background-color: #ffffff;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
`;

export const InputElement = styled.input`
	width: 85%;
	border-radius: 5px;
	border: 1px solid #dedede;
	margin: 10px auto;
	font-size: 14px;
	padding: 15px;
	line-height: 20px;
	font-weight: 600;

	&:first-child {
		margin-top: 74px;
	}

	&:focus {
		outline: none;
		border: 1px solid #5e54a4;
	}
`;

export const FormButton = styled.button`
	width: 92%;
	margin: 20px auto 74px;
	background-color: rgb(56, 204, 139);
	color: #ffffff;
	border-radius: 5px;
	font-weight: 600;
	text-transform: uppercase;
	padding: 15px;
	border: none;
	cursor: pointer;
	box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.09);

	&:focus {
		outline: none;
	}
`;

export const ComponentWrapper = styled.section`
	display: flex;
	padding: 20px;
	justify-content: space-evenly;
`;

export const ComponentHeading = styled.h1`
	width: 325px;
	font-size: 50px;
	font-weight: 700;
	line-height: 1.1;
	color: #fff;
	padding: 10px 30px 10px 70px;
`;

export const Text = styled.p`
	font-size: 14px;
	line-height: 1.625;
	padding: 10px 30px 10px 70px;
	width: 325px;
	color: #fff;
	font-weight: 500;
`;

export const FriendsWrapper = styled.div`
	width: 50%;
`;

export const FriendsList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

export const FriendsCard = styled.li`
	background-color: #ffffff;
	margin: 20px 5px;
	width: 230px;
	height: 210px;
	border-radius: 8px;
	box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const FriendsCardHeading = styled.h2`
	font-size: 17px;
	font-weight: 600;
`;

export const FriendsCardText = styled.span`
	font-size: 13px;
`;

export const FriendDeleteButton = styled.button`
	margin: 15px auto;
	width: 80%;
	padding: 10px;
	background-color: rgb(56, 204, 139);
	color: #ffffff;
	border-radius: 5px;
	font-weight: 600;
	text-transform: uppercase;
	border: none;
	cursor: pointer;
	transition: opacity 0.5s;

	&:hover {
		opacity: 0.9;
	}
`;
