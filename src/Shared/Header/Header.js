import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

import logo from '../../img/medEqu.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header" className="p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-4">
                    <div> 
                        <Link to="/">
                            <img className="site-logo" src={logo} alt="" /> 
                        </Link>
                    </div>
                    <div> 
                        <Navbar /> 
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;