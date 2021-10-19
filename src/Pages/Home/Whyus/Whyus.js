import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';

import './Whyus.css';
import whyUs from '../../../img/why-us.jpg';


const Whyus = () => {
    return (
        <section id="why-us" className="pt-10 pb-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="content-col-left">
                       <img src={whyUs} alt="" srcset="" />
                    </div>
                    <div className="content-col-right">
                        <div className="features text-white">
                            <h5 className="font-semibold">Why Choose Us</h5>
                            <h2 className="text-4xl mt-5">We are on the side of humanity.</h2>
                            <div className="flex feature-item">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <div>
                                    <h2 className="feature-title">Experince</h2>
                                    <p className="feature-desc">We have over 5 years of experience as we served 10,000 setisfied customer so far</p>
                                </div>
                            </div>
                            <div className="flex feature-item">
                                <FontAwesomeIcon icon={faGlobe} />
                                <div>
                                    <h2 className="feature-title">Acceptance</h2>
                                    <p className="feature-desc">Many national and international hospitals and individuals are aour client. And they trus us</p>
                                </div>
                            </div>
                            <div className="flex feature-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <div>
                                    <h2 className="feature-title">24/7 Support</h2>
                                    <p className="feature-desc">Our team never sleep. We support our clients around the clock by a large number of dedicated and humanitarian team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>            
        </section>
    );
};

export default Whyus;