import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import useStyles from './styles';

const ControlButtons = ({ videoRef }) => {
  const classes = useStyles();

  const handlePauseVideo = () => {
    videoRef.current.pause();
  };

  const handlePlayVideo = () => {
    videoRef.current.play();
  };

  const handleVolume = (type) => () => {
    if (type === 'up' && videoRef.current.volume <= 0.8) {
      // eslint-disable-next-line no-param-reassign
      videoRef.current.volume += 0.2;
    } else if (videoRef.current.volume >= 0.2) {
      // eslint-disable-next-line no-param-reassign
      videoRef.current.volume -= 0.2;
    }
  };

  return (
    <Grid container item xs={12} justify="center" className={classes.root}>
      <IconButton aria-label="volume-min" onClick={handleVolume('down')}>
        <VolumeDownIcon fontSize="large" className={classes.icon} />
      </IconButton>
      <IconButton aria-label="play" onClick={handlePlayVideo}>
        <PlayIcon fontSize="large" className={classes.icon} />
      </IconButton>
      <IconButton aria-label="pause" onClick={handlePauseVideo}>
        <PauseIcon fontSize="large" className={classes.icon} />
      </IconButton>
      <IconButton aria-label="volume-max" onClick={handleVolume('up')}>
        <VolumeUpIcon fontSize="large" className={classes.icon} />
      </IconButton>
    </Grid>
  );
};

export default ControlButtons;
