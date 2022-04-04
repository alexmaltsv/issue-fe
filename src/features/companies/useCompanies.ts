import { useMemo } from 'react';
import { useDebounce } from 'react-use';
import { useQuery } from '../../hooks';
import { useLazyGetCompaniesQuery } from './api';
import { COMPANIES_DEBOUNCE_TIME } from './constants';
import { CompanyParams } from './types';

export const useCompanies = () => {
  const { query, push: change } = useQuery<CompanyParams>();

  const [load, { data, ...rest }] = useLazyGetCompaniesQuery();

  const params = useMemo<CompanyParams>(() => ({
    ...query,
    cityIds: query.cityIds?.map(Number) || [],
    specialityIds: query.specialityIds?.map(Number) || [],
  }), [query]);

  useDebounce(
    () => load(query),
    COMPANIES_DEBOUNCE_TIME,
    [query, load],
  );

  return {
    data,
    params,
    change,
    ...rest,
  };
};