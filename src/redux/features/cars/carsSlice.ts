import { apiSlice } from "../api/apiSlice";

export const carsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllCarsData: builder.query({
            query: (data: {
                sort: string;
            }) => {
                const {  sort } = data;
                return {
                    url: `/cars?sort=${sort}`,
                    method: "GET",
                };
            },
        }),

        getAllMycarsData: builder.query({
            query: (data:{
                email: string;
            })=>{
                const {email} = data;
                return{
                    url: `/getCarsBySellerEmail?sellerEmail=${email}`,
                    method: "GET"
                }
            }
        })

    }),
});

export const {useGetAllCarsDataQuery, useGetAllMycarsDataQuery} = carsSlice;