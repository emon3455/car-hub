import React from 'react';

const Banner = () => {
    return (
        <div className="hero w-full h-96" style={{ backgroundImage: `url(bg.jpg)` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="max-w-lg me-auto p-4 text-white">
                <h1 className="mb-4 text-2xl lg:text-4xl text-white font-bold">Sell, Buy, Explore Cars Hassle-Free</h1>
                <p className="mb-4">Unleash the potential of your car with our platform – Sell your pre-loved vehicle effortlessly and discover the road to your next adventure.</p>
                <button className="btn btn-warning btn-sm mb-2">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;