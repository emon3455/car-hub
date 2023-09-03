import React from 'react';
import { FaCarSide } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='p-4'>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-10">

                <div className="">
                    <h2 className="text-xl font-bold my-4">Quick Links</h2>
                    <div className="space-y-2">
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Home</p>
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">About Us</p>
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Insurance</p>
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Privacy Policy</p>
                    </div>
                </div>

                <div className="">
                    <h2 className="text-xl font-bold my-4">Our Service</h2>
                    <div className="space-y-2">
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Life Insurance</p>
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Car Insurance</p>
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Health Insurance</p>
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">House Insurance</p>
                    </div>
                </div>

                <div className="">
                    <h2 className="text-xl font-bold my-4">Help</h2>
                    <div className="space-y-2">
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">FAQs</p>
                        <p className=" hover:-translate-y-1 transition-all duration-500 cursor-pointer">Contact Us</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-xl font-bold my-4">Subscribe Now</h2>
                    <div className="">
                        <span className="mr-8">Car-Hub BD</span>

                    </div>
                    <hr className="w-1/2 text-cyan-50 p-2" />
                    <div className="space-x-2">
                        <i className="fa-brands fa-facebook fa-2x cursor-pointer"></i>
                        <i className="fa-brands fa-twitter fa-2x cursor-pointer"></i>
                        <i className="fa-brands fa-instagram fa-2x cursor-pointer"></i>
                    </div>
                </div>

            </div>

            <div className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <span className='font-semibold text-white p-1 rounded-full bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 text-2xl'><FaCarSide /></span>
                    <p>Car-hub <br />Providing reliable Cars since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;