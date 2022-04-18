import React from 'react';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import google from '../../images/google.png';


const Footer = () => {
    return (
        <div className='bg-warning p-3 mt-5'>
            <h5 className='text-center'>Follow on</h5>
            <div className='text-center'>
                <img className='me-2' width={20} src={google} alt="" />
                <img className='me-2' width={20} src={facebook} alt="" />
                <img className='me-2' width={20} src={github} alt="" />
            </div>
        </div>
    );
};

export default Footer;