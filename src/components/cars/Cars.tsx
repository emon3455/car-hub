"use client"

import Loading from '@/app/loading';
import { useGetAllCarsDataQuery } from '@/redux/features/cars/carsSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import CModal from '../custom/CModal/CModal';
import SingleCar from './SingleCar';

const Cars = () => {

    const [sort, setSort] = useState(true);
    const [open, setIsOpen] = useState(false);
    const [car, setCar] = useState({});

    const { isError, isLoading, data: cars, error, isFetching } = useGetAllCarsDataQuery(
        { sort: sort ? "asc" : "desc" },
        {
            refetchOnMountOrArgChange: true,
        }
    )


    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <h2 className="text-center font-semibold text-xl mt-4 text-red-500">
            {error?.error}
        </h2>
    }

    return (
        <section className="max-w-6xl mx-auto">

            <div className="flex gap-x-2 items-center my-5 z-10">
                <h2 className='text-xl border-l-4 pl-2 border-red-500'>Sort:</h2>
                <select name="sort" id="sort" onChange={() => setSort(!sort)} className='p-2 border-2 border-violet-600 w-32 focus:outline-none'>
                    <option value="asc">Asending</option>
                    <option value="desc">Desending</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-2'>
                {
                    cars && cars.map((item: any) => <div key={item._id} className='shadow-2xl bg-white text-black rounded flex flex-col justify-between'>

                        <div className="w-full p-4">
                            <Image src={item.picture} width={320} height={100} alt="car image" className='mx-auto shadow-2xl shadow-sky-400/50 h-60 w-80 scale-90 hover:scale-100 transition-all duration-700 ease-linear' />
                        </div>

                        <div className="p-4 space-y-1">
                            <h4 className='text-lg font-bold'>{item.toyName}</h4>
                            <p className=''>
                                Price: {item.price} $
                            </p>
                            <div className="text-center">
                                <button onClick={() => {
                                    setCar(item);
                                    setIsOpen(true);
                                }} className='px-2 py-1 text-sm text-white rounded-sm font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 hover:bg-gradient-to-r  hover:from-blue-500 hover:via-pink-500 hover:to-yellow-500 transition-all duration-700 ease-linear'>
                                    View Details
                                </button>
                            </div>
                        </div>

                    </div>)
                }
            </div>


            <CModal
                open={open}
                onClose={() => setIsOpen(false)}
                title="Car Details"
                width={"w-full md:w-3/4 lg:w-3/4"}
            >
                <SingleCar car={car} />
            </CModal>

        </section>
    );
};

export default Cars;