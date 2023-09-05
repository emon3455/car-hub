"use client"

import React from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { FaTrash } from 'react-icons/fa';
import { removeFromCart } from '@/redux/features/cart/cartSlice';

const CartComponent = () => {

    const cart = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const price = cart.reduce((total:any, item:any) => total + item.price, 0);

    return (
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
                                {item.price}
                            </td>
                            <td>
                                {item.rating}
                            </td>
                            <td>
                                <button onClick={()=> dispatch(removeFromCart(item._id))} className="btn bg-red-500 hover:text-black text-white text-xl btn-sm">
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
                        <th></th>
                        <th>Price: </th>
                        <th>{price}</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    );
};

export default CartComponent;