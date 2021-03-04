import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';
import { VideoList } from './VideoList';

const Controls = ({ videos, loading }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xs={4}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <VideoList videos={videos} loading={loading} />
    </Grid>
  );
};

export default Controls;
