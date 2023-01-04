import React from 'react';
import PrimaryButton from '../../../Utilities/PrimaryButtom/PrimaryButton';
import chair from '../../../../Assets/assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero mt-16">
            <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                
                <div>
                    <h1 className="lg:text-5xl font-bold">Your New Smile Start From Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
                <div>
                <img src={chair} className= " w-100  rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;