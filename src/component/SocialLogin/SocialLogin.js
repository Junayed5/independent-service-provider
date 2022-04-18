import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../images/google.png';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-warning w-50'></div>
                <p className='mt-2 p-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-warning w-50'></div>
            </div>
            <div>
                <Button
                    onClick={() => signInWithGoogle()}
                    className='w-100'
                    variant="light">
                    <img width={30} src={google} alt="" />
                    Continue With Google
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;