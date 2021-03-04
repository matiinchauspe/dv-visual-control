import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AppContext from 'context/AppContext';
import useStyles from './styles';

const VideoDisplay = ({ videoRef }) => {
  const {
    state: { selected },
  } = useContext(AppContext);
  const classes = useStyles();
  return selected ? (
    <Grid item container xs={8} justify="center" className={classes.root}>
      <Grid item xs={12} className={classes.videoContainer}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          autoPlay
          controls
          height="100%"
          width="100%"
          className={classes.video}
          src={selected.sources[0]}
        />
      </Grid>
      <Grid item xs={12} className={classes.description}>
        <Typography gutterBottom variant="h5" component="h2">
          {selected.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {selected.description}
        </Typography>
      </Grid>
    </Grid>
  ) : null;
};

export default VideoDisplay;
