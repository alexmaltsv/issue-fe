import { createTheme } from '@mui/material';

const defaultTheme = createTheme();
export const theme = createTheme({
  // palette: {
  //   background: {
  //     default: defaultTheme.palette.grey.A100,
  //   }
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        background: defaultTheme.palette.grey.A100,
      },
      // body: {
      // }
    },
  },
});