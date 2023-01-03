import React from 'react';
import doctorCare from '../../../../Assets/assets/images/treatment.png'
import PrimaryButton from '../../../Utilities/PrimaryButtom/PrimaryButton';
const Dentalcare = () => {
    return (
        <div className="hero mt-16">
            <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1">
                <div >
                    <img src={doctorCare} className=" w-full h-[576px] rounded-lg shadow-2xl" alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Dentalcare;