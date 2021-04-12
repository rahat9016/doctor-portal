import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCart = ({booking,date}) => {
    const {subject,visitingHours,totalSpace,}= booking
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="cart p-3 shadow-sm p-3">
                <div className="cart-body text-center">
                    <h5 className="mb-4">{subject}</h5>
                    <h6 className="mb-4">{visitingHours}</h6>
                    <p className="mb-4">{totalSpace} Space Available</p>
                    <button onClick={openModal} className="btn-brand p-2 rounded">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} subject={subject} closeModal={closeModal}date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCart;