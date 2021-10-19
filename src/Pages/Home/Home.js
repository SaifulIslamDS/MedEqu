import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Whyus from './Whyus/Whyus';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Whyus></Whyus>
        </div>
    );
};

export default Home;