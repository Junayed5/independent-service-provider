import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        console.log(user);
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
                <Button className='w-100 d-flex justify-content-center'  variant="warning" type="submit">
                    Register
                </Button>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;