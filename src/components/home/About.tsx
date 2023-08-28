import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section className='w-full md:w-4/5 mx-auto my-10 p-2 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className="">
                <p className='border-l-4 border-red-500 font-semibold my-4 pl-2'> Why Choose Us</p>
                <h2 className='text-3xl font-bold my-2'>We Offer Best Car Buy Sells Platform. Also we can Provide you Car Servicing Services.</h2>
                <p className='text-sm'>
                    Your one-stop destination for all things automotive! We offer top-notch car and bus sales, along with exceptional servicing, ensuring your vehicles stay in prime condition. Your journey, our commitment.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
                <div className="-mt-5">
                    <Image width={500} height={800} alt="reparing images" src="https://i.ibb.co/zVCPgYP/sten-rademaker-UZUzv-JEv-Kn-I-unsplash.jpg" className='mx-auto rounded-lg scale-90 hover:scale-100 transition-all duration-300 ease-in shadow-lg shadow-sky-400/50' />
                </div>
                <div className="mt-5">
                    <Image width={500} height={800} alt="reparing images" src="https://i.ibb.co/Jc6xty7/talia-zs-JZhl-d-ZMU-unsplash.jpg" className='mx-auto rounded-lg scale-90 hover:scale-100 transition-all duration-300 ease-in shadow-lg shadow-pink-500/50' />
                </div>
            </div>
        </section>
    );
};

export default About;