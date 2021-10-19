import React from 'react';
import './Banner.css';
import bannerImage from '../../../img/doctor-with-mask.png';

const Banner = () => {
    return (
        <div id="banner" className="bg-gradient-to-br from-indigo-900 via-blue-400 to-red-400">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="banner-left text-white pt-32">
                        <h1 className="text-5xl font-semibold uppercase"> Equipment for Life</h1>
                        <p className="pt-6 text-2xl text-gray-100">We provide high quality and durable medical equipment to support all possible medical need.</p>
                        <button className="btn-contact">Contact Now</button>
                    </div>
                    <div className="banner-right pt-4">
                        <img className="banner-image" src={bannerImage} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;