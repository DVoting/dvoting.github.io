import Web3 from "web3";

let web3
if (window.ethereum) {
  console.log('MetaMask is installed!');
  web3 = new Web3(window.ethereum);
} else {
  console.log('MetaMask is NOT installed!');
  const rpc = 'https://speedy-nodes-nyc.moralis.io/2aa1ce4616e3c936bfbb33b8/polygon/mumbai'
  const provider = new Web3.providers.HttpProvider(rpc, {
    chainId: 80001,
    name: 'Mumbai'
  })
  web3 = new Web3(provider)
}

export default web3;
