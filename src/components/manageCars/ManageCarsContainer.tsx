"use client"

import Loading from '@/app/loading';
import useAuth from '@/hooks/useAuth';
import { useGetAllMycarsDataQuery } from '@/redux/features/cars/carsSlice';
import Image from 'next/image';
import React from 'react';
import { FaEdit } from 'react-icons/fa';

const ManageCarsContainer = () => {

    const { user }: any = useAuth();

    const { isLoading, isError, data: cars, error, refetch } = useGetAllMycarsDataQuery({
        email: user?.email
    },
        {
            refetchOnMountOrArgChange: true,
        }
    )


    if (isLoading) return <Loading />

    if (isError) return <h2 className="text-center font-semibold text-xl mt-4 text-red-500">
        {error?.error}
    </h2>


    return (
        <section className='container mx-auto'>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars
                            &&
                            cars.map((item: any, index: any) => <tr key={index}>
                                <td>
                                    <div className="flex items-center gap-2 w-full">
                                        <Image
                                            src={item?.picture || "https://i.ibb.co/5nPD3Qg/user.jpg"}
                                            width={40}
                                            height={40}
                                            alt="car image"
                                            className="w-4 h-4 lg:w-8 lg:h-8 rounded-full border-2 dark:border-cyan-600 border-cyan-950 object-cover"
                                        />
                                        <span className="mx-2">{item?.toyName}</span>
                                    </div>
                                </td>
                                <td>{item?.category}</td>
                                <td>{item?.price}</td>
                                <td>{item?.rating}</td>
                                <td>{item?.availableQuantity}</td>
                                <td className='flex items-center gap-2'>
                                    <button className="btn btn-circle btn-outline btn-sm">
                                        <FaEdit className='text-lg' />
                                    </button>
                                    <button className="btn btn-circle btn-outline btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </section>
    );
};

export default ManageCarsContainer;