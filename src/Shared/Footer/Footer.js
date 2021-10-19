import React from 'react';
import footerLogo from '../../img/medEqu.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';




const Footer = () => {
    return (
        <footer id="footer">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div className="footer-col">
                        <h3 className="footer-title">Contact us</h3>
                        <img src={footerLogo} alt="" className="footer-logo" />
                    </div>
                    <div>
                        <h3 className="footer-title">Our social pages</h3>
                        <div className="social-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        
                        
                    
                    </div>
                    <div>Hello</div>
                </div>   
            </div>        
        </footer>
    );
};

export default Footer;