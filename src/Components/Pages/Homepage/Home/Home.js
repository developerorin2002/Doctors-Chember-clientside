import React from 'react';
import Banner from '../Banner/Banner';
import BusinessCards from '../BusinessCards/BusinessCards';
import ServiceCards from '../ServiceCards/ServiceCards';

const Home = () => {
    return (
        <div className='mx-16'>
            <Banner></Banner>
            <BusinessCards></BusinessCards>
            <ServiceCards></ServiceCards>
        </div>
    );
};

export default Home;