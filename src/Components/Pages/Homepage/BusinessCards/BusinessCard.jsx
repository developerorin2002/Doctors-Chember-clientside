import React from 'react';

const BusinessCard = ({ card }) => {
    const { icon, quotes, text ,bg } = card;
    return (
        <div className={`card card-side shadow-xl ${bg} px-5`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{text}</h2>
                <p className='text-white'>{quotes}</p>
            </div>
        </div>
    );
};

export default BusinessCard;