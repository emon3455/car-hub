"use client"

import React from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { FaTrash } from 'react-icons/fa';
import { removeAll, removeFromCart } from '@/redux/features/cart/cartSlice';
import Swal from 'sweetalert2';
import { useRouter} from "next/navigation";

const CartComponent = () => {

    const cart = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const price = cart.reduce((total: any, item: any) => total + item.price, 0);

    const handlePayment = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "This Features Is Under Construction!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Pay !'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeAll());
                Swal.fire(
                    'Payment!',
                    'Your Purchased has been deleted.',
                    'success'
                )
                router.push("/");

            }
        })

    }

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.length == 0 && <div className="alert alert-warning my-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Warning: Nothing To show! Please Add some Item First</span>
                            </div>
                        }
                        {
                            cart && cart.map((item: any) => <tr key={item._id}>

                                <td>
                                    {item.toyName}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image width={80} height={80} src={item.picture} alt="car image" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.price} $
                                </td>
                                <td>
                                    {item.rating}
                                </td>
                                <td>
                                    <button onClick={() => dispatch(removeFromCart(item._id))} className="btn btn-error text-white text-xl btn-sm">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Total: {price} $</th>
                            <th></th>
                            <th>
                                <button onClick={handlePayment} className='btn btn-primary btn-sm'>Pay</button>
                            </th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    );
};

export default CartComponent;