"use client"
import CSelect from '@/components/CSelect';
import { useGetAllCategoryDataQuery } from '@/redux/features/category/categorySlice';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const UpdateCars = ({ setOpenModal, dataForUpdate, refetch }: any) => {

    const [data, setData] = useState({
        category: dataForUpdate?.category,
        category_id: dataForUpdate?.category_id,
    })

    useEffect(() => {
        setData({
            category: dataForUpdate?.category,
            category_id: dataForUpdate?.category_id,
        });
    }, [dataForUpdate])

    const {
        isLoading,
        isError,
        data: categorys,
        error,
    } = useGetAllCategoryDataQuery({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (info: any) => {
        console.log(info);
        console.log(data);
        alert("submit")
    }

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                <h2 className="text-3xl font-bold text-center">Update Car Information</h2>

                <div className="">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={dataForUpdate?.toyName}
                            placeholder="name"
                            {...register('name')}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control opacity-50">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input
                            type="text"
                            readOnly
                            defaultValue={dataForUpdate?.sellerName}
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
                            defaultValue={dataForUpdate?.sellerEmail}
                            placeholder="sellerEmail"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="">
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
                            defaultValue={dataForUpdate?.price}
                            placeholder="price"
                            {...register('price')}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={dataForUpdate?.availableQuantity}
                            placeholder="availableQuantity"
                            {...register('availableQuantity')}
                            className="input input-bordered w-full"
                        />
                       
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={dataForUpdate?.rating}
                            placeholder="rating"
                            {...register('rating')}
                            className="input input-bordered w-full"
                        />
                        
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            defaultValue={dataForUpdate?.description}
                            placeholder="Description"
                            className=" rounded-lg p-2 h-24 input input-bordered input-success"
                            {...register('description')}
                        />
                        
                    </div>

                </div>


                <div className="text-center">
                    <input
                        type="submit"
                        value="Update"
                        className="btn btn-warning mt-2 text-white font-semibold"
                    />
                </div>
            </form>
        </main>
    );
};

export default UpdateCars;