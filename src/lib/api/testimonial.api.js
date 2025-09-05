import { baseApi } from './base.api';

export const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => '/testimonial',
      providesTags: ['Testimonial'],
    }),
    createTestimonial: builder.mutation({
      query: (testimonialData) => ({
        url: '/testimonial',
        method: 'POST',
        body: testimonialData,
      }),
      invalidatesTags: ['Testimonial'],
    }),
  }),
});

export const {
  useGetTestimonialsQuery,
  useCreateTestimonialMutation,
} = testimonialApi;