import React from 'react';
import Banner from '../Banner/Banner';
import ImgGallery from '../Gallery/ImgGallery';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <ImgGallery/>
        </div>
    );
};

export default Home;