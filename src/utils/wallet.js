import web3 from "./web3";

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
		console.log("Toast: Provider Error")
		return
	}
	localStorage.setItem("walletDisabled",false)
	web3.eth.getAccounts()
		.then(accounts => {
			setWalletId(accounts[0] || '')
		}).catch(console.log)
}