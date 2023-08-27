// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64eb097be51e1e82c576f06f.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts/`,
    }),
  }),
});

export const { useGetContactsQuery } = contactApi;
