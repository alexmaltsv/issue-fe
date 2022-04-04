import { Grid } from '@mui/material';
import { CompaniesItem } from './components/CompaniesItem';
import { useCompanies } from './useCompanies';
import { CompaniesFilters } from './components/CompaniesFilters';
import { useGetCitiesQuery, useGetSpecialitiesQuery } from '../lookups';
import { usePreloader } from 'hooks';

export const Companies = () => {
  const { data, params, change, isLoading, isFetching } = useCompanies();

  const { data: cities = [] } = useGetCitiesQuery();
  const { data: specialities = [] } = useGetSpecialitiesQuery();

  const showPreloader = isLoading || isFetching;

  const { Preloader } = usePreloader(!showPreloader);

  const items = data && data.items;

  return (
    <>
      <CompaniesFilters
        onChange={change}
        cities={cities}
        specialities={specialities}
        params={params}
      />

      {showPreloader ? (Preloader) : (
        <Grid
          container
          spacing={2}
        >
          {items && items.length ?
            items.map((item) => (
              <Grid
                xs={4}
                key={item.id}
                item
              >
                <CompaniesItem company={item} />
              </Grid>
            ))
            : (
              <div>Not found items</div>
            )
          }
        </Grid>
      )}
    </>
  );
};