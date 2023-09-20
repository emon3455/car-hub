"use client"

import Loading from '@/app/loading';
import useAuth from '@/hooks/useAuth';
import { useGetAllMycarsDataQuery } from '@/redux/features/cars/carsSlice';
import React from 'react';

const ManageCarsContainer = () => {

    const { user }: any = useAuth();

    const { isLoading, isError, data: cars, error, refetch } = useGetAllMycarsDataQuery({
        email: user?.email
    },
        {
            refetchOnMountOrArgChange: true,
        }
    )

    if (isLoading) return <Loading />

    if (isError) return <h2 className="text-center font-semibold text-xl mt-4 text-red-500">
        {error?.error}
    </h2>


    return (
        <section>
            
        </section>
    );
};

export default ManageCarsContainer;