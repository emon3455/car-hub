"use client"

import Loading from '@/app/loading';
import useAuth from '@/hooks/useAuth';
import { useDeleteCarsMutation, useGetAllMycarsDataQuery, } from '@/redux/features/cars/carsSlice';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import CModal from '../custom/CModal/CModal';
import UpdateCars from './updateCars/UpdateCars';
import AddCar from './addCar/AddCar';

const ManageCarsContainer = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);
    const [dataForUpdate, setDataForUpdate] = useState({});

    const { user }: any = useAuth();

    const { isLoading, isError, data: cars, error, refetch } = useGetAllMycarsDataQuery({
        email: user?.email
    },
        {
            refetchOnMountOrArgChange: true,
        }
    )

    const [
        deleteCars,
        {
            isLoading: deletCarLoading,
            isSuccess: deletCarSuccess,
            isError: deletCarIsError,
            data: deletecarData,
            error: deleteCarError,
        },
    ] = useDeleteCarsMutation();

    //showing success message
    useEffect(() => {
        if (deletCarSuccess) {
            refetch();
            toast.success("Car Deleted successfully");
        }
    }, [refetch, deletCarSuccess]);

    //showing error message
    useEffect(() => {
        if (deletCarIsError) {
            // console.log(registerError);
            toast.error(`${deleteCarError?.message}`);

        }
    }, [deletCarIsError, deleteCarError]);

    const handleDelete = (id: any) => {
        console.log("Deleted");

        Swal.fire({
            title: "Are you sure?",
            text: "Once Deleted, you will not be able to revert this!",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteCars(id)?.unwrap();
                } catch (err: any) {
                    console.log(err);
                }
            }
        })

    };


    if (isLoading) return <Loading />

    if (isError) return <h2 className="text-center font-semibold text-xl mt-4 text-red-500">
        {error?.error}
    </h2>

    return (
        <section className='container mx-auto'>
            <div className="flex justify-between p-1 my-4">
                <h2 className='lg:text-2xl font-bold text-violet-500 border-b-4 border-red-500'>Cars List:</h2>
                <button 
                onClick={() => {
                    setOpenModal1(true);
                }}
                className='btn btn-primary btn-sm text-white rounded'>
                    Add Car
                </button>
            </div>
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
                                    <button
                                        onClick={() => {
                                            setOpenModal(true);
                                            setDataForUpdate(item);
                                        }}
                                        className="btn btn-circle btn-outline btn-sm">
                                        <FaEdit className='text-lg' />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-circle btn-outline btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            <CModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title="Update Car"
                width={"w-full md:w-3/4 lg:w-2/3"}
            >
                <UpdateCars setOpenModal={setOpenModal} refetch={refetch} dataForUpdate={dataForUpdate} />
            </CModal>

            <CModal
                open={openModal1}
                onClose={() => setOpenModal1(false)}
                title="Add Car"
                width={"w-full md:w-3/4 lg:w-2/3"}
            >
                <AddCar setOpenModal1={setOpenModal1} refetch={refetch} />
            </CModal>

        </section>
    );
};

export default ManageCarsContainer;