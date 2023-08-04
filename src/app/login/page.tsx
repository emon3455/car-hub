/* eslint-disable react/no-unescaped-entities */
import LoginForm from '@/components/login/LoginForm';
import SocialLogin from '@/components/shared/SocialLogin';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-5 p-2">
            <div className="card w-full max-w-lg  shadow-lg shadow-yellow-400/50 bg-base-100 order-2 md:order-1" style={{ borderRadius: '0 100px 0 100px' }}>

                <LoginForm></LoginForm>

                <div className="px-4 pb-2">

                    <p className="text-center text-gray-600">
                        Don' t have an Account? <Link className="text-sky-600" href="/signup">Create an account</Link>
                    </p>

                    <div className='p-4 flex gap-x-2 items-center'>
                        <div className="font-bold">OR Continue With: </div>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>

            </div>
            <div className="hidden lg:block max-w-lg order-1 md:order-2">
                <Image
                src="/signin.jpg"
                alt='login image'
                width={400}
                height={250}
                style={{ borderRadius: '0 100px 0 100px' }}
                ></Image>
            </div>
        </div>
    );
};

export default LoginPage;