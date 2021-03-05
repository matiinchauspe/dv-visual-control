import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import useVideoControls from 'hooks/useVideoControls';
import useStyles from './styles';

const ControlButtons = ({ videoRef }) => {
  const { playVideo, pauseVideo, downVolume, upVolume } = useVideoControls(
    videoRef
  );
  const classes = useStyles();

  return (
    <Grid container item xs={12} justify="center" className={classes.root}>
      <IconButton aria-label="volume-min" onClick={downVolume}>
        <VolumeDownIcon fontSize="large" className={classes.icon} />
      </IconButton>
      <IconButton aria-label="play" onClick={playVideo}>
        <PlayIcon fontSize="large" className={classes.icon} />
      </IconButton>
      <IconButton aria-label="pause" onClick={pauseVideo}>
        <PauseIcon fontSize="large" className={classes.icon} />
      </IconButton>
      <IconButton aria-label="volume-max" onClick={upVolume}>
        <VolumeUpIcon fontSize="large" className={classes.icon} />
      </IconButton>
    </Grid>
  );
};

export default ControlButtons;
