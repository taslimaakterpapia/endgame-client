import React from 'react';
import College from './College';
import Gallery from './Gallary';
import Research from './Research';
import Review from './Review';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <College></College>
            <Review></Review>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;