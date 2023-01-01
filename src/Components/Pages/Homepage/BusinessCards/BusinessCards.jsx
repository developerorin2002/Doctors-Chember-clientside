import React from 'react';
import locationIcon from '../../../../Assets/assets/icons/marker.svg'
import clock from '../../../../Assets/assets/icons/clock.svg'
import phone from '../../../../Assets/assets/icons/phone.svg'
import BusinessCard from './BusinessCard';
const BusinessCards = () => {
    const businessCards = [
        {
            id:1,
            text:'opening Hours',
            icon:clock,
            quotes:'10am Every Morning To Night',
            bg:'bg-primary'
        },
        {
            id:2,
            text:'Visit Our Location',
            icon:locationIcon,
            quotes:"jessore Chadpara Bangladesh",
            bg:'bg-secondary'
        },
        {
            id:3,
            text:'01865876025',
            icon:phone,
            quotes:'Contact Us Now',
            bg:'bg-primary'
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-20'>
            {
                businessCards.map(card =><BusinessCard key={card.id} card={card}></BusinessCard>)
            }
        </div>
    );
};

export default BusinessCards;