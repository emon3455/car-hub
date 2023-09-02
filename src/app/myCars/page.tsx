import React from 'react';
import MyCarsContainer from '@/components/myCars/MyCarsContainer';

const MyCarsPage = () => {

    return (
        <div className="max-w-6xl mx-auto">

            <div className="flex justify-center">
                <h2 className='text-xl font-bold border-l-4 border-e-4 border-red-500 pl-2 pe-2 mx-auto my-10 inline-block animate animate-bounce'>
                    My CARS
                </h2>
            </div>

            <MyCarsContainer />

        </div>
    );
};

export default MyCarsPage;