import Web3 from "web3";

// initialize web3
export const getWeb3 = () => {
  let web3;
  if (window.ethereum) {
    console.log("MetaMask is installed!");
    web3 = new Web3(window.ethereum);
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        console.log(accounts);
      })
      .catch(console.log);
  } else {
    console.log("MetaMask is NOT installed!");
    // const provider = new Web3.providers.HttpProvider(`https://rinkeby.infura.io/v3/${infuraId}`)
    // web3 = new Web3(provider)
  }

  return web3;
};
