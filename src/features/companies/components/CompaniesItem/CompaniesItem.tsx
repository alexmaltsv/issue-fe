import { Card, Typography, CardMedia, CardContent, Stack, Grid } from '@mui/material';
import { Logo } from 'components';
import { CompanyEntity } from '../../types';
import { CompaniesChip, CompaniesItemLogo } from './CompaniesItem.styled';

interface CompaniesItemProps {
  company: CompanyEntity;
}

export const CompaniesItem = ({ company }: CompaniesItemProps) => (
  <Card>
    <CardMedia
      component="img"
      height="194"
      image={company.backgroundUrl}
      alt={company.title}
    />

    <CardContent>
      <Grid
        container
        direction="row"
        alignItems="center"
        flexWrap="nowrap"
      >
        <Typography variant="h6">
          {company.title}
        </Typography>

        <CompaniesItemLogo>
          <Logo
            src={company.logoUrl}
            alt={company.title}
            width={30}
          />
        </CompaniesItemLogo>
      </Grid>

      <Typography
        color="text.secondary"
        gutterBottom
      >
        City: {company.city.title}
      </Typography>

      <Stack
        direction="row"
        mt={1}
        flexWrap="wrap"
      >
        {company.specialities.map((special) => (
          <CompaniesChip
            key={special.id}
            color="primary"
            variant="outlined"
            label={special.title}
          />
        ))}
      </Stack>
    </CardContent>
  </Card>
);