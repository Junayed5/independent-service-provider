import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, image, price, description } = props.service

    return (
        <div className='border w-25 col m-3 p-2'>
            <img className='w-100' src={image} alt="" />
            <h4>{name}</h4>
            <p><small>Price:{price}</small></p>
            <p>{description}</p>
            <Link to='/checkout'><button className='btn btn-warning w-100'>Proceed Checkout</button></Link>
        </div>
    );
};

export default Service;