import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import DarkIcon from '@material-ui/icons/Brightness2';
import LightIcon from '@material-ui/icons/WbIncandescent';

import Logo from 'images/logo.png';
import { Title } from './Title';
import useStyles from './styles';

const Header = ({ setThemeType, themeType }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      justify="space-around"
      className={classes.root}
    >
      <Grid xs={8} container item alignItems="center" spacing={3}>
        <img
          src={Logo}
          alt="logo"
          width={50}
          height={50}
          className={classes.image}
        />
        <Title style={{ marginLeft: '15px' }}>DV Visual Control</Title>
      </Grid>
      <Grid xs={3} container item justify="flex-end">
        <Switch
          checked={themeType === 'dark'}
          onChange={() =>
            setThemeType(themeType === 'light' ? 'dark' : 'light')
          }
          classes={{
            root: classes.switch,
            switchBase: classes.switchBase,
          }}
          label="Theme"
          icon={<DarkIcon />}
          checkedIcon={<LightIcon />}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
