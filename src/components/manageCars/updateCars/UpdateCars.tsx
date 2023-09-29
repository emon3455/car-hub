"use client"
import CSelect from '@/components/CSelect';
import { useUpdateCarsMutation } from '@/redux/features/cars/carsSlice';
import { useGetAllCategoryDataQuery } from '@/redux/features/category/categorySlice';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const UpdateCars = ({ setOpenModal, dataForUpdate, refetch }: any) => {

    const [error, setError] = useState("");
    const [data, setData] = useState({
        category: dataForUpdate?.category,
        category_id: dataForUpdate?.category_id,
        toyName: dataForUpdate?.toyName,
        _id: dataForUpdate?._id,
        sellerName: dataForUpdate?.sellerName,
        sellerEmail: dataForUpdate?.sellerEmail,
        price: dataForUpdate?.price,
        rating: dataForUpdate?.rating,
        availableQuantity: dataForUpdate?.availableQuantity,
        description: dataForUpdate?.description,
    })

    const {
        data: categorys,
    } = useGetAllCategoryDataQuery({});

    const [
        updateCars,
        {
            isLoading: updateIsLoading,
            isSuccess: updateIsSuccess,
            isError: updateIsError,
            data: updateData,
            error: updateError,
        },
    ] = useUpdateCarsMutation();

    useEffect(() => {
        setData({
            category: dataForUpdate?.category,
            category_id: dataForUpdate?.category_id,
            toyName: dataForUpdate?.toyName,
            _id: dataForUpdate?._id,
            sellerName: dataForUpdate?.sellerName,
            sellerEmail: dataForUpdate?.sellerEmail,
            price: dataForUpdate?.price,
            rating: dataForUpdate?.rating,
            availableQuantity: dataForUpdate?.availableQuantity,
            description: dataForUpdate?.description,
        });
    }, [dataForUpdate])

    // showing success message
    useEffect(() => {
        if (updateIsSuccess) {
            toast.success("Car Updated Successfully");
            refetch();
            setOpenModal(false);
        }
    }, [updateIsSuccess, setOpenModal, refetch]);

    //showing error message
    useEffect(() => {
        if (updateIsError) {
            toast.error("Error Doing Update!!");
            setOpenModal(false);
        }
    }, [updateIsError, setOpenModal])


    const handleUpdate = async (e: any) => {
        
        e.preventDefault();

        setError("");
        if(!data?.price || !data?.rating || !data?.availableQuantity || !data?.description){
            setError("Price, rating, availableQuantity, description. These fields cannot be empty!!")
            return;
        }

        const updatedData = {
            category: data?.category,
            category_id: data?.category_id,
            price: parseFloat(data?.price),
            rating: parseFloat(data?.rating),
            availableQuantity: parseFloat(data?.availableQuantity),
            description: data?.description,
        }

        const updatedObject = {
            id: data._id,
            updatedData: updatedData
        }

        try {
            await updateCars(updatedObject)?.unwrap();
        } catch (err: any) {
            console.log(err);
        }
    }

    return (
        <main>
            <form onSubmit={handleUpdate} className="card-body">

                <h2 className="lg:text-2xl font-bold text-center">Update: <span className='text-violet-500'> {dataForUpdate?.toyName} </span></h2>

                <h2 className='text-center text-red-600 font-semibold'>{error && error}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

                    <div className="form-control opacity-50">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input
                            type="text"
                            readOnly
                            defaultValue={data?.sellerName}
                            placeholder="sellerName"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control opacity-50">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input
                            type="email"
                            readOnly
                            defaultValue={data?.sellerEmail}
                            placeholder="sellerEmail"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="lg:mt-4">
                        <CSelect
                            label="Category"
                            defaultValue={{ value: data?.category, label: data?.category }}
                            options={categorys?.map((item: any) => ({
                                value: item?.category_id,
                                label: item?.category,
                            }))}
                            className="basic-single"
                            classNamePrefix="select"
                            onChange={(selectedOptions) => {
                                setData({
                                    ...data,
                                    category: selectedOptions.label,
                                    category_id: selectedOptions.value,
                                });
                            }}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={data?.price}
                            placeholder="price"
                            className="input input-bordered w-full"
                            onChange={(e) => {
                                if (e.target.value) {
                                    setData({ ...data, price: e.target.value });
                                }
                            }}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={data?.availableQuantity}
                            placeholder="availableQuantity"
                            className="input input-bordered w-full"
                            onChange={(e) => {
                                if (e.target.value) {
                                    setData({ ...data, availableQuantity: e.target.value });
                                }
                            }}
                        />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            type="number"
                            step="0.1"
                            defaultValue={data?.rating}
                            onChange={(e) => {
                                if (e.target.value) {
                                    setData({ ...data, rating: e.target.value });
                                }
                            }}
                            placeholder="rating"
                            className="input input-bordered w-full"
                        />

                    </div>

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        defaultValue={data?.description}
                        onChange={(e) => {
                            if (e.target.value) {
                                setData({ ...data, description: e.target.value });
                            }
                        }}
                        placeholder="Description"
                        className=" rounded-lg p-2 h-24 input input-bordered "
                    />

                </div>


                <div className="text-right">
                    <button
                        type="submit"
                        value="Update"
                        className="btn btn-warning btn-sm rounded mt-2 text-white font-semibold"
                    >
                        {updateIsLoading ? <span className='loading loading-spinner'></span> : "Update"}
                    </button>
                </div>

            </form>
        </main>
    );
};

export default UpdateCars;