import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';

import AppContext from 'context/AppContext';
import useStyles from './styles';
import { Video } from './Video';
import { Description } from './Description';

const VideoDisplay = ({ videoRef }) => {
  const {
    state: { selected },
  } = useContext(AppContext);
  const classes = useStyles();
  return selected ? (
    <Grid item container xs={8} justify="center" className={classes.root}>
      <Video videoRef={videoRef} src={selected.sources[0]} />
      <Description videoSelected={selected} />
    </Grid>
  ) : null;
};

export default VideoDisplay;
