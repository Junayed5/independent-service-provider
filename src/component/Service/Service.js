import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {id, name, image, price, description } = props.service;
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/checkout/${id}`);
    }
    return (
        <div className='border w-25 col m-3 p-2'>
            <img className='w-100' src={image} alt="" />
            <h4>{name}</h4>
            <p><small>Price:{price}</small></p>
            <p>{description}</p>
            <button onClick={handleNavigate} className='btn btn-warning w-100 m-0'>Proceed Checkout</button>
        </div>
    );
};

export default Service;