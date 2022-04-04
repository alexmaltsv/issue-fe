import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo, useCallback } from 'react';
import qs from 'query-string';
import { reduce } from 'lodash';

const clearObject = <T extends object>(query: T) => reduce(
  query,
  (acc, value: any, key) => {
    if (Boolean(value) && value !== '0') {
      acc[key as keyof T] = value;
    }
    return acc;
  },
  {} as T,
);

export function useQuery<T extends object>() {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const query = useMemo(
    () => qs.parse(search, { arrayFormat: 'bracket' }) as T,
    [search],
  );

  const pushQuery = useCallback(
    (params: Partial<T> | null = {}) => {
      console.log(params,  qs.stringify(clearObject({ ...query, ...params }), { arrayFormat: 'bracket' }) );
      const searchString = qs.stringify(clearObject({ ...query, ...params }), { arrayFormat: 'bracket' });
      const url = pathname + (`${search || params}` ? `?${searchString}` : '');
      navigate(url);
    },
    [pathname, navigate, query, search],
  );

  return {
    query: query,
    push: pushQuery,
  };

}
