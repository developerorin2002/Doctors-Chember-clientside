import React from 'react';

const Treatment = ({ service ,setTreatmentTaken}) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <div className="card-body">
                <h2 className="text-xl text-center">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setTreatmentTaken(service)} htmlFor="bookingModal" className="btn btn-primary text-white">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Treatment;