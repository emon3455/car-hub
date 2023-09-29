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

        updateCars: builder.mutation({
            query: (data: any) => {
                const{id, updatedData} = data;
                return {
                    url: `/cars/${id}`,
                    method: "PATCH",
                    body: updatedData,
                };
            },
        }),

    }),
});

export const { 
    useGetAllCarsDataQuery, 
    useGetAllMycarsDataQuery, 
    useDeleteCarsMutation, 
    useUpdateCarsMutation, 
} = carsSlice;