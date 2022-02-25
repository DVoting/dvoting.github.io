import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const GenerateWallet = () => {
	const { loading, isAuth, setIsAuth } = useContext(GlobalContext);

	return <React.Fragment>generate wallet</React.Fragment>
}

export default GenerateWallet;