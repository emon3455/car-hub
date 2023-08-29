"use client"
import { Parallax } from "react-parallax";
import React from 'react';
import Swal from "sweetalert2";

const Contact = () => {

    const sendMessage = (e: any) => {
        e.preventDefault();

        const email = e.target.email.value;
        const message = e.target.message.value;

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been send',
            showConfirmButton: false,
            timer: 1500
        })
        e.target.reset();

    }

    return (
        <section id="contact">
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80"
                bgImageAlt="the banner"
                strength={-200}
            >
                <div className="hero h-[600px] bg-cover">
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="w-full max-w-xl p-2">
                        <div className="shadow-lg shadow-sky-400/50 rounded-2xl bg-base-100">
                            <form onSubmit={sendMessage} className="card-body">
                                <h2 className="text-xl my-5 pl-2 font-bold border-l-4 border-red-500">
                                    Contact Us
                                </h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" required name="email" placeholder="Email" className="input input-bordered input-secondary" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea name="message" required placeholder="Message" className=" rounded-lg p-2 h-24 input input-bordered input-success" />
                                </div>

                                <div className="mt-6 text-center">
                                    <input type="submit" value="Send" className="cursor-pointer px-3 py-1 text-white rounded-sm font-semibold bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 " />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    );
};

export default Contact;