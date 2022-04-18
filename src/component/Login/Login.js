import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    
    const navigate =useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorHandle;

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading/>
    }
    if (error) {
        errorHandle = <p className='text-danger'>{error?.message}</p>
        navigate('/login');
        // console.log(error?.message);
    }

    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email,password)
    }


    return (
        <div className='w-25 mx-auto'>
            <h1 className='text-center'>Please login</h1>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <p>New to Junayed's food? <Link className='text-decoration-none' to='/register'>Please Register</Link></p>
                {errorHandle}
                <Button className='w-100 d-flex justify-content-center' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;