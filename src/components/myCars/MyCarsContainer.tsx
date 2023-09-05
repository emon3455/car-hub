"use client"

import Loading from '@/app/loading';
import useAuth from '@/hooks/useAuth';
import { useGetAllMycarsDataQuery } from '@/redux/features/cars/carsSlice';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CModal from '../custom/CModal/CModal';
import SingleCar from '../cars/SingleCar';

const MyCarsContainer = () => {

    const [search, setSearch] = useState("");
    const [open, setIsOpen] = useState(false);
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({});

    const { user }: any = useAuth();

    const { isLoading, isError, data, error } = useGetAllMycarsDataQuery({
        email: user?.email
    },
        {
            refetchOnMountOrArgChange: true,
        }
    )

    useEffect(() => {
        setCars(data)
    }, [data])


    const handleSearch =(e:any)=>{
        e.preventDefault();
        const text = search.toLowerCase();
        const searchCars = data.filter((item:any)=> item.toyName.toLowerCase().includes(text))
        setCars(searchCars)
    }


    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <h2 className="text-center font-semibold text-xl mt-4 text-red-500">
            {error?.error}
        </h2>
    }


    return (

        <section className=''>

            <div className="p-2">
                <form onSubmit={handleSearch}>
                    <input type="text" onChange={(e: any) => setSearch(e.target.value)} placeholder='Search By Name' className='p-2 border-2 border-violet-700 focus:outline-none' />
                    <button type='submit' className='p-2 border-2 border-violet-700 rounded-r-full bg-violet-500 text-white'>Search</button>
                </form>
            </div>

            <div>
                {
                    user
                    &&
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
                }

                <CModal
                    open={open}
                    onClose={() => setIsOpen(false)}
                    title="Car Details"
                    width={"w-full md:w-3/4 lg:w-3/4"}
                >
                    <SingleCar car={car} path={"/myCars"}/>
                </CModal>
            </div>

        </section>

    );
};

export default MyCarsContainer;