import { baseApi } from "../../api/baseApi";

// Define a service using a base URL and expected endpoints
export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    createProducts: builder.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductsMutation } = productApi;
