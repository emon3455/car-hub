"use client"

import { addToCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import React from 'react';

const SingleCar = ({ car, path }: any) => {

    const cart = useAppSelector(state=> state.cart);

    const dispatch = useAppDispatch();
    

    return (
        <section className='p-4'>

            {
                car && <div className="card lg:card-side bg-white-100 text-black shadow-md shadow-red-500/50">
                    <figure>
                        <Image src={car?.picture} width={450} height={500} alt="cars" className='mx-auto' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Car Name: {car.toyName}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <p><span className='font-semibold'>Price:</span> {car.price}$</p>
                            <p><span className='font-semibold'>Rating:</span> {car.rating}</p>
                            <p><span className='font-semibold'>Available Quantity:</span> {car.availableQuantity}</p>
                            <p><span className='font-semibold'>Category:</span> {car.category}</p>
                            <p><span className='font-semibold'>Seller Name:</span> {car.sellerName}</p>
                            <p><span className='font-semibold'>Seller Email:</span> {car.sellerEmail}</p>
                        </div>
                        <p>
                            <span className='font-semibold'>Descrption: </span>{car.description}
                        </p>
                        <div className={`card-actions ${path=="/myCars" ? "hidden" : "justify-end"}`}>
                            <button disabled={false} onClick={()=> dispatch(addToCart(car))} className="px-2 py-1 text-white rounded-sm font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 hover:bg-gradient-to-r  hover:from-blue-500 hover:via-pink-500 hover:to-yellow-500 transition-all duration-1000 ease-linear">Select</button>
                        </div>
                    </div>
                </div>
            }

        </section>
    );
};

export default SingleCar;