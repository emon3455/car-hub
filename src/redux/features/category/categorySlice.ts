import { apiSlice } from "../api/apiSlice";

export const categorySlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAllCategoryData: builder.query({
            query:()=> {
                return {
                  url: `/categorys`,
                  method: "GET",
                };
            },
        }),

    }),
});

export const { 
    useGetAllCategoryDataQuery, 
} = categorySlice;