import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Products from './Products/Products';
import Whyus from './Whyus/Whyus';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Whyus></Whyus>
        </div>
    );
};

export default Home;