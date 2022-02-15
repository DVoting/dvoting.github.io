import React, { useContext, useEffect } from 'react';
import fourOfour from '../fourOfour.jpeg';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Loader } from '../containers';
import { GlobalContext } from '../context/GlobalContext';

const NotFound = () => {
    const { loading, isAuth, setIsAuth } = useContext(GlobalContext);

    useEffect(()=>{
        setIsAuth("token" in localStorage)
    })

    return (
        <div>
            {loading ? <Loader /> : <>
                <Link to={isAuth ? '/dashboard' : '/'}>
                    <FiHome />Go back to the home page
                </Link>
                <img src={fourOfour} />
            </>
            }
        </div>
    )
}

export default NotFound;