import { apiSlice } from "../api/apiSlice";

export const carsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllCarsData: builder.query({
            query: (data: {
                sort: string;
            }) => {
                const { sort } = data;
                return {
                    url: `/cars?sort=${sort}`,
                    method: "GET",
                };
            },
        }),

        getAllMycarsData: builder.query({
            query: (data: {
                email: string;
            }) => {
                const { email } = data;
                return {
                    url: `/getCarsBySellerEmail?sellerEmail=${email}`,
                    method: "GET"
                }
            }
        }),

        deleteCars: builder.mutation({
            query: (id: any) => {
                return {
                    url: `/cars/${id}`,
                    method: "DELETE",
                };
            },
        }),

        updateNotice: builder.mutation({
            query: (data: any) => {
                const{id, info} = data;
                return {
                    url: `/cars/${id}`,
                    method: "PUT",
                    body: info,
                };
            },
        }),

    }),
});

export const { useGetAllCarsDataQuery, useGetAllMycarsDataQuery } = carsSlice;