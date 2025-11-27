import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style/MachineBooking.css"

export default function MachineNavbar() {
    return (
        <div className="my-booking">
            <nav className="bookinglist navbar navbar-expand-lg container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link btncolor" to="/booking">
                            Book
                        </Link>
                    </li>
                    <li className="nav-item btnstyle">
                        <Link className="nav-link btncolor" to="/viewMyBooking">
                            ViewMyBooking
                        </Link>
                    </li>
                    <li className="nav-item btnstyle">
                        <span
                            className="nav-link btncolor"
                            style={{ cursor: "pointer" }}

                        >
                            Dashboard
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
