import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="p-4">
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Navbar;