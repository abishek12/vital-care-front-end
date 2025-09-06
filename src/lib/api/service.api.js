import { baseApi } from "./base.api";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/services",
      providesTags: ["Service"],
    }),
  }),
});

export const { useGetServicesQuery } = serviceApi;
