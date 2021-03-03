import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { Footer } from 'components/Footer';

import theme from 'utils/theme';

// eslint-disable-next-line arrow-body-style
const App = () => {
  const [themeType, setThemeType] = useState('light');
  // const theme = useTheme();
  return (
    <ThemeProvider theme={theme(themeType)}>
      <CssBaseline />
      <Grid container direction="column">
        <Header themeType={themeType} setThemeType={setThemeType} />
        <Main />
        <Footer />
      </Grid>
    </ThemeProvider>
  );
};

export default App;
