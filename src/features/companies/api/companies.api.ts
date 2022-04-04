import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'query-string';
import { API } from 'shared';
import { CompanyList, CompanyParams } from '../types';

export const companiesApi = createApi({
  reducerPath: 'companiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.companies() })!,
  endpoints: (builder) => ({
    getCompanies: builder.query<CompanyList, CompanyParams>({
      query: (params) => {
        const search = qs.stringify(params);
        return '/' + (search ? `?${search}` : '');
      },
    }),
  }),
});

export const { useLazyGetCompaniesQuery } = companiesApi;