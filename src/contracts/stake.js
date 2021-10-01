import web3 from "../web3";

////address 0xFD471836031dc5108809D173A067e8486B9047A3
const address = ""; // Please add the address of the deployed contract
const abi = []; // Plea add the abi of the deployed contract 

export default new web3.eth.Contract(abi, address);
