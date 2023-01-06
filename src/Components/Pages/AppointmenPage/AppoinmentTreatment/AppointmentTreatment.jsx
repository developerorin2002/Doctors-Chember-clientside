import { format } from 'date-fns/esm';
import React from 'react';
import AppointmentServices from '../AppointmentServices/AppointmentServices';

const AppointmentTreatment = ({selectedDate,setSelectedDate}) => {
    const date = format(selectedDate,'PP')
    return (
        <div>
            <p className='text-sky-500 text-lg text-center font-bold py-6'>Available Services on {date}</p>
            <AppointmentServices date={date}></AppointmentServices>
        </div>
    );
};

export default AppointmentTreatment;