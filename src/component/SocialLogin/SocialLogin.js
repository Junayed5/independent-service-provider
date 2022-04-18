import React from 'react';
import { Button } from 'react-bootstrap';
import google from '../../images/google.png';

const SocialLogin = () => {

    
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