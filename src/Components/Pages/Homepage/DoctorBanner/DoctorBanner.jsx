import React from 'react';
import PrimaryButton from '../../../Utilities/PrimaryButtom/PrimaryButton';
import doctor from '../../../../Assets/assets/images/doctor.png'
const DoctorBanner = () => {
    return (
        <div>
            <div className="hero mt-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Start From Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                        <PrimaryButton>Getting Started</PrimaryButton>
                    </div>
                    <img src={doctor} className=" lg:w-1/2 " alt='' />
                </div>
            </div>
        </div>
    );
};

export default DoctorBanner;