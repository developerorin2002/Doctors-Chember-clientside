import React, { useState } from 'react';
import AppointmentTreatment from '../AppoinmentTreatment/AppointmentTreatment';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='max-w-screen-xl mx-auto'>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AppointmentTreatment selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentTreatment>
        </div>
    );
};

export default Appointment;