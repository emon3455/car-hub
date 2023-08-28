"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaExpandArrowsAlt, FaPlus } from 'react-icons/fa';

const TopCategories = ({ categories }: any) => {

    console.log(categories);
    const [show, setShow] = useState(false);
    const [ data, setData] = useState([]);
    useEffect(()=>{
        if(show){
            setData(categories)
        }else{
            setData(categories.slice(0,3))
        }
    },[categories, show])

    return (
        <section className='p-2 my-10 w-full md:w-4/5 mx-auto'>
            <h2 className='text-2xl font-bold border-l-4 border-red-500 my-5 pl-2'>Top Categories</h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

                {
                    data.map((category: any, indx: any) => <div key={indx} className="card h-52 shadow-sm image-full rounded-2xl">
                        <figure>
                            <Image fill src={category.picture} alt="Shoes" className='rounded-2xl' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{category.category}</h2>
                        </div>
                    </div>)
                }

            </div>

            <div className="text-center my-4">
                <button onClick={()=> setShow(!show)} className="p-2 text-white rounded-lg font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 ">{show ? <span className='flex items-center gap-x-2'>Show Less <FaPlus/> </span> : <span className='flex items-center gap-x-2'>Show All <FaExpandArrowsAlt/></span>}</button>
            </div>

        </section>
    );
};

export default TopCategories;