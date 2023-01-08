import React from 'react';

const AppointmentModal = ({ treatmentTaken, mainDate }) => {
    const { name, slots } = treatmentTaken;
    const handleBooking= (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const timeSlot = form.timeSlot.value;
        const bookingDate = mainDate;
        const treatmentName = name;
        const patientName = form.patientName.value;
        console.log(email,phoneNumber,timeSlot,treatmentName,patientName,bookingDate)
        
    }
    return (
        <div >
            <form onSubmit={handleBooking}>
                <input type="checkbox" id="bookingModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg text-center font-bold">{name}</h3>
                        <input type="text" readOnly value={mainDate} className="input input-bordered w-full mt-4 text-center text-xl" />
                        <div className="form-control w-full mt-4">

                            <select name='timeSlot' className="select select-bordered text-center">
                                {
                                    slots.map((slot, index) => <option key={index}>{slot}</option>)
                                }
                            </select>

                        </div>
                        <input type="text" name='patientName' placeholder="Full Name" className="input input-bordered w-full mt-4" />
                        <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered w-full mt-4" />
                        <input type="text" name='email' placeholder="Email" className="input input-bordered w-full mt-4" />
                        <input className='btn btn-secondary mt-4 w-full' type="submit" value="Confirm Booking" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AppointmentModal;