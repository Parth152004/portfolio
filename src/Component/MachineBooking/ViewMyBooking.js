import React, { useEffect, useState } from 'react'
import MachineNavbar from './MachineNavbar'
import axios from 'axios';

export default function ViewMyBooking() {
    const bookings = useState([]);

    useEffect(()=>{
        axios.get('');
    },[]);


    return (
        <div>
            <MachineNavbar />
            <div className='viewbooking-container'>
                <div className='container'>
                    <div className='fillter-section'>
                        <span>Name: </span>
                        <select>
                            <option value="all">Parth</option>
                            <option value="confirmed">Jay</option>
                            <option value="pending">Vasu</option>
                            <option value="canceled">Dhruv</option>
                            <option value="canceled">Parthiv</option>
                        </select>
                        <button className='btn btn-primary btn-sm'>Show</button>
                    </div>

                    <div className='view-booking'>
                        <h4>Active booking</h4>
                        <div className='booking-card'>
                            <p><strong>Date:</strong> 2024-07-15</p>
                            <p><strong>Time Slot:</strong> 10:00 AM - 12:00 PM</p>
                            <p><strong>Status:</strong> Confirmed</p>
                        </div>
                        <h4>Past booking</h4>
                        <div className='booking-card'>
                            <p><strong>Date:</strong> 2024-06-20</p>
                            <p><strong>Time Slot:</strong> 02:00 PM - 04:00 PM</p>
                            <p><strong>Status:</strong> Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
