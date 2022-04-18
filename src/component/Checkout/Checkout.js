import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const navigate =useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/check')
    }
    
    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto border p-3 mt-2'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control name='email' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Address</Form.Label>
                    <Form.Control name='email' type="text" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>                
                <Button className='w-100 d-flex justify-content-center' variant="warning" type="submit">
                    Book Now
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;