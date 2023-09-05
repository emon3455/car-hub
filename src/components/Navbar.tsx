"use client"

import useAuth from '@/hooks/useAuth';
import useTheme, { Theme } from '@/hooks/useTheme';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { startTransition, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCarSide } from 'react-icons/fa';

const Navbar = () => {

    const { user, logOut }: any = useAuth();
    const { theme, toggleTheme } = useTheme() as Theme;
    const cart = useAppSelector(state => state.cart);

    const navMenus = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/cars">Cars</Link></li>
        <li><Link href="/myCars">My Cars</Link></li>
        <li><Link href="/#services">Services</Link></li>
        <li><Link href="/#reviews">Reviews</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
        {
            user && <li><Link href="/dashboard">Dashboard</Link></li>
        }
    </>

    const { replace, refresh } = useRouter();
    const path = usePathname();

    const handleLogout = async () => {
        const toastId = toast.loading("Loading...");
        try {
            await logOut();
            const res = await fetch("/api/auth/logout", {
                method: "POST",
            });
            await res.json();
            if (path.includes("/dashboard") || path.includes("/profile")) {
                replace(`/login?redirectUrl=${path}`);
            }
            toast.dismiss(toastId);
            toast.success("Successfully logout!");
            startTransition(() => {
                refresh();
            });
        } catch (error) {
            toast.error("Successfully not logout!");
            toast.dismiss(toastId);
        }
    };


    return (
        <div className="navbar bg-base-400 shadow-md shadow-red-500/50 z-30 sticky top-0 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenus}
                    </ul>
                </div>
                <h3 className="normal-case xl:text-2xl font-bold flex items-center gap-x-1"><span className='font-semibold text-white p-1 rounded-full bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500'><FaCarSide /></span>Car-Hub</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navMenus}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <div className="mr-1">
                                <Link href={"/cart"}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item bg-red-500 text-white">{cart.length}</span>
                                        </div>
                                    </label>
                                </Link>
                            </div>

                            <div className="dropdown dropdown-end text-black">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image
                                            alt="user picture"
                                            src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/5nPD3Qg/user.jpg"}
                                            title={user?.displayName}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handleLogout}><a>Logout</a></li>
                                </ul>
                            </div>
                        </>
                        :
                        <>

                            <Link href="/login" className="px-2 py-1 text-white rounded-sm font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500">Login</Link>
                        </>

                }

                <div className="ms-1 flex items-center">
                    <label className="swap swap-rotate lg:ml-2 flex items-center border-2 border-violet-500 rounded-2xl bg-violet-100 text-black">
                        <input
                            onChange={toggleTheme}
                            type="checkbox"
                            checked={theme === "dark"}
                        />
                        
                        <svg
                            className="swap-off h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                        <svg
                            className="swap-on h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                    </label>
                    {/* <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} className="toggle" /> */}
                </div>

            </div>
        </div >
    );
};

export default Navbar;