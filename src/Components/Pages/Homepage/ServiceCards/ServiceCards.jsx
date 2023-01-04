import React from 'react';
import flueride from '../../../../Assets/assets/images/fluoride.png'
import cavity from '../../../../Assets/assets/images/cavity.png'
import teeth from '../../../../Assets/assets/images/whitening.png'
import ServiceCard from './ServiceCard';
const ServiceCards = () => {
    const servicesCards = [
        {
            id:1,
            icon:flueride,
            title:'Flueride Treatment',
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id:2,
            icon:cavity,
            title:'Cavity Filling',
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id:3,
            icon:teeth,
            title:'Teeth Whitening',
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                servicesCards.map(card =><ServiceCard key={card.id} card={card}></ServiceCard>)
            }
        </div>
    );
};

export default ServiceCards;