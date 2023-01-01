import React from 'react';

const ServiceCard = ({ card }) => {
    const { icon, title, description } = card;
    return (
        <div className={`card w-96 shadow-xl mt-16 `}>
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;