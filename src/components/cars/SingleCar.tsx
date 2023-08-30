"use client"
import Image from 'next/image';
import React from 'react';

const SingleCar = ({ car }: any) => {

    console.log(car);

    return (
        <section>

            {
                car && <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <Image src={car?.picture} width={400} height={500} alt="cars" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {car.toyName}
                        </h2>
                        <p>
                            {car.description}
                        </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Select</button>
                        </div>
                    </div>
                </div>
            }

        </section>
    );
};

export default SingleCar;