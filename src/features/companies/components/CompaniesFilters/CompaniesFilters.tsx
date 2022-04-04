import { City, Speciality } from 'types';
import { Grid, TextField, Autocomplete } from '@mui/material';
import { useCallback } from 'react';
import { Search } from '../../../../components/Search';
import { CompanyParams } from '../../types';

interface CompaniesFiltersProps {
  onChange: (params: CompanyParams) => void;
  params: CompanyParams;
  cities: City[];
  specialities: Speciality[];
}

export const CompaniesFilters = ({ cities, onChange, specialities, params }: CompaniesFiltersProps) => {
  const { cityIds, specialityIds } = params;

  const selectedCities = cityIds && cities.filter(({ id }) => cityIds?.includes(id));
  const selectedSpecialities = specialityIds && specialities.filter(({ id }) => specialityIds?.includes(id));

  const handleChange = useCallback((value: Partial<CompanyParams>) => {
    onChange({ ...params, ...value });
  }, [onChange, params]);

  return (
    <Grid
      xs={12}
      paddingBottom={4}
      item
    >
      <Search
        defaultValue={params.q}
        onChange={(event) => {
          handleChange({ q: event.target.value });
        }}
      />

      <Grid
        paddingTop={2}
        maxWidth={400}
      >
        <Autocomplete
          multiple
          options={cities}
          onChange={(event, item) => {
            handleChange({ cityIds: item.map(({ id }) => id) });
          }}
          value={selectedCities}
          getOptionLabel={(option) => option.title}
          renderInput={(inputParams) => (
            <TextField
              {...inputParams}
              variant="standard"
              label="Cities"
              placeholder="Cities"
            />
          )}
        />
      </Grid>

      <Grid
        paddingTop={2}
        maxWidth={400}
      >
        <Autocomplete
          multiple
          options={specialities}
          onChange={(event, item) => {
            handleChange({ specialityIds: item.map(({ id }) => id) });
          }}
          value={selectedSpecialities}
          getOptionLabel={(option) => option.title}
          renderInput={(inputParams) => (
            <TextField
              {...inputParams}
              variant="standard"
              label="Specialities"
              placeholder="Specialities"
            />
          )}
        />
      </Grid>
    </Grid>
  );
};