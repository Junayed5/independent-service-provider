import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    let errorHandle;

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading/>
    }
    if (error) {
        errorHandle= <p>{error}</p>
    }

    const handleRegisterSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password)

    }

    return (
        <div className='w-25 mx-auto'>
            <h1 className='text-center'>Register Now</h1>
            <Form onSubmit={handleRegisterSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p>Already have an account? <Link className='text-decoration-none' to='/login'>Login</Link></p>
                {errorHandle}
                <Button className='w-100 d-flex justify-content-center'  variant="warning" type="submit">
                    Register
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;