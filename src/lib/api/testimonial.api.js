import { baseApi } from './base.api';

export const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => '/testimonials',
      providesTags: ['Testimonial'],
    }),
    createTestimonial: builder.mutation({
      query: (testimonialData) => ({
        url: '/testimonials',
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