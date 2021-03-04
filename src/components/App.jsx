import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { Footer } from 'components/Footer';

import theme from 'utils/theme';
import useGeneralState from 'hooks/useGeneralState';
import AppContext from 'context/AppContext';

const App = () => {
  const [themeType, setThemeType] = useState('light');
  const generalState = useGeneralState();

  return (
    <AppContext.Provider value={generalState}>
      <ThemeProvider theme={theme(themeType)}>
        <CssBaseline />
        <Grid container direction="column">
          <Header themeType={themeType} setThemeType={setThemeType} />
          <Main />
          <Footer />
        </Grid>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
