import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { City } from 'types';
import { API } from 'shared';

export const citiesApi = createApi({
  reducerPath: 'citiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.lookupsCities() }),
  endpoints: (builder) => ({
    getCities: builder.query<City[], void>({
      query: () => '/',
    }),
  }),
});

export const selectCitiesData = citiesApi.endpoints.getCities.select();
export const { useGetCitiesQuery } = citiesApi;