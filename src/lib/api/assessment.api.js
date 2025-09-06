import { baseApi } from "./base.api";

export const assessmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAssessment: builder.mutation({
      query: (data) => ({
        url: "/booking",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Assessment"],
    }),
  }),
});

export const { useCreateAssessmentMutation } = assessmentApi;
