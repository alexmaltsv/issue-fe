import SearchIcon from '@mui/icons-material/Search';
import { SearchContainer } from './Search.styled';
import { TextField, InputAdornment, TextFieldProps } from '@mui/material';

export const Search = (props: TextFieldProps) => (
  <SearchContainer>
    <TextField
      fullWidth
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  </SearchContainer>
);