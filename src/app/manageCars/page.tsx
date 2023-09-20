import React from 'react';
import ManageCarsContainer from '@/components/manageCars/ManageCarsContainer';

const ManageCarsPage = () => {
    return (
        <section className='p-2'>
            <div className="flex justify-center">
                <h2 className='text-xl font-bold border-l-4 border-e-4 border-red-500 pl-2 pe-2 mx-auto my-10 inline-block animate animate-bounce'>
                    Manage CARS
                </h2>
            </div>

            <ManageCarsContainer />

        </section>
    );
};

export default ManageCarsPage;