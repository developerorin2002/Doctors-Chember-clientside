import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import Treatment from '../Treatments/Treatment';

const AppointmentServices = ({date}) => {
    const mainDate = date;
    console.log(date)
    const [services , setServices ] = useState([]);
    const [treatmentTaken,setTreatmentTaken] = useState(null);

    useEffect(()=>{
        fetch('ServiceOption.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 py-6'>
            {
                services.map((service,index)=><Treatment date={date} setTreatmentTaken={setTreatmentTaken} key={index} service={service}></Treatment>)
            }
            {
                treatmentTaken && <AppointmentModal mainDate={mainDate} treatmentTaken={treatmentTaken}></AppointmentModal>
            }
        </div>
    );
};

export default AppointmentServices;