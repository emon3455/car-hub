"use client"
import { Parallax } from "react-parallax";
import React from 'react';

interface OverviewProps{
    title: string
    subtitle: string,
    img?: string,
}

const Overview = ( {title, subtitle, img}: OverviewProps) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the banner"
            strength={-200}
        >
            <div className="hero h-[600px] bg-cover">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content lg:text-center text-white lg:px-40 py-20 bg-red-300 bg-opacity-20">
                    <div className=" max-w-lg">
                        <h1 className="mb-5 text-4xl font-extrabold uppercase">{title}</h1>
                        <p className="mb-5">
                           {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Overview;

// import React from 'react';

// const Overview = () => {
//     return (
//         <div style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            
//         </div>
//     );
// };

// export default Overview;