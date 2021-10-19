import React from 'react';
import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClinicMedical, faCapsules, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about" className="text-white text-center pt-10 pb-10 ">
            <div className="container mx-auto">
                <h3 className="text-center text-3xl">What we do</h3>
                <h1 className="text-5xl text-center">Believe in us, we won’t let you down</h1>
                <div className="grid grid-cols-3 gap-8">
                    <div className="about-feature pt-8 pb-6">
                        <FontAwesomeIcon icon={faClinicMedical} />
                        <h2 className="text-4xl mt-4">Medical Service</h2>
                        <p className="mt-4 mb-4 p-4">We provide all types of medical services</p>
                    </div>
                    <div className="about-feature pt-8 pb-6">
                        <FontAwesomeIcon icon={faCapsules} />
                        <h2 className="text-4xl mt-4">Phamacy</h2>
                        <p className="mt-4 mb-4 p-4">You will find all kind of local and internation drugs in reasonable price to us</p>
                    </div>
                    <div className="about-feature pt-8 pb-6">
                        <FontAwesomeIcon icon={faStethoscope} />
                        <h2 className="text-4xl mt-4">Equipment</h2>
                        <p className="mt-4 mb-4 p-4">We focus on quality type medical equipment of all label consumer</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;