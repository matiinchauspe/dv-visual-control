import { createMuiTheme } from '@material-ui/core/styles';

const theme = (themeType) =>
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            margin: 0,
          },
        },
      },
    },
    palette: {
      type: themeType,
      grey: {
        light: '#a8a8a8',
      },
    },
  });

export default theme;
