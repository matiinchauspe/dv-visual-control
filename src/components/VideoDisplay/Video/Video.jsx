import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

const Video = ({ videoRef, src }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        autoPlay
        controls
        height="100%"
        width="100%"
        className={classes.video}
        src={src}
      />
    </Grid>
  );
};

export default Video;
