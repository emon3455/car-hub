"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface CarsLayoutProps {
    allCars: toy[];
}

interface toy {
    _id: string;
    sellerName: string;
    sellerEmail: string;
    picture: string;
    toyName: string;
    subCategory: string;
    price: number;
    rating: number;
    availableQuantity: number;
    description: string;
}

const CarsLayout = ({ allCars }: CarsLayoutProps) => {

    const [uniqueSubCategories, setUniqueSubCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [filteredCars, setFilteredCars] = useState<toy[]>([]);

    useEffect(() => {
        // Extract unique subCategories when cars data changes
        const subCategoriesSet = new Set(allCars.map(car => car.subCategory));
        const subCategoriesArray = Array.from(subCategoriesSet);
        setUniqueSubCategories(subCategoriesArray);

        // Display cars under the first category by default
        if (subCategoriesArray.length > 0) {
            setSelectedCategory(subCategoriesArray[0]);
        }
    }, [allCars]);

    useEffect(() => {
        // Filter cars based on selected category
        if (selectedCategory) {
            const carsForSelectedCategory = allCars.filter(car => car.subCategory === selectedCategory);
            setFilteredCars(carsForSelectedCategory);
        }
    }, [selectedCategory, allCars]);

    return (
        <div className="">
            <h2 className='text-center text-4xl py-5 font-bold text-black bg-violet-200'>Get Your Desire Cars</h2>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-2">
                    <div className="text-right">
                        <label htmlFor="my-drawer-2" className="btn btn-sm btn-warning drawer-button lg:hidden">
                            Select Category
                        </label>
                    </div>

                    {/* Display the cars */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
                        {filteredCars.map(car => (
                            <div className='card shadow-md shadow-sky-400/50' key={car._id}>
                                <div className="card-body">
                                    <div className="">
                                        <Image alt='cars image' src={`${car.picture}`} width={300} height={200} className='mx-auto'></Image>
                                    </div>
                                    <h2 className='text-xl font-semibold'>{car.toyName}</h2>
                                    <h2><span className='font-medium'>Seller Name:</span> {car.sellerName}</h2>
                                    <p><span className='font-medium'>Price:</span> {car.price}</p>
                                    <Link href={`/cars/${car._id}`}>
                                        <button className='btn btn-sm btn-warning'> View Details </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        <li className='mb-4 font-extrabold text-center text-xl'>Select Category</li>

                        {uniqueSubCategories.map(subCategory => (
                            <li className={`${selectedCategory===subCategory ? "bg-yellow-500 text-white rounded-md" : ""}`} key={subCategory}>
                                {/* Update selected category on click */}
                                <a onClick={() => setSelectedCategory(subCategory)}>{subCategory}</a>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default CarsLayout;
