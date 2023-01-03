import React from 'react';
import 'swiper/css';
const TestimonialCard = ({ card }) => {
    const { comment, name, from, image } = card;
    return (
        <div className="card lg:card-side bg-base-100 shadow-2xl my-10">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{comment}</p>
                <p>{from}</p>
                <img src={image} className="w-12 rounded" alt="" />
            </div>
        </div>
    );
};

export default TestimonialCard;