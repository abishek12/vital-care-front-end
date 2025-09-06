import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.vitalcaregroup.com.au/api/v1",
  credentials: "include",
  prepareHeaders: (headers) => {
    // Add auth token if available
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Testimonial", "Service", "Contacts", "Assessment"],
  endpoints: () => ({}),
});
