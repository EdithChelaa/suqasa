import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import '../Components/Navbar.css';
import { hover } from "@testing-library/user-event/dist/hover";


function Navbar(){

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <div className="Nav-Container">
            <div>
            <h3>SU QASA </h3>
            </div>
            <div>
            <ul ref={navRef} className="hover-links">
                <NavLink className='hover' to="/">Home</NavLink>
                <NavLink className='hover' to="/About">About</NavLink>
                <NavLink className='hover' to="/Properties">Properties</NavLink>
                <NavLink className='hover' to="/Contacts">Contacts</NavLink>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </ul>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
            </div>
        </div>
    );
}

export default Navbar;