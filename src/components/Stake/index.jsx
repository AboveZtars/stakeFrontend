import React, { useState} from "react";
import { ethers } from "ethers";
import styled from "styled-components";

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const LINK = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
const UniswapLPStakingAbi = require("../../contracts/Abis/UniswapLPStaking.json")
const UniswapLPStakingAddress= "0xFD471836031dc5108809D173A067e8486B9047A3"




const Stake = () => {
	const [amountStake, setAmountStake] = useState("");
	const [amountWithdraw, setAmountWithdraw] = useState("");
  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  
	async function addAndStakeFront() {
		
    if (typeof window.ethereum !== 'undefined') {
			await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
			const signer = provider.getSigner()
      const UniswapLPStaking = new ethers.Contract(UniswapLPStakingAddress, UniswapLPStakingAbi, provider)
			/* UniswapLPStaking.on("LPTokens", async (tokens, event) => {
				event.removeListener(); // Solve memory leak with this.	
				await console.log("when", tokens);
			}); */
      try {
				const transaction = await UniswapLPStaking.connect(signer).addAndStake(DAI,LINK,ethers.utils.parseUnits(amountStake, 18),0)
      	await transaction.wait()
        console.log('tx', transaction)
      } catch (err) {
        console.log("Error: ", err)
      }
		
    }    
  }
	async function withdrawFront() {
    if (typeof window.ethereum !== 'undefined') {
			await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log({ provider })
			const signer = provider.getSigner()
      const UniswapLPStaking = new ethers.Contract(UniswapLPStakingAddress, UniswapLPStakingAbi, provider)
			

      try {
				const transaction = await UniswapLPStaking.connect(signer).withdraw("0", ethers.utils.parseUnits(amountWithdraw, 18))
      	await transaction.wait()
        console.log('tx ', transaction)
      } catch (err) {
        console.log("Error: ", err)
      }
			
    }    
  }
	
  return (
		<div>
    <StakeContainer>
      <StakeInput
        type="text"
        value={amountStake}
        onChange={(e) => {
          setAmountStake(e.target.value);
        }}
      />
      <StakeButton onClick={addAndStakeFront}>Stake</StakeButton>
    </StakeContainer>
		<StakeContainer>
		<StakeInput
        type="text"
        value={amountWithdraw}
        onChange={(e) => {
          setAmountWithdraw(e.target.value);
        }}
      />
      <StakeButton onClick={withdrawFront}>Withdraw</StakeButton>
    </StakeContainer>
		</div>
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
