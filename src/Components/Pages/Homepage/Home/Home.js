import React from 'react';
import Banner from '../Banner/Banner';
import BusinessCards from '../BusinessCards/BusinessCards';
import Dentalcare from '../DentalCare/Dentalcare';
import DoctorBanner from '../DoctorBanner/DoctorBanner';
import ServiceCards from '../ServiceCards/ServiceCards';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-16'>
            <Banner></Banner>
            <BusinessCards></BusinessCards>
            <ServiceCards></ServiceCards>
            <Dentalcare></Dentalcare>
            <DoctorBanner></DoctorBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;