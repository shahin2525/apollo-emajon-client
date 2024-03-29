// Need to use the React-specific entry point to import createApi
import { baseApi } from "../../api/baseApi";

// Define a service using a base URL and expected endpoints
export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productApi;

// export default productApi.reducer;
