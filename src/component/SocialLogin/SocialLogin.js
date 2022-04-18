import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png';
import Loading from '../Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let loadError;

    if (user) {
        navigate('/login')
    }

    if (loading) {
        return <Loading/>
    }

    if (error) {
        loadError = <p>{error}</p>
    }
    
    const handleSignInWithGoogle =() => {
        signInWithGoogle()
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-warning w-50'></div>
                <p className='mt-2 p-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-warning w-50'></div>
            </div>
            <div>
                <Button
                    onClick={handleSignInWithGoogle}
                    className='w-100'
                    variant="light">
                    <img width={30} src={google} alt="" />
                    Continue With Google
                </Button>
                {loadError}
            </div>
        </div>
    );
};

export default SocialLogin;