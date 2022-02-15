import Web3 from "web3";

let web3
if (window.ethereum) {
  console.log('MetaMask is installed!');
  web3 = new Web3(window.ethereum);
} else {
  console.log('MetaMask is NOT installed!');
  const provider = new Web3.providers.HttpProvider('https://polygon-rpc.com', {
    chainId: 137,
    name: 'matic'
  })
  web3 = new Web3(provider)
}

export default web3;
