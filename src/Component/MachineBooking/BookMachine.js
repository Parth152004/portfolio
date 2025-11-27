import React from 'react'
import MachineNavbar from './MachineNavbar'
import { useState } from 'react';
import axios from 'axios';

export default function BookMachine() {
        const [formData, setFormData] = useState({
        userName: "",
        date: "",
        slot: null
    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value,formData);
        // eslint-disable-next-line eqeqeq
        if(e.target.name == 'slot') {
            if(e.target.value === 'Morning') {
                setFormData({ ...formData, slot: true });
            }
        }
        // eslint-disable-next-line eqeqeq
        if(e.target.name == 'userName') {
            setFormData({ ...formData, userName: e.target.value });
        }
        // eslint-disable-next-line eqeqeq
        if(e.target.name == 'date') {
            setFormData({ ...formData, date: e.target.value });
        }
        console.log(e.target.name, e.target.value,formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://localhost:3000/booking/book', formData)
        .then(response => {
            console.log("Booking successful:", response.data);
            alert("Booking submitted!");
        })
        .catch(error => {
            console.error("There was an error booking the machine!", error);
            alert("Error submitting booking.");
        });
    };

    return (
        <div>
            <MachineNavbar />
            <div className="viewbooking-container">
                <div className="container">
                    <h3 className="book-title">Book Machine</h3>
                    <form className="booking-form" onSubmit={handleSubmit}>
                        {/* Name */}
                        <label>Name:</label>
                        <select
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                        >
                            <option value="">Select Name</option>
                            <option value="Parth">Parth</option>
                            <option value="Jay">Jay</option>
                            <option value="Vasu">Vasu</option>
                            <option value="Dhruv">Dhruv</option>
                            <option value="Parthiv">Parthiv</option>
                        </select>

                        {/* Date */}
                        <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />

                        {/* Time Slot */}
                        <label>Time Slot:</label>
                        <select
                            name="slot"
                            value={formData.slot}
                            onChange={handleChange}
                        >
                            <option value="">Select Slot</option>
                            <option value="Morning">Morning (10 AM – 12 PM)</option>
                            <option value="Evening">Evening (2 PM – 4 PM)</option>
                        </select>

                        <button type="submit" className="btn-submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
