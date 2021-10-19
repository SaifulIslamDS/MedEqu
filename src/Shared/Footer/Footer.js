import React from 'react';
import footerLogo from '../../img/medEqu.png';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                    <div>
                        <h3 className="footer-title">Information Links</h3>
                        <ul className="info-list">
                            <li>About</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>   
            </div>        
        </footer>
    );
};

export default Footer;