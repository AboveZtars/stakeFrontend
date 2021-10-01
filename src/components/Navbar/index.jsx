import React from 'react';
import styled from 'styled-components';
import StakeLogo from '../../assets/images/stakes.png'

const Navbar = () => {
	return (
		<NavContainer>
			<LogoSection>
				<Logo src={StakeLogo} />
				<div>
					<Title>Stake and Earn</Title>
					<Subtitle>Nail those interests</Subtitle>
				</div>
			</LogoSection>
			<TagsContainer>
				<Tag>Home</Tag>
				<Tag>Stake</Tag>
				<Tag>Check Value</Tag>
			</TagsContainer>
		</NavContainer>
	);
};

export default Navbar;

// Styles

const NavContainer = styled.div`
	width: 100%;
	height: 4rem;
	background-color: #006a4e;
	display: flex;
	justify-content: flex-start;
	box-shadow: 1px 1px 5px #000;
`;

const LogoSection = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const Logo = styled.img`
	width: 5rem;
	height: 4rem;
`;

const Title = styled.h1`
	font-family: 'Architects Daughter', cursive;
	font-size: 24px;
`;

const Subtitle = styled.h3`
	font-family: 'Akaya Kanadaka', cursive;
	font-size: 16px;
`;

const TagsContainer = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 2rem;
`;

const Tag = styled.h2`
	font-family: 'Architects Daughter', cursive;
	font-size: 20px;
	padding: 0 2rem;
	cursor: pointer;
	&:hover {
		background-color: #e8b96b;
		color: #006a4e;
	}
`;


