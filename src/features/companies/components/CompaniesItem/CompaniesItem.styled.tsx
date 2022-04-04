import styled from '@emotion/styled';
import { Chip } from '@mui/material';

export const CompaniesItemLogo = styled.div`
  margin-left: auto;
`;

export const CompaniesChip = styled(Chip)`
  margin-top: 8px;
  margin-right: 8px;
  
  &:last-child {
    margin-right: 0;
  }
`;