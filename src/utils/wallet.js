import web3 from "./web3";
import {toast} from "react-toastify";
import Message from "./Message";
import {getNetworkName} from "./networks";

export async function initWallet(setWalletId, setChainId){
	let walletDisabled = JSON.parse(localStorage.getItem('walletDisabled'))??false
	console.log(walletDisabled)

	let chainId = await web3.eth.getChainId()
	setChainId(chainId)

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

		window.ethereum.on('chainChanged', async()=>{
			chainId = await web3.eth.getChainId()
			setChainId(chainId)
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

export async function signMessage(message){
	console.log(message)

	let [walletId] = await web3.eth.getAccounts()
	try {
		return await web3.eth.personal.sign(web3.utils.keccak256(message), walletId, null)
	} catch (e) {
		toast.error(Message(e.message.split(':')[0],e.message.split(':')[1]), {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 5000,
			toastId: 'signatureError',
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
		});
		return null
	}
}