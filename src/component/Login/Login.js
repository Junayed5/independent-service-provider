import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const navigate =useNavigate()
    const location = useLocation();
    let errorHandle;
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);
    

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading/>
    }
    if (error || error2) {
        errorHandle = <p className='text-danger'>{error?.message} {error2?.message}</p>
        navigate('/login');
        // console.log(error?.message);
    }

    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email,password)
    }

    const handleResetPassword = async() => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);   
            toast('Sent email') 
        }else{
            toast('Please enter your email')
        }
        
    }

    return (
        <div className='w-25 mx-auto'>
            <h1 className='text-center'>Please login</h1>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p>New to Junayed's food? <Link className='text-decoration-none' to='/register'>Please Register</Link></p>
                <p>Forget password? <button onClick={handleResetPassword} className='btn btn-link text-decoration-none'>Please reset</button></p>
                {errorHandle}
                <Button className='w-100 d-flex justify-content-center' variant="warning" type="submit">
                    Login
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;