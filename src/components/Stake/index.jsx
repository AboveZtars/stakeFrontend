import React, { useState } from 'react';
import styled from 'styled-components';

const Stake = () => {
	const [contractAddress, setContractAddress] = useState('');

	return (
		<StakeContainer>
			<StakeInput
				type="text"
				value={contractAddress}
				onChange={(e) => {
					setContractAddress(e.target.value);
				}}
			/>
			<StakeButton>Stake</StakeButton>
		</StakeContainer>
	);
};

export default Stake;

// Styles
const StakeContainer = styled.div`
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StakeInput = styled.input`
padding: 0.5rem;
width: 20rem;
`;

const StakeButton = styled.button`
padding: 0.5rem 2rem;
background-color: #006a4e;
color: #e8b96b;
`;