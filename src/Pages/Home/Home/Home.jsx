import React from 'react';
import Banner from '../Banner/Banner';
import ImgGallery from '../Gallery/ImgGallery';
import About from '../About/About';
import Service from '../../Service/Service';

const Home = () => {
    return (
        <div >
            <Banner/>
            <About/>
            <Service/>
            <ImgGallery/>
            
        </div>
    );
};

export default Home;