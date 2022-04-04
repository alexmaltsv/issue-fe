import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Speciality } from 'types';
import { API } from 'shared';

export const specialitiesApi = createApi({
  reducerPath: 'specialitiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.lookupsSpecialities() }),
  endpoints: (builder) => ({
    getSpecialities: builder.query<Speciality[], void>({
      query: () => '/',
    }),
  }),
});

export const { useGetSpecialitiesQuery } = specialitiesApi;