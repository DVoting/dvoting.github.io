import web3 from "./web3";
import {toast} from "react-toastify";
import Message from "./Message";

export function initWallet(setWalletId){
	let walletDisabled = JSON.parse(localStorage.getItem('walletDisabled'))??false
	console.log(walletDisabled)

	if(window.ethereum){
		web3.eth.getAccounts()
			.then(accounts => {
				if(!walletDisabled)
					setWalletId(accounts[0] || '')
			})
			.catch(console.log)

		window.ethereum.on('accountsChanged', (accounts) => {
			let walletDisabled = JSON.parse(localStorage.getItem('walletDisabled'))??false
			if(!walletDisabled)
				setWalletId(accounts[0] || '')
		})
	}
}

export async function disconnectWallet(setWalletId){
	localStorage.setItem("walletDisabled",true)
	setWalletId('')
}

export async function connectWallet(setWalletId){
	if (!window.ethereum){
		toast.error(Message("Provider Error", "MetaMask is NOT installed!"), {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 5000,
			toastId: 'providerError',
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
		});
		return
	}

	localStorage.setItem("walletDisabled",false)
	try {
		const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
		setWalletId(accounts[0] || '')
	} catch (e) {
		console.log(e)
	}
}