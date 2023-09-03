"use client"

import React, { useEffect, useState } from 'react';
import { Reorder, } from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';

const TopCars = ({ topCars }: any) => {

    const [items, setItems] = useState(topCars);

    return (
        <section className='p-2 my-10 w-full md:w-4/5 mx-auto'>
            <div className="my-5">
                <h2 className='text-xl font-bold border-l-4 border-red-500 pl-2'>Top Cars</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Reorder.Group axis="y" values={items} onReorder={setItems}>
                    {items.map((item: any) => (
                        <Reorder.Item key={item} value={item} className="shadow-2xl bg-white text-black p-2 w-full flex flex-col md:flex-row justify-around items-center gap-5 mb-5 transition-all duration-700 ease-linear">
                            <div className="">
                                <Image src={item.picture} width={160} height={120} alt="cars image" className='rounded-lg' />
                            </div>
                            <div className='space-y-1'>
                                <h2 className="text-xl font-semibold">{item.toyName}</h2>
                                <p>{item.description.slice(0, 90) + "..."}</p>
                                <div className="text-sm font-semibold flex justify-around">
                                    <p>Rating: <span className='text-orange-600'>{item.rating}</span></p>
                                    <p>Available Quantity: <span className='text-orange-600'>{item.availableQuantity}</span> </p>
                                </div>
                            </div>
                            <h4 className='text-orange-600 font-semibold'>
                                {item.price}$
                            </h4>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            </div>

            <div className="text-center">
                <Link href="/cars" className="p-2 text-white rounded-sm font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500">
                    View More
                </Link>
            </div>

        </section>
    );
};

export default TopCars;