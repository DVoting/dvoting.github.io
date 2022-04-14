import React from "react";
import { Navigate } from "react-router-dom";
import { Loader } from "../containers";
import { GlobalContext } from "../context/GlobalContext";

import factoryContract from "../contracts/ElectionFactory.js";
import {Col, Container, Row} from "react-bootstrap";
import web3 from "../utils/web3";

const Deposit = () => {
	const {loading, setLoading} = React.useContext(GlobalContext);
	const {walletId, setWalletId} = React.useContext(GlobalContext);

	const [redirect, setRedirect] = React.useState(null)
	const [loaders, setLoaders] = React.useState({
		depositing: false
	})
	const [inputs, setInputs] = React.useState({
		key: '',
		ether: '0.0'
	})


	const handleInput = (event)=>{
		setInputs({
			...inputs,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event)=>{
		event.preventDefault()
		setLoaders({
			...loaders,
			depositing: true
		})

		let message = document.getElementById("message")
		message.classList.remove('alert-danger')
		message.classList.remove('alert-success')
		message.innerHTML = ""

		factoryContract.methods.deposit(inputs.key).send({
			from: walletId,
			value: web3.utils.toWei(inputs.ether,'ether')
		}).then(res=>{
			message.classList.add('alert-success')
			message.innerHTML = `added ${inputs.ether} ETH`
			setTimeout(() => {
				window.location.reload()
			}, 3000)
		}).catch(err=>{
			message.classList.add('alert-danger')
			message.innerHTML = err.message
		}).finally(()=>{
			setLoaders({
				...loaders,
				depositing: false
			})
		})

	}

	if (redirect) return <Navigate replace to={redirect} />
	if (loading) return <Loader />

	return <React.Fragment>
		<Container>
			<Row>
				<Col md={12} lg={4}/>
				<Col md={12} lg={4}>
					<form>
						<h5 className="card-title">Deposit to Election Factory</h5>
						<hr/>
						<div className="input-group mb-3">
							<span className="input-group-text">KEY</span>
							<input type="text" name="key" className="form-control" value={inputs.key} onChange={handleInput}/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text">ETH</span>
							<input type="number" name="ether" className="form-control" value={inputs.ether} onChange={handleInput}/>
						</div>
						<div className="d-grid gap-2">
							<button type={"submit"} className="btn btn-primary" disabled={loaders.depositing} onClick={handleSubmit}>
								{loaders.depositing?
									<React.Fragment>Please Wait...</React.Fragment>
									:
									<React.Fragment>Contribute</React.Fragment>
								}
							</button>
							<hr/>
							<div className="alert" role="alert" id="message" style={{fontSize:"0.7em"}}/>
						</div>
					</form>
				</Col>
				<Col md={12} lg={4}/>
			</Row>
		</Container>
	</React.Fragment>
};

export default Deposit;
