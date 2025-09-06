import { baseApi } from "./base.api";

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
