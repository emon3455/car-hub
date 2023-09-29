
"use client"
import CSelect from '@/components/CSelect';
import useAuth from '@/hooks/useAuth';
import { useAddCarMutation } from '@/redux/features/cars/carsSlice';
import { useGetAllCategoryDataQuery } from '@/redux/features/category/categorySlice';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AddCar = ({ setOpenModal1, refetch }: any) => {

    const { user }: any = useAuth();

    const {
        data: categorys,
    } = useGetAllCategoryDataQuery({});

    const [
        addCar,
        {
            isLoading: addIsLoading,
            isSuccess: addIsSuccess,
            isError: addIsError,
            data: addData,
            error: addError,
        },
    ] = useAddCarMutation();

    const [info, setInfo] = useState({
        category: categorys ? categorys[0]?.category : "",
        category_id: categorys ? categorys[0]?.category_id : "",
        picture: "",
        toyName: "",
        sellerName: user?.displayName,
        sellerEmail: user?.email,
        price: 0,
        rating: 0,
        availableQuantity: 0,
        description: "",
    })

    useEffect(() => {
        setInfo({
            category: categorys ? categorys[0]?.category : "",
            category_id: categorys ? categorys[0]?.category_id : "",
            picture: "",
            toyName: "",
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            price: 0,
            rating: 0,
            availableQuantity: 0,
            description: "",
        });
    }, [categorys, user])

    // showing success message
    useEffect(() => {
        if (addIsSuccess) {
            toast.success("Car Added Successfully");
            refetch();
            setOpenModal1(false);
        }
    }, [addIsSuccess, setOpenModal1, refetch]);

    //showing error message
    useEffect(() => {
        if (addIsError) {
            toast.error("Error While Doing Add Car!!");
            setOpenModal1(false);
        }
    }, [addIsError, setOpenModal1])

    const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData();
        if (!event.target.files || !event.target.files[0]) return;

        formData.append('image', event.target.files[0]);

        const toastId = toast.loading('Image uploading...');
        try {
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                {
                    method: 'POST',
                    body: formData,
                }
            );
            if (!res.ok) throw new Error('Failed to upload image');

            const data = await res.json();
            toast.dismiss(toastId);
            toast.success('Image uploaded successfully!');
            setInfo({
                ...info,
                picture: data?.data?.url
            });
        } catch (error: any) {
            toast.error('Image not uploaded!');
            toast.dismiss(toastId);
        }
    };

    const handleAdd = async (e: any) => {
        e.preventDefault();

        console.log(info);
        try {
            await addCar(info)?.unwrap();
        } catch (err: any) {
            console.log(err);
        }

    }

    return (
        <main>
            <form onSubmit={handleAdd} className="card-body">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Car Name</span>
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Car Name"
                            className="input input-bordered w-full"
                            onChange={(e) => {
                                if (e.target.value) {
                                    setInfo({ ...info, toyName: e.target.value });
                                }
                            }}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="photo" className="label label-text">
                            Photo
                        </label>
                        <input
                            type="file"
                            //   id="photo"
                            //   name="photo"
                            onChange={uploadImage}
                            className="file-input file-input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control opacity-50">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input
                            type="text"
                            readOnly
                            defaultValue={user?.displayName}
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
                            defaultValue={user?.email}
                            placeholder="Seller Email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="lg:mt-4">
                        <CSelect
                            label="Category"
                            defaultValue={{ value: info?.category, label: info?.category }}
                            options={categorys?.map((item: any) => ({
                                value: item?.category_id,
                                label: item?.category,
                            }))}
                            className="basic-single"
                            classNamePrefix="select"
                            onChange={(selectedOptions) => {
                                setInfo({
                                    ...info,
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
                            placeholder="Price"
                            required
                            className="input input-bordered w-full"
                            onChange={(e) => {
                                if (e.target.value) {
                                    setInfo({ ...info, price: parseFloat(e.target.value) });
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
                            placeholder="Available Quantity"
                            required
                            className="input input-bordered w-full"
                            onChange={(e) => {
                                if (e.target.value) {
                                    setInfo({ ...info, availableQuantity: parseFloat(e.target.value) });
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
                            onChange={(e) => {
                                if (e.target.value) {
                                    setInfo({ ...info, rating: parseFloat(e.target.value) });
                                }
                            }}
                            required
                            placeholder="Rating"
                            className="input input-bordered w-full"
                        />

                    </div>

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        onChange={(e) => {
                            if (e.target.value) {
                                setInfo({ ...info, description: e.target.value });
                            }
                        }}
                        required
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
                        {addIsLoading ? <span className='loading loading-spinner'></span> : "add"}

                    </button>
                </div>

            </form>
        </main>
    );
};

export default AddCar;