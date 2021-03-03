import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const VideoDisplay = ({ video: { title, description, sources }, videoRef }) => {
  const classes = useStyles();
  return (
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
        >
          <source src={sources[0]} />
        </video>
      </Grid>
      <Grid item xs={12} className={classes.description}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VideoDisplay;
