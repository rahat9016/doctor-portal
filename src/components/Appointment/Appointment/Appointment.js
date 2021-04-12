import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookingAppoinetment from '../BookingAppointment/BookingAppoinetment';

const Appointment = () => {
    const [selectData,setSelectData] = useState(new Date())
    const handleDateChange = date =>{
        setSelectData(date)
    }
    return (
        <div>
            
            <Navbar></Navbar>
            <AppointmentHeader 
                handleDateChange={handleDateChange}>
            </AppointmentHeader>
            <BookingAppoinetment date={selectData}></BookingAppoinetment>
            
            <Footer></Footer>
        </div>
    );
};

export default Appointment;