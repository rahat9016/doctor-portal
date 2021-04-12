import React from 'react';
import BookingCart from '../BookingCart/BookingCart';
const availableData =[
    {
        "_id":"60649632d5c4702964def06e",
        "id":1,
        "subject":"Teeth Orthodontics",
        "visitingHours":"8:00 AM - 9:00 AM",
        "totalSpace":10,
    },
    {
        "_id":"60649632d5c4702964def06a",
        "id":2,
        "subject":"Cavity Protection",
        "visitingHours":"10:05 am -11:30 am",
        "totalSpace":10,
    },
    {
        "_id":"60649632d5c4702964def06b",
        "id":3,
        "subject":"Teeth Orthodontics",
        "visitingHours":"8:00 AM - 9:00 AM",
        "totalSpace":10,
    },
    {
        "_id":"60649632d5c4702964def06c",
        "id":4,
        "subject":"Teeth Cleaning",
        "visitingHours":"5:00 pm - 6:30 pm",
        "totalSpace":10,
    },
    {
        "_id":"60649632d5c4702964def06w",
        "id":5,
        "subject":"Teeth Orthodontics ",
        "visitingHours":"8:00 AM - 9:00 AM",
        "totalSpace":10,
    },
    {
        "_id":"60649632d5c4702964def06x",
        "id":6,
        "subject":"Teeth Orthodontics ",
        "visitingHours":"8:00 AM - 9:00 AM",
        "totalSpace":10,
    }
]
const BookingAppoinetment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand mb-5 mt-5">Available Booking Appointment On {date.toDateString()}</h2>
            <div className="d-flex justify-content-center">
                <div className="row w-75 ">
                    {
                        availableData.map(booking => <BookingCart booking={booking} key={booking._id} date={date}></BookingCart>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookingAppoinetment;