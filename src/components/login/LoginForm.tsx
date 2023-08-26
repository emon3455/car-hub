"use client"

import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { startTransition } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import useAuth from '@/hooks/useAuth';

import createJWT from '@/utils/createJWT';

interface LoginFormValues {
    email: string;
    password: string;
}

interface LoginFormProps { }

const LoginForm: React.FC<LoginFormProps> = () => {

    const { signInUser }: any = useAuth();

    const [hide, setHide] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>();

    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace, refresh } = useRouter();


    const onSubmit = async (data:any) => {
        const { email, password } = data;
        const toastId = toast.loading("Loading...");
        try {

            await signInUser(email, password);
            await createJWT({ email })

            startTransition(() => {
                refresh();
                replace(from);
                toast.dismiss(toastId);
                toast.success("User signed in successfully");
            });

        } catch (error:any) {

            toast.dismiss(toastId);
            toast.error(error.message || "User not signed in");

        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-3xl font-bold text-center">Sign in</h2>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="email"
                    {...register('email', { required: true })}
                    className="input input-bordered w-full"
                />
                {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <div className="relative">
                    <input
                        type={hide ? 'password' : 'text'}
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                        })}
                        placeholder="password"
                        className="input input-bordered w-full"
                    />
                    <span
                        onClick={() => setHide(!hide)}
                        className="btn btn-ghost border border-l-0 border-collapse absolute right-0"
                    >
                        <FaEyeSlash />
                    </span>
                </div>
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && (
                    <p className="text-red-600">Password must have one Uppercase, one lowercase, one number, and one special character.</p>
                )}
            </div>

            <div className="text-center">
                <input type="submit" value="Login" className="btn btn-warning mt-2 text-white font-semibold" />
            </div>
        </form>
    );
};

export default LoginForm;
