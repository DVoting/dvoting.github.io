const networks = {
	0x1: 'Ethereum Main Network',
	0x2: 'Expanse Network',
	0x3: 'Ropsten Test Network',
	0x4: 'Rinkeby Test Network',
	0x5: 'Goerli Test Network',
	0x2a: 'Kovan Test Network',
	0x38: 'BSC Main Network',
	0x61: 'BSC Test Network',
	0xa86a: 'Avalanche Main C-Chain',
	0xa869: 'Avalanche FUJI C-Chain',
	0x89: 'Polygon Main Network',
	0x13881: 'Mumbai Test Network'
}

const getNetworkName = chainId => networks[chainId] || `Unknown Network (${chainId})`
const deployedChain = 0x13881


export {networks, getNetworkName, deployedChain}