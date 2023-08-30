"use client"

import Loading from '@/app/loading';
import { useGetAllCarsDataQuery } from '@/redux/features/cars/carsSlice';
// import { useGetAllCarsQuery } from '@/redux/features/cars/carsSlice';
import React, { useState } from 'react';

const Cars = () => {

    const [sort, setSort] = useState("desc");

    const { isError, isLoading, data: cars, error } = useGetAllCarsDataQuery(
        { sort: sort },
        {
            refetchOnMountOrArgChange: true,
        }
    )

    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <h2 className="text-center font-semibold text-xl mt-4 text-red-500">
            {error?.message}
        </h2>
    }

    return (
        <section>

        {
            cars && cars.map((item:any) => <div key={item._id} className=''>

                 {item.toyName}
                
                </div>)
        }

        </section>
    );
};

export default Cars;