import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={12}
      justify="center"
      className={classes.root}
      alignItems="center"
    >
      <Typography variant="body2" color="textSecondary" component="span">
        Created by: Matias Inchauspe
      </Typography>
    </Grid>
  );
};

export default Footer;
