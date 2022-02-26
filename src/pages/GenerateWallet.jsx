import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Loader } from '../containers';
import { Navigate } from "react-router-dom";
import {Container, Row, Col, ProgressBar, Form, FloatingLabel, Button, InputGroup} from "react-bootstrap";
import web3 from "../utils/web3";
import { BiShow, BiHide, BiCopy, BiDownload } from "react-icons/bi";
import {toast} from "react-toastify";
import Message from "../utils/Message";
import { signMessage } from "../utils/wallet";
import {getVoterById, initWallet} from "../services/voterServices";

const GenerateWallet = () => {
	const { loading, setLoading, user } = React.useContext(GlobalContext);
	const { walletId, setWalletId } = useContext(GlobalContext);

	const [redirect, setRedirect] = React.useState(null)
	const [voter, setVoter] = React.useState(null);
	const [randomKey, setRandomKey] = React.useState('')
	const [privateKey, setPrivateKey] = React.useState(null)
	const [address, setAddress] = React.useState(null)
	const [progress, setProgress] = React.useState(0)
	const [showKey, setShowKey] = React.useState(false)

	React.useEffect(()=>{
		let randomHex = '0'
		let motion = false

		document.addEventListener('mousemove', ev=>{
			motion = true
			let r = Math.sqrt(ev.offsetX*ev.offsetX + ev.offsetY*ev.offsetY)
			r = Math.round(r)*17 % 16
			randomHex = r.toString(16)
		})

		setInterval(()=>{
			motion = false
		}, 200);

		setInterval(() => {
			setRandomKey(randomKey=> {
				if(progress<100) setProgress(Math.round(randomKey.length/64*100))
				if(randomKey.length<64 && motion) return randomKey + randomHex
				else return randomKey
			})
		}, 100);
	},[])

	React.useEffect(() => {
		if (!user || !voter) setLoading(true);
		else setLoading(false);

		if (voter && voter.hasWallet) setRedirect('/dashboard')
		console.log(user);
	}, [user,voter]);

	React.useEffect(async () => {
		if (user) setVoter(await getVoterById(user.uniqueVoterId));
	}, [user]);


	const generateWallet = ()=>{
		if(privateKey) return

		let key = ''
		for(let char of randomKey){
			let r = parseInt(char, 16)
			r = r ^ Math.floor(Math.random()*16)
			key += r.toString(16)
		}
		setPrivateKey(key)
		let account = web3.eth.accounts.privateKeyToAccount(key)
		setAddress(account.address)
		console.log(account)
	}

	const copy = async (text, description=null)=>{
		await navigator.clipboard.writeText(text)
		toast.info(Message(description, "copied to clipboard"), {
			position: toast.POSITION.BOTTOM_CENTER,
			autoClose: 500,
			hideProgressBar: true,
			toastId: "copyToast"
		});
	}

	const download = (filename, text)=>{
		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();
		document.body.removeChild(element);
	}

	const approveWallet = async()=> {
		if (!walletId) {
		toast.error(Message('No wallet connected', null), {
			position: toast.POSITION.BOTTOM_RIGHT,
			autoClose: 5000,
			toastId: 'walletError',
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
		});
		return
	}

		let message = JSON.stringify({
			voter:voter._id,
			address: web3.utils.toChecksumAddress(walletId),
		})
		let signature = await signMessage(message)
		if(!signature) return

		let data = {
			address: web3.utils.toChecksumAddress(walletId),
			signature: signature
		}

		const res = await initWallet(data)
		if(res.error){
			console.log(res)
			toast.error(Message(`error ${res.status}`, `${res.data || res.statusText}`), {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
			return
		}

		toast.success(Message('Approved Wallet', `${address}`), {
			position: toast.POSITION.BOTTOM_RIGHT,
		});
		setRedirect('/dashboard')
	}

	if(redirect) return <Navigate replace to={redirect} />
	if(loading) return <Loader/>

	return (
		<React.Fragment>
			<Container>
				<Row>
					<Col md={12} lg={2}/>
					<Col md={12} lg={8}>
						<p>
							Generating Ethereum Wallet...
							<br/>
							MOVE your mouse around to add some extra randomness...
						</p>

						<Form>
							<FloatingLabel label="Randomness" className="mb-3">
								<Form.Control
									as="textarea"
									value={randomKey}
									disabled={true}
									style={{resize:"none", height:"5rem"}}
								/>
								{
									progress === 100 ?
										<ProgressBar variant="success" now={100} label="Done"/>
										:
										<ProgressBar now={progress} label={`${progress}%`}/>
								}
							</FloatingLabel>
							<div className="d-grid gap-2">
								<Button variant="primary"
									onClick={()=>generateWallet()}
									disabled={progress!==100}
								>
									Generate Ethereum Wallet
								</Button>
							</div>
						</Form>
						<hr/>
						{address &&
							<Form>
								<Form.Group className="mb-3">
									<Form.Label>Ethereum address</Form.Label>
									<InputGroup>
										<Form.Control type="text" value={address} onChange={()=>{}} />
										<Button variant="light" onClick={()=>copy(address, 'Address')}>
											<BiCopy/>
										</Button>
									</InputGroup>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>Private key</Form.Label>
									<InputGroup>
										<Form.Control
											type={showKey? "text" : "password" }
											value={privateKey}
											onChange={()=>{}}
										/>
										<Button variant="light" onClick={()=>setShowKey(!showKey)}>
											{showKey? <BiHide size={20}/> : <BiShow size={20}/>}
										</Button>
										<Button variant="light" onClick={()=>copy(privateKey, 'Private key')}>
											<BiCopy/>
										</Button>
										<Button variant="light" onClick={()=>download('key.txt', privateKey)}>
											<BiDownload/>
										</Button>
									</InputGroup>
								</Form.Group>
								<hr/>
								<Form.Group className="mb-3">
									{
										walletId.toLowerCase() === address.toLowerCase() ?
											<Button variant="primary" onClick={async ()=>{await approveWallet()}}>
												Approve Wallet
											</Button>
										:
											<p className="alert alert-info">
												Before proceeding, connect the above wallet by importing it's private key.
												{' '}
												<a href="https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account"
													target="_blank" rel="noreferrer"
												>
													steps
												</a>
											</p>
									}
							</Form.Group>
							</Form>
						}
					</Col>
					<Col md={12} lg={2}/>
				</Row>
			</Container>
		</React.Fragment>
	)
}

export default GenerateWallet;