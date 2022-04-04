import { useGetCitiesQuery, useGetSpecialitiesQuery } from './api';
import { usePreloader } from 'hooks';

interface LookupsLayoutProps {
  children: JSX.Element;
} 

export const LookupsLayout = ({ children }: LookupsLayoutProps) => {
  const citiesQuery = useGetCitiesQuery();
  const specialitiesQuery = useGetSpecialitiesQuery();

  const isLookupsLoading = specialitiesQuery.isLoading || citiesQuery.isLoading;
  const error = specialitiesQuery.error || citiesQuery.error;

  const { Preloader } = usePreloader(!isLookupsLoading);

  if (isLookupsLoading) {
    return Preloader;
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  return children;
};