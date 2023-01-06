import React from 'react';
import { DayPicker } from 'react-day-picker';
import image from '../../../../Assets/assets/images/chair.png';
import './AppointmentBanner.css'
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    return (
        <div className="hero">
            <div className="hero-content grid lg:grid-cols-2 grid-cols-1">
                <div>
                    <img src={image} alt="" className="w-100 shadow-2xl" />
                </div>
                <div>
                    <DayPicker mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;