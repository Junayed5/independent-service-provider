import React from 'react';
import junayed from '../../images/person.jpeg';

const AboutMe = () => {
    return (
        <div className='w-25 mx-auto'>
            <h1 className='text-center text-success'>This is me</h1>
            <img className='w-100' src={junayed} alt="" />
            <p className='w-100'>This is Md Junayed.I am student of Sarsina Madrasah.As a Madrasah student,This subject is not simple for me.After that I can try to my level best.And my next goal is,I want to be a Web Developer.And I want to do a Job for this section.Pray for me!</p>
        </div>
    );
};

export default AboutMe;