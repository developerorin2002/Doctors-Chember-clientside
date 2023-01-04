import React from 'react';
import Banner from '../Banner/Banner';
import BusinessCards from '../BusinessCards/BusinessCards';
import ContactUs from '../ContactUs/ContactUs';
import Dentalcare from '../DentalCare/Dentalcare';
import DoctorBanner from '../DoctorBanner/DoctorBanner';
import ServiceCards from '../ServiceCards/ServiceCards';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <BusinessCards></BusinessCards>
            <ServiceCards></ServiceCards>
            <Dentalcare></Dentalcare>
            <DoctorBanner></DoctorBanner>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;