import React from 'react';
import Cars from '@/components/cars/Cars';

const CarsPage = async () => {

    return (
        <section>

            <div className="flex justify-center">
                <h2 className='text-xl font-bold border-l-4 border-e-4 border-red-500 pl-2 pe-2 mx-auto my-10 inline-block animate animate-bounce'>
                     ALL CARS
                </h2>
            </div>

            <Cars />

        </section>
    );
};

export default CarsPage;