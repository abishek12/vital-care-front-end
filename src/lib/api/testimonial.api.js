import { baseApi } from "./base.api";

export const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => "/testimonial",
      providesTags: ["Testimonial"],
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialApi;
