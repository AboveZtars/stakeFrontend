# 1. Getting Started to test the frontend 
First run `npm install` to install all dependencies.

## 2. Chain Id 
To test succesfully you will need to create your hardhat node using `npx hardhat node` at the directory of the contract.
Remember the chainId in the hardhat config needs to be set to:
```
 chainId: 1337
```

## 3. Metamask 
To setup metamask you need to import an account with the private key of one of the first 10 accounts of hardhat, all of these accounts will have DAI, LINK and ETH.
```
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const LINK = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
const LPTOKEN = "0x6D4fd456eDecA58Cf53A8b586cd50754547DBDB2";
```
Remember to be in the localhost network.
To see these tokens in your wallet you will need to add their addresses in metamask.

### Frontend
With the frontend you can stake and withdraw LP Tokens and Earn AREPA Tokens.
To see your AREPA Tokens after withdraw you have to add the token to metamask, the address of the AREPA token contract will be display when running the hardhat node. 