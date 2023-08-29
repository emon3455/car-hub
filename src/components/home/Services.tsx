import Image from 'next/image';
import React from 'react';

const Services = () => {
    return (
        <div id='services' className='p-2 my-10 w-full md:w-4/5 mx-auto'>

            <div className="my-10">
                <h2 className='text-xl font-bold border-l-4 border-red-500 pl-2'>Services You Can get</h2>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">

                <div className="bg-white rounded-lg p-4 shadow-xl shadow-cyan-500/50 space-y-2 my-auto -rotate-6 scale-90 hover:rotate-0 hover:scale-105 duration-500 transition-all ease-in-out">
                    <h2 className="text-xl font-bold text-black">Car Maintenance and Repairs</h2>
                    <p className="text-justify text-black">
                        CarHub is your go-to online platform for all your car maintenance and repair needs. From routine oil changes and tire rotations to complex engine diagnostics and repairs, we connect you with trusted mechanics and service centers in your area.
                    </p>
                </div>

                <div className='-rotate-6 scale-90 hover:rotate-0 hover:scale-105 duration-500 transition-all ease-in-out'>
                    <Image src="https://i.ibb.co/NZdQ9sR/samuele-errico-piccarini-N-o-Ln-W2-Zot-E-unsplash.jpg" alt="cars image" width={350} height={200} className='rounded-lg mx-auto shadow-lg shadow-violet-500/50' />
                </div>
                <div className='-rotate-6 scale-90 hover:rotate-0 hover:scale-105 duration-500 transition-all ease-in-out'>
                    <Image src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80" alt="cars image" width={350} height={250} className='rounded-lg mx-auto shadow-lg shadow-yellow-400/50' />
                </div>

                <div className="bg-white rounded-lg p-4 shadow-xl shadow-pink-500/50 space-y-2 my-auto -rotate-6 scale-90 hover:rotate-0 hover:scale-105 duration-500 transition-all ease-in-out">
                    <h2 className="font-bold text-black">Restoration and Trading of Classic Cars</h2>
                    <p className="text-justify text-black">
                        explore an exclusive selection of eco-friendly and electric vehicles. Our platform showcases the latest in sustainable transportation, from hybrid cars to fully electric models.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Services;