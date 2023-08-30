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

    }),
});

export const {useGetAllCarsDataQuery} = carsSlice;